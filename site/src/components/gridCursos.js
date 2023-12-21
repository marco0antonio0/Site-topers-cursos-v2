import { CookieManager } from "@/controller/cokieesManager";
import { useRouter } from "next/router";

export default function GridCursos({ data, carrinho = false }) {
  const cookieManager = new CookieManager();
  return (
    <>
      <div className=" flex flex-row m-auto">
        <div className="flex-wrap  flex flex-row  m-auto pt-10 pl-14 xl:pl-7 lg:pl-2 sm:pl-0">
          {data.map((e, i) => {
            var d = cookieManager.getPedidoById(e.id);
            return (
              <div
                key={i}
                className={`${
                  d && carrinho == false ? "border-green-400" : " border-roxo"
                } bg-white h-60 w-96 rounded-3xl shadow-md ml-5 mb-5 border-2 flex flex-row lg:w-80 md_x:w-11/12 sm:flex-col sm:h-auto`}
              >
                {carrinho ? (
                  <CardItemCarrinho
                    name={e.nome}
                    link={e.images_link2}
                    id={e.id}
                  />
                ) : (
                  <CardItem
                    status={d ? true : false}
                    name={e.nome}
                    link={e.images_link2}
                    id={e.id}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function CardItem({
  status = false,
  name = "Ciencias da computação",
  link = "",
  id = "",
}) {
  const r = useRouter();
  return (
    <>
      <div className="w-4/5 m-auto sm:m-auto mx-0 md_x:h-auto md_x:w-auto md_x:ml-3 md_x:mr-5 ">
        <img src={link} alt="" className="select-none" />
      </div>
      <div className="flex flex-col w-mxw content-center ">
        {/* =============================================================== */}
        {/*                               titulo */}
        <h1
          className={`${
            status ? "text-green-400" : " text-roxo"
          } text-5xl font-League_Gothic mt-5 ml-5 `}
        >
          Curso
        </h1>
        {/* =============================================================== */}
        {/*                         nome do curso */}
        <h3
          className={`text-2xl font-League_Gothic mt-5 ml-5 ${
            status ? "text-green-400" : " text-roxo"
          }`}
        >
          {name}
        </h3>
        {/* =============================================================== */}
        {/*                       BTN - saiba mais */}
        <div
          //======================================
          //    ação acionada ao ser clicado
          onClick={() => {
            r.push("/cursos/d?id=" + id);
          }}
          className={`w-40 h-16 rounded-lg shadow-lg ${
            status ? "bg-green-300" : " bg-roxo"
          } flex flex-col mt-5 ml-5 mb-5 lg:w-32 active:scale-[1.05] select-none cursor-pointer`}
        >
          <span className="m-auto text-white">Saiba mais</span>
        </div>
        {/* =============================================================== */}
      </div>
    </>
  );
}

function CardItemCarrinho({
  name = "Ciencias da computação",
  link = "",
  id = "",
}) {
  const cookieManager = new CookieManager();
  const r = useRouter();
  return (
    <>
      <div className="flex flex-row">
        <div className="w-4/5 m-auto sm:m-auto mx-0 md_x:h-auto md_x:w-auto md_x:ml-3 md_x:mr-5">
          <img src={link} alt="" className="select-none" />
        </div>
        <div className="flex flex-col w-mxw content-center ">
          {/* =============================================================== */}
          {/*                               titulo */}
          <h1 className="text-5xl font-League_Gothic mt-5 ml-5 text-roxo">
            Curso
          </h1>
          {/* =============================================================== */}
          {/*                         nome do curso */}
          <h3 className=" text-2xl font-League_Gothic mt-5 ml-5 text-roxo">
            {name}
          </h3>
          {/* =============================================================== */}
          {/*                       BTN - remover */}
          <div
            onClick={() => {
              r.reload();
              cookieManager.deletePedido(id);
            }}
            className="w-40 h-16 rounded-lg shadow-lg bg-red-600 flex flex-col mt-5 ml-5 mb-5 lg:w-32 active:scale-[1.05] cursor-pointer"
          >
            <span className="m-auto text-white">remover</span>
          </div>
          {/* =============================================================== */}
        </div>
      </div>
    </>
  );
}
