import React from 'react';
import Botao from '../../Botao';
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
//recebendo o evento do formulario
  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('formulario foi enviado')
  }

  return (
    <section className='container-formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
            <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite a url da sua imagem" />
            <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
            <Botao> Criar Card </Botao>
        </form>
    </section>
  )
}

export default Formulario;