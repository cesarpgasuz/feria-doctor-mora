

function Reproductor({spotify}) {
  if (!spotify) {
    return null; // Si no hay ID de Spotify, no renderizar nada
  }
  return (
    <iframe style={{borderRadius: '12px'}} src={`https://open.spotify.com/embed/track/${spotify}?utm_source=generator&theme=0`} width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  )
}

export default Reproductor