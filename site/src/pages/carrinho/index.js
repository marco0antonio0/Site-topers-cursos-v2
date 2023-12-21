import AppBar from "@/components/topbar";
import ImageCard from "@/components/ImageCard";
import GridComponents from "@/components/gridComponents";
import TemplateInformativo from "@/components/TemplateInformativo";
import Titulo from "@/components/ComponentTitulo";
import GridCursos from "@/components/gridCursos";
import { useEffect, useState } from "react";
import { api_config } from "@/models/api-connection";
import LoadScreen from "@/components/load";
import Head from "next/head";
import { CookieManager } from "@/controller/cokieesManager";
import { useRouter } from "next/router";

export default function Home() {
  const [data, setdata] = useState();
  const [hasdata, sethasdata] = useState(false);
  const cookieManager = new CookieManager();
  const r = useRouter();
  useEffect(() => {
    const d = cookieManager.getListaPedidos();
    try {
      if (d.length > 0) {
        setdata(d);
        sethasdata(true);
      } else {
        setdata([]);
        sethasdata(false);
      }
    } catch (error) {
      setdata([]);
      sethasdata(false);
    }
  }, []);
  return (
    <div className="flex flex-col">
      <Head>
        <title>Carrinho</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <AppBar state={[false, false, false, true]} />
      {data ? (
        <div className="m-auto w-8/12 xxxl:w-10/12 flex flex-col">
          {/* <ImageCard /> */}
          <Titulo name="Carrinho de compra" />
          <GridCursos data={data} carrinho={true} />
          {/*===================================== */}
          {/*           botão de ex */}
          <div
            onClick={() => {
              hasdata
                ? r.push("/carrinho/metodo-de-pagamento")
                : r.push("/cursos");
            }}
            className={`${
              !hasdata ? "bg-roxo" : " bg-green-400"
            } m-auto mt-10 text-white px-14 py-5 shadow-2xl cursor-pointer active:scale-[1.05] select-none mb-20`}
          >
            <span>
              {hasdata ? "Finalizar compra" : "Ir para cursos disponiveis"}
            </span>
          </div>
          {/*===================================== */}
        </div>
      ) : (
        <LoadScreen />
      )}
    </div>
  );
}
