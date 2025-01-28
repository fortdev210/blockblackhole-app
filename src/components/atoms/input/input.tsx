import { forwardRef, ComponentProps } from "react";

const Input = forwardRef<
  HTMLInputElement,
  Omit<ComponentProps<"input">, "className">
>(({ ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      {...rest}
    />
  );
});

export default Input;
