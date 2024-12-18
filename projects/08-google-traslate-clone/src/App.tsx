import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useReducer } from 'react'
import { Action, State } from './types'

// 1. Create a initialState
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

// 2. Create a reducer
function reducer(state: State, action: Action) {
  const {type} = action

  if(type === 'INTERCHANGE_LANGUAGES') {
    //generar un nuveo estado donde se intercambia el idioma
    return{
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if(type === 'SET_FROM_LANGUAGE') {
    return{
      ...state,
      fromLanguage: action.payload,
    }
  }

  if(type === 'SET_TO_LANGUAGE') {
    return{
      ...state,
      toLanguage: action.payload,
    }
  }

  if(type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if(type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }  

  return state
}

function App() {
  // 3. Usar el hook useReducer
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
  }, dispatch] = useReducer(reducer, initialState)

  console.log({fromLanguage})
  return (
    <div className='App'>
      <h1>Google Translate</h1>
      <button onClick={() => {
        dispatch({type: 'SET_FROM_LANGUAGE', payload: 'es'})
      }}>Cambiar a Español</button>
    </div>
      
  )
}

export default App
