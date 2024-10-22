import "./App.css"
import { useCatImage } from "./hooks/useCatImage.js";
import { useCatFat } from "./hooks/useCatFact.js";
//import { Otro } from "./Components/Otro";

export function App() {
    
    const {fact, refreshFact} = useCatFat()
    const {imageUrl} = useCatImage({fact})

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            {/* <head>
                <script src="http://localhost:8097"></script>
            </head> */}

            <h1>App de gatitos</h1>

            <button onClick={handleClick}>Get new fact</button>

            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
            {/* <Otro />  */}
        </main>
    )
}