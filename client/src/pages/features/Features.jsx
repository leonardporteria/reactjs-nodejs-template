import './Features.scss';

import { useState } from 'react';

const Features = () => {
  const [data, setData] = useState({});

  const hanldeDataChange = (event, name) => {
    setData((prevData) => ({
      ...prevData,
      [name]: event.target.value,
    }));
  };

  const postAPI = async (path = '/api/application') => {
    console.log(data);

    try {
      const response = await fetch(path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      return await response.json();
    } catch (error) {
      console.error(`Error in ${path}:`, error);
      return null;
    }
  };

  return (
    <div className='Features'>
      <h1>Features Page</h1>
      <p>Dummy form for REST API + MySQL Connection</p>
      <label>
        <p>Name</p>
        <input
          type='text'
          onChange={(e) => {
            hanldeDataChange(e, 'name');
          }}
        />
      </label>
      <label>
        <p>Message</p>
        <input
          type='text'
          onChange={(e) => {
            hanldeDataChange(e, 'message');
          }}
        />
      </label>

      <button
        onClick={() => {
          postAPI('/api/application');
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Features;
