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

const WrapperCart = styled.div`
    padding: 20px;
`;

const TitleCart = styled.h1`
    font-weight: 200;
    text-align: center;
`;

const ContentCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const ImageCart = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const ButtonCounter = styled.button`
    margin: 0 3% 0 3%;
    padding: 2%;
`;

const CartAdd = styled.button`
    border: none;
    margin: 0 0 0 1.6%;
`;

const Remove = styled.button`
    width: 8rem;
    padding: 1% 3% 1% 3%;
    color: white;
    font-weight: lighter;
    background-color: black;
    border-radius: 140px;
    border: solid 1px black;
`;

const Clean = styled.button`
    margin-left: 3.5rem;
    padding: 0.5% 1.5% 0.5% 1.5%;
    color: white;
    font-weight: lighter;
    background-color: black;
    border-radius: 140px;
    border: solid 1px black;
`;

const EmptyCart = styled.p`
    text-align: center;
`;

const IdItem = styled.p`
    display: none;
`;

export {
    SearchContainer, Input, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductPrice, 
    ButtonCounter, CartAdd, WrapperCart, Remove, Clean, EmptyCart, IdItem
}