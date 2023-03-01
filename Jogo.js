
import { useState } from "react";
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import palavras from "./palavras.js"
import Letras from "./Letras.js"



let palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)]

function Jogo() {

  const img = [forca0, forca1 ,forca2 ,forca3 ,forca4 ,forca5 ,forca6]
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const [palavraSecreta, setPalavraSecreta] = useState("")
  const [letraEscolhida, setLetraEscolhida] = useState(alfabeto)
  const [chutes, setChutes] = useState(0)
  const [corPalavra, setCorPalavra] = useState("preto")

  function iniciarJogo() {
    
    setPalavraSecreta(palavraSorteada.split("").map((char) => " _ " ))
    setLetraEscolhida([])
    setCorPalavra("preto")
    palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)]
    setChutes(0);


  }
  


  return (
    <>
    <div className="jogo">
      <div>
      <img data-test="game-image" src={img[chutes]} alt="forca" className="forcaimg"/>
      </div>
      <div className="conteudoDireita">
      <button data-test="choose-word" onClick={iniciarJogo} className="iniciar"> Escolher Palavra  </button>
      <h1 data-test="word" className={corPalavra}> {palavraSecreta} </h1>
      </div>
    </div>

    <Letras 
      setChutes = {setChutes}
      chutes = {chutes}
      letraEscolhida = {letraEscolhida} 
      setLetraEscolhida = {setLetraEscolhida} 
      alfabeto = {alfabeto}
      palavraSorteada = {palavraSorteada}
      palavraSecreta= {palavraSecreta}
      setPalavraSecreta = {setPalavraSecreta}
      setCorPalavra = {setCorPalavra}
      />
    </>
    
  )

}


export default Jogo;


