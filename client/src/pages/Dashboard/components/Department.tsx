import Meats from "../../../assets/departments/meats.png";

const Department: React.FC = () => {
  return (
    <div id="dashboard__department" className="flex justify-between  mt-[3rem]">
      <div className="relative flex bg-primary items-center w-[35rem] h-[8rem] ml-[8rem]  shadow-custom  ">
        <img src={Meats} className="h-[5rem] ml-[3rem]" />
        <div className="ml-[3rem] text-center">
          <p className="text-[1.2em] tracking-[5px]">Meats</p>
          <hr className="mt-[.5rem mb-[.5rem]" />
          <p>Fresh</p>
        </div>
        <p className="text-[.8em] absolute bottom-[5px] right-[10px]">
          Amandeep Kaur
        </p>
      </div>
      <div>
        <p className="w-[min-content] text-[1.2em] mb-[.5rem] tracking-[2.5px]">
          Fresh
        </p>
        <select className="w-[30rem] h-[3rem] bg-primary  mr-[8rem] shadow-custom animate-pulse">
          <option>Meats</option>
          <option>Produce</option>
          <option>Bakery</option>
          <option>Dairy/Frozen</option>
        </select>
      </div>
    </div>
  );
};

export default Department;
