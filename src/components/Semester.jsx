import React from 'react'



function Semester(props)  {
    
    return (
        <div>
    <h2> Student  Details </h2>
    <table className='table'>
        <thead>
            <tr>
            <th>StudentRollNo</th>
            <th>StudentDept</th>
            <th>StudentName</th>
            <th>CGPA</th>
            </tr>
        </thead>
        <tbody>
        
           {
           props.student.map((list,index)=>(
               <tr>
                   <td>{list.StudentRollNo}</td>
                   <td>{list.StudentDept}</td>
                   <td>{list.StudentName}</td>
                   <td>{list.CGPA}</td>
               </tr>
           )) 
           }
        </tbody>

    </table>
   

    </div>
    
    

    )

}
export default Semester;