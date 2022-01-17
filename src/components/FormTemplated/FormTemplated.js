import { Field } from '../Field/Field';
import { Form } from '../Form/Form';

const FormTemplated = ({ fieldName1, fieldName2, fieldName3, fieldName4 }) => {
  return (
    <Form
      fields={[
        <Field
          name={fieldName1}
          displayStyle={{ fontSize: '28px', fontWeight: '900' }}
        />,
        <Field name={fieldName2} displayStyle={{ fontSize: '21px' }} />,
        <Field name={fieldName3} displayStyle={{ fontStyle: 'italic' }} />,
        <Field
          name={fieldName4}
          displayStyle={{ fontSize: '14px' }}
          isTextarea={true}
        />,
      ]}
    />
  );
};

export { FormTemplated };
