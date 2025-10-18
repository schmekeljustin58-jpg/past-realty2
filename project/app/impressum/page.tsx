import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Impressum
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  Angaben gemäss OR Art. 7
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p className="font-semibold">
                    Interkulturelle Brückenbauer (IBB)
                  </p>
                  <p>Landauerstrasse 23a</p>
                  <p>CH-4058 Basel</p>
                  <p>Schweiz</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  Unternehmensidentifikation
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>UID: CHE-291.489.038</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  Vertretungsberechtigte Person
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>Albina Past</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  Tätigkeitsbereich
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>
                    Immobilienverkauf und -vermietung
                    <br />
                    Immobilienberatung
                    <br />
                    Kaufbegleitung
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  Haftungsausschluss
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>
                    Der Autor übernimmt keinerlei Gewähr hinsichtlich der
                    inhaltlichen Richtigkeit, Genauigkeit, Aktualität,
                    Zuverlässigkeit und Vollständigkeit der Informationen.
                  </p>
                  <p>
                    Haftungsansprüche gegen den Autor wegen Schäden materieller
                    oder immaterieller Art, welche aus dem Zugriff oder der
                    Nutzung bzw. Nichtnutzung der veröffentlichten Informationen,
                    durch Missbrauch der Verbindung oder durch technische Störungen
                    entstanden sind, werden ausgeschlossen.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  Urheberrechte
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>
                    Die Urheber- und alle anderen Rechte an Inhalten, Bildern,
                    Fotos oder anderen Dateien auf der Website gehören
                    ausschliesslich PAST + REALTY oder den speziell genannten
                    Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die
                    schriftliche Zustimmung der Urheberrechtsträger im Voraus
                    einzuholen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
