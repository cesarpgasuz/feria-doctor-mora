export const formatearFecha = (fecha) => {
  const meses = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    const [mes, dia, anioCorto] = fecha.split('/');

    const anio = parseInt(anioCorto, 10) < 100 ? 2000 + parseInt(anioCorto, 10) : parseInt(anioCorto, 10)

    const mesIndex = parseInt(mes, 10) -1;

    const nombreMes = meses[mesIndex]

    return `${dia} de ${nombreMes} del ${anio}`
}