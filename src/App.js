import React, {useState} from "react";

const App = () => {
  const [textoOriginal, setTextoOriginal] = useState('')
  const [textoInvertido, setTextoInvertido] = useState('')

  const textoAction = (event) => {
    setTextoOriginal(event.target.value)
  }

  const clickAction = () => {
    const invertir = textoOriginal.split('').reverse().join('')
    setTextoInvertido(invertir)
  }

  return (
    <div>
      <h1>Invertir texto</h1>
      <input
        type="text"
        placeholder="Ingresar texto"
        value={textoOriginal}
        onChange={textoAction}
      />
      <button onClick={clickAction}>Invertir</button>
      <h2>Texto invertido</h2>
      <input
        type="text"
        readOnly
        value={textoInvertido}
      />
    </div>
  )
}

export default App
