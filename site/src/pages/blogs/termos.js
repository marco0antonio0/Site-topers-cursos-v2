import AppBar from "@/components/topbar";
import ImageCard from "@/components/ImageCard";
import GridComponents from "@/components/gridComponents";
import TemplateInformativo from "@/components/TemplateInformativo";
import Titulo from "@/components/ComponentTitulo";
import SectionText from "@/components/sectionText";
import Head from "next/head";

export default function Home() {
  const textmarkdown = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non augue id metus mattis ornare ac et ipsum. Nunc et orci eget enim varius euismod`;

  return (
    <div className="flex flex-col">
      <Head>
        <title>blog - sobre termos</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <AppBar state={[false, false, false]} />
      <div className="m-auto w-8/12 xxxl:w-10/12 mb-20">
        <Titulo name="Termos e Condições" />
        <ImageCard
          img1="/images/image_ajuda.svg"
          img2="/images/image_ajuda_responsive.svg"
        />
        <SectionText text={textmarkdown} />

        <Titulo name="Aspectos 1" />
        <SectionText text={textmarkdown} />

        <Titulo name="Aspectos 2" />
        <SectionText text={textmarkdown} />
      </div>
    </div>
  );
}
