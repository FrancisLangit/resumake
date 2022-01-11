import { Education } from './components/Education/Education';
import { Experience } from './components/Experience/Experience';
import { Field } from './components/Field/Field';
import { Section } from './components/Section/Section';

const App = () => {
  return (
    <div>
      <Field label="Name" />
      <Field label="Email" />
      <Field label="Number" />
      <Section form={<Education />} />
      <Section form={<Experience />} />
    </div>
  );
};

export default App;
