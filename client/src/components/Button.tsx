interface ButtonType {
  value: string;
}

const Button: React.FC<ButtonType> = ({ value }) => {
  return (
    <button
      id="btn"
      className="w-[8rem] h-[3rem] bg-primary mr-[2rem] shadow-custom uppercase tracking-[1px]">
      +&nbsp;{value}
    </button>
  );
};

export default Button;
