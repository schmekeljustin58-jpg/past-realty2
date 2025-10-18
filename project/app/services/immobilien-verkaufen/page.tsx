import Link from "next/link";
import { CheckCircle, TrendingUp, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Immobilien verkaufen – PAST + REALTY | Haus & Wohnung verkaufen Basel",
  description: "Verkaufen Sie Ihre Immobilie sicher, transparent und bestmöglich – mit PAST + REALTY als vertrauensvollem Partner. Bewertung, Vermarktung, Abwicklung in Basel und Umgebung.",
};

export default function VerkaufenPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
              Immobilien verkaufen
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Sie möchten Ihr Haus oder Ihre Wohnung verkaufen? PAST + REALTY begleitet Sie mit Marktkenntnis,
              Transparenz und einem starken Netzwerk vom ersten Gespräch bis zum Abschluss.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt">
                <Button
                  size="lg"
                  className="bg-[#E1251D] hover:bg-[#c41f17] text-white rounded-full px-8 w-full sm:w-auto"
                >
                  Jetzt Bewertung anfragen
                </Button>
              </Link>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8 w-full sm:w-auto"
                >
                  Zu unseren Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
            Warum mit PAST + REALTY verkaufen?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Marktgerechte Bewertung",
                description: "Realistische Preisfindung durch Vergleichswerte und fundierte Marktkenntnis.",
              },
              {
                title: "Professionelles Exposé",
                description: "Exzellenter erster Eindruck mit hochwertigen Fotos & überzeugenden Texten.",
              },
              {
                title: "Reichweite & Marketing",
                description: "Optimale Sichtbarkeit durch Onlineportale & unser Partnernetzwerk.",
              },
              {
                title: "Verhandlungsstärke",
                description: "Sichere Preisverhandlung & optimale Vertragskonditionen für Sie.",
              },
              {
                title: "Rechtliche Absicherung",
                description: "Professionelle Begleitung von Vertrag bis Notar – rechtssicher.",
              },
              {
                title: "Full-Service Betreuung",
                description: "Alles aus einer Hand – von Besichtigungen bis zur Schlüsselübergabe.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-3 mb-3">
                  <CheckCircle className="text-[#E1251D] mt-0.5 flex-shrink-0" size={20} />
                  <h3 className="font-semibold text-black">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
            Verkaufsprozess in 6 Schritten
          </h2>
          <ol className="grid gap-6 md:grid-cols-2">
            {[
              [
                "Vorbereitung",
                "Unterlagen zusammenstellen, Zustand dokumentieren, evtl. Renovationen planen.",
              ],
              [
                "Bewertung & Preisfindung",
                "Marktanalyse durchführen & vergleichbare Objekte prüfen.",
              ],
              [
                "Exposé & Vermarktung",
                "Professionelle Fotos, ansprechende Texte und zielgerichtete Inserate.",
              ],
              [
                "Besichtigungen & Verhandlungen",
                "Termine organisieren, Interessenten empfangen, Verhandlungen führen.",
              ],
              [
                "Vertragsvorbereitung",
                "Kaufvertrag aufsetzen, rechtliche Prüfung, Notarvorbereitung.",
              ],
              [
                "Abschluss & Übergabe",
                "Notartermin, Abnahmeprotokoll, Schlüsselübergabe an neue Eigentümer.",
              ],
            ].map(([title, description], index) => (
              <li key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-[#E1251D] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-black">{title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed ml-11">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            Tipps & Absicherung
          </h2>
          <div className="bg-gradient-to-br from-[#C3A557]/10 to-white rounded-2xl p-8 border border-[#C3A557]/20">
            <p className="text-gray-700 leading-relaxed">
              Nutzen Sie Bonitätsprüfungen, klare Fristen und rechtliche Absicherung für einen reibungslosen
              Verkaufsprozess. Wir beraten Sie umfassend zur Steuer- und Notarsituation und begleiten Sie kompetent
              durch alle Phasen des Immobilienverkaufs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            Vertrauen Sie auf Erfahrung
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-[#C3A557]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Quote className="text-[#C3A557]" size={24} />
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed italic mb-4">
                    "Mit PAST + REALTY haben wir unsere Immobilie schnell und zum besten Preis verkauft. Die
                    professionelle Begleitung und transparente Kommunikation haben uns überzeugt."
                  </p>
                  <p className="text-sm text-gray-500 font-medium">Zufriedene Kunden aus Basel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#E1251D]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-[#E1251D]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    Kostenlose Immobilienbewertung
                  </h3>
                  <p className="text-gray-600">
                    Erfahren Sie, was Ihre Immobilie wert ist – unverbindlich und professionell.
                  </p>
                </div>
              </div>
              <Link href="/kontakt">
                <Button
                  size="lg"
                  className="bg-[#E1251D] hover:bg-[#c41f17] text-white rounded-full px-8 whitespace-nowrap"
                >
                  Bewertung anfragen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-gradient-to-br from-[#E1251D] to-[#c41f17] rounded-3xl p-12 md:p-16 text-center text-white shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bereit zu verkaufen?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Fordern Sie jetzt Ihre kostenlose Bewertung an und starten Sie mit PAST + REALTY in eine stressfreie
              Verkaufsphase.
            </p>
            <Link href="/kontakt">
              <Button
                size="lg"
                className="bg-white text-[#E1251D] hover:bg-gray-100 rounded-full px-8"
              >
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
