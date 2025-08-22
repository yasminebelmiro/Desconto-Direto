import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {
    return (
      <input
        className={`bg-white text-dark-yellow placeholder:text-dark-yellow 
          w-full h-15 px-10 md:px-5 rounded-lg outline-none ${
          error ? "border-2 border-red-500 text-red-500" : ""
        }`}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
