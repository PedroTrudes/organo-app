import React, { useState } from 'react';
import Botao from '../../Botao';
import ListaSuspensa from '../../ListaSuspensa';
import CampoTexto from '../CampoTexto';
import './FormularioColab.css';

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

//recebendo o evento do formulario
  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time
    })
    console.log('formulario foi enviado',"(", nome, ",", cargo, ",", imagem, ")")
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className='container-formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)} />
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} />
            <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite a url da sua imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
            <ListaSuspensa obrigatorio={true} label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)} />
            <Botao> Criar Card </Botao>
        </form>
    </section>
  )
}

export default Formulario;