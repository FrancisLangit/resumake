import { Field } from '../Field/Field';
import { Form } from '../Form/Form';

const Education = () => {
  return (
    <Form
      fields={[
        <Field label="School" />,
        <Field label="Degree" />,
        <Field label="Graduation Date" />,
      ]}
    />
  );
};

export { Education };
