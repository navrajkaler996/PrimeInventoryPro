import { COLOR_CODE, SKELETON_STYLES } from "../utils/constants";
import Button from "./Button";
import Cross from "../assets/cross.png";
import { ModalType } from "./utils/types";
import moment from "moment";

const Modal: React.FC<ModalType> = ({ data, clickHandler, isLoading }) => {
  return isLoading ? (
    <div
      id="modal"
      className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-25 backdrop-blur-sm w-[100%] h-[100%] z-50 shadow-custom">
      <div className="bg-white min-w-[60rem] min-h-[34rem] shadow-custom relative"></div>
    </div>
  ) : (
    <div
      id="modal"
      className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-25 backdrop-blur-sm w-[100%] h-[100%] z-50 shadow-custom">
      <div className="bg-white min-w-[60rem] min-h-[34rem] shadow-custom relative">
        <img
          src={Cross}
          className="absolute top-[1.5rem] right-[2rem] w-[1.5rem] hover:cursor-pointer hover:scale-[1.5] transition-all"
          onClick={() => clickHandler()}
        />
        <p className="text-[1.2em] my-[1rem] text-center w-[100%] px-[5rem]">
          #{data?.request_id} {data?.request}
        </p>
        <hr className="mx-[1.5rem] text-gray" />

        <div className="grid grid-row-1 grid-cols-[.6fr,1fr] mt-[1rem] ml-[2rem]">
          <span>
            <b>Raised by:</b>
          </span>
          <span>{data?.request_by_name}</span>
        </div>
        <div className="grid grid-row-1 grid-cols-[.6fr,1fr] mt-[1rem] ml-[2rem]">
          <span>
            <b>Email:</b>
          </span>
          <span>{data?.request_by_email}</span>
        </div>
        <div className="grid grid-row-1 grid-cols-[.6fr,1fr] mt-[1rem] ml-[2rem]">
          <span>
            <b>Department code:</b>
          </span>
          <span>{data?.request_department_code}</span>
        </div>
        <div className="grid grid-row-1 grid-cols-[.6fr,1fr] mt-[1rem] ml-[2rem]">
          <span>
            <b>Subdepartment code:</b>
          </span>
          <span>{data?.request_sub_department_code}</span>
        </div>

        <div className="grid grid-row-1 grid-cols-[.6fr,1fr] mt-[1rem] ml-[2rem]">
          <span>
            <b>Raised at:</b>
          </span>
          <span>{moment(data?.createdAt).fromNow()}</span>
        </div>
        <div className="w-[100%] flex justify-center my-[4rem]">
          <Button
            value="approve"
            clickHandler={() => clickHandler("", true)}
            disabled={false}
            styles={{
              backgroundColor: COLOR_CODE.SUCCESS,
              width: "14rem",
              height: "3.5rem",
            }}
          />
          <Button
            value="reject"
            clickHandler={() => clickHandler("", false)}
            disabled={false}
            styles={{
              backgroundColor: COLOR_CODE.DANGER,
              width: "14rem",
              height: "3.5rem",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
