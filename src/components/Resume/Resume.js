import { Education } from '../Education/Education';
import { Experience } from '../Experience/Experience';
import { GeneralInfo } from '../GeneralInfo/GeneralInfo';
import { Section } from '../Section/Section';
import { SkillsInterests } from '../SkillsInterests/SkillsInterests';

import style from './Resume.module.scss';

const Resume = () => {
  return (
    <div className={style.Resume}>
      <GeneralInfo />
      <Section form={<Experience />} />
      <Section form={<Education />} />
      <SkillsInterests />
    </div>
  );
};

export { Resume };
