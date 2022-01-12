import { useState } from 'react';

import { FieldButton } from './FieldButton';
import { FieldText } from './FieldText';

const Field = ({ placeholder }) => {
  const [isEdit, setIsEdit] = useState(true);
  const [text, setText] = useState('');

  return (
    <div>
      <FieldText
        isEdit={isEdit}
        text={text}
        setText={setText}
        placeholder={placeholder}
      />
      <FieldButton isEdit={isEdit} setIsEdit={setIsEdit} />
    </div>
  );
};

export { Field };
