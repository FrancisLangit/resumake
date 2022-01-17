import { Field } from '../Field/Field';

import style from './GeneralInfo.module.scss';

const GeneralInfo = () => {
  return (
    <div className={style.container}>
      <div className={style.name}>
        <Field name="Name" />
      </div>
      <div className={style.details}>
        <Field name="Email" />
        <Field name="Number" />
        <Field name="Location" />
      </div>
    </div>
  );
};

export { GeneralInfo };
