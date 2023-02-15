import Banner from 'Componentes/Banner'
import PostModelo from 'Componentes/PostModelo'
import React from 'react'
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotosobremim from 'assets/sobre-mim-foto.jpeg'
import style from './sobremim.module.css'

export default function SobreMim () {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo={'Sobre Mim'}>
      <h3 className={style.subtitulo}>Ola me chamo Ilgner !</h3>
      <img
        src={fotosobremim}
        alt='Foto ilgner'
        className={style.fotoSobreMim}
      />
      <p className={style.paragrafo}>
        Ola , tudo bem ? Me chamo ilgner , tenho 30 anos , sou formado em
        Engenharia Elétrica .
      </p>
      <p className={style.paragrafo}>
        Sou graduando em Sistemas de informação pelo INFMG - Campus Pirapora .
        Estou me especializando no desenvolvimento web, para me tornar um
        desenvolvedor full stack. Meu objetivo é tornar-me habilidoso em
        desenvolver aplicações web, utilizando as mais recentes tecnologias e
        práticas de mercado.
      </p>
      <p className={style.paragrafo}>
        Como apreciador de tecnologia , desenvolvo circuitos eletrônicos
        baseados em sistemas embarcados , através de conhecimentos obtidos na
        graduação em engenharia , consigo abstrair as melhores tecnicas para
        construir tecnologias capazes de atender as necessidades diante de um
        problema .
      </p>

      <p className={style.paragrafo}>
        Me considero ágil e consistente em aprender uma nova linguagem e me
        adaptar à qualquer mudança, sempre apto a superar qualquer desafio!
      </p>
    </PostModelo>
  )
}
