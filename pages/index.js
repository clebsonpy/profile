import Head from 'next/head';
import styled from 'styled-components';

import styles from '../styles/Home.module.css';

const CardContainer = styled.div`
  width: 25rem;
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;

const TitleCard = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

const DescriptionCard = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`;

function Card({title, description, link}) {
    return (
        <CardContainer>
            <a href={link}>
                <TitleCard>{title} &rarr;</TitleCard>
                <DescriptionCard>{description}</DescriptionCard>
            </a>
        </CardContainer>
    )
}

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Clebson Farias</title>
            </Head>

            <main className={styles.main}>
                <Title>
                    Packages and Sites developed by <a href="https://github.com/clebsonpy" style={{color: "#0070f3", textDecoration: "none"}}>ClebsonPy</a>
                </Title>
                <div style={{display: "flex"}}>
                    <Card title="HidroComp"
                          description="Package Python for hydrological data analysis"
                          link={"https://github.com/clebsonpy/hidrocomp"}
                    />
                    <Card title="Profile"
                          description="Repositório deste site."
                          link={"https://github.com/clebsonpy/profile"}
                    />
                </div>

                    <Card title="HydroPythonApi"
                          description="Package Python for obtaining hydrological data from the Brazilian"
                          link={"https://github.com/clebsonpy/HydroPythonApi"}
                    />


            </main>

            <footer className={styles.footer}>
                <a
                    href="https://github.com/clebsonpy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by Clebsonpy
                </a>
            </footer>
        </div>
    )
}
