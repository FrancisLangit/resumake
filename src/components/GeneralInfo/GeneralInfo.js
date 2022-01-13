import { Field } from '../Field/Field';

const GeneralInfo = () => {
  return (
    <div>
      <Field name="Name" />
      <Field name="Email" />
      <Field name="Number" />
      <Field name="Location" />
    </div>
  );
};

export { GeneralInfo };
