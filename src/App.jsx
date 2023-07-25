import Title from './components/Title'
import Counter from './components/Counter'
import './App.css'
import Fundo from './assets/gato_de_botas.jpg'
import useCounterdown from './hooks/useCounterdown'


function App() {
  const [day, hour, minute, second] = useCounterdown("Jan 1, 2024 00:00:00")

  return (
    <div className="App" style={{backgroundImage: `url(${Fundo})`}}>
      <div className="container">
        <Title title="Contagem regressiva 2024"/>
        <div className="countdown-container">
          <Counter title="Dias" number={day}/>
          <Counter title="Horas" number={hour}/>
          <Counter title="Minutos" number={minute}/>
          <Counter title="Segundos" number={second}/>
        </div>
      </div>
      </div>
  )
}

export default App
