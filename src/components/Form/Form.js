import { v4 as uuidv4 } from 'uuid';

const Form = ({ fields }) => {
  return (
    <div>
      {fields.map((field) => {
        return <div key={uuidv4()}>{field}</div>;
      })}
    </div>
  );
};

export { Form };
