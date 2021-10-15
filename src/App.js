import './App.css';
import React, { Component, useState } from 'react';
import Cliques from './compon/Cliques.js';

export default class componenteClasse extends Component {
    state = {
      mensagem: "React",
      mensagem2: "Classe :]"
    };

  render(){
      return(
              <div className="App"> 
                  <h1> Olá mundo {this.state.mensagem}</h1>
                  <h1> Esse é meu componente de {this.state.mensagem2}</h1>
                  <Cliques/>
              </div>

      )
  }

}

