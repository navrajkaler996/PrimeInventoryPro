import { useState } from "react";
import Button from "../../../../components/Button";

interface FilterTypes {
  filter: Object;
  changeHandler: Function;
}

const Filter: React.FC<FilterTypes> = ({ filter, changeHandler }) => {
  const [show, setShow] = useState(false);

  console.log("----", Object.keys(filter).includes("received"), filter);

  return (
    <div className="relative" id="receiving__reports-filter">
      <Button
        clickHandler={() => setShow(!show)}
        value="Add filter"
        styles={{ marginRight: 0 }}
      />
      {show && (
        <>
          <div className="absolute top-[5rem] right-[0] w-[30rem] bg-white z-[1000] shadow-custom px-[1rem] py-[1rem]">
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
                  onChange={(e) => changeHandler(e.currentTarget.value)}
                />
                <label className="ml-[1rem]">In Transit</label>
              </div>
              <div className="flex  items-center">
                <input
                  type="radio"
                  name="filter__1"
                  value="received"
                  className="ml-[1rem]"
                  onChange={(e) => changeHandler(e.currentTarget.value)}
                />
                <label className="ml-[1rem]">Received</label>
              </div>
            </form>

            {filter["received"] === true || filter["unloaded"] ? (
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
                      onChange={(e) => changeHandler(e.currentTarget.value)}
                    />
                    <label className="ml-[1rem]">Unloaded</label>
                  </div>
                  <div className="flex  items-center">
                    <input
                      type="radio"
                      name="filter__1"
                      value="loaded"
                      className="ml-[1rem]"
                      onChange={(e) => changeHandler(e.currentTarget.value)}
                    />
                    <label className="ml-[1rem]">Loaded</label>
                  </div>
                </form>
              </>
            ) : null}
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
