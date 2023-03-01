import { useState } from "react";

function Letras(props) {



  function letraChutada(letter) {

    const newLetterSelected = [...props.letraEscolhida,letter]

    props.setLetraEscolhida(newLetterSelected);

    if(props.palavraSorteada.includes(letter)){
        acertou(letter)
      }

      else{
        errou(letter)
      }

      function acertou(letter){

        const palavraAtualizada = [...props.palavraSecreta]

         for(let i = 0; i < props.palavraSorteada.length; i++) {

         if (props.palavraSorteada[i] === letter) {

           palavraAtualizada[i] = letter;
          
         }
         }
        
        props.setPalavraSecreta(palavraAtualizada);

        if(!palavraAtualizada.includes(" _ ")){

          props.setCorPalavra("verde")
          props.setLetraEscolhida(props.alfabeto)
          fimJogo()

         }

        
       }
      

      function errou(letter){
        const chutou = props.chutes + 1;
        props.setChutes(chutou)
        if(chutou > 5)
      {
        props.setCorPalavra("vermelho")
        props.setLetraEscolhida(props.alfabeto)
        fimJogo()
      }
      }

      }     

      function fimJogo(){

        props.setPalavraSecreta(props.palavraSorteada)

      }


  return (
  <div class="letras">

    {
      props.alfabeto.map((letter) => <button data-test="letter" disabled={props.letraEscolhida.includes(letter)} onClick={ () => letraChutada(letter)} className={`botao ${props.habilitado ? "desabilitado" : ""} ${props.letraEscolhida.includes(letter) ? "desabilitado" : ""}`}> {letter} </button>) 
    }

    </div>
  );
}

export default Letras;
