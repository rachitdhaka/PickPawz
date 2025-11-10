import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

const SearchBar = () => {
  return (
    <div className="mt-10 mx-auto w-1/2 mb-10 ">
      <PlaceholdersAndVanishInput
        placeholders={["Search for pets by name, breed, or location..."]}
        onChange={() => {}}
        onSubmit={() => {}}
      />
    </div>
  );
};

export default SearchBar;
