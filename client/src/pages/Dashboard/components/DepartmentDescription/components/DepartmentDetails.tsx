import { SKELETON_STYLES } from "../../../../../utils/constants";

//Importing images
import Meats from "../../../../../assets/departments/meats.png";
import Fresh from "../../../../../assets/departments/fresh.png";
import Dairy from "../../../../../assets/departments/dairy.png";
import Produce from "../../../../../assets/departments/produce.png";
import Bakery from "../../../../../assets/departments/bakery.png";

interface DepartmentDetails {
  departmentData:
    | {
        createdAt: string;
        department_code: string;
        department_id: number;
        department_name: string;
        direct_supervisor: string;
        stock_alert: boolean;
        total_products: number;
        total_products_quantity: number;
        total_products_in_transit: number;
        total_sub_departments: number;
        updatedAt: string;
      }
    | undefined;
  currentDepartment: {
    department_id: Number | null;
    department_code: String | null;
    department_name: String | null;
    total_sub_departments: Number | null;
    total_products: Number | null;
    total_products_quantity: Number | null;
    total_products_in_transit: Number;
    stock_alert: Boolean | null;
    direct_supervisor: String | null;
    parent_department_code: String | null;
    createdAt: String | null;
    updatedAt: String | null;
  };
  departmentIsLoading: boolean;
}

const DepartmentDetails: React.FC<DepartmentDetails> = ({
  departmentData,
  currentDepartment,
  departmentIsLoading,
}) => {
  //This function returns the image according to the active depertment/subdepartment.
  const getDepartmentImage = (departmentName: String | null) => {
    switch (departmentName) {
      case "fresh":
        return Fresh;
      case "meats":
        return Meats;
      case "produce":
        return Produce;
      case "bakery":
        return Bakery;
      case "dairy/frozen":
        return Dairy;
    }
  };

  return (
    <div
      className="relative flex bg-white items-center w-[80%] lg:w-[35rem] md:w-[28rem] h-[8rem] lg:ml-[8rem] md:ml-[9rem] shadow-custom"
      style={departmentIsLoading ? SKELETON_STYLES : {}}>
      <img
        src={getDepartmentImage(currentDepartment?.department_name)}
        className="h-[5rem] ml-[3rem]"
      />
      <div className="ml-[3rem] text-center">
        <p className="text-[1.2em] tracking-[5px]">
          {currentDepartment?.department_name}
        </p>
        <hr className="mt-[.5rem mb-[.5rem]" />
        <p>{currentDepartment?.department_code}</p>
      </div>
      <p className="text-[.8em] absolute bottom-[5px] right-[10px]">
        {currentDepartment?.direct_supervisor}
      </p>
    </div>
  );
};

export default DepartmentDetails;
