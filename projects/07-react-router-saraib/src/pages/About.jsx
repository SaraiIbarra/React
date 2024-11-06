import { Link } from '../components/Link.jsx'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a la Home',
    description: 'Hola. Me llamo Sarai y estoy creando un clon de React Router.'
  },
  en: {
    title: 'About us',
    button: 'Go to Home',
    description: 'Hi! My name is Sarai and I am creating a clone of React Router.'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({routeParams}) {
  const i18n = useI18n(routeParams.lang ?? 'es')
    return (
      <>
        <h1>{i18n.title}</h1>
        <div>
          <img src=''/>
          <p>{i18n.description}</p>
        </div>      
        {/* <button onClick={() => navigate('/')}>Ir a Home</button> */}
        <Link to='/'>{i18n.button}</Link>
      </>
    )
}