function Button({ title, className, text, ...rest }) {
  return (
    <a
      className={` 
        px-6 py-4 text-colorWhite font-medium
        rounded-full cursor-pointer bg-transparent
        bg-colorText hover:text-white
        hover:bg-btn2
        transition-all duration-300 ease-in-out
        ${className}
      `}
      style={{ fontSize: text }}
      {...rest}
    >
      <button className="flex items-center gap-2 w-full">{title}</button>
    </a>
  );
}

export default Button;
