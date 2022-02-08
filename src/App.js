import './App.css';
import Navbar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <ItemListContainer />
      <ItemCount />


    </div>
  );
}

export default App;
