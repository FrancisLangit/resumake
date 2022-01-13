import { Education } from '../Education/Education';
import { Experience } from '../Experience/Experience';
import { Field } from '../Field/Field';
import { Section } from '../Section/Section';

import style from './Resume.module.scss';

const Resume = () => {
  return (
    <div className={style.Resume}>
      <Field name="Name" />
      <Field name="Email" />
      <Field name="Number" />
      <Section form={<Experience />} />
      <Section form={<Education />} />
      <Field name="Skills" isTextarea={true} />
      <Field name="Interests" isTextarea={true} />
    </div>
  );
};

export { Resume };
