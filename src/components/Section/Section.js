import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import style from './Section.module.scss';

const Section = ({ form }) => {
  const [forms, setForms] = useState([<div key={uuidv4()}>{form}</div>]);

  const handleAddForm = () => {
    setForms([...forms, <div key={uuidv4()}>{form}</div>]);
  };

  return (
    <div className={style.container}>
      {forms}
      <button onClick={() => handleAddForm()} className={style.addButton}>
        Add
      </button>
    </div>
  );
};

export { Section };
