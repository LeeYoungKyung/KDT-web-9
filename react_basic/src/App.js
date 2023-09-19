import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import './App.css';
import EventClass from "./EventClass";
function App() {
  return (
     <>
  
  <ClassComponent></ClassComponent> 
   <FunctionComponent></FunctionComponent>
  <ClassComponent></ClassComponent>
  <ClassComponent></ClassComponent> 
  <ClassComponent></ClassComponent>
  <FunctionComponent myClass={"kdt9"}></FunctionComponent>
  <FunctionComponent></FunctionComponent>

  <EventClass/>
  </>
  )
}

 
export default App;


