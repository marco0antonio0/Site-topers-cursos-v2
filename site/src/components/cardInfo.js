import { CookieManager } from "@/controller/cokieesManager";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CardInfo({ data }) {
  const [cookiesCheck, setcookiesCheck] = useState();
  const img = "/images/pontuacao.svg";
  const cookieManager = new CookieManager();

  const r = useRouter();

  useEffect(() => {
    const d = cookieManager.getPedidoById(data.id);
    if (d) {
      setcookiesCheck(d);
    } else {
      setcookiesCheck(null);
    }
  }, [setcookiesCheck]);

  function clickBTN() {
    cookieManager.addPedido(data);
    const d = cookieManager.getPedidoById(data.id);
    console.log(d);
    if (d) {
      setcookiesCheck(d);
    } else {
      setcookiesCheck(null);
    }
  }
  function removerCarrinho() {
    cookieManager.deletePedido(data.id);
    const d = cookieManager.getPedidoById(data.id);
    if (d) {
      setcookiesCheck(d);
    } else {
      setcookiesCheck(null);
    }
  }
  return (
    <>
      <div className="flex flex-row bg-cinzaPerson1 mt-10 rounded-3xl lg:flex-col">
        <div className="flex-col w-10/12 lg:flex hidden bg-white m-auto mt-5">
          <img
            src={data.images_link}
            alt=""
            className="w-1/2 m-auto mt-5 mb-0 "
          />
        </div>
        <div className="flex flex-col w-2/3 text-white pl-10 pr-10 lg:w-mxw">
          <h1 className="text-3xl mt-20 font-bold lg:mt-5 ">{data.nome}</h1>
          <p className="text-2xl mt-5">
            {data.desc_short} <br />
          </p>
          <span className="text-2xl mt-5 font-bold">
            Valor: R$ {data.valor}
          </span>
          <img src={img} alt="" className="h-10 m-auto ml-0 mt-5" />
          <div
            onClick={() => {
              cookiesCheck ? removerCarrinho() : clickBTN();
            }}
            className={` ${
              cookiesCheck ? "bg-red-500" : " bg-roxoPerson"
            }  h-16 w-52 flex flex-col my-5 mb-10 shadow-2xl cursor-pointer select-none active:scale-[1.05] sm:h-14 sm:w-40`}
          >
            <span className="m-auto font-League_Gothic text-3xl sm:text-2xl">
              {cookiesCheck ? "Remover do carrinho" : "Adiciona Carrinho"}
            </span>
          </div>
        </div>
        <img
          src={data.images_link}
          alt=""
          className="w-auto rounded-3xl border-r-4 border-b-4 border-cinzaPerson1 lg:hidden flex m-auto mr-0"
        />
      </div>
    </>
  );
}
