import './App.scss';
import Header from './components/header/Header';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
