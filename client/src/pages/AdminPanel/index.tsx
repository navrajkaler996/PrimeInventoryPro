import Add from "./Add";
import StoreData from "./StoreData";
import StoreSummary from "./StoreSummary";

const AdminPanel: React.FC = () => {
  return (
    <div id="admin-panel">
      <div>
        <StoreSummary />
        <div className="grid lg:grid-cols-[2fr,1fr] grid-cols-[1fr] mt-[7rem]">
          <StoreData />
          <Add />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
