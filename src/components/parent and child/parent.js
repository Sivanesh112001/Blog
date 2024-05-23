import React, { useState } from 'react';
import ChildComponent from './Child';

const ParentComponent = () => {
  const [parentData, setParentData] = useState({
    name: 'Post name',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    author: 'Author name'
  });

  const updateParentData = (newData) => {
    setParentData((prevData) => ({
      ...prevData,
      ...newData
    }));
  };

  return (
    <div className='parent'>
      <h1>Blog Detials</h1>
      <p>Post name: {parentData.name}</p>
      <p>Discription: {parentData.text}</p>
      <p>Author: {parentData.author}</p>
      <ChildComponent parentData={parentData} updateParentData={updateParentData} />
    </div>
  );
};

export default ParentComponent;
