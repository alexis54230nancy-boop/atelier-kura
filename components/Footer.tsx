export default function Footer() {
  return (
    <footer className="px-4 pb-16 pt-10 text-white/60">
      <div className="mx-auto flex w-[min(1200px,100%)] flex-wrap justify-between gap-6 border-t border-white/10 pt-6 text-sm">
        <div>
          <strong className="text-white">Atelier Kūra</strong>
          <br />
          <span>Preview créative — landing page</span>
        </div>
        <div>
          <span>Instagram</span>
          <br />
          <span>Newsletter</span>
        </div>
        <div>
          <span>Confection limitée</span>
          <br />
          <span>Direction artistique minimale</span>
        </div>
      </div>
    </footer>
  );
}