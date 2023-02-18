import React from 'react';
import CampoTexto from '../CampoTexto';
import './FormularioColab.css';

const Formulario = () => {
  return (
    <section className='container-formulario'>
        <form>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto label="Nome" placeholder="Digite seu nome" />
            <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
            <CampoTexto label="Imagem" placeholder="Digite a url da sua imagem" />
        </form>
    </section>
  )
}

export default Formulario;