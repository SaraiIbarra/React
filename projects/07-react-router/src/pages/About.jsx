import {navigate} from '../App.jsx'

export default function AboutPage () {
    return (
      <>
        <h1>About</h1>
        <div>
          <img src=''/>
          <p>Hola! Estoy creando un clon de React Router. </p>
        </div>      
        <button onClick={() => navigate('/')}>Ir a Home</button>
      </>
    )
}