interface FABProps {
  onClick?: () => void;
}

export const FAB = ({ onClick }: FABProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 z-10 cursor-pointer md:hidden"
      style={{ boxShadow: "0 4px 12px rgba(59,130,246,0.4)" }}
      aria-label="Add new task"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </button>
  );
};
