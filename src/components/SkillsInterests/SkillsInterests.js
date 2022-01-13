import { Field } from '../Field/Field';

const SkillsInterests = () => {
  return (
    <div>
      <Field name="Skills" isTextarea={true} />
      <Field name="Interests" isTextarea={true} />
    </div>
  );
};

export { SkillsInterests };
