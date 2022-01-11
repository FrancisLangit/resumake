import { useState } from 'react';

const FieldText = ({ isEdit, text, setText }) => {
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>{isEdit ? <input value={text} onChange={handleChange} /> : text}</div>
  );
};

const FieldButton = ({ isEdit, setIsEdit }) => {
  const handleClick = () => {
    setIsEdit(!isEdit);
  };

  return (
    <button onClick={() => handleClick()}>{isEdit ? 'Submit' : 'Edit'}</button>
  );
};

const Field = ({ label }) => {
  const [isEdit, setIsEdit] = useState(true);
  const [text, setText] = useState('');

  return (
    <div>
      {label}
      <FieldText isEdit={isEdit} text={text} setText={setText} />
      <FieldButton isEdit={isEdit} setIsEdit={setIsEdit} />
    </div>
  );
};

export { Field };
