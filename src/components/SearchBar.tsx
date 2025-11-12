import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

const SearchBar = () => {
  return (
    <div className="mt-6 md:mt-10 mx-auto w-full sm:w-4/5 md:w-2/3 lg:w-1/2 mb-6 md:mb-10 px-4">
      <PlaceholdersAndVanishInput
        placeholders={["Search for pets by name, breed, or location..."]}
        onChange={() => {}}
        onSubmit={() => {}}
      />
    </div>
  );
};

export default SearchBar;
