import AddIcon from "../../assets/admin_panel/add.png";
const Add = () => {
  return (
    <div
      id="add"
      className="flex justify-center mt-[4rem] lg:mt-[0] lg:ml-[4rem]">
      <div className="max-w-[35rem] w-[35rem] h-[38rem] bg-white rounded-custom shadow-custom">
        <h1 className="ml-[2rem] pt-[1rem] text-[2rem]">
          Add departments and roles
        </h1>
        <hr className="m-[1.5rem] text-gray" />
        <div>
          <ul>
            <li className=" hover:cursor-pointer hover:tracking-[1px] transition-all">
              {" "}
              <span style={{ marginLeft: "1rem" }}>+Add department</span>
            </li>
            <li className=" hover:cursor-pointer hover:tracking-[1px] transition-all">
              {" "}
              <span style={{ marginLeft: "1rem" }}>+Add subdepartment</span>
            </li>
            <li className=" hover:cursor-pointer hover:tracking-[1px] transition-all">
              {" "}
              <span style={{ marginLeft: "1rem" }}>+Add employee</span>
            </li>
            <li className=" hover:cursor-pointer hover:tracking-[1px] transition-all">
              {" "}
              <span style={{ marginLeft: "1rem" }}>+Add roles</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Add;
