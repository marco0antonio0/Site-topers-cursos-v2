import { useRouter } from "next/router";
import { useState } from "react";

export default function AppBar({ state = [false, false, false, false] }) {
  const [menu, setmenu] = useState(false);
  const r = useRouter();
  return (
    <>
      <div className="lg:h-24 w-mxw h-28 bg-white drop-shadow-md flex flex-row align-middle items-center content-center">
        {/*================================================ */}
        {/*           Logo */}
        <img
          src="/images/logo.svg"
          alt=""
          className="absolute h-16 w-auto m-auto ml-10 mr-0 sm:h-1/2"
        />
        {/*================================================ */}
        {/* Div de opções  */}
        <div className="flex flex-row  m-auto gap-20 xl:mr-20 md_y:hidden select-none">
          <h3
            onClick={() => r.push("/")}
            className={`font-Lalezar text-2xl pt-5  active:scale-[1.05] cursor-pointer ${
              !state[0] ? "text-gray-400" : null
            } `}
          >
            Home
          </h3>
          <h3
            onClick={() => r.push("/cursos")}
            className={`font-Lalezar text-2xl pt-5  active:scale-[1.05] cursor-pointer  ${
              !state[1] ? "text-gray-400" : null
            } `}
          >
            Cursos
          </h3>
          <h3
            onClick={() => r.push("/ajuda")}
            className={`font-Lalezar text-2xl pt-5  active:scale-[1.05] cursor-pointer  ${
              !state[2] ? "text-gray-400" : null
            } `}
          >
            Ajuda
          </h3>
          <h3
            onClick={() => r.push("/carrinho")}
            className={`font-Lalezar text-2xl pt-5  active:scale-[1.05] cursor-pointer  ${
              !state[3] ? "text-gray-400" : null
            } `}
          >
            Carrinho
          </h3>
        </div>
        {/*================================================ */}
        {/*                   DROPMENU */}
        {/*             Icon Menu Dropdown */}
        <img
          onClick={() => {
            setmenu(menu ? false : true);
          }}
          src="/images/Menu.svg"
          alt=""
          className="md_y:flex sm:right-10 h-2/3 hidden absolute pt-2 right-20 cursor-pointer active:scale-[1.05] select-none"
        />
        {/*==================================================================================== */}
        {/*                   DROPMENU */}
      </div>
      <div className="md_y:flex hidden  absolute  right-0 top-24">
        <div
          className={`flex-col h-auto w-auto select-none  bg-white rounded-lg mt-2 mr-5 p-10 pt-2 pb-4 drop-shadow-sm border-4 border-purple-300 ${
            !menu ? "hidden" : "flex"
          }`}
        >
          <h3
            onClick={() => r.push("/")}
            className={`font-Lalezar text-2xl pt-5 active:scale-[1.05] ${
              !state[0] ? "text-gray-400" : null
            } `}
          >
            Home
          </h3>
          <h3
            onClick={() => r.push("/cursos")}
            className={`font-Lalezar text-2xl pt-5 active:scale-[1.05]  ${
              !state[1] ? "text-gray-400" : null
            } `}
          >
            Cursos
          </h3>
          <h3
            onClick={() => r.push("/ajuda")}
            className={`font-Lalezar text-2xl pt-5 active:scale-[1.05]  ${
              !state[2] ? "text-gray-400" : null
            } `}
          >
            Ajuda
          </h3>
          <h3
            onClick={() => r.push("/carrinho")}
            className={`font-Lalezar text-2xl pt-5 active:scale-[1.05]  ${
              !state[3] ? "text-gray-400" : null
            } `}
          >
            Carrinho
          </h3>
        </div>
      </div>
    </>
  );
}
