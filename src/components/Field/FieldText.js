const FieldText = ({ isEdit, text, setText }) => {
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>{isEdit ? <input value={text} onChange={handleChange} /> : text}</div>
  );
};

export { FieldText };
