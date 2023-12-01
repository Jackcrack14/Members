import React from 'react'
import '../App.css'


function DataList({members}) {
  return (
    // <div className='table-cont'>
        <table className='datalist-table'>
            

            <tr>
                <th> <input type="checkbox" /></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
            </tr>
            
            

        {   
            members.map(item => (                    
                <tr key={item.id} >
                    <td> <input type="checkbox" /></td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td><button>Edit</button><button>Delete</button></td>
                </tr>
                
            ))
            }
            
      </table>
    // </div>
  )
}

export default DataList
