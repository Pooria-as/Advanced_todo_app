import React from "react"
import swal from "sweetalert";
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
    swal({
        title: "Are You Sure To Delete ?",
      
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          this.props.remove(this.props.id)

        } else {
          swal("Your imaginary file is safe!");
        }
      });
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
        if(this.state.task)
        {
            swal({
                title: "Good job!",
                text: "You Todo Edited Successfully ! 😙",
                icon: "success",
            });
            this.props.update(this.props.id,this.state.task)
        }

        this.setState({
            Edit:!this.state.Edit
        })
    }
    completedHandler =()=>
    {
        
        this.props.completedToggle(this.props.id)
       
    }
    render() {
        let result; 
        if(this.state.Edit)
        {
            result =(
             <div className='Todo'>
                <form className='Todo-edit-form'  onSubmit={this.EditFormHandler}>
                    <input
                   
                    name='task'
                    type='text'
                    value={this.state.task}
                    onChange={this.EditHandlerValue}
                    />
                    <button>
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
                 <li
                className={this.props.completed ? "Todo-task completed" : "Todo-task"}
                onClick={this.completedHandler}
                >
                {this.props.task}
                </li>
                <div className='Todo-buttons'>
                <button onClick={()=>this.setState({Edit:true})}>
                <i className='fas fa-pen'>
                </i>
            </button>
            <button onClick={this.removeHandler}>
            <i className='fas fa-trash'>
                </i>
            </button>    
                </div>    
        </div>
            )
        }

        return result;
    }
}
 
export default Todo;