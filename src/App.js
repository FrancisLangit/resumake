import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Education } from './components/Education/Education';
import { Experience } from './components/Experience/Experience';
import { Field } from './components/Field/Field';
import { Form } from './components/Form/Form';

const App = () => {
  const [education, setEducation] = useState([<Education key={uuidv4()} />]);
  const [experience, setExperience] = useState([<Experience key={uuidv4()} />]);

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
      <button
        onClick={() =>
          setEducation([...education, <Education key={uuidv4()} />])
        }
      >
        Add Education
      </button>
      <hr />

      {experience}
      <button
        onClick={() =>
          setExperience([...experience, <Experience key={uuidv4()} />])
        }
      >
        Add Experience
      </button>
    </div>
  );
};

export default App;
