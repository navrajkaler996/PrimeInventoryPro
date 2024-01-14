import { Route, Routes } from "react-router-dom";
import useDepartment from "../../hooks/useDepartment";
import useEmployee from "../../hooks/useEmployee";
import { useListSubDepartmentsForAdminQuery } from "../../services/subdepartment";
import Add from "./Add";
import StoreData from "./StoreData";
import StoreSummary from "./StoreSummary";
import AddForm from "./Add/components/AddForm";

const AdminPanel: React.FC = () => {
  const { departmentData, departmentError, departmentIsLoading } =
    useDepartment(undefined, {
      type: "GET_ADMIN_DEPARTMENTS",
    });

  const {
    data: subDepartmentsData,
    error: _subDepartmentsError,
    isLoading: subDepartmentIsLoading,
  } = useListSubDepartmentsForAdminQuery(undefined);

  const { employeeData, employeeError, employeeIsLoading } = useEmployee(
    undefined,
    {
      type: "GET_ADMIN_EMPLOYEES",
    }
  );
  return (
    <div id="admin-panel">
      <div>
        <StoreSummary
          totalDepartments={departmentData?.length}
          totalSubdepartments={subDepartmentsData?.length}
          totalEmployees={employeeData?.length}
        />
        <div className="grid lg:grid-cols-[2fr,1fr] grid-cols-[1fr] mt-[7rem]">
          <Routes>
            <Route
              path=""
              element={
                <StoreData
                  departmentData={departmentData}
                  departmentIsLoading={departmentIsLoading}
                  subDepartmentsData={subDepartmentsData}
                  subDepartmentIsLoading={subDepartmentIsLoading}
                  employeeData={employeeData}
                  employeeIsLoading={employeeIsLoading}
                />
              }
            />
            <Route path="/add" element={<AddForm />} />
          </Routes>

          <Add />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
