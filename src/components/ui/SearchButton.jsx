import { BiSearchAlt } from "react-icons/bi";
import Button from "./Button";
import SearchBar from "./SearchBar";

function SearchButton({ onClick }) {
  return (
    <Button onClick={onClick} shape="circle">
      <BiSearchAlt />
    </Button>
  );
}

export default SearchButton;
