'use client';
import Image from "next/image";
import { formatearFecha } from "@/utilities";



const EventoItem = ({ evento }) => {

    const { artista, fecha, precio, imagen, id } = evento;

    // 👉 Convierte fecha del evento al final del día
    function convertirFecha(fecha) {
        const [mes, dia, anioCorto] = fecha.split('/').map(Number);
        const anio = anioCorto < 100 ? 2000 + anioCorto : anioCorto;
        return new Date(anio, mes - 1, dia); // Ya no asignamos hora, usamos 00:00:00
    }

    // 👉 Normaliza fecha para comparar sin horas (sólo año, mes, día)
    function normalizarFechaSinHora(date) {
        const nueva = new Date(date);
        nueva.setHours(0, 0, 0, 0);
        return nueva;
    }

    const fechaEvento = normalizarFechaSinHora(convertirFecha(fecha));
    const fechaActual = normalizarFechaSinHora(new Date());

    const esEventoPasado = fechaEvento < fechaActual;

    return (
        <div key={id} className={` mb-8 py-8 flex gap-4`}>
            <div className="flex-shrink-0">
                <Image
                    src={imagen}
                    alt={artista}
                    width={200}
                    height={200}
                    className={`${esEventoPasado ? 'grayscale' : ''} rounded-lg shadow-lg object-cover size-[100px] md:size-[150px]`}
                />
            </div>
            <div className={`${esEventoPasado ? 'opacity-30 line-through' : ''} flex flex-col`}>
                <h2 className="text-base">{formatearFecha(fecha)}</h2>
                <p className="text-lg font-bold text-slate-900 md:text-4xl md:italic">{artista}</p>
                <p className="text-sm text-slate-800 mt-auto">Precio: <strong>{precio}</strong></p>
                {/* <Reproductor spotify={evento.spotify} /> */}
            </div>

        </div>
    )
}

export default EventoItem