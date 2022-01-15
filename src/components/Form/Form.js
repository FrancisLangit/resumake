import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import style from './Form.module.scss';

const Form = ({ fields }) => {
  const [isDelete, setIsDelete] = useState(false);

  return isDelete ? null : (
    <div className={style.container}>
      <div className={style.fields}>
        {fields.map((f) => (
          <div key={uuidv4()}>{f}</div>
        ))}
      </div>
      <button onClick={() => setIsDelete(!isDelete)} className={style.delete}>
        Delete
      </button>
    </div>
  );
};

export { Form };
