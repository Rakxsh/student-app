
import React, { Component } from 'react';

class AddingStudent extends Component {
    state = {  
        StudentRollNo: '',
        StudentDept : '',
        StudentName : '',
        CGPA : '',
     }


     change = event =>{
         this.setState({
             [event.target.name]: event.target.value
         });
     };


     onSubmit = (event) => {
         event.preventDefault();
         console.log(this.state);
     }



    render() { 
        return ( 
            <form >
               
                <input
                name="StudentRollNo"
                placeholder="RollNo" 
                value={this.state.StudentRollNo} 
                onChange={event => this.change(event)}
                />
                <br/>
                 
                <input
                name="StudentName"
                placeholder="Name"
                value={this.state.StudentName} 
                onChange={event => this.change(event)}
                />

                <br/>
                 
                <input
                name="StudentDept"
                 placeholder="Department"
                 value={this.state.StudentDept}
                 onChange={event=>this.change(event)}
                   />
                   <br/>
                  
                <input
                name="CGPA"
                placeholder="CGPA" 
                 value={this.state.CGPA}
                  onChange={event =>this.change(event)}
                  />
                  <br/>
                <button className='btn btn-primary btn-md'  onClick={event => this.onSubmit(event)}> Submit </button>
            </form>
         );
    }
}
 
export default AddingStudent;