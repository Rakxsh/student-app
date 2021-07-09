import React, { useState } from 'react'
import Semester from './Semester';


function Student (){
    let [studentDetails, setStudentDetails] = useState([{
        StudentRollNo: '11',
        StudentDept : 'Mechanical',
        StudentName : 'Ram',
        CGPA : '9.0'

    },
{
        StudentRollNo: '12',
        StudentDept : 'ECE',
        StudentName : 'Rajesh',
        CGPA : '9.2'

    },
{
        StudentRollNo: '13',
        StudentDept : 'EEE',
        StudentName : 'vishal',
        CGPA : '9.3'

    },])

    let added = 
    {
        StudentRollNo: '',
        StudentDept : '',
        StudentName : '',
        CGPA : ''
    }

    const  AddingStudent = () =>{
        let newAddedStudentDetails = [...studentDetails,added];
        setStudentDetails(newAddedStudentDetails)
    }

    return(
        <div>
            <Semester student = {studentDetails}/>
            <button className='btn btn-primary btn-md' onClick={AddingStudent}>Add Student </button>

        </div>
    )
}


export default Student;