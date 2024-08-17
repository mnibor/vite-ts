import React from 'react'

export const Saludador: React.FunctionComponent<{name: string}> = ({name}): React.ReactElement => {
  return (
    <div>
      <h1>Hola {name}</h1>
      <h2>Props</h2>
    </div>
  )
}

export default Saludador;
