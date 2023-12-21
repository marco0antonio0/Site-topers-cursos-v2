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

export default function Home() {
  const [data, setdata] = useState();
  useEffect(() => {
    if (!data) {
      api_config.get("/get-all").then((e) => {
        setdata(e);
      });
    }
  });
  return (
    <div className="flex flex-col">
      <Head>
        <title>Todos os curso</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <AppBar state={[false, true, false]} />
      {data ? (
        <div className="m-auto w-8/12 xxxl:w-10/12">
          {/* <ImageCard /> */}
          <Titulo />
          <GridCursos data={data.data} />
        </div>
      ) : (
        <LoadScreen />
      )}
    </div>
  );
}
