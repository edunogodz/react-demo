
import './App.css';
import NAMES from './components/data.json'

import {useState, useTransition} from 'react';

// import { PostForm } from './components/PostForm';
// import { PostList } from './components/PostList';
// import { Form } from './components/Form';
// import './appStyles.css'
// import styles from './appStyles.modules.css'

// import { InLine } from './components/InLine';
// import { NameList } from './components/NameList';
//import { Stylesheet } from './components/Stylesheet';
//import { Greet } from './components/Greet'
//import { Message } from './components/Message'
//import { ClickHandler } from './components/ClickHandler'
//import { ParentComponent } from './components/ParentComponent';
//import { UserGreeting } from './components/UserGreeting';

function App() {

const [query, setQuery] = useState('');

const [inputValue, setInputValue] = useState('');
const [isPending, startTransition]= useTransition();

const changeHandler = (event) => {
    // setQuery(event.target.value)
    setInputValue(event.target.value)
    startTransition(() => setQuery(event.target.value))
}

const filteredNames = NAMES.filter((item) => {
  return  item.first_name.toLowerCase().includes(query.toLowerCase()) || 
          item.last_name.toLowerCase().includes(query.toLowerCase())
})

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
      {/* <ParentComponent /> */}  
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet /> */}
      {/* <InLine />
      <h1 className='error'>Error</h1>
      <h1 className='success'>Success</h1> */}
      {/* <Form /> */}     
      {/* <PostForm />
      <PostList />  */}

      <input 
        type='text' 
        value={inputValue} 
        onChange={changeHandler} 
      />

      {isPending && <p>Updating List...</p>}

    {
      filteredNames.map((item) => (
        <p key={item.id}>{item.first_name} {item.last_name}</p>
      ))
    }
      
    </div>
  );
}

export default App;
