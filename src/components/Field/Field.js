import { useState } from 'react';

import { FieldDisplay } from '../FieldDisplay/FieldDisplay';
import { FieldForm } from '../FieldForm/FieldForm';

const Field = ({ name, isTextarea, displayStyle }) => {
  const [isForm, setIsForm] = useState(true);
  const [text, setText] = useState('');

  if (isForm) {
    return (
      <FieldForm
        setIsForm={setIsForm}
        inputValue={text}
        setInputValue={setText}
        inputPlaceholder={name}
        isTextarea={isTextarea}
      />
    );
  } else {
    return (
      <FieldDisplay
        text={text}
        displayStyle={displayStyle}
        setIsForm={setIsForm}
      />
    );
  }
};

export { Field };
