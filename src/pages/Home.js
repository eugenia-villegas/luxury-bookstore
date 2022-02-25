import Navbar from '../components/NavBar.js';
import ItemListContainer from '../components/ItemListContainer.js';
import ItemDetailContainer from '../components/ItemDetailContainer.js';
import Cart from '../components/Cart.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchForm from '../components/SearchForm.js';
import CartContextProvider from '../components/CartContext.js';

function Home() {
  return (
    <>
        <CartContextProvider>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={ <> <ItemListContainer /> </> } />
                    <Route path="/category/:idCategory" element={ <> <ItemListContainer /> </> } />
                    <Route path="/category/:idCategory" element={ <> <ItemListContainer /> </> } />
                    <Route path="/category/:idCategory" element={ <> <ItemListContainer /> </> } />
                    <Route path="/details/:idDetails" element={ <> <ItemDetailContainer /> </> } />
                    <Route path="/Cart" element={ <> <Cart /> </> } />
                    <Route path="/" element={ <> <SearchForm/> </> }/>
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    </>
  );
}

export default Home;