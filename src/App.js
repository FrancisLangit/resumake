import { useState } from 'react';

import { Field } from './components/Field/Field';

const App = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <Field label="Name" setDisplay={setName} />

      <div>{name}</div>
    </div>
  );
};

export default App;
