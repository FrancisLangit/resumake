import { Field } from './components/Field/Field';
import { Form } from './components/Form/Form';

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
    </div>
  );
};

export default App;
