import Navbar from "../../components/Navbar";
import Story from "../../components/Story";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Story — Atelier Kūra",
  description:
    "Une esthétique du mouvement. Atelier Kūra naît d'un goût pour les silhouettes maîtrisées et les lignes précises.",
};

export default function StoryPage() {
  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />
      <div className="pt-20">
        <Story />
      </div>
      <Footer />
    </main>
  );
}
