import React, { useState } from 'react';
import './Common.css';
const ChildComponent = ({ parentData, updateParentData }) => {
  const [childData, setChildData] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChildData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUpdate = () => {
    updateParentData(childData);
  };

  return (
    <div className='child'>
      <h2>Blog Post</h2>
      {/* <p>Parent Data: </p>
      <p>Name: {parentData.name}</p>
      <p>Email: {parentData.email}</p>
      <p>Age: {parentData.age}</p> */}
      <label> Post Name:</label>
      <input
        type="text"
        name="name"
        value={childData.name}
        onChange={handleChange}
        placeholder="Enter new post name"
      />
      <label>Post Contents:</label>
      <textarea
        name="text"
        value={childData.text}
        onChange={handleChange}
        placeholder="Enter new contents"
      />
      <label>Author Name:</label>
      <input
        type="text"
        name="author"
        value={childData.author}
        onChange={handleChange}
        placeholder="Enter new Author name"
      />
      <button onClick={handleUpdate}>Post </button>
    </div>
  );
};

export default ChildComponent;
