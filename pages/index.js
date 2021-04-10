import React from 'react';

import Head from "next/head";
// import Link from 'next/link'
import {SocialIcon} from 'react-social-icons';

import styled from 'styled-components';

// import foto from '../src/images/foto.JPG';

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.img`
  width: 400px;
  height: 400px;
  margin: 50px;
  // flex-basis: 45%;
  // padding: 1rem;
  // text-align: left;
  // color: inherit;
  text-decoration: none;
  border: 3px solid #eaeaea;
  border-radius: 100%;
  transition: color 0.15s ease, border-color 0.15s ease;
  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
  @media(max-width: 600px){
    width: 20rem;
    height: 20rem;
    margin: 0.5rem;
  }
 
`;

const Main = styled.main`
  width:100%;
  padding: 3rem 0;
  flex: 1;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const Skill = styled.p`
  margin: 0;
  padding: 0.5rem;
  font-size: 1.25rem;
  text-align: center;
  @media(max-width: 600px){
    font-size: 1rem;
  }
`;

const Description = styled.p`
  width: 60%;
  text-align: center;
  font-size: 15px;
  @media(max-width: 850px){
    font-size: 15px;
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 0.5rem;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  a {
    color: #0070f3;
    text-decoration: none
  }
  @media(max-width: 600px) {
    font-size: 3rem;
    line-height: 1.15;
    width: 100%;
    justify-content: center;
    text-align: center;
  }
`;

export default function Home() {
    return (
        <Container>
            <Head>
                <title>Clebson Farias</title>
            </Head>
            <Main>
                <CardContainer
                    src='https://avatars.githubusercontent.com/u/8902909?s=400&u=69fc71945b7f3b9ebae94bd080fcf5984a745cd3&v=4'
                    alt="Picture of the author"
                />
                <Title>Clebson Carvalho de Farias</Title>
                <Skill>Engenheiro de Dados e Desenvolvedor Backend | Django - FlowBr | CherryIT</Skill>
                <Description>Engenheiro Ambiental e Sanitarista (2018) e mestrando em Recursos Hídricos e Saneamento pela
                    Universidade Federal de Alagoas, graduando em Engenharia Civil pela Faculdade de Tecnologia de
                    Alagoas. Programador em Python com experiência em ferramentas de manipulação e visualização de 
                    dados como: NumPy, SciPy, Pandas, Geopandas, Matplotlib, Plotly, entre outras. Aplicação web com 
                    Django, RESTful API e controle de versões de projeto com Git e GitHub.
                </Description>
                <div style={{marginTop: "5rem"}}>
                    <SocialIcon url="https://www.linkedin.com/in/clebsonfarias/" target="_blank" style={{marginRight: "1rem"}}/>
                    <SocialIcon url="https://twitter.com/clebsonpy" target="_blank" style={{marginRight: "1rem"}}/>
                    <SocialIcon url="https://www.facebook.com/clebsonpy" target="_blank" style={{marginRight: "1rem"}}/>
                    <SocialIcon url="https://www.instagram.com/clebsonfarias/" target="_blank" style={{marginRight: "1rem"}}/>
                    <SocialIcon url="https://github.com/clebsonpy" target="_blank"/>
                    {/*<SocialIcon url="https://github.com/clebsonpy" target="_blank"/>*/}
                    {/*<SocialIcon url="https://twitter.com/jaketrent" target="_blank" style={{margin: "1rem"}}/>*/}
                </div>
            </Main>
        </Container>

    )
}
