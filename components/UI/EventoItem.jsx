'use client';
import Image from "next/image";
import { formatearFecha } from "@/utilities";



const EventoItem = ({ evento }) => {

    const { artista, fecha, precio, imagen, id } = evento;

    const fechaActual = new Date()

    function convertirFecha(fecha) {
        const [mes, dia, anioCorto] = fecha.split('/').map(Number);
        const anio = anioCorto < 100 ? 2000 + anioCorto : anioCorto; // Asegura que el año sea de 4 dígitos
        return new Date(anio, mes - 1, dia, 14, 59, 0); // Los meses en JavaScript son 0-indexados}
    }

    const fechaEvento = convertirFecha(fecha);
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