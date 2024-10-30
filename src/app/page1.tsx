import React, { useState } from 'react';

function Page1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Página 1</h1>
      <p>Esta es la primera pagina .</p>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default Page1;
