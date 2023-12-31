import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefullGreeting from './components/StatefullGreeting';
import StatefullGreetingWithCallback from './components/StatefullGreetingWithCalback';
import StatefullGreetingWithPrevState from './components/StatefullGreetingWithPrevState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsChild from './components/MethodsAsPropsChild';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingList from './components/RenderingList';
import Clock from './components/Clock';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from "./components/LifeCyclesCWU";
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import { SearchBar } from './components/SearchBar';
import HooksCounter from './components/HooksCounter';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';
import HTTPRequests from './components/HTTPRequests';
import HTTPPost from './components/HTTPPost';
import HTTPHooks from './components/HTTPHooks';

function App() {
  return (
    <div className="App">
      <HTTPHooks />
      <HTTPPost />
      <HTTPRequests />
      <UseEffectCounterContainer />
      <UseEffectCounter />
      <UseStateWithObjects />
      <UseStateWithArrays />
      <ControlledFormHooks />
      <HooksCounter />
      <SearchBar />
      <UncontrolledForm />
      <ControlledForm />
      <LifeCyclesCWU />
      <LifeCyclesCDU />
      <LifeCyclesCDM />
      <Clock />
      <RenderingList />
      <MethodsAsPropsChild />
      <MethodsAsPropsParent />
      <NestingComponents />
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true}/>
      <EventBinding />
      <EventsFunctional />
      <EventsClass />
      <StatefullGreetingWithPrevState greeting="I`m a statefull class component!" name="I am Loki!"/>
      <StatefullGreetingWithCallback greeting="I`m a statefull class component!" name="I am Loki!"/>
      <StatefullGreeting greeting="I`m a statefull class component!" name="I am Loki!"/>
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="32" />
    </div>
  );
}

export default App;
