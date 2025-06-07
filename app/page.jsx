import Reproductor from "@/components/Reproductor";
import { eventos } from "@/data";

export default function Home() {
  return (


    <>
      <header className="contenedor pt-28 pb-12">
        <h1 className="text-5xl font-bold text-slate-900 mb-3">Feria Doctor Mora 2025</h1>
      <p>Grupos que estarán en la feria de Doctor Mora del <strong>20 al 29 de junio.</strong></p>
      </header>

      <section className="contenedor py-12">
        <div className="flex flex-col divide-y divide-slate-300">
        {eventos.map(evento => (
          <div key={evento.id} className="mb-8 py-4">
            <h2 className="text-lg">{evento.fecha}</h2>
            <p className="text-2xl font-bold text-slate-900">{evento.artista}</p>
            <p className="text-sm text-slate-800">Precio: 💶 {evento.precio}</p>
            <Reproductor spotify={evento.spotify} />
          </div>
        ))}
      </div>
      </section>

      
    
    </>

    


  );
}
