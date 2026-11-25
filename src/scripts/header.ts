// Testata della home: trasparente sopra la foto, avorio dopo il primo scroll.
// Aggiunge/toglie la classe "scrolled" (la transizione è in global.css).
const testata = document.querySelector<HTMLElement>('.hdr--hero');

if (testata) {
  // soglia: poco scroll, così la testata diventa leggibile appena la foto sale
  const SOGLIA = 40;
  let attesa = false;
  const aggiorna = () => {
    attesa = false;
    testata.classList.toggle('scrolled', window.scrollY > SOGLIA);
  };
  window.addEventListener('scroll', () => {
    if (!attesa) {
      attesa = true;
      requestAnimationFrame(aggiorna);
    }
  }, { passive: true });
  aggiorna();
}
