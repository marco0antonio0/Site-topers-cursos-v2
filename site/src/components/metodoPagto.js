import { CookieManager } from "@/controller/cokieesManager";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Titulo from "./ComponentTitulo";

export default function ScreenMetodoPagto({ data }) {
  const [cookiesCheck, setcookiesCheck] = useState();
  const [valortotal, setvalortotal] = useState();
  const img = "/images/pontuacao.svg";
  const img2 = "/images/image_cursos.svg";
  const img3 = "/images/formadepagamento.png";
  const cookieManager = new CookieManager();

  const r = useRouter();
  useEffect(() => {
    var temp = cookieManager.getListaPedidos();
    setcookiesCheck(temp);
    var vt = 0;
    temp.map((e) => {
      vt += parseFloat(e.valor);
    });
    setvalortotal(vt);
  }, []);
  return (
    <>
      <div className="flex flex-row bg-cinzaPerson1 mt-10 rounded-3xl lg:flex-col">
        <div className="flex-col w-10/12 lg:flex hidden bg-white m-auto mt-5">
          <img src={img2} alt="" className="w-1/2 m-auto mt-5 mb-0 " />
        </div>
        <div className="flex flex-col w-2/3 text-white pl-10 pr-10 lg:w-mxw">
          <h1 className="text-3xl mt-20 font-bold lg:mt-5 ">
            Finalizando compra de cursos <br />
            Forma de pagamento
          </h1>
          <img src={img3} alt="" className="my-5" />
          <h1 className="text-3xl mb-10 font-bold lg:mt-5 ">
            Detalhes da compra cursos: <br />
            <br />
            --------------------------------------
            {cookiesCheck
              ? cookiesCheck.map((e) => (
                  <>
                    {" "}
                    <br />
                    {e.nome}
                    <br />
                    valor: {e.valor}
                    <br />
                    --------------------------------------
                  </>
                ))
              : null}
            <br />
            Valor total: R$: {valortotal ? valortotal : "0"}
            <br />
            --------------------------------------
          </h1>
        </div>
        <img
          src={img2}
          alt=""
          className="w-auto rounded-3xl border-r-4 border-b-4 border-cinzaPerson1 lg:hidden flex m-auto mr-0"
        />
      </div>
      <div className="bg-bg-cinzaPerson1 h-auto mt-5 flex flex-col">
        <h1 className="text-3xl mt-20 font-bold lg:mt-5 text-gray-500 md:text-2xl">
          Nome no cartão
        </h1>
        <input
          placeholder="digite"
          type="text"
          className="w-5/12 h-16 border-2 border-gray-500 my-5 lg:w-8/12 md:mb-0 md:mt-3 md:w-10/12 md:h-14 sm:w12/12 pl-6"
        />
        {/* ======================================================================== */}
        <h1 className="text-3xl mt-0 font-bold lg:mt-5 text-gray-500 md:text-2xl">
          CPF/CNPJ
        </h1>
        <input
          placeholder="digite"
          type="number"
          className="w-5/12 h-16 border-2 border-gray-500 my-5 md:mb-0 md:mt-3 lg:w-8/12 md:w-10/12 md:h-14 sm:w12/12 pl-6"
        />
        {/* ======================================================================== */}
        <h1 className="text-3xl mt-0 font-bold lg:mt-5 text-gray-500 md:text-2xl">
          Numero do cartão
        </h1>
        <input
          placeholder="digite"
          type="number"
          className="w-5/12 h-16 border-2 border-gray-500 my-5 md:mb-0 md:mt-3 lg:w-8/12 md:w-10/12 md:h-14 sm:w12/12 pl-6"
        />
        {/* ======================================================================== */}
        <h1 className="text-3xl mt-0 font-bold lg:mt-5 text-gray-500 md:text-2xl">
          Prazo
        </h1>
        <input
          placeholder="digite"
          type="number"
          className="w-5/12 h-16 border-2 border-gray-500 my-5 md:mb-0 md:mt-3 lg:w-8/12 md:w-10/12 md:h-14 sm:w12/12 pl-6"
        />
        {/* ======================================================================== */}
        <h1 className="text-3xl mt-0 font-bold lg:mt-5  text-gray-500 md:text-2xl">
          CVC/CVV
        </h1>
        <input
          placeholder="digite"
          type="number"
          className="w-5/12 h-16 border-2 border-gray-500 my-5 md:mb-0 md:mt-3 lg:w-8/12 md:w-10/12 md:h-14 sm:w12/12 pl-6"
        />
        {/* ======================================================================== */}
      </div>
      <div
        onClick={() => {
          r.push("/carrinho/compra-concluida");
        }}
        className={`  bg-green-500 text-white  h-16 w-52 flex flex-col my-5 mb-10 shadow-2xl cursor-pointer select-none active:scale-[1.05] sm:h-14 sm:w-40`}
      >
        <span className="m-auto font-League_Gothic text-3xl sm:text-2xl">
          Finalizar compra
        </span>
      </div>
    </>
  );
}
