export default function ImageCard({
  img1 = "/images/art1.svg",
  img2 = "/images/art2.svg",
}) {
  return (
    <>
      {/* =================================================================== */}
      {/*       Component de display exibir uma imagem responsiva */}
      <img
        src={img1}
        alt=""
        className="h-auto w-screen m-auto mt-10 mb-3 sm:hidden flex "
      />
      <img
        src={img2}
        alt=""
        className=" h-auto w-screen m-auto mt-7 mb-7 sm:flex hidden"
      />
      {/* =================================================================== */}
    </>
  );
}
