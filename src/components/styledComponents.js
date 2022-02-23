import styled from "styled-components";

const SearchContainer = styled.div`
    background-color: transparent;
    border: solid 1px #a8a8a8;
    border-radius: 40px;
    display: flex;
    align-items: center;
    margin-left: 15px;
    padding: 5px;
`;

const Input = styled.input`
    margin-right: 5px;
    border: none;
    outline: none;
`;

export {
    SearchContainer, Input, 
}