import style from './FieldDisplay.module.scss';

const FieldDisplay = ({ text, setIsForm }) => {
  return (
    <div className={style.FieldDisplay} onClick={() => setIsForm(true)}>
      {text}
    </div>
  );
};

export { FieldDisplay };
