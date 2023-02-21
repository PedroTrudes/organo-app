import React from 'react';
import ListaSuspensa from '../../ListaSuspensa';
import CampoTexto from '../CampoTexto';
import './FormularioColab.css';

const Formulario = () => {
  const times = [
    'Programação',
    'Front-end',
    'Data Science',
    'Mobile',
    'Inovação e Gestão'
  ]

  return (
    <section className='container-formulario'>
        <form>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto label="Nome" placeholder="Digite seu nome" />
            <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
            <CampoTexto label="Imagem" placeholder="Digite a url da sua imagem" />
            <ListaSuspensa label="Time" itens={times} />
        </form>
    </section>
  )
}

export default Formulario;