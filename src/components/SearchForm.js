import { IoSearchOutline } from "react-icons/io5";
import { Input } from "./styledComponents.js";
import { SearchContainer } from "./styledComponents.js";

const SearchForm = () => {
    const handleClick = (evt) => {
        evt.stopPropagation();
        alert("Hola Input")
    }
    

    return (
        <SearchContainer>
            <Input onClick={handleClick}/>
            <IoSearchOutline />
        </SearchContainer>
    )
}

export default SearchForm;