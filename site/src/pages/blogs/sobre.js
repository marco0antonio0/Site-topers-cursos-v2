import AppBar from "@/components/topbar";
import ImageCard from "@/components/ImageCard";
import GridComponents from "@/components/gridComponents";
import TemplateInformativo from "@/components/TemplateInformativo";
import Titulo from "@/components/ComponentTitulo";
import SectionText from "@/components/sectionText";
import Head from "next/head";

export default function Home() {
  const textmarkdown = `

No contexto do ambiente acadêmico, um desafio foi apresentado ao estudante de front-end, Marco A. da S. Mesquita, por seu professor universitário. O desafio consistia em desenvolver um projeto que não só evidenciasse suas competências técnicas, mas também contribuísse significativamente para a comunidade educacional.
\\
\\
Comprometido com a excelência, Marco uniu forças com Alexsandro F. Nascimento, especialista em web design, e Beatriz S. Lisboa, uma profissional talentosa com conhecimentos aprofundados em design. A equipe concebeu a visão de uma plataforma educacional inovadora - o ToperCursos.
\\
\\
Na etapa subsequente, Marco, agora acompanhado por Jean A. Dias, especialista em modelagem de banco de dados, canalizou esforços para garantir a robustez da infraestrutura do projeto. A eficiência e a integridade do banco de dados tornaram-se elementos cruciais para o sucesso do ToperCursos.
\\
\\
A plataforma começou a tomar forma, integrando uma interface amigável, recursos avançados e um sistema de atualizações contínuas via API. Cada membro da equipe contribuiu com sua expertise única, enfrentando desafios técnicos com determinação e resiliência.
`;

  const creditos = [
    `## **Desenvolvedor**
- Marco A. da S. Mesquita
`,
    `## **Web Design**
- Alexsandro F. Nascimento
- Beatriz S. Lisboa
- Marco A. da S. Mesquita`,
    `## **Modelagem Banco de Dados**
- Marco A. da S. Mesquita
- Jean A. Dias    
`,
    `## **Documentação**
- Alexsandro F. Nascimento
- Jean A. Dias    
- Gabriel H. P. Maia    
`,
  ];
  return (
    <div className="flex flex-col">
      <Head>
        <title>Blog - sobre nos</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <AppBar state={[false, false, false]} />
      <div className="m-auto w-8/12 xxxl:w-10/12 mb-20">
        <Titulo name="Sobre nos" />
        <ImageCard />

        <SectionText text={textmarkdown} />
        <Titulo name="Participantes do projeto" />
        <ImageCard
          img1="/images/image_ilustrativa.svg"
          img2="/images/image_ilustrativa_responsive.svg"
        />
        <SectionText text={creditos[0]} />
        <br />
        <SectionText text={creditos[1]} />
        <br />
        <SectionText text={creditos[2]} />
        <br />
        <SectionText text={creditos[3]} />
      </div>
    </div>
  );
}
