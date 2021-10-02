import React from "react"
import "./Todo.css"
class Todo extends React.Component {
   constructor(props)
   {
       super(props);
       this.state={
           Edit:false,
           task:this.props.task
       }
   }

   removeHandler = () =>
   {
    this.props.remove(this.props.id)
   }

   EditHandlerValue = (e) =>
   {
    this.setState({
        [e.target.name]:e.target.value
    })
    }

    EditFormHandler = (e) =>
    {
        e.preventDefault();
        this.props.update(this.props.id,this.state.task)
        this.setState({
            Edit:!this.state.Edit
        })
    }
    completedHandler =()=>
    {
        this.props.completedToggle(this.props.id)
        console.log(this.props.completed    )
       
    }


    
    render() {
        let result; 
        if(this.state.Edit)
        {
            result =(
             <div className='Todo'>
                <form className='Todo-edit-form' onSubmit={this.EditFormHandler}>
                    <input
                    className='Todo-edit-form input'
                    name='task'
                    type='text'
                    value={this.state.task}
                    onChange={this.EditHandlerValue}
                    />
                    <button className='Todo-edit-form button'>
                        save 
                    </button>
                </form>
            </div>
            )
        }
        else
        {
            result=(
                <div className='Todo'>
            <button onClick={()=>this.setState({Edit:true})}>
                <i className='fas fa-pen'>
                </i>
            </button>
            <button onClick={this.removeHandler}>
            <i className='fas fa-trash'>
                </i>
            </button>
                <li
                className={this.props.completed ? "Todo-task completed" : "Todo-task"}
                onClick={this.completedHandler}
                >
                {this.props.task}
                </li>
        </div>
            )
        }

        return result;
    }
}
 
export default Todo;