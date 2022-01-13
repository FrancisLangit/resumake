const FieldDisplay = ({ text, setIsForm }) => {
  return (
    <div>
      <span style={{ whiteSpace: 'pre' }}>{text}</span>
      <button onClick={() => setIsForm(true)}>Edit</button>
    </div>
  );
};

export { FieldDisplay };
