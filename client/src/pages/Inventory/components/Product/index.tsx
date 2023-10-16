import { useEffect, useState } from "react";

//Importing reusable components
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import FlashMessage from "../../../../components/FlashMessage";

//Importing custom hooks
import useProduct from "../../../../hooks/useProduct";

//Importing services
import { useGetProductByProductCodeQuery } from "../../../../services/product";

//Importing constants
import { EditToInventoryFormType, ProductType } from "../../utils/types";
import { filterFormData } from "../../../../utils/helpers";
import {
  FORM_ADD_BUTTON_STYLES,
  SKELETON_STYLES,
} from "../../../../utils/constants";

/////This component display the product details
//This component also has the edit form and delete functionality
const Product: React.FC<ProductType> = ({ productCode }) => {
  //Service to fetch a single product using product_code
  const {
    data: productData,
    isLoading: productIsLoading,
    error: productError,
  } = useGetProductByProductCodeQuery(productCode);

  //Custom to edit and delete product
  const {
    clickHandler,
    loading: _editProductLoading,
    requestStatus: editProductRequestStatus,
    error: _editProductError,
  } = useProduct();

  //State to display edit button
  const [edit, setEdit] = useState<boolean>(false);

  //State to store the form data
  const [form, setForm] = useState<EditToInventoryFormType>({
    product_name: "",
    product_department: "",
    product_sub_department: "",
    product_manufacturer: "",
    product_brand: "",
    product_base_price: 0,
    product_selling_price: 0,
    product_case_pack: 0,
    product_cap: 0,
    product_total_quantity: 0,
    product_code: productCode,
    errors: {
      product_name: false,
      product_department: false,
      product_sub_department: false,
      product_manufacturer: false,
      product_brand: false,
      product_base_price: false,
      product_selling_price: false,
      product_case_pack: false,
      product_cap: false,
      product_total_quantity: false,
    },
  });

  //useEffect to set the form data when productData is fetched
  useEffect(() => {
    if (productData) {
      setForm({
        ...form,
        product_name: productData.product_name,
        product_department: productData.department_code,
        product_sub_department: productData.sub_department_code,
        product_manufacturer: productData.manufacturer,
        product_brand: productData.brand,
        product_base_price: productData.base_price,
        product_selling_price: productData.selling_price,
        product_case_pack: productData.case_pack,
        product_cap: productData.cap,
        product_total_quantity: productData.total_quantity,
      });
    }
  }, [productData]);

  //useEffect to change the view once edit request succeeds
  useEffect(() => {
    if (editProductRequestStatus && edit) setEdit(false);
  }, [editProductRequestStatus]);

  //Click handler to display the edit form
  const editClickHandler = () => {
    setEdit((prev) => !prev);
  };

  //Handler called when input is changed
  const changeHandler = (e: any) => {
    setForm((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  if (productIsLoading)
    return (
      <div
        id="inventory__product"
        className="w-[95%] h-[50rem] bg-white md:mt-[4rem] ml-[auto] mr-[auto] shadow-custom rounded-custom"
        style={SKELETON_STYLES}></div>
    );

  if (!productIsLoading && !productError && productData)
    return (
      <div
        id="inventory__product"
        className="w-[95%] bg-white md:mt-[4rem] ml-[auto] mr-[auto] shadow-custom rounded-custom relative">
        <h1 className="ml-[2rem] pt-[1rem] text-[2rem]">Product</h1>
        <hr className="mt-[1.5rem] text-gray" />

        <div
          id="inventory__product-details"
          className="w-[80%] mx-[auto] py-[2rem]">
          <div
            id="inentory__product-row-1"
            className="w-[100%] grid grid-cols-2">
            <div className="grid grid-cols-[1fr,2fr]">
              <p>Product name:</p>
              {!edit ? (
                <p className="capitalize pl-[1rem] h-[3rem]">
                  {productData.product_name}
                </p>
              ) : (
                <div id="form__product-name">
                  <Input
                    label="product name"
                    value={form.product_name}
                    changeHandler={changeHandler}
                    type="text"
                    disabled={false}
                    showLabel={false}
                    styles={{
                      margin: 0,
                      height: "3rem",
                      textTransform: "capitalize",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <div
            id="inentory__product-row-2"
            className="w-[100%] grid grid-cols-2 mt-[2rem] ">
            <div className="grid grid-cols-[1fr,2fr]">
              <p>Product id:</p>
              <p className="capitalize pl-[1rem] h-[3rem]">
                {productData.product_id}
              </p>
            </div>

            <div className="grid grid-cols-[1fr,2fr]">
              <p>Product code:</p>
              <p className="capitalize pl-[1rem] h-[3rem]">
                {productData.product_code}
              </p>
            </div>
          </div>
          <div
            id="inentory__product-row-3"
            className="w-[100%] grid grid-cols-2 mt-[2rem] ">
            <div className="grid grid-cols-[1fr,2fr]">
              <p>Department code:</p>
              <p className="capitalize pl-[1rem] h-[3rem]">
                {productData.department_code}
              </p>
            </div>
            <div className="grid grid-cols-[1fr,2fr]">
              <p>Sub depart code:</p>
              <p className="capitalize pl-[1rem] h-[3rem]">
                {productData.sub_department_code}
              </p>
            </div>
          </div>
          <div
            id="inentory__product-row-4"
            className="w-[100%] grid grid-cols-2 mt-[2rem] ">
            <div className="grid grid-cols-[1fr,2fr]">
              <p>Manufacturer:</p>
              {!edit ? (
                <p className="capitalize pl-[1rem] h-[3rem]">
                  {productData.manufacturer}
                </p>
              ) : (
                <div id="form__product-manufacturer">
                  <Input
                    label="product manufacturer"
                    value={form.product_manufacturer}
                    changeHandler={changeHandler}
                    type="text"
                    disabled={false}
                    showLabel={false}
                    styles={{
                      margin: 0,
                      height: "3rem",
                      textTransform: "capitalize",
                    }}
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-[1fr,2fr]">
              <p>Brand:</p>
              {!edit ? (
                <p className="capitalize pl-[1rem] h-[3rem]">
                  {productData.brand}
                </p>
              ) : (
                <div id="form__product-brand">
                  <Input
                    label="product brand"
                    value={form.product_brand}
                    changeHandler={changeHandler}
                    type="text"
                    disabled={false}
                    showLabel={false}
                    styles={{
                      margin: 0,
                      height: "3rem",
                      textTransform: "capitalize",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <div
            id="inentory__product-row-5"
            className="w-[100%] grid grid-cols-2 mt-[2rem] ">
            <div className="grid grid-cols-[1fr,2fr]">
              <p>Base price:</p>
              {!edit ? (
                <p className="capitalize pl-[1rem] h-[3rem]">
                  {productData.base_price}
                </p>
              ) : (
                <div id="form__product-base-price">
                  <Input
                    label="product base price"
                    value={form.product_base_price}
                    changeHandler={changeHandler}
                    type="number"
                    disabled={false}
                    showLabel={false}
                    styles={{
                      margin: 0,
                      height: "3rem",
                      textTransform: "capitalize",
                    }}
                  />
                </div>
              )}
            </div>
            <div className="grid grid-cols-[1fr,2fr]">
              <p>Selling price: </p>
              {!edit ? (
                <p className="capitalize pl-[1rem] h-[3rem]">
                  {productData.selling_price}
                </p>
              ) : (
                <div id="form__product-selling-price">
                  <Input
                    label="product selling price"
                    value={form.product_selling_price}
                    changeHandler={changeHandler}
                    type="number"
                    disabled={false}
                    showLabel={false}
                    styles={{
                      margin: 0,
                      height: "3rem",
                      textTransform: "capitalize",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <div
            id="inentory__product-row-6"
            className="w-[100%] grid grid-cols-2 mt-[2rem] ">
            <div className="grid grid-cols-[1fr,2fr]">
              <p>Total sales:</p>
              <p className="capitalize pl-[1rem] h-[3rem]">
                {productData.total_sales}
              </p>
            </div>
            <div className="grid grid-cols-[1fr,2fr]">
              <p>Cap:</p>
              {!edit ? (
                <p className="capitalize pl-[1rem] h-[3rem]">
                  {productData.cap}
                </p>
              ) : (
                <div id="form__product-cap">
                  <Input
                    label="product cap"
                    value={form.product_cap}
                    changeHandler={changeHandler}
                    type="number"
                    disabled={false}
                    showLabel={false}
                    styles={{
                      margin: 0,
                      height: "3rem",
                      textTransform: "capitalize",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <div
            id="inventory__product-row-7"
            className="w-[100%] grid grid-cols-2 mt-[2rem]  ">
            <div className="grid grid-cols-[1fr,2fr]">
              <p>Total quantity:</p>
              {!edit ? (
                <p className="capitalize pl-[1rem] h-[3rem]">
                  {productData.total_quantity}
                </p>
              ) : (
                <div id="form__product-total_quantity">
                  <Input
                    label="product total quantity"
                    value={form.product_total_quantity}
                    changeHandler={changeHandler}
                    type="number"
                    disabled={false}
                    showLabel={false}
                    styles={{
                      margin: 0,
                      height: "3rem",
                      textTransform: "capitalize",
                    }}
                  />
                </div>
              )}
            </div>
            <div className="grid grid-cols-[1fr,2fr]">
              <p>Case pack:</p>
              {!edit ? (
                <p className="capitalize pl-[1rem] h-[3rem]">
                  {productData.case_pack}
                </p>
              ) : (
                <div id="form__product-case-pack">
                  <Input
                    label="product case pack"
                    value={form.product_case_pack}
                    changeHandler={changeHandler}
                    type="number"
                    disabled={false}
                    showLabel={false}
                    styles={{
                      margin: 0,
                      height: "3rem",
                      textTransform: "capitalize",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          {edit && (
            <div
              id="form__row-8"
              className="w-[100%] flex justify-around mt-[3rem]">
              <Button
                value="update product"
                styles={FORM_ADD_BUTTON_STYLES}
                disabled={
                  !(
                    form.product_name?.length > 0 &&
                    form.product_department?.length > 0 &&
                    form.product_sub_department?.length > 0 &&
                    form.product_manufacturer?.length > 0 &&
                    form.product_brand?.length > 0 &&
                    form.product_base_price > 0 &&
                    form.product_selling_price > 0 &&
                    form.product_case_pack > 0 &&
                    form.product_cap > 0
                  )
                }
                clickHandler={(e: KeyboardEvent) => {
                  e.preventDefault();

                  let filteredFormData = filterFormData(
                    Object.assign({}, form),
                    null,
                    null
                  );

                  clickHandler(filteredFormData, null, {
                    api: "edit",
                    method: "PUT",
                  });
                }}
              />
            </div>
          )}

          {editProductRequestStatus.status && (
            <FlashMessage
              message={editProductRequestStatus.message}
              type={editProductRequestStatus.type}
            />
          )}
        </div>
        <Button
          value={!edit ? "Edit" : "Cancel"}
          styles={{ position: "absolute", top: "3%", right: "8%" }}
          clickHandler={editClickHandler}
          disabled={false}
        />
        <Button
          value="Delete"
          styles={{ position: "absolute", top: "3%", right: 0 }}
          clickHandler={() =>
            clickHandler(undefined, form.product_code, {
              api: "delete",
              method: "DELETE",
            })
          }
          disabled={false}
        />
      </div>
    );
};

export default Product;
