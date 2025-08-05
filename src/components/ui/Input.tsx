import { clsx } from "clsx";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, id, className = "", ...rest }: Props) => {
  const inputId = id ?? label.toLowerCase().replace(/\\s+/g, "-");
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        id={inputId}
        className={clsx(
          "rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm",
          "placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2",
          "focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",
          className
        )}
        {...rest}
      />
    </div>
  );
};

export default Input;
