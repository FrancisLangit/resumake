import { useState } from 'react';

import { Education } from './components/Education/Education';
import { Experience } from './components/Experience/Experience';
import { Field } from './components/Field/Field';
import { Form } from './components/Form/Form';

const App = () => {
  const [education, setEducation] = useState([<Education />]);
  const [experience, setExperience] = useState([<Experience />]);

  return (
    <div>
      <Form
        fields={[
          <Field label="Name" />,
          <Field label="Email" />,
          <Field label="Number" />,
        ]}
      />
      <hr />

      {education}
      <hr />

      {experience}
    </div>
  );
};

export default App;
