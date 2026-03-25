import type { HTMLInputTypeAttribute } from "react";

interface InputProps {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  name: string;
  required?: boolean;
  iconSource?: string;
  hidden?: boolean;
}

const Input = ({
  type,
  placeholder,
  required,
  iconSource,
  name,
  hidden = true,
}: InputProps) => {
  return (
    <div className={` ${hidden ? "hidden" : "block"} relative w-64 md:block`}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        className=" w-full pl-10 pr-3 py-2 border border-slate-500 rounded p-1 "
      />
      {iconSource && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2">
          <img src={iconSource} alt="" className="w-6 h-6" />
        </span>
      )}
    </div>
  );
};

export default Input;
