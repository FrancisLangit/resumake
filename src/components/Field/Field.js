import { useState } from 'react';

const Field = ({ placeholder, isTextarea }) => {
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
    const inputProps = {
      value: text,
      onChange: (e) => handleChange(e),
      placeholder: placeholder,
    };

    return (
      <form onSubmit={(e) => handleSubmit(e)}>
        {isTextarea ? <textarea {...inputProps} /> : <input {...inputProps} />}
        <button type="submit">Submit</button>
      </form>
    );
  } else {
    return (
      <div>
        <span style={{ 'white-space': 'pre' }}>{text}</span>
        <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      </div>
    );
  }
};

export { Field };
