import React from "react"
import NewTodo from "../NewTodo/NewTodo";
import Todo from "../Todo/Todo";
import "./TodoList.css"
class TodoList extends React.Component {
    constructor(props)
    {
        super(props);
        this.state =
        {
            todos:[]
        }
      
    }

    create = (NewValue)=>
    {
        this.setState({
            todos:[...this.state.todos,NewValue]
        })
    }

    remove = (id) =>
    {
        this.setState({
            //return all without that id 
            todos:this.state.todos.filter(item=>item.id !== id)
        })
    }

    update = (id,updatedValue)=>
    {
        const updatedTodo=this.state.todos.map(todo => 
            {
                if(todo.id ===id)
                {
                    return {...todo,task:updatedValue}
                }
                else
                {
                    return todo
                }
            })
            this.setState(
                {
                    todos :updatedTodo
                }
            )
    }
    completedToggle = (id) =>
    {
        const updatedTodo=this.state.todos.map(todo => 
            {
                if(todo.id ===id)
                {
                    return {...todo, completed :!todo.completed}
                }
                else
                {
                    return todo
                }
            })
            this.setState(
                {
                    todos :updatedTodo
                }
            )
    }



    render() {
        const showTodo=this.state.todos.map(item=>
            {
                return <Todo
         
                key={item.id}
                id={item.id}
                task={item.task}
                completed={item.completed}
                completedToggle={this.completedToggle}
                remove={this.remove}
                update={this.update}
                />
            })
            
        return (
            <div className='TodoList'>
                <h1>
                    React to do list 
                </h1>
               <ul>
               {showTodo}
               </ul>
                <NewTodo create={this.create}/>
            </div>
        );
    }
}
 
export default TodoList;