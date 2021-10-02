import React from 'react';
import nextId from "react-id-generator";
import swal from 'sweetalert';
import "./NewTodo.css"

class NewTodo extends React.Component {
    constructor(props)
    {
        super(props);
        this.state=
        {
            task:''
        }

    }
    ChangeHandler =(e)=>
    {
        this.setState({
            task:e.target.value
        })
    }
    SubmitHandler = (e) =>
    {
        e.preventDefault();
        if(this.state.task==='')
        {
            swal({
                title: "Error",
                text: "Your Todo is Empty 😥",
                icon: "warning",
              });
        }
        else

        {
         this.props.create( {...this.state,id:nextId(),completed:false });
         swal({
            title: "Good job!",
            text: "Your Todo Created Successfully 😜",
            icon: "success",
          });
        }
    }
    render() {
        return(
                <form className="NewTodoForm" onSubmit={this.SubmitHandler}>
                    <input 
                    type='text'
                    className='NewTodoForm input'
                    onChange={this.ChangeHandler}
                    />
                    <button type='submit'>
                        <i className='fas fa-add'></i>
                    </button>
                </form>
        );
    }
}
 
export default NewTodo;