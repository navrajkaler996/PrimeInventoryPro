import { useLocation } from "react-router-dom";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import {
  FORM_ADD_BUTTON_STYLES,
  FORM_VALIDATIONS,
} from "../../../../utils/constants";
import { useEffect, useState } from "react";
import useDepartment from "../../../../hooks/useDepartment";
import FormError from "../../../../components/FormError";
import Select from "../../../../components/Select";
import { useListDepartmentsQuery } from "../../../../services/department";
import useSubdepartment from "../../../../hooks/useSubdepartment";

const AddForm: React.FC = () => {
  const location = useLocation();
  const { state } = location;

  //State to store the department list for dropdown
  const [departmentList, setDepartmentList] = useState();

  const [form, setForm] = useState({
    department_name: "",
    store_code: "STORE3117",
    direct_supervisor: "",
    subdepartment_name: "",
    selectedDepartment: "",
    errors: {
      department_name: false,
      subdepartment_name: false,
      direct_supervisor: false,
    },
  });

  //Handler called when input is changed
  const changeHandler = (e: any) => {
    setForm((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  const {
    clickHandler: addDepartmentClickHandler,
    departmentIsLoading,
    requestStatus: addDepartmentRequestStatus,
  } = useDepartment(undefined, { type: "" });

  const {
    clickHandler: addSubdepartmentClickHandler,
    subdepartmentIsLoading,
    requestStatus,
  } = useSubdepartment(undefined, { type: "" });

  //Service to fetch department list for dropdown
  //Data is being stored in redux
  const {
    data: departmentListData,
    error: _departmentListError,
    isLoading: departmentListIsLoading,
  } = useListDepartmentsQuery("");

  //This useEffect is called once department list is fetch
  useEffect(() => {
    if (!departmentListIsLoading) {
      //Storing department names in the state
      setDepartmentList(
        departmentListData.map((department: any) => department.department_name)
      );
    }
  }, [departmentListIsLoading]);

  return (
    <div
      id="add-form"
      className="w-[95%] bg-white  ml-[auto] mr-[auto] shadow-custom rounded-custom relative">
      <h1 className="ml-[2rem] pt-[1rem] text-[2rem]">Add {state?.type}</h1>
      <hr className="mt-[1.5rem] text-gray" />

      <div
        id="add-form__product-details"
        className="w-[80%] mx-[auto] py-[2rem]">
        {state?.type === "department" && (
          <div
            id="inentory__product-row-1"
            className="w-[100%] grid grid-cols-1">
            <div className="grid grid-cols-[1fr,2fr]">
              <p>Department name:</p>

              <div id="form__product-name">
                <Input
                  label="department name"
                  changeHandler={changeHandler}
                  value={form.department_name}
                  type="text"
                  disabled={false}
                  showLabel={false}
                  styles={{
                    margin: 0,
                    height: "3rem",
                    textTransform: "capitalize",
                  }}
                />
                <FormError
                  value={form.department_name}
                  type="text"
                  name="department name"
                  validation={FORM_VALIDATIONS.name_min_length}
                />
              </div>
            </div>
            <div className="grid grid-cols-[1fr,2fr]  mt-[2rem]">
              <p>Direct Supervisor:</p>

              <div id="form__product-name">
                <Input
                  label="direct supervisor"
                  changeHandler={changeHandler}
                  value={form.direct_supervisor}
                  type="text"
                  disabled={false}
                  showLabel={false}
                  styles={{
                    margin: 0,
                    height: "3rem",
                    textTransform: "capitalize",
                  }}
                />
                <FormError
                  value={form.direct_supervisor}
                  type="text"
                  name="direct supervisor"
                  validation={FORM_VALIDATIONS.name_min_length}
                />
              </div>
            </div>
            <div
              id="form__row-8"
              className="w-[100%] flex justify-around mt-[3rem]">
              <Button
                value="Add department"
                loading={false}
                styles={FORM_ADD_BUTTON_STYLES}
                disabled={
                  !(form.department_name?.length > 0 && form.direct_supervisor)
                }
                clickHandler={async (e: KeyboardEvent) => {
                  e.preventDefault();

                  let body = form;

                  delete body.errors;

                  await addDepartmentClickHandler(form, {
                    method: "POST",
                    type: "ADD_ADMIN_DEPARTMENT",
                  });
                }}
              />
            </div>
          </div>
        )}

        {state?.type === "subdepartment" && (
          <div
            id="inentory__product-row-1"
            className="w-[100%] grid grid-cols-1">
            <div className="grid grid-cols-[1fr,2fr]">
              <p>Subdepartment name:</p>

              <div id="form__product-name">
                <Input
                  label="subdepartment name"
                  changeHandler={changeHandler}
                  value={form.subdepartment_name}
                  type="text"
                  disabled={false}
                  showLabel={false}
                  styles={{
                    margin: 0,
                    height: "3rem",
                    textTransform: "capitalize",
                  }}
                />
                <FormError
                  value={form.department_name}
                  type="text"
                  name="department name"
                  validation={FORM_VALIDATIONS.name_min_length}
                />
              </div>
            </div>
            <div className="grid grid-cols-[1fr,2fr]  mt-[2rem]">
              <p>Direct Supervisor:</p>

              <div id="form__product-name">
                <Input
                  label="direct supervisor"
                  changeHandler={changeHandler}
                  value={form.direct_supervisor}
                  type="text"
                  disabled={false}
                  showLabel={false}
                  styles={{
                    margin: 0,
                    height: "3rem",
                    textTransform: "capitalize",
                  }}
                />
                <FormError
                  value={form.direct_supervisor}
                  type="text"
                  name="direct supervisor"
                  validation={FORM_VALIDATIONS.name_min_length}
                />
              </div>
            </div>

            <div className="grid grid-cols-[1fr,2fr]  mt-[2rem]">
              <p>Department:</p>
              <div id="form__product-name">
                <Select
                  id="selectedDepartment"
                  label={null}
                  options={departmentList ? departmentList : []}
                  changeHandler={changeHandler}
                  styles={{ marginTop: 0 }}
                />
              </div>
            </div>

            <div
              id="form__row-8"
              className="w-[100%] flex justify-around mt-[3rem]">
              <Button
                value="Add subdepartment"
                loading={false}
                styles={FORM_ADD_BUTTON_STYLES}
                disabled={
                  !(
                    form.subdepartment_name?.length > 0 &&
                    form.direct_supervisor?.length > 0 &&
                    form.selectedDepartment?.length > 0
                  )
                }
                clickHandler={async (e: KeyboardEvent) => {
                  e.preventDefault();

                  let body = {
                    sub_department_name: form.subdepartment_name,
                    department_name: form.selectedDepartment,
                    sub_department_manager: form.direct_supervisor,
                    department_code: undefined,
                  };

                  let { department_code } = departmentListData?.find(
                    (department: any) =>
                      department.department_name == body.department_name &&
                      department.department_code
                  );

                  body = {
                    ...body,
                    department_code,
                  };

                  await addSubdepartmentClickHandler(body, {
                    method: "POST",
                    type: "ADD_ADMIN_SUB_DEPARTMENT",
                  });
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddForm;
