// import Reproductor from "@/components/Reproductor";
import Image from "next/image";
import { eventos } from "@/data";

export default function Home() {
  return (


    <>
      <header className="contenedor pt-12 pb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Feria Doctor Mora <span className="text-pink-700">2025</span></h1>
        <p>Grupos que estarán en la feria de Doctor Mora del <strong>20 al 29 de junio.</strong></p>
      </header>

      <section className="contenedor py-12">
        <div className="flex flex-col divide-y divide-slate-300">
          {eventos.map(evento => (
            <div key={evento.id} className="mb-8 py-8 flex gap-4">
              <div className="flex-shrink-0">
                <Image
                  src={evento.imagen}
                  alt={evento.artista}
                  width={200}
                  height={200}
                  className="rounded-lg shadow-lg object-cover size-[100px]"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-base">{evento.fecha}</h2>
                <p className="text-lg font-bold text-slate-900">{evento.artista}</p>
                <p className="text-sm text-slate-800 mt-auto">Precio: <strong>{evento.precio}</strong></p>
                {/* <Reproductor spotify={evento.spotify} /> */}
              </div>

            </div>
          ))}
        </div>
      </section>



    </>




  );
}
