const FieldButton = ({ isEdit, setIsEdit }) => {
  const handleClick = () => {
    setIsEdit(!isEdit);
  };

  return (
    <button onClick={() => handleClick()}>{isEdit ? 'Submit' : 'Edit'}</button>
  );
};

export { FieldButton };
