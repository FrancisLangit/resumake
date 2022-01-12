import { Field } from '../Field/Field';
import { Form } from '../Form/Form';

const Experience = () => {
  return (
    <Form
      fields={[
        <Field placeholder="Company" />,
        <Field placeholder="Position" />,
        <Field placeholder="Start" />,
        <Field placeholder="End" />,
        <Field placeholder="Description" />,
      ]}
    />
  );
};

export { Experience };
