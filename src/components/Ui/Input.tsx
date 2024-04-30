import clsx from "clsx";

interface InputProps {
    label: string;
    id: string;
    type: string;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  disabled,  
}) => {
    return (
        <div>
            <label htmlFor="id" className="text-sm block font-medium leading-5">
                {label}
            </label>
            <div className="mt-2">
                <input type={type}
                disabled={disabled}
                name={id}
                required
                id={id}
                autoComplete={id}
                className={clsx(
                    `w-[300px] rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6 block`, disabled && "opacity-50 cursor-default"
                )}
                />
            </div>
        </div>
    )
}

export default Input