import React from 'react';
import TodoList from './components/TodoList/TodoList';
class App extends React.Component {
  render() { 
    return <div>
     
      <TodoList/>
      <h6 className='appBy'>
        App by: Pooria Asiabi
      </h6>
    </div>;
  }
}
 
export default App;