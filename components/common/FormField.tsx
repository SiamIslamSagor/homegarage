import { FormFieldProps } from "@/types/garage-owner";

const commonInputDivClass = "flex-column mb-5";
const commonLabelClass = "block text-sm font-semibold text-gray-700 mb-1";
const commonInputOuterBoxClass =
  "flex h-[50px] items-center rounded-lg border border-gray-300 bg-white px-3 focus-within:border-indigo-500 transition-all duration-200 ease-in-out";
const commonInputClass =
  "ml-2.5 h-full w-full rounded-lg border-none bg-transparent placeholder-gray-400 focus:outline-none sm:text-sm";

export const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type,
  placeholder,
  error,
  register,
  required = false,
}) => {
  return (
    <div className={commonInputDivClass}>
      <label htmlFor={id} className={commonLabelClass}>
        {label}
      </label>
      <div className={commonInputOuterBoxClass}>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={commonInputClass}
          {...register(id, {
            required: required ? `${label} is required` : false,
          })}
        />
      </div>
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
};
