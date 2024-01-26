export const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-[12px] bg-white px-6 py-4 font-semibold text-black"
    >
      {text}
    </button>
  );
};
