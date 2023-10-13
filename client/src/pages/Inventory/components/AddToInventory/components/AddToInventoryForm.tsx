import { useEffect, useState } from "react";
import Button from "../../../../../components/Button";
import Input from "../../../../../components/Input";
import Select from "../../../../../components/Select";
import useProduct from "../../../../../hooks/useProduct";
import { filterFormData } from "../../../../../utils/helpers";
import { useListDepartmentsQuery } from "../../../../../services/department";
import { useListSubDepartmentsQuery } from "../../../../../services/subdepartment";
import FlashMessage from "../../../../../components/FlashMessage";
import { FORM_VALIDATIONS } from "../../../../../utils/constants";
import FormError from "../../../../../components/FormError";

export const FORM_NEXT_BUTTON_STYLES = {
  width: "30rem",
  height: "3.5rem",
  fontSize: "1.1em",
  letterSpacing: "3px",
  margin: 0,
};
interface AddToInventoryFormErrorsType {
  product_name: boolean;
  product_department: boolean;
  product_sub_department: boolean;
  product_manufacturer: boolean;
  product_base_price: boolean;
  product_selling_price: boolean;
  product_case_pack: boolean;
  product_cap: boolean;
  product_brand: boolean;
}

interface AddToInventoryFormType {
  product_name: string;
  product_department: string;
  product_sub_department: string;
  product_manufacturer: string;
  product_brand: string;
  product_base_price: number;
  product_selling_price: number;
  product_case_pack: number;
  product_cap: number;
  errors: AddToInventoryFormErrorsType;
}

