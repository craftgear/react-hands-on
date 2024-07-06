export const Greeting = ({ names, children }) => {
  return (
    <>
      {names.map((name) => (
        <h1 key={name}>こんにちは {name}</h1>
      ))}
      {children}
    </>
  );
};
