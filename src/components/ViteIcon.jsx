import viteLogo from '/vite.svg';
import style from './ViteIcon.module.css';

export const ViteIcon = () => {
  return (
    <div className="flex flex-col place-items-center">
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <div className={style.blue}>
        アイコンをクリックするとViteのサイトを開きます
      </div>
    </div>
  );
};
