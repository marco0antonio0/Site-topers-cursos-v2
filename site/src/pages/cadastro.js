import AppBar from "@/components/topbar";
import ImageCard from "@/components/ImageCard";
import GridComponents from "@/components/gridComponents";
import TemplateInformativo from "@/components/TemplateInformativo";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const r = useRouter();
  return (
    <div className="flex flex-col ">
      <Head>
        <title>Cadastro</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <AppBar state={[true, false, false]} />
      <div className="m-auto w-8/12 xxxl:w-10/12 flex flex-col ">
        <h1 className="font-League_Gothic text-7xl text-roxoPerson m-auto my-10 mb-5 lg:mb-0 lg:text-6xl sm:text-5xl">
          REGISTRO
        </h1>
        <ComponentEntrada nome={"EMAIL"} />
        <ComponentEntrada nome={"SENHA"} />
        <ComponentButtom nome={"CADASTRAR"} link={"/"} />
      </div>
    </div>
  );
}

function ComponentButtom({ nome, link }) {
  const r = useRouter();
  return (
    <>
      <div
        onClick={() => {
          r.push(link);
        }}
        className="cursor-pointer active:scale-[1.05] w-80 h-20 bg-roxoPerson text-white text-3xl font-League_Gothic flex flex-row m-auto mt-10 lg:w-64 sm:w-40 sm:h-16 sm:text-2xl "
      >
        <h1 className="m-auto">{nome}</h1>
      </div>
    </>
  );
}
function ComponentEntrada({ nome }) {
  return (
    <>
      <div className="flex flex-col w-8/12 m-auto mt-5 lg:w-10/12  sm:w-mxw">
        <h1 className="font-League_Gothic text-4xl  m-auto ml-10 mb-3 lg:text-3xl sm:text-2xl">
          {nome}
        </h1>
        <input
          className="m-auto mt-0 h-20 w-11/12 rounded-2xl shadow-md bg-slate-300 pl-10 lg:h-16"
          placeholder="Digite aqui"
        />
      </div>
    </>
  );
}
