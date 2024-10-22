import { useCatImage } from "../hooks/useCatImage";

export function Otro () {
    const { imageUrl } = useCatImage({fact: 'Random fact'})
    //console.log(imageUrl)

    return (
        <>
            {imageUrl && <img src={imageUrl} />}
        </>
    )
}