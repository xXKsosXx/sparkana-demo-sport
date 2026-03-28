import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Disciplines from "@/components/Disciplines";
import Planning from "@/components/Planning";
import Tarifs from "@/components/Tarifs";
import Resultats from "@/components/Resultats";
import Coaches from "@/components/Coaches";
import Temoignages from "@/components/Temoignages";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Disciplines />
        <Planning />
        <Tarifs />
        <Resultats />
        <Coaches />
        <Temoignages />
      </main>
      <Footer />
    </>
  );
}
