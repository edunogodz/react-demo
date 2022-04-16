
import './App.css';
//import { Greet } from './components/Greet'
//import { Message } from './components/Message'
//import { ClickHandler } from './components/ClickHandler'
import { ParentComponent } from './components/ParentComponent';

function App() {
  return (
    <div className="App">

      {/* <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman'>
        <p>This is Children props</p>
      </Greet> */}

     {/* <Message /> */}

      {/* <ClickHandler /> */}

      <ParentComponent />
    </div>
  );
}

export default App;
