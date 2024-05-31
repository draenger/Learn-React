export default function Button({ children, ...props }) {
  return (
    <button
      className="px-3 py-2 mt-4 text-sm font-semibold text-white uppercase bg-amber-400 rounded shadow hover:bg-amber-500"
      {...props}
    >
      {children}
    </button>
  );
}
