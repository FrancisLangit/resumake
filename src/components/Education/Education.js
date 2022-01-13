import { Field } from '../Field/Field';
import { Form } from '../Form/Form';

const Education = () => {
  return (
    <Form
      fields={[
        <Field name="School" />,
        <Field name="Degree" />,
        <Field name="Graduation Date" />,
        <Field name="Description" isTextarea={true} />,
      ]}
    />
  );
};

export { Education };
