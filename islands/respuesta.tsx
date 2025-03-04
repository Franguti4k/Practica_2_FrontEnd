import {useSignal} from "@preact/signals"
export default function Respuesta (props:{
    correcta: string
}) {
    const respuesta = useSignal("")


    return (
        <div>
            <div>
                <input type="text"
                sizes= "15"
                placeholder= "Escribe tu respuesta: "
                value={respuesta.value}
                name="respuesta"
                id= "respuesta"
                onChange={(e) => {
                    respuesta.value = e.currentTarget.value
                }}
                ></input>
                
            </div>
            <div>
                <button
                    onClick={() => {
                        if ( props.correcta.toLowerCase() === respuesta.value){
                            window.location.href = "/acierto"
                        } else {
                            window.location.href = "/fallo"
                        }
                    }}
                >
                    Enviar
                </button>
            </div>
        </div>
    )
}