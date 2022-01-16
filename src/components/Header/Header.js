import style from './Header.module.scss';

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>Resumake</div>
      <div className={style.subHeader}>
        The professional one-pager, simplified.
      </div>
      <small>About • Author • How to Use?</small>
    </div>
  );
};

export { Header };
