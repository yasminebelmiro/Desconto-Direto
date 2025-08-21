import { forwardRef, type InputHTMLAttributes } from "react";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      className="bg-white text-dark-yellow placeholder:text-dark-yellow w-full h-15 px-10 rounded-lg lg:w-[70%]"
      ref={ref}
      {...props}
    />
  );
});

export default Input;
