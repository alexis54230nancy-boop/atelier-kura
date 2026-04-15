export default function Footer() {
  return (
    <footer className="px-4 pb-16 pt-10 text-white/60">
      <div className="mx-auto flex w-[min(1200px,100%)] flex-wrap justify-between gap-8 border-t border-white/10 pt-6 text-sm">
        <div>
          <strong className="text-white">Atelier Kūra</strong>
          <br />
          <span>Luxury fashion house landing page</span>
        </div>

        <div className="space-y-2">
          <a href="/contact" className="block hover:text-white">
            Contact
          </a>
          <a href="/livraison" className="block hover:text-white">
            Livraison
          </a>
          <a href="/retours" className="block hover:text-white">
            Retours
          </a>
        </div>

        <div className="space-y-2">
          <a href="/cgv" className="block hover:text-white">
            CGV
          </a>
          <a href="/mentions-legales" className="block hover:text-white">
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}