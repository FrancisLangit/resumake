import { useState } from 'react';

const Field = ({ label }) => {
  const [field, setField] = useState('');

  const handleChange = (event) => {
    setField(event.target.value);
  };

  return (
    <div>
      {label}
      <input value={field} onChange={handleChange} />
      <div>{field}</div>
    </div>
  );
};

export { Field };