const AddToInventoryForm: React.FC = () => {
  const [form, setForm] = useState<AddToInventoryFormType>({
    product_name: "",
    product_department: "",
    product_sub_department: "",
    product_manufacturer: "",
    product_brand: "",
    product_base_price: 0,
    product_selling_price: 0,
    product_case_pack: 0,
    product_cap: 0,
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
    },
  });

  const [departmentList, setDepartmentList] = useState();
  const [subDepartmentList, setSubDepartmentList] = useState();

  const {
    clickHandler,
    loading: _addProductLoading,
    requestStatus: addProductRequestStatus,
    error: _addProductError,
  } = useProduct();

  const {
    data: departmentListData,
    error: _departmentListError,
    isLoading: departmentListIsLoading,
  } = useListDepartmentsQuery("");

  const {
    data: subDepartmentListData,
    error: _subDepartmentListError,
    isLoading: _subDepartmentListIsLoading,
  } = useListSubDepartmentsQuery("");

  const changeHandler = (e: any) => {
    setForm((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    if (!departmentListIsLoading) {
      setDepartmentList(
        departmentListData.map((department: any) => department.department_name)
      );
    }
  }, [departmentListIsLoading]);

  useEffect(() => {
    if (form?.product_department?.length > 0) {
      let { department_code } = departmentListData.find((department: any) => {
        if (department.department_name === form.product_department)
          return department;
      });

      const requiredSubDepartments = subDepartmentListData.filter(
        (subDepartment: any) =>
          subDepartment.department_code === department_code
      );

      setSubDepartmentList(
        requiredSubDepartments.map(
          (subDepartment: any) => subDepartment.sub_department_name
        )
      );
    }
  }, [form?.product_department]);

  return (
    <form id="form" className="w-[90%] h-[100rem] mx-auto mb-[2rem]">
      <fieldset className={"border-[.5px] p-[4rem] "}>
        <legend>General Information</legend>
        <>
          <div id="form__row-1" className="w-[100%] grid grid-cols-2">
            <div id="form__product-name" className="mx-auto">
              <Input
                label="product name"
                value={form.product_name}
                changeHandler={changeHandler}
                type="text"
                disabled={false}
                showLabel={true}
                styles={{}}
              />

              <FormError
                value={form.product_name}
                type="text"
                name="product name"
                validation={FORM_VALIDATIONS.name_min_length}
              />
            </div>
          </div>
          <div id="form__row-2" className="w-[100%] grid grid-cols-2 mt-[3rem]">
            <div id="form__product-department" className="mx-auto">
              <Select
                label="product department"
                options={departmentList ? departmentList : []}
                changeHandler={changeHandler}
              />
            </div>
            <div id="form__product-subdepartment" className="mx-auto">
              <Select
                label="product sub department"
                options={subDepartmentList ? subDepartmentList : []}
                changeHandler={changeHandler}
              />
            </div>
          </div>
        </>
      </fieldset>

      <fieldset className={"border-[.5px] p-[4rem] mt-[5rem] "}>
        <legend>Product Details</legend>
        <>
          <div id="form__row-1" className="w-[100%] grid grid-cols-2">
            <div id="form__product-manufacturer" className="mx-auto">
              <Input
                label="product manufacturer"
                value={form.product_manufacturer}
                changeHandler={changeHandler}
                type="text"
                disabled={
                  !(
                    form.product_name?.length > 0 &&
                    form.product_department?.length > 0 &&
                    form.product_sub_department?.length > 0
                  )
                }
                showLabel={true}
                styles={{}}
              />
              <FormError
                value={form.product_manufacturer}
                type="text"
                name="manufacturer name"
                validation={FORM_VALIDATIONS.name_min_length}
              />
            </div>
            <div id="form__product-brand" className="mx-auto">
              <Input
                label="product brand"
                value={form.product_brand}
                changeHandler={changeHandler}
                type="text"
                disabled={
                  !(
                    form.product_name?.length > 0 &&
                    form.product_department?.length > 0 &&
                    form.product_sub_department?.length > 0
                  )
                }
                showLabel={true}
                styles={{}}
              />
            </div>
          </div>
          <div id="form__row-2" className="w-[100%] grid grid-cols-2 mt-[3rem]">
            <div id="form__product-base-price" className="mx-auto">
              <Input
                label="product base price"
                value={form.product_base_price}
                changeHandler={changeHandler}
                type="number"
                disabled={
                  !(
                    form.product_name?.length > 0 &&
                    form.product_department?.length > 0 &&
                    form.product_sub_department?.length > 0
                  )
                }
                showLabel={true}
                styles={{}}
              />
            </div>
            <div id="form__product-selling-price" className="mx-auto">
              <Input
                label="product selling price"
                value={form.product_selling_price}
                changeHandler={changeHandler}
                type="number"
                disabled={
                  !(
                    form.product_name?.length > 0 &&
                    form.product_department?.length > 0 &&
                    form.product_sub_department?.length > 0
                  )
                }
                showLabel={true}
                styles={{}}
              />
            </div>
          </div>
          <div id="form__row-3" className="w-[100%] grid grid-cols-2 mt-[3rem]">
            <div id="form__product-case-pack" className="mx-auto">
              <Input
                label="product case pack"
                value={form.product_case_pack}
                changeHandler={changeHandler}
                type="number"
                disabled={
                  !(
                    form.product_name?.length > 0 &&
                    form.product_department?.length > 0 &&
                    form.product_sub_department?.length > 0
                  )
                }
                showLabel={true}
                styles={{}}
              />
            </div>
            <div id="form__product-cap" className="mx-auto">
              <Input
                label="product cap"
                value={form.product_cap}
                changeHandler={changeHandler}
                type="number"
                disabled={
                  !(
                    form.product_name?.length > 0 &&
                    form.product_department?.length > 0 &&
                    form.product_sub_department?.length > 0
                  )
                }
                showLabel={true}
                styles={{}}
              />
            </div>
          </div>

          <div
            id="form__row-3"
            className="w-[100%] flex justify-around mt-[3rem]">
            <Button
              value="add to inventory"
              styles={FORM_NEXT_BUTTON_STYLES}
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
                  departmentListData,
                  subDepartmentListData
                );

                clickHandler(filteredFormData, { api: "add" });
              }}
            />
          </div>
        </>
        {addProductRequestStatus.status && (
          <FlashMessage
            message={addProductRequestStatus.message}
            type={addProductRequestStatus.type}
          />
        )}
      </fieldset>
    </form>
  );
};

export default AddToInventoryForm;
