import React from 'react';
import NewTodo from './components/NewTodo/NewTodo';
import TodoList from './components/TodoList/TodoList';
class App extends React.Component {
  render() { 
    return <div>
      <h1>
        todo list
      </h1>
      <TodoList/>
    </div>;
  }
}
 
export default App;