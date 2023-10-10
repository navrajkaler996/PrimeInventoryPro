interface FormErrorType {
  value: string;
  type: string;
  name: string;
  validation: number | string;
}

const FormError: React.FC<FormErrorType> = ({
  value,
  type,
  name,
  validation,
}) => {
  if (
    type === "text" &&
    value.length >= 1 &&
    value.length <= Number(validation)
  ) {
    return (
      <p className="w-[30rem] text-[.7em] mt-[1rem] text-error">{`${name} should have atleast ${validation} characters`}</p>
    );
  }
};

export default FormError;
