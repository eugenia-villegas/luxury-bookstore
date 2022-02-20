import Navbar from '../components/NavBar.js';
import ItemListContainer from '../components/ItemListContainer.js';
import ItemDetailContainer from '../components/ItemDetailContainer.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <>
        
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path="/" element={ <> <ItemListContainer /> </> } />

                <Route path="/category/:idCategory" element={ <> <ItemListContainer /> </> } />

                <Route path="/category/:idCategory" element={ <> <ItemListContainer /> </> } />
                
                <Route path="/category/:idCategory" element={ <> <ItemListContainer /> </> } />

                <Route path="/details/:idDetails" element={ <> <ItemDetailContainer /> </> } />

                <Route path="/aboutUs" element={ <> </> } />
            </Routes>
        </BrowserRouter>
        
    </>
  );
}

export default Home;