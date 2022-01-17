import style from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>MIT License</div>
      <div className={style.subHeader}>Copyright © 2022 • Francis Langit</div>
    </div>
  );
};

export { Footer };
