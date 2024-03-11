import Card  from './components/Card.jsx'
import NavBar  from './components/NavBar.jsx'
import "./style/App.css";

function App() {
  return (<>
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Card title={"Calculadora BMI"}/>
      </header>
    </div>
    </>
  );
}

export default App;
