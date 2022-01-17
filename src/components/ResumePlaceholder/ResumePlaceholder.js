import style from './ResumePlaceholder.module.scss';
import gif from '../../images/error.gif';

const ResumePlaceholder = () => {
  return (
    <div className={style.container}>
      <img className={style.gif} src={gif} alt="Funny GIF" />
      <div className={style.text}>Screen too small! Move to desktop?</div>
    </div>
  );
};

export { ResumePlaceholder };
