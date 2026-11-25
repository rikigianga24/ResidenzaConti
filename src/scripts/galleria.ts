// Filtri della galleria: mostrano/nascondono le foto per categoria (data-area).
// Le foto nascoste (attributo hidden) restano fuori anche dalla lightbox (vedi lightbox.ts).
export function avviaFiltri(): void {
  const barra = document.querySelector<HTMLElement>('.filtri');
  const voci = Array.from(document.querySelectorAll<HTMLElement>('.masonry .mas'));
  if (!barra || voci.length === 0) return;
  barra.hidden = false;
  const bottoni = Array.from(barra.querySelectorAll<HTMLButtonElement>('.filtro'));

  const applica = (filtro: string) => {
    voci.forEach((v) => { v.hidden = filtro !== 'tutto' && v.dataset.area !== filtro; });
    bottoni.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtro === filtro)));
  };
  bottoni.forEach((b) => b.addEventListener('click', () => applica(b.dataset.filtro ?? 'tutto')));
}
