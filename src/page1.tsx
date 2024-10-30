import React, { useState } from 'react';

const Page1 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Welcome to page 1 </h1>
      <p>primera pagina de mi Dapp .</p>
      <p>conunter  {count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
};

export default Page1;
