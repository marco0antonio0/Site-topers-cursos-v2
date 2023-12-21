import AppBar from "@/components/topbar";
import ImageCard from "@/components/ImageCard";
import GridComponents from "@/components/gridComponents";
import TemplateInformativo from "@/components/TemplateInformativo";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const r = useRouter();
  return (
    <div className="flex flex-col ">
      <Head>
        <title>Home</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <AppBar state={[true, false, false]} />
      <div className="m-auto w-8/12 xxxl:w-10/12 flex flex-col">
        <h1 className="text-5xl m-auto mt-52 font-Inter font-bold text-vermelho">
          Pagina não encontrada
        </h1>
        {/*===================================== */}
        {/*           botão de ex */}
        <div
          onClick={() => {
            r.push("/");
          }}
          className="m-auto mt-10 bg-roxo text-white px-14 py-5 shadow-2xl cursor-pointer active:scale-[1.05] select-none"
        >
          <span>Ir para pagina inicial</span>
        </div>
        {/*===================================== */}
      </div>
    </div>
  );
}
