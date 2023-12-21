import { useState } from "react";
import Button from "../../../../components/Button";

const Filter: React.FC = () => {
  const [show, setShow] = useState(false);

  const [filter, setFilter] = useState("");
  return (
    <div className="relative" id="receiving__reports-filter">
      <Button
        clickHandler={() => setShow(!show)}
        value="Add filter"
        styles={{ marginRight: 0 }}
      />
      {show && (
        <>
          <div className="absolute top-[5rem] right-[0] w-[30rem]  bg-white z-[1000] shadow-custom px-[1rem] py-[1rem]">
            <div>
              <span>Transit status</span>
            </div>
            <hr className="m-[1.5rem] text-gray" />
            <form className="flex">
              <div className="flex  items-center">
                <input
                  type="radio"
                  name="filter__1"
                  value="in_transit"
                  className="ml-[1rem]"
                  onChange={(e) => setFilter(e.currentTarget.value)}
                />
                <label className="ml-[1rem]">In Transit</label>
              </div>
              <div className="flex  items-center">
                <input
                  type="radio"
                  name="filter__1"
                  value="received"
                  className="ml-[1rem]"
                  onChange={(e) => setFilter(e.currentTarget.value)}
                />
                <label className="ml-[1rem]">Received</label>
              </div>
            </form>

            {filter === "received" && (
              <>
                <div className="mt-[2rem]">
                  <span>Loading status</span>
                </div>
                <hr className="m-[1.5rem] text-gray" />
                <form className="flex">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="filter__1"
                      value="unloaded"
                      className="ml-[1rem]"
                    />
                    <label className="ml-[1rem]">Unloaded</label>
                  </div>
                  <div className="flex  items-center">
                    <input
                      type="radio"
                      name="filter__1"
                      value="loaded"
                      className="ml-[1rem]"
                    />
                    <label className="ml-[1rem]">Loaded</label>
                  </div>
                </form>
              </>
            )}
            <div className="w-[100%] text-center mt-[1.5rem] mb-[1rem]">
              <Button
                value="Add"
                styles={{ width: "10rem", height: "2.5rem" }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Filter;
