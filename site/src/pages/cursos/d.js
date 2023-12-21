import AppBar from "@/components/topbar";
import CardInfo from "@/components/cardInfo";
import Titulo from "@/components/ComponentTitulo";
import { useEffect, useState } from "react";
import { api_config } from "@/models/api-connection";
import { useRouter } from "next/router";
import LoadScreen from "@/components/load";
import Head from "next/head";

export default function Home() {
  const r = useRouter();
  const { id } = r.query;
  const [data, setdata] = useState();
  useEffect(() => {
    if (!data && id) {
      try {
        api_config.get("/get-one?id=" + id).then((e) => {
          setdata(e);
          if (e.data.length < 1) {
            r.push("/404");
          }
        });
      } catch (error) {
        setdata({ status: false, data: [] });
        r.push("/404");
      }
    }
  }, [data, id]);
  return (
    <div className="flex flex-col">
      <Head>
        <title>Curso</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <AppBar state={[false, false, false]} />
      {data ? (
        <div className="m-auto w-8/12 xxxl:w-10/12">
          <CardInfo data={data.data[0]} />
          <Titulo name="CURSO COMPLETASSO" />
          <p className="text-2xl mt-3 mb-20">{data.data[0].desc}</p>
        </div>
      ) : (
        <LoadScreen />
      )}
    </div>
  );
}
