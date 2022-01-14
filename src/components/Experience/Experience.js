import { Field } from '../Field/Field';
import { Form } from '../Form/Form';

const Experience = () => {
  return (
    <Form
      fields={[
        <Field name="Company" />,
        <Field name="Position" />,
        <Field name="Start — End" />,
        <Field name="Description" isTextarea={true} />,
      ]}
    />
  );
};

export { Experience };
