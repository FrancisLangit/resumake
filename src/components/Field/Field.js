import { useState } from 'react';

const Field = ({ placeholder }) => {
  const [isEdit, setIsEdit] = useState(true);
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEdit(!isEdit);
  };

  if (isEdit) {
    return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <input onChange={(e) => handleChange(e)} placeholder={placeholder} />
        <button type="submit">Submit</button>
      </form>
    );
  } else {
    return (
      <div>
        {text}
        <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      </div>
    );
  }
};

export { Field };
