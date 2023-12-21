import AppBar from "@/components/topbar";
import ImageCard from "@/components/ImageCard";
import GridComponents from "@/components/gridComponents";
import TemplateInformativo from "@/components/TemplateInformativo";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Head>
        <title>Home</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <AppBar state={[true, false, false]} />
      <div className="m-auto w-8/12 xxxl:w-5/12 xxl:w-6/12 xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12">
        <ImageCard />
        <GridComponents />
        <TemplateInformativo />
      </div>
    </div>
  );
}
