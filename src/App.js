import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Books from './Components/Main';
import Alert from './Components/Welcome';
import FooterUno from './Components/footer';

function App() {
  return (
    <>
      <header>
        <Nav/>
        <Alert/>
      </header>
      <main>
        <Books/>
      </main>
      <footer>
        <FooterUno/>
      </footer>
    </>
      
  );
}

export default App;
