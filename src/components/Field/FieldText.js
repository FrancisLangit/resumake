const FieldText = ({ isEdit, text, setText, placeholder }) => {
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      {isEdit ? (
        <input value={text} onChange={handleChange} placeholder={placeholder} />
      ) : (
        text
      )}
    </>
  );
};

export { FieldText };
