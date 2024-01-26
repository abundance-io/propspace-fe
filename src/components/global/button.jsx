export const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="hover:bg-mustard rounded-[12px] bg-white px-6 py-4 font-semibold
      text-black transition duration-200 ease-in-out"
    >
      {text}
    </button>
  );
};
