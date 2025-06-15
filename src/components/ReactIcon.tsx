import reactLogo from "../assets/react.svg";

export const ReactIcon = () => {
  return (
    <>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <div className="mt-4 text-center text-3xl font-bold">
        アイコンをクリックするとReactのサイトを開きます
      </div>
    </>
  );
};
