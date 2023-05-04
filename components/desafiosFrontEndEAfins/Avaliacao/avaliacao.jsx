"use client";
import React, { useState } from "react";
import "./style.css";

/*<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet">*/

function Avaliacao() {
  const [avaliacao, setAvaliacao] = useState();
  const [classStyle, setClassStyle] = useState("container");
  const [classStyleOpsValidate, setClassStyleOpsValidate] =
    useState("container-none");
  const [validate, setValidate] = useState("container-none");

  const nota = (event) => {

    setAvaliacao(event.target.value);

  };

  const sendNote = () => {
    setClassStyle("container-none");
    if (avaliacao === undefined) {
      setClassStyleOpsValidate("container");
      return;
    }
    setValidate("container");
  };
  const haddleBackNote = () => {
    setClassStyle("container");
    setClassStyleOpsValidate("container-none");
  };

  const IconSvg = () => {
    return (
      <div className="container-icon">
        <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="hsl(25, 97%, 53%)"
          />
        </svg>
      </div>
    );
  };
  const BackNote = () => {
    return (
      <div className={classStyleOpsValidate}>
        <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="hsl(25, 97%, 53%)"
          />
        </svg>
        <h1> Ops...</h1>
        <p>
          Por favor, clique em uma das classificações da tela anterior para que
          possa enviar sua nota!
        </p>
        <button className="button-cta" onClick={haddleBackNote}>
          Voltar
        </button>
      </div>
    );
  };
  const FinishSection = () => {
    return (
      <div className={validate}>
        <IconSvg />
        <p> Você selecionou {avaliacao}</p>
        <h1> Muito Obrigado!</h1>
        <p>
          Agradecemos gentilmente por você ter dado sua classificação para nós.
          Lembre-se: qualquer coisa que possamos ajudar, entre em contato!
        </p>
        <button
          className="button-cta"
          onClick={() => {
            window.location.reload(true);
          }}
        >
          Sair
        </button>
      </div>
    );
  };
  return (
    <div className="">
      <div className="container-global">
        <div className={classStyle}>
          <IconSvg />
          <h1> Como nos saímos?</h1>
          <p>
            Por favor, nos ajude a melhorar classificando nosso suporte. Estamos
            sempre buscando melhorar nosso trabalho, nos classifique!
          </p>
          <div className="container-button">
            <label htmlFor="input">
              <input type="radio" value="1" name="input" onChange={nota} />
              <span>1</span>
            </label>
            <label htmlFor="input">
              <input type="radio" value="2" name="input" onChange={nota}/>
              <span>2</span>
            </label>
            <label htmlFor="input">
              <input type="radio" value="3" name="input" onChange={nota}/>
              <span>3</span>
            </label>
            <label htmlFor="input">
              <input type="radio" value="4" name="input" onChange={nota}/>
              <span>4</span>
            </label>
            <label htmlFor="input">
              <input type="radio" value="5" name="input" onChange={nota}/>
              <span>5</span>
            </label>
          </div>
          <button className="button-cta" onClick={sendNote}>
            Enviar
          </button>
        </div>
        <BackNote />
        <FinishSection />
      </div>
    </div>
  );
}

export default Avaliacao;
