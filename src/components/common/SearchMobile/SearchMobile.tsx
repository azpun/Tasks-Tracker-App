import Input from "../../ui/Input";

export const SearchMobile = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Search Mobile */}
      <div
        className={`fixed z-30 top-0 left-0 w-full h-16 bg-[#F8FAFC] text-black shadow transform transition-transform duration-300 
            ${isOpen ? "translate-y-0" : "-translate-y-full"} `}
      >
        <div className="flex justify-center items-center w-full h-full">
          <Input
            type="search"
            placeholder="Search"
            name="search"
            required
            iconSource="/ui/search.svg"
            hidden={false}
          />
        </div>
      </div>
    </>
  );
};
