'use client';
import { useFormStatus } from "react-dom";

interface ButtonProps {
    type?: "button" | 'submit' | 'reset';
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean; 
}

const Button: React.FC<ButtonProps> = ({
    type,
    children,
    onClick,
    disabled,
}) => {
    const {pending} = useFormStatus();

    return (
        <button disabled={disabled} onClick={onClick} type={type} aria-disabled={pending}
        className="bg-[#FC8729] text-white font-semibold p-4 w-full px-3 shadow rounded-md">
            {children}
        </button>
    )
}
export default Button;