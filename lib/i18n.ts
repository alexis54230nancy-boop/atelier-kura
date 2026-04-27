export type Language = "fr" | "en" | "de";

export const defaultLanguage: Language = "fr";

export const languages = [
  { code: "fr", label: "Français", shortLabel: "FR", flag: "🇫🇷" },
  { code: "en", label: "English", shortLabel: "EN", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", shortLabel: "DE", flag: "🇩🇪" },
] as const;

export function isLanguage(value: unknown): value is Language {
  return value === "fr" || value === "en" || value === "de";
}

export const translations = {
  "nav.shop": {
    fr: "Shop",
    en: "Shop",
    de: "Shop",
  },
  "nav.capsule": {
    fr: "Capsule",
    en: "Capsule",
    de: "Capsule",
  },
  "nav.story": {
    fr: "Story",
    en: "Story",
    de: "Story",
  },
  "nav.fabrication": {
    fr: "Fabrication",
    en: "Craft",
    de: "Fertigung",
  },
  "nav.futures": {
    fr: "Futures",
    en: "Futures",
    de: "Zukunft",
  },
  "nav.waitlist": {
    fr: "Waitlist",
    en: "Waitlist",
    de: "Warteliste",
  },

  "language.label": {
    fr: "Langue",
    en: "Language",
    de: "Sprache",
  },

  "cart.button": {
    fr: "Panier",
    en: "Cart",
    de: "Warenkorb",
  },
  "cart.title": {
    fr: "Panier",
    en: "Cart",
    de: "Warenkorb",
  },
  "cart.close": {
    fr: "Fermer",
    en: "Close",
    de: "Schließen",
  },
  "cart.empty": {
    fr: "Votre panier est vide.",
    en: "Your cart is empty.",
    de: "Dein Warenkorb ist leer.",
  },
  "cart.size": {
    fr: "Taille",
    en: "Size",
    de: "Größe",
  },
  "cart.unit": {
    fr: "unité",
    en: "unit",
    de: "Stück",
  },
  "cart.remove": {
    fr: "Retirer",
    en: "Remove",
    de: "Entfernen",
  },
  "cart.total": {
    fr: "Total",
    en: "Total",
    de: "Gesamt",
  },
  "cart.shipping": {
    fr: "Livraison standard France / Luxembourg / Belgique calculée au checkout.",
    en: "Standard shipping for France / Luxembourg / Belgium calculated at checkout.",
    de: "Standardversand für Frankreich / Luxemburg / Belgien wird beim Checkout berechnet.",
  },
  "cart.checkout": {
    fr: "Payer avec Stripe",
    en: "Pay with Stripe",
    de: "Mit Stripe bezahlen",
  },
  "cart.redirecting": {
    fr: "Redirection...",
    en: "Redirecting...",
    de: "Weiterleitung...",
  },
  "cart.checkoutError": {
    fr: "Impossible de lancer le paiement.",
    en: "Unable to start payment.",
    de: "Zahlung konnte nicht gestartet werden.",
  },
  "cart.checkoutCrash": {
    fr: "Erreur pendant le checkout.",
    en: "Error during checkout.",
    de: "Fehler während des Checkouts.",
  },

  "hero.eyebrow": {
    fr: "French Limited Series",
    en: "French Limited Series",
    de: "Französische Limited Series",
  },
  "hero.titleLine1": {
    fr: "Le silence",
    en: "Silence",
    de: "Stille",
  },
  "hero.titleLine2": {
    fr: "comme",
    en: "as",
    de: "als",
  },
  "hero.titleLine3": {
    fr: "présence.",
    en: "presence.",
    de: "Präsenz.",
  },
  "hero.text": {
    fr: "Atelier Kūra conçoit des vêtements en séries limitées, pensés pour le mouvement, la retenue et la précision. Une garde-robe sombre, nette, structurée — entre intensité intérieure et élégance de trajectoire.",
    en: "Atelier Kūra designs limited-series garments shaped for movement, restraint and precision. A dark, sharp, structured wardrobe — between inner intensity and quiet trajectory.",
    de: "Atelier Kūra entwirft Kleidungsstücke in limitierten Serien, gedacht für Bewegung, Zurückhaltung und Präzision. Eine dunkle, klare, strukturierte Garderobe — zwischen innerer Intensität und stiller Richtung.",
  },
  "hero.primaryCta": {
    fr: "Découvrir Drop 01",
    en: "Discover Drop 01",
    de: "Drop 01 entdecken",
  },
  "hero.secondaryCta": {
    fr: "Rejoindre la waitlist",
    en: "Join the waitlist",
    de: "Zur Warteliste",
  },
  "hero.feature1": {
    fr: "Confection en séries limitées",
    en: "Limited-series production",
    de: "Fertigung in limitierten Serien",
  },
  "hero.feature2": {
    fr: "Matières sélectionnées",
    en: "Selected materials",
    de: "Ausgewählte Materialien",
  },
  "hero.feature3": {
    fr: "Direction artistique minimale",
    en: "Minimal art direction",
    de: "Minimale Art Direction",
  },
  "hero.cardTitle": {
    fr: "Drop 01",
    en: "Drop 01",
    de: "Drop 01",
  },
  "hero.cardText": {
    fr: "Hoodie lourd, tee graphite, silhouettes épurées. Une première capsule pensée pour durer, circuler et marquer sans parler fort.",
    en: "Heavy hoodie, graphite tee, refined silhouettes. A first capsule designed to last, move and leave a mark without speaking loudly.",
    de: "Schwerer Hoodie, Graphite Tee, reduzierte Silhouetten. Eine erste Capsule, gemacht um zu bleiben, sich zu bewegen und leise Eindruck zu hinterlassen.",
  },

  "home.materialEyebrow": {
    fr: "Matière",
    en: "Material",
    de: "Material",
  },
  "home.materialTitle": {
    fr: "Texture, tenue, gravité.",
    en: "Texture, hold, gravity.",
    de: "Textur, Halt, Gravität.",
  },
  "home.materialText": {
    fr: "La matière n’est pas un décor. Elle donne le rythme, la présence, la chute. Atelier Kūra travaille une esthétique dense, tactile, nette — avec des tons sobres, des volumes calmes et des finitions propres.",
    en: "Material is not decoration. It sets the rhythm, the presence, the fall. Atelier Kūra works with a dense, tactile and precise aesthetic — sober tones, quiet volumes and clean finishes.",
    de: "Material ist kein Dekor. Es bestimmt Rhythmus, Präsenz und Fall. Atelier Kūra arbeitet mit einer dichten, taktilen und präzisen Ästhetik — ruhige Töne, stille Volumen und saubere Finishes.",
  },
  "home.materialCard1": {
    fr: "Hoodie lourd",
    en: "Heavy hoodie",
    de: "Schwerer Hoodie",
  },
  "home.materialCard2": {
    fr: "Tee structuré",
    en: "Structured tee",
    de: "Strukturiertes T-Shirt",
  },
  "home.materialCard3": {
    fr: "Série limitée",
    en: "Limited series",
    de: "Limitierte Serie",
  },
  "home.materialVisual": {
    fr: "Étude matière",
    en: "Material study",
    de: "Materialstudie",
  },
  "home.collectionEyebrow": {
    fr: "Collection",
    en: "Collection",
    de: "Kollektion",
  },
  "home.collectionText": {
    fr: "Une capsule courte, pensée comme un premier manifeste. Peu de références, une exécution précise, une esthétique durable.",
    en: "A short capsule designed as a first manifesto. Few references, precise execution, lasting aesthetics.",
    de: "Eine kurze Capsule als erstes Manifest. Wenige Referenzen, präzise Ausführung, dauerhafte Ästhetik.",
  },

  "shop.eyebrow": {
    fr: "Boutique",
    en: "Shop",
    de: "Shop",
  },
  "shop.title": {
    fr: "Drop 01.",
    en: "Drop 01.",
    de: "Drop 01.",
  },
  "shop.intro": {
    fr: "Une première capsule pensée comme un manifeste : peu de pièces, une direction précise, une présence silencieuse.",
    en: "A first capsule designed as a manifesto: few pieces, a precise direction, a quiet presence.",
    de: "Eine erste Capsule als Manifest: wenige Stücke, eine klare Richtung, eine stille Präsenz.",
  },
  "shop.viewProduct": {
    fr: "Voir le produit",
    en: "View product",
    de: "Produkt ansehen",
  },

  "story.quote": {
    fr: "« Une élégance qui ne force pas l’attention. Une présence qui tient par la coupe, la matière, le calme. »",
    en: "“An elegance that does not force attention. A presence held by cut, material and calm.”",
    de: "„Eine Eleganz, die keine Aufmerksamkeit erzwingt. Eine Präsenz, getragen von Schnitt, Material und Ruhe.“",
  },
  "story.eyebrow": {
    fr: "Histoire",
    en: "Story",
    de: "Geschichte",
  },
  "story.title": {
    fr: "Une esthétique du mouvement.",
    en: "An aesthetic of movement.",
    de: "Eine Ästhetik der Bewegung.",
  },
  "story.text1": {
    fr: "Atelier Kūra naît d’un goût pour les silhouettes maîtrisées, les univers nocturnes, les lignes précises et les objets bien faits. Entre tension intérieure et retenue formelle, la marque avance sur une idée simple : faire peu, mais faire juste.",
    en: "Atelier Kūra comes from a taste for controlled silhouettes, nocturnal worlds, precise lines and well-made objects. Between inner tension and formal restraint, the brand moves with a simple idea: do less, but do it right.",
    de: "Atelier Kūra entsteht aus einer Vorliebe für kontrollierte Silhouetten, nächtliche Welten, präzise Linien und gut gemachte Objekte. Zwischen innerer Spannung und formaler Zurückhaltung folgt die Marke einer einfachen Idee: wenig tun, aber richtig.",
  },
  "story.text2": {
    fr: "Une garde-robe pensée pour durer, circuler, et habiter le quotidien avec intensité sans jamais crier.",
    en: "A wardrobe designed to last, to move, and to inhabit daily life with intensity without ever shouting.",
    de: "Eine Garderobe, entworfen um zu bleiben, sich zu bewegen und den Alltag mit Intensität zu begleiten, ohne je laut zu werden.",
  },

  "waitlist.eyebrow": {
    fr: "Waitlist",
    en: "Waitlist",
    de: "Warteliste",
  },
  "waitlist.title": {
    fr: "Accès anticipé au Drop 01.",
    en: "Early access to Drop 01.",
    de: "Früher Zugang zu Drop 01.",
  },
  "waitlist.text": {
    fr: "Rejoins la liste privée pour être averti avant l’ouverture.",
    en: "Join the private list to be notified before the opening.",
    de: "Tritt der privaten Liste bei, um vor dem Start informiert zu werden.",
  },
  "waitlist.placeholder": {
    fr: "Votre email",
    en: "Your email",
    de: "Deine E-Mail",
  },
  "waitlist.button": {
    fr: "Rejoindre",
    en: "Join",
    de: "Beitreten",
  },

  "footer.tagline": {
    fr: "Vêtements en séries limitées. Présence, précision, silence.",
    en: "Limited-series garments. Presence, precision, silence.",
    de: "Kleidung in limitierten Serien. Präsenz, Präzision, Stille.",
  },
  "footer.shop": {
    fr: "Boutique",
    en: "Shop",
    de: "Shop",
  },
  "footer.sizeGuide": {
    fr: "Guide des tailles",
    en: "Size guide",
    de: "Größenguide",
  },
  "footer.house": {
    fr: "Maison",
    en: "House",
    de: "Haus",
  },
  "footer.help": {
    fr: "Aide",
    en: "Help",
    de: "Hilfe",
  },
  "footer.shipping": {
    fr: "Livraison",
    en: "Shipping",
    de: "Versand",
  },
  "footer.returns": {
    fr: "Retours",
    en: "Returns",
    de: "Retouren",
  },
  "footer.terms": {
    fr: "CGV",
    en: "Terms",
    de: "AGB",
  },
  "footer.legal": {
    fr: "Mentions légales",
    en: "Legal notice",
    de: "Impressum",
  },

  "product.size": {
    fr: "Taille",
    en: "Size",
    de: "Größe",
  },
  "product.chooseSize": {
    fr: "Choisir une taille",
    en: "Choose a size",
    de: "Größe wählen",
  },
  "product.soldOut": {
    fr: "Sold out",
    en: "Sold out",
    de: "Ausverkauft",
  },
  "product.addToCart": {
    fr: "Ajouter au panier",
    en: "Add to cart",
    de: "In den Warenkorb",
  },
  "product.sizeSoldOut": {
    fr: "Cette taille est sold out.",
    en: "This size is sold out.",
    de: "Diese Größe ist ausverkauft.",
  },
  "product.remainingPrefix": {
    fr: "pièce(s) restante(s) en taille",
    en: "piece(s) left in size",
    de: "Stück übrig in Größe",
  },
  "product.composition": {
    fr: "Composition",
    en: "Composition",
    de: "Zusammensetzung",
  },
  "product.cut": {
    fr: "Coupe",
    en: "Fit",
    de: "Schnitt",
  },
  "product.details": {
    fr: "Détails",
    en: "Details",
    de: "Details",
  },
  "product.shipping": {
    fr: "Livraison",
    en: "Shipping",
    de: "Versand",
  },
  "product.shippingZones": {
    fr: "France, Luxembourg, Belgique.",
    en: "France, Luxembourg, Belgium.",
    de: "Frankreich, Luxemburg, Belgien.",
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function translate(language: Language, key: string): string {
  if (key in translations) {
    return translations[key as TranslationKey][language];
  }

  return key;
}