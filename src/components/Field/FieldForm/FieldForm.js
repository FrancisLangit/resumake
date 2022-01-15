import style from './FieldForm.module.scss';

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
    className: style.input,
    placeholder: inputPlaceholder,
    value: inputValue,

    onChange: (event) => setInputValue(event.target.value),
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={style.form}>
      {isTextarea ? <textarea {...inputProps} /> : <input {...inputProps} />}
      <button type="submit" className={style.submit}>
        Submit
      </button>
    </form>
  );
};

export { FieldForm };
