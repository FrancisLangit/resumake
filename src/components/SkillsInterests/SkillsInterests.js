import { Field } from '../Field/Field';

import style from './SkillsInterests.module.scss';

const SkillsInterests = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.header}>Skills</div>
        <Field name="What are you good at?" isTextarea={true} />
      </div>
      <div className={style.wrapper}>
        <div className={style.header}>Interests</div>
        <Field name="What are your hobbies?" isTextarea={true} />
      </div>
    </>
  );
};

export { SkillsInterests };
