export default function Titulo({ name = "Cursos" }) {
  return (
    <>
      <div className="w-mxw h-auto mt-10 border-b pb-3 border-black">
        <h1 className="text-5xl font-League_Gothic text-roxo ">{name}</h1>
      </div>
    </>
  );
}
