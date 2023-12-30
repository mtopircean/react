import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefullGreeting from './components/StatefullGreeting';
import StatefullGreetingWithCallback from './components/StatefullGreetingWithCalback';
import StatefullGreetingWithPrevState from './components/StatefullGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      <StatefullGreetingWithPrevState greeting="I`m a statefull class component!" name="I am Loki!"/>
      <StatefullGreetingWithCallback greeting="I`m a statefull class component!" name="I am Loki!"/>
      <StatefullGreeting greeting="I`m a statefull class component!" name="I am Loki!"/>
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="32" />
    </div>
  );
}

export default App;
