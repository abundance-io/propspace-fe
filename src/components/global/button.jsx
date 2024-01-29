export const Button = (props) => {
  const { text, onClick, variant } = props;
  return (
    <button
      onClick={onClick}
      className={`${variant == "outline" ? "hover:border-mustard border-[1px] border-white" : "bg-white"} hover:bg-mustard rounded-[12px] px-6 py-4 text-sm
        font-semibold text-black transition duration-200 ease-in-out`}
    >
      {text}
    </button>
  );
};
