import Toast from "./Toast";

const Header: React.FC = () => {
  return (
    <div className="w-full h-80 bg-white relative">
      <Toast type="failed" message="Request could not be completed" />
    </div>
  );
};

export default Header;
