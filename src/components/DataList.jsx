import React, { useState } from 'react';
import '../App.css';

function DataList({ members, handleDelete, setMembers, selectedIds, setSelectedIds }) {
  const [editingId, setEditingId] = useState(null);
  const [editedValues, setEditedValues] = useState({});
  const [isChecked, setIsChecked] = useState(false)
  

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (id) => {
    // Perform save logic here, e.g., update the data in your state or API
    const updatedMembers = members.map((member) => {
      if (member.id === id) {
        return {
          ...member,
          name: editedValues.name || member.name,
          email: editedValues.email || member.email,
          role: editedValues.role || member.role,
        };
      }
      return member;
    });

    console.log("Saving changes for ID:", id, "Values:", editedValues);

    // Update the members state with the modified data
    setEditingId(null);
    setEditedValues({});
    // Update the members state with the modified data
    setMembers(updatedMembers);
  };
  const handleAll = () => {
    setIsChecked(!isChecked)
    if(!isChecked) {
      const allId = members.map(item => item.id)
      setSelectedIds(allId)
    } 
  }
  const handleChange = (id, checked) => {
    if (checked) {
      setSelectedIds((prevIds) => [...prevIds, id]);
    } else {
      setSelectedIds((prevIds) => prevIds.filter((prevId) => prevId !== id));
    }
  };

  return (
    <table className='datalist-table'>
      <thead>
        <tr>
          <th>
            <input type="checkbox" onChange={handleAll}/>
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {members.map((item) => (
          <tr key={item.id}>
            <td>
              <input
                type="checkbox"
                id={item.id}
                checked={selectedIds.includes(item.id)}
                onChange={(e) => handleChange(item.id, e.target.checked)}
              />
            </td>
            <td>
              {editingId === item.id ? (
                <input
                  type="text"
                  value={editedValues.name || item.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
              ) : (
                item.name
              )}
            </td>
            <td>
              {editingId === item.id ? (
                <input
                  type="text"
                  value={editedValues.email || item.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
              ) : (
                item.email
              )}
            </td>
            <td>
              {editingId === item.id ? (
                <input
                  type="text"
                  value={editedValues.role || item.role}
                  onChange={(e) => handleChange('role', e.target.value)}
                />
              ) : (
                item.role
              )}
            </td>
            <td>
              {editingId === item.id ? (
                <button onClick={() => handleSave(item.id)}>Save</button>
              ) : (
                <button onClick={() => handleEdit(item.id)}>Edit</button>
              )}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataList;