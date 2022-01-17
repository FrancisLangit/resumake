import style from './Header.module.scss';

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>Resumake</div>
      <div>The professional one-pager, simplified.</div>
      <div className={style.links}>
        <a href="https://github.com/FrancisLangit/resumake">About</a> •{' '}
        <a href="https://github.com/FrancisLangit">Author</a> •{' '}
        <a href="https://github.com/FrancisLangit/resumake#usage">
          How to Use?
        </a>
      </div>
    </div>
  );
};

export { Header };
