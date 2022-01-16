import style from './FieldDisplay.module.scss';

const FieldDisplay = ({ text, setIsForm, displayStyle }) => {
  return (
    <div
      onClick={() => setIsForm(true)}
      className={style.FieldDisplay}
      style={displayStyle}
    >
      {text}
    </div>
  );
};

export { FieldDisplay };
