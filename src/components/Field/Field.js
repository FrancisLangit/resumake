import { useState } from 'react';

const Field = ({ label }) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      {label}
      <input value={input} onChange={handleChange} />
    </div>
  );
};

export { Field };
