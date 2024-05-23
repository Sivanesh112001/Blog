import React, { useState, useEffect } from 'react';
import './css/FetchDataComponent.css'; 

const FetchDataComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <div className="card-container">
        {data.map(item => (
          <div key={item.id} className="card">
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <h3>Vijay</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchDataComponent;
