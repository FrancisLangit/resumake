const Form = ({ fields }) => {
  return (
    <div>
      {fields.map((field) => {
        return field;
      })}
    </div>
  );
};

export { Form };
