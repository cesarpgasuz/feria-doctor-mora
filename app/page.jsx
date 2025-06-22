// import Reproductor from "@/components/Reproductor";
import { eventos } from "@/data";
import EventoItem from "@/components/UI/EventoItem";

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
            <EventoItem key={evento.id} evento={evento} />
          ))}
        </div>
      </section>



    </>




  );
}
