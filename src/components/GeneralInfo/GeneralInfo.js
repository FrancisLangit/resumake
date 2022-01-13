import { Field } from '../Field/Field';

import style from './GeneralInfo.module.scss';

const GeneralInfo = () => {
  return (
    <div className={style.container}>
      <Field className={style.name} name="Name" />
      <Field name="Email" />
      <Field name="Number" />
      <Field name="Location" />
    </div>
  );
};

export { GeneralInfo };
