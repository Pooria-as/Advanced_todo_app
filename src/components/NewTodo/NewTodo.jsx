import React from 'react';
import nextId from "react-id-generator";
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
         this.props.create( {...this.state,id:nextId(),completed:false });
    }
    render() {
        return(
            <div>
                <form onSubmit={this.SubmitHandler}>
                    <label>New Todo</label>
                    <input 
                    type='text'
                    onChange={this.ChangeHandler}
                    />
                    <button>
                        add
                    </button>
                </form>
            </div>
        );
    }
}
 
export default NewTodo;