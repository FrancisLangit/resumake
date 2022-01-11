import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import style from './Form.module.scss';

const Form = ({ fields }) => {
  const [isDelete, setIsDelete] = useState(false);

  if (isDelete) {
    return null;
  } else {
    return (
      <div className={style.Form}>
        {fields.map((field) => {
          return <div key={uuidv4()}>{field}</div>;
        })}
        <hr />
        <button onClick={() => setIsDelete(!isDelete)}>Delete</button>
      </div>
    );
  }
};

export { Form };
