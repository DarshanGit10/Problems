import React, { useState } from 'react';

const hoc1 = (Component) => {
  const HOCComponent = () => {
    const [auth, setAuth] = useState(true);

    return (
      <div className="container">
        {auth ? <Component /> : <h1>Please Login</h1>}
      </div>
    );
  };

  return HOCComponent;
};

export default hoc1;
