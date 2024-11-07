import { ClipLoader } from "react-spinners";

export const Button = ({
  children,
  title,
  type = "button",
  classes,
  theme,
  icon,
  loading,
  disabled,
  onClick,
  componentIcon,
}) => {
  // ---------- functions ----------
  const clickHandler = () => {
    type === "button" && onClick();
  };

  // ---------- render jsx ----------
  return (
    <button
      type={type}
      className={`h-10 px-6 rounded-md text-16 duration-150 ease-in-out flex items-center select-none justify-center capitalize gap-x-2 disabled:bg-blue-300 ${
        theme === "light"
          ? "bg-custom-blue-light border-none hover:bg-custom-blue-dark text-white"
          : "bg-custom-blue-dark text-white"
      } ${classes}`}
      onClick={clickHandler}
      disabled={disabled ? disabled : loading}
    >
      {!loading && children}
      {title && !loading && <span>{title}</span>}
      {icon && !loading && icon}
      {componentIcon && !loading && componentIcon}
      {loading && <ClipLoader color="#fff" size={22} />}
    </button>
  );
};
