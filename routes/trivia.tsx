//Francisco Javier Gutierrez Gallego y Jorge Sanchez Lopez
import Respuesta from "../islands/respuesta.tsx";

type triviaApi = {
    question:string,
    answer:string
}
export default async function Home() {
      const API_KEY = Deno.env.get("API_KEY")
      if(!API_KEY)
        throw("Error en API Key")
      const url = "https://api.api-ninjas.com/v1/trivia"
      const data = await fetch(url,{headers:{"X-Api-Key": API_KEY}})

      if(data.status !== 200)
        throw("Error en API Ninja")
      const triviaDataArray = await data.json()
      const triviaData:triviaApi = triviaDataArray[0]
      return (
        <div class = "center">
          <h1>Trivia</h1>
          <h3>{triviaData.question}</h3>
          <p>
           <strong>Respuesta: </strong> {triviaData.answer}
          </p>
<Respuesta correcta={triviaData.answer}/>
        </div>
      );
  }
  