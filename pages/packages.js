import Head from 'next/head';
import styled from 'styled-components';


const CardContainer = styled.div`
  width: 30rem;
  height: 10rem;
  margin: 1rem;
  flex-basis: 45%;
  padding: 1rem;
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
  @media(max-width: 600px){
    width: 20rem;
    height: 10rem;
    margin: 0.5rem;
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
  @media(max-width: 600px){
    font-size: 1rem;
  }
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  
  a {
    color: #0070f3;
    text-decoration: none
  }
  @media(max-width: 600px) {
    font-size: 3rem;
    line-height: 1.15;
    width: 100%;
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    margin-left: 0.5rem;
  }
  
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Main = styled.main`
  width:100%;
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Card({title, description, link}) {
    return (
        <CardContainer>
            <a href={link} target="_blank">
                <TitleCard>{title}&rarr;</TitleCard>
                <DescriptionCard>{description}</DescriptionCard>
            </a>
        </CardContainer>
    )
}

export default function Packages() {
    return (
        <Container>
            <Head>
                <title>Clebson Farias</title>
            </Head>

            <Main>
                <Title>
                    Packages and Sites developed by <a href="https://github.com/clebsonpy">ClebsonPy</a>
                </Title>
                <Grid>
                    <Card title="HidroComp"
                          description="Package Python for hydrological data analysis"
                          link={"https://github.com/clebsonpy/hidrocomp"}
                    />
                    <Card title="Profile"
                          description="Repository of this website."
                          link={"https://github.com/clebsonpy/profile"}
                    />
                    <Card title="HydroPythonApi"
                          description="Package Python for obtaining hydrological data from the Brazilian"
                          link={"https://github.com/clebsonpy/HydroPythonApi"}
                    />
                </Grid>
            </Main>
            <Footer>
                <a
                    href="https://github.com/clebsonpy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by Clebsonpy
                </a>

            </Footer>
        </Container>
    )
}
