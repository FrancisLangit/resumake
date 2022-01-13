import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Section = ({ form }) => {
  const [forms, setForms] = useState([<div key={uuidv4()}>{form}</div>]);

  const handleAddForm = () => {
    setForms([...forms, <div key={uuidv4()}>{form}</div>]);
  };

  return (
    <div>
      {forms}
      <button onClick={() => handleAddForm()}>Add</button>
    </div>
  );
};

export { Section };
