import Link from "next/link";
import { CheckCircle, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Immobilien kaufen – PAST + REALTY",
  description: "Kaufberatung, Bewertung, Verhandlung und sichere Abwicklung – PAST + REALTY begleitet Sie persönlich beim Immobilienkauf.",
};

export default function KaufenPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
              Immobilien kaufen
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Sie suchen Ihr neues Zuhause oder eine solide Kapitalanlage? PAST + REALTY begleitet Sie persönlich –
              von der Suche über die Bewertung bis zur Schlüsselübergabe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/immobilien">
                <Button
                  size="lg"
                  className="bg-[#E1251D] hover:bg-[#c41f17] text-white rounded-full px-8 w-full sm:w-auto"
                >
                  Aktuelle Immobilien
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8 w-full sm:w-auto"
                >
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
            Warum mit PAST + REALTY kaufen?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Persönliche Begleitung",
                description: "Individuelle Suche und Beratung – keine Standardliste.",
              },
              {
                title: "Realistische Bewertung",
                description: "Marktkenntnis & Vergleichswerte für fundierte Entscheidungen.",
              },
              {
                title: "Starkes Netzwerk",
                description: "u. a. Poni Immobilien & Swiss Life Immopulse.",
              },
              {
                title: "Sichere Abwicklung",
                description: "Vom Reservieren bis zum Notartermin – strukturiert & transparent.",
              },
              {
                title: "Klare Kommunikation",
                description: "Alle Schritte und Kosten verständlich erklärt.",
              },
              {
                title: "Zeitersparnis",
                description: "Wir koordinieren Besichtigungen und Unterlagen.",
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
            So läuft der Kauf ab
          </h2>
          <ol className="grid gap-6 md:grid-cols-2">
            {[
              ["Bedarfsanalyse", "Lage, Budget, Wohnfläche, Zimmer, Zustand – wir definieren Ihr Profil."],
              ["Objektauswahl & Besichtigungen", "Kuratiere Vorschläge, Organisation der Termine."],
              ["Prüfung & Bewertung", "Unterlagen, Vergleichswerte, Risiken & Potenziale."],
              ["Verhandlung", "Preis, Bedingungen, Fristen – fair und faktenbasiert."],
              ["Kaufvorbereitung", "Reservation, Finanzierungsnachweis, Notarunterlagen."],
              ["Beurkundung & Übergabe", "Notartermin, Protokoll, Schlüsselübergabe."],
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
            Finanzierung & Absicherung
          </h2>
          <div className="bg-gradient-to-br from-[#C3A557]/10 to-white rounded-2xl p-8 border border-[#C3A557]/20">
            <p className="text-gray-700 leading-relaxed">
              Wir unterstützen bei der Finanzierungskoordination (Banken, Hypotheken, Unterlagen) und achten auf eine
              rechtssichere Abwicklung. Auf Wunsch empfehlen wir zuverlässige Partner für Finanzierung und Vorsorge.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#E1251D]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Home className="text-[#E1251D]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Aktuelle Objekte</h3>
                  <p className="text-gray-600">
                    Entdecken Sie unsere aktuellen Angebote – Wohnungen, Häuser und mehr.
                  </p>
                </div>
              </div>
              <Link href="/immobilien">
                <Button
                  size="lg"
                  className="bg-[#E1251D] hover:bg-[#c41f17] text-white rounded-full px-8 whitespace-nowrap"
                >
                  Zu den Immobilien
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
            Häufige Fragen
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              [
                "Welche Nebenkosten fallen beim Kauf an?",
                "Notar- und Grundbuchkosten, Handänderungssteuer (kantonal), ggf. Gebühren für Bewertungen/Finanzierung.",
              ],
              [
                "Wie sichere ich ein Objekt frühzeitig?",
                "Mit schriftlicher Reservation und fristgerechtem Finanzierungsnachweis.",
              ],
              [
                "Was ist ein Finanzierungsnachweis?",
                "Bestätigung Ihrer Bank über die gesicherte Finanzierung – oft Voraussetzung für den Kaufvertrag.",
              ],
              [
                "Begleiten Sie flexible Besichtigungen?",
                "Ja, nach Absprache organisieren wir auch Termine außerhalb üblicher Zeiten.",
              ],
              [
                "Unterstützen Sie bei Renovationen?",
                "Auf Wunsch vermitteln wir verlässliche Handwerksbetriebe und Kostenschätzungen.",
              ],
            ].map(([question, answer]) => (
              <div key={question} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-black mb-3">{question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-gradient-to-br from-[#E1251D] to-[#c41f17] rounded-3xl p-12 md:p-16 text-center text-white shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Gerne besprechen wir Ihr Suchprofil und zeigen passende Objekte.
            </p>
            <Link href="/kontakt">
              <Button
                size="lg"
                className="bg-white text-[#E1251D] hover:bg-gray-100 rounded-full px-8"
              >
                Jetzt Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
