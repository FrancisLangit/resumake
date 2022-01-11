import { Education } from './components/Education/Education';
import { Experience } from './components/Experience/Experience';
import { Field } from './components/Field/Field';
import { Form } from './components/Form/Form';
import { Section } from './components/Section/Section';

const App = () => {
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

      <Section form={<Education />} />
      <Section form={<Experience />} />
    </div>
  );
};

export default App;
