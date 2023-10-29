//Importing utilities
import { getValue } from "./utils/helper";
import { TableType } from "./utils/types";

/////RENDERS A TABLE
/////ACCEPTS FIVE PROPS
//data: An array of objects to be displayed in the table
//dataIsLoading: A boolean value to track if data is being fetched or not
//dataError: False, if there is no error and object if there is error
//options: An object which contains atleast two options: lastProduct, which tracks the last items in the table in order
//to perform infinite scroll and keys, to display values in table headers.
//clickHandler: A function which is invoked when a row is clicked
const Table: React.FC<TableType> = ({
  data,
  dataIsLoading,
  dataError,
  options,
  clickHandler,
}) => {
  return (
    <table className="table-auto w-[100%] text-[.7em] md:text-[1em] border-seperate border-spacing-y-3">
      <thead className="sticky top-0 bg-white">
        <tr>
          {Object.keys(options?.keys)?.length > 0 &&
            Object.keys(options?.keys)?.map((key) => (
              <th className="py-[10px]" key={key}>
                {key}
              </th>
            ))}
        </tr>
      </thead>
      <tbody className="text-center capitalize">
        {data &&
          data?.length > 0 &&
          data?.map((item, i: number) => {
            //Returns the last row in currect list
            //It is tracked using ref and lastProduct function,
            //which is passed through props
            if (i + 1 === data.length) {
              return (
                <tr
                  className="mt-[4rem] align-baseline hover:cursor-pointer hover:bg-gray"
                  id={item.request_id?.toString()}
                  // key={item.request_id}
                  ref={(node) => options?.lastProduct(node)}
                  onClick={(e) => clickHandler(e.currentTarget.id, undefined)}>
                  {Object.values(options?.keys)?.map((value) => {
                    return (
                      <td className="py-[1rem] px-[1rem]">
                        {getValue(item, value)}
                      </td>
                    );
                  })}
                </tr>
              );
            }

            return (
              <tr
                className="mt-[4rem] align-baseline hover:cursor-pointer hover:bg-gray"
                id={item.request_id?.toString()}
                // key={item.request_id}
                onClick={(e) => clickHandler(e.currentTarget.id, undefined)}>
                {Object.values(options?.keys)?.map((value) => {
                  return (
                    <td className="py-[1rem] px-[1rem]">
                      {getValue(item, value)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
