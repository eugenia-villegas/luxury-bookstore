import './App.css';
import Navbar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route 
                path="/" 
                element={
                    <>

                    </>
                } />

                <Route 
                path="/magazines" 
                element={
                    <>
                    <ItemListContainer />
                    </>
                } />

                <Route 
                path="/board-games" 
                element={
                    <>
                    <ItemListContainer />
                    </>
                } />
                
            </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;

    