import { IoSearchOutline } from "react-icons/io5";
import { Input } from "./styledComponents.js";
import { SearchContainer } from "./styledComponents.js";

const SearchForm = () => {
    return (
        <SearchContainer>
            <Input />
            <IoSearchOutline />
        </SearchContainer>
    )
}

export default SearchForm;