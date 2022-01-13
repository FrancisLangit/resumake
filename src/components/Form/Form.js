import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ fields }) => {
  const [isDelete, setIsDelete] = useState(false);

  return isDelete ? null : (
    <div>
      {fields.map((f) => (
        <div key={uuidv4()}>{f}</div>
      ))}
      <button onClick={() => setIsDelete(!isDelete)}>Delete</button>
    </div>
  );
};

export { Form };
