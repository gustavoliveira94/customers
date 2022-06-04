import React from 'react';

import { useCustomers } from 'hooks/useCustomers/useCustomers';

function App() {
  const { data } = useCustomers();

  return (
    <div>
      <header>
        <h1>Clientes</h1>
        <p>{data?.length ? data.map(({ name }) => name) : null}</p>
      </header>
    </div>
  );
}

export default App;
