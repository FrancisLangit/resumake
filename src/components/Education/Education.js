import { Field } from '../Field/Field';
import { Form } from '../Form/Form';

const Education = () => {
  return (
    <Form
      fields={[
        <Field placeholder="School" />,
        <Field placeholder="Degree" />,
        <Field placeholder="Graduation Date" />,
        <Field placeholder="Description" isTextarea={true} />,
      ]}
    />
  );
};

export { Education };
