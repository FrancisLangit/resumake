import { useState } from 'react';

import { FieldButton } from './FieldButton';
import { FieldText } from './FieldText';

const Field = ({ label }) => {
  const [isEdit, setIsEdit] = useState(true);
  const [text, setText] = useState('');

  return (
    <div>
      {label}
      <FieldText isEdit={isEdit} text={text} setText={setText} />
      <FieldButton isEdit={isEdit} setIsEdit={setIsEdit} />
    </div>
  );
};

export { Field };
