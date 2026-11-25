// Lightbox della galleria: apre le foto in un <dialog> nativo (focus trap ed Esc li gestisce il browser).
// Senza JavaScript i link aprono la foto grande in una pagina a sé.
export function avviaLightbox(): void {
  const dialogo = document.querySelector<HTMLDialogElement>('dialog.lb');
  if (!dialogo || typeof dialogo.showModal !== 'function') return;
  const img = dialogo.querySelector<HTMLImageElement>('img')!;
  const didascalia = dialogo.querySelector<HTMLElement>('figcaption')!;
  const contatore = dialogo.querySelector<HTMLElement>('.lb-n')!;
  const tutti = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[data-lightbox]'));
  // solo le foto visibili (i filtri della galleria nascondono le altre)
  let link = tutti;
  const visibili = () => tutti.filter((a) => !a.closest('[hidden]'));
  let corrente = 0;
  let ultimoFocus: HTMLElement | null = null;

  const mostra = (i: number, animato: boolean) => {
    corrente = (i + link.length) % link.length;
    const a = link[corrente];
    const alt = a.querySelector('img')?.alt ?? '';
    const applica = () => {
      img.src = a.href;
      img.alt = alt;
      didascalia.textContent = alt;
      contatore.textContent = `${corrente + 1} ${di} ${link.length}`;
      img.classList.remove('cambia');
    };
    if (animato) {
      // dissolvenza breve tra una foto e l'altra
      img.classList.add('cambia');
      setTimeout(applica, 200);
    } else {
      applica();
    }
  };

  const di = dialogo.dataset.di ?? '/';
  tutti.forEach((a) => {
    a.addEventListener('click', (e) => {
      // clic normale: lightbox; clic con tasto modificatore: comportamento del browser
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      ultimoFocus = a;
      link = visibili();
      mostra(link.indexOf(a), false);
      dialogo.showModal();
    });
  });

  dialogo.querySelector('.lb-x')!.addEventListener('click', () => dialogo.close());
  dialogo.querySelector('.lb-p')!.addEventListener('click', () => mostra(corrente - 1, true));
  dialogo.querySelector('.lb-s')!.addEventListener('click', () => mostra(corrente + 1, true));
  // clic sullo sfondo (fuori da foto e pulsanti) chiude
  dialogo.addEventListener('click', (e) => { if (e.target === dialogo) dialogo.close(); });
  dialogo.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') mostra(corrente - 1, true);
    if (e.key === 'ArrowRight') mostra(corrente + 1, true);
  });
  dialogo.addEventListener('close', () => ultimoFocus?.focus());
}
