import React from 'react';

export const Saludador: React.FunctionComponent<{
  children: React.ReactElement;
  name: string;
}> = ({ name, children }): React.ReactElement => {
  return (
    <div>
      <h1>Hola, {name}</h1>
      {children}
    </div>
  );
};

export default Saludador;
