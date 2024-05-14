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
        className="bg-[#FC8729] text-white font-semibold py-3 px-0.5 w-[150px] shadow rounded-md">
            {children}
        </button>
    )
}
export default Button;