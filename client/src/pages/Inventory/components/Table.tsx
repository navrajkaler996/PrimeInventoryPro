import { CURRENT_PRODUCTS_KEYS } from "../../../utils/constants";

const Table: React.FC = () => {
  return (
    <table className="table-auto w-[100%]">
      <thead>
        {CURRENT_PRODUCTS_KEYS.map((key) => (
          <th key={key} className="font-light capitalize">
            {key}
          </th>
        ))}
      </thead>

      <tbody></tbody>
    </table>
  );
};

export default Table;
