
import React, { Component } from 'react';

class AddingStudent extends Component {
    state = {  
        StudentRollNo: '',
        StudentDept : '',
        StudentName : '',
        CGPA : '',
     }


     change = e =>{
         this.setState({
             [e.target.name]: e.target.value
         });
     };


     onSubmit = (e) => {
         e.preventDefault();
         console.log(this.state);
     }



    render() { 
        return ( 
            <form >
               
                <input
                name="StudentRollNo"
                placeholder="RollNo" 
                value={this.state.StudentRollNo} 
                onChange={e => this.change(e)}
                />
                <br/>
                 
                <input
                name="StudentName"
                placeholder="Name"
                value={this.state.StudentName} 
                onChange={e => this.change(e)}
                />

                <br/>
                 
                <input
                name="StudentDept"
                 placeholder="Department"
                 value={this.state.StudentDept}
                 onChange={e=>this.change(e)}
                   />
                   <br/>
                  
                <input
                name="CGPA"
                placeholder="CGPA" 
                 value={this.state.CGPA}
                  onChange={e=>this.change(e)}
                  />
                  <br/>
                <button className='btn btn-primary btn-md'  onClick={e => this.onSubmit(e)}> Submit </button>
            </form>
         );
    }
}
 
export default AddingStudent;