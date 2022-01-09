import { useState } from 'react';

const Field = () => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return <input value={input} onChange={handleChange} />;
};

export { Field };
