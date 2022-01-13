import { Education } from './components/Education/Education';
import { Experience } from './components/Experience/Experience';
import { Field } from './components/Field/Field';
import { Section } from './components/Section/Section';

const App = () => {
  return (
    <div>
      <Field name="Name" />
      <Field name="Email" />
      <Field name="Number" />
      <Section form={<Experience />} />
      <Section form={<Education />} />
      <Field name="Skills" isTextarea={true} />
      <Field name="Interests" isTextarea={true} />
    </div>
  );
};

export default App;
