import AppBar from "@/components/topbar";
import ImageCard from "@/components/ImageCard";
import GridComponents from "@/components/gridComponents";
import TemplateInformativo from "@/components/TemplateInformativo";
import Titulo from "@/components/ComponentTitulo";
import GridPerguntas from "@/components/gridPerguntasFrequentes";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col mb-20">
      <Head>
        <title>Ajuda</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <AppBar state={[false, false, true]} />
      <div className="m-auto w-8/12 xxxl:w-10/12">
        <ImageCard
          img1="/images/image_ajuda.svg"
          img2="/images/image_ajuda_responsive.svg"
        />
        <Titulo name="Perguntas frequentes" />
        <GridPerguntas />
      </div>
    </div>
  );
}
