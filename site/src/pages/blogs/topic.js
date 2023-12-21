import AppBar from "@/components/topbar";
import ImageCard from "@/components/ImageCard";
import GridComponents from "@/components/gridComponents";
import TemplateInformativo from "@/components/TemplateInformativo";
import Titulo from "@/components/ComponentTitulo";
import SectionText from "@/components/sectionText";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const r = useRouter();
  const { d } = r.query;
  const textmarkdown = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non augue id metus mattis ornare ac et ipsum. Nunc et orci eget enim varius euismod`;

  return (
    <div className="flex flex-col">
      <Head>
        <title>Blog - {d ? d : "site"}</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <AppBar state={[false, false, false]} />
      <div className="m-auto w-8/12 xxxl:w-10/12 mb-20">
        <Titulo name={d ? d : "site"} />
        <ImageCard
          img1="/images/image_ajuda.svg"
          img2="/images/image_ajuda_responsive.svg"
        />
        <SectionText text={textmarkdown} />

        <Titulo name="Aspectos I" />
        <SectionText text={textmarkdown} />

        <Titulo name="Aspectos II" />
        <SectionText text={textmarkdown} />
      </div>
    </div>
  );
}
