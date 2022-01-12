import { Field } from '../Field/Field';
import { Form } from '../Form/Form';

const Experience = () => {
  return (
    <Form
      fields={[
        <Field label="Company" />,
        <Field label="Position" />,
        <Field label="Start" />,
        <Field label="End" />,
        <Field label="Description" />,
      ]}
    />
  );
};

export { Experience };
