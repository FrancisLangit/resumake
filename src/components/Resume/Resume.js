import { FormTemplated } from '../FormTemplated/FormTemplated';
import { GeneralInfo } from '../GeneralInfo/GeneralInfo';
import { Section } from '../Section/Section';
import { SkillsInterests } from '../SkillsInterests/SkillsInterests';

import style from './Resume.module.scss';

const Resume = () => {
  return (
    <div className={style.Resume}>
      <GeneralInfo />
      <Section
        header="Experience"
        form={
          <FormTemplated
            fieldName1="Company"
            fieldName2="Position"
            fieldName3="Start — End"
            fieldName4="Description"
          />
        }
      />
      <Section
        header="Education"
        form={
          <FormTemplated
            fieldName1="School"
            fieldName2="Degree"
            fieldName3="Graduation"
            fieldName4="Description"
          />
        }
      />
      <SkillsInterests />
    </div>
  );
};

export { Resume };
