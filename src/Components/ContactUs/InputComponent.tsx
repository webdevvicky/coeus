export interface InputProps {
  placeholder: string;
  type: string;
  label: string;
}

const InputComponent = ({ placeholder, type, label }: InputProps) => {
  return (
    <div>
      <input
        type={type}
        className="form-control"
        id="floatingInput"
        placeholder={placeholder}
        name={label}
      />
      <label htmlFor="floatingInput" className="text-muted">
        {label}
      </label>
    </div>
  );
};

export default InputComponent;
