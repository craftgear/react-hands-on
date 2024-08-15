import viteLogo from '/vite.svg';

export const ViteIcon = () => {
  return (
    <div className="flex flex-col place-items-center">
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <div>アイコンをクリックするとViteのサイトを開きます</div>
    </div>
  );
};
