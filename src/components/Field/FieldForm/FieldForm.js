const FieldForm = ({
  setIsForm,
  inputValue,
  setInputValue,
  inputPlaceholder,
  isTextarea,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsForm(false);
  };

  const inputProps = {
    value: inputValue,
    onChange: (event) => setInputValue(event.target.value),
    placeholder: inputPlaceholder,
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {isTextarea ? <textarea {...inputProps} /> : <input {...inputProps} />}
      <button type="submit">Submit</button>
    </form>
  );
};

export { FieldForm };
