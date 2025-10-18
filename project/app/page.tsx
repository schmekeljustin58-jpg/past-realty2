import Link from "next/link";
import { Building2, Key, Home, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              PAST + REALTY – Ihr Partner für Verkauf & Vermietung in der Schweiz
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Mit Erfahrung, Einfühlungsvermögen und einem starken Netzwerk
              begleitet Sie Albina Past beim Kauf, Verkauf oder der Vermietung
              Ihrer Immobiliein der Schweiz– kompetent, transparent und auf Augenhöhe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/immobilien">
                <Button
                  size="lg"
                  className="bg-[#E1251D] hover:bg-[#c41f17] text-white rounded-full px-8 w-full sm:w-auto"
                >
                  Aktuelle Immobilien ansehen
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#C3A557] text-[#C3A557] hover:bg-[#C3A557] hover:text-white rounded-full px-8 w-full sm:w-auto"
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Über PAST + REALTY
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Immobilien sind Vertrauenssache. Ich bin seit vielen
                Jahren im Schweizer Markt aktiv und begleite Kundinnen und
                Kunden persönlich – vom ersten Gespräch bis zum notariellen
                Abschluss.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ich arbeite mit Partnern wie Poni Immobilien und Swiss Life
                Immopulse zusammen und vermittelt Wohnungen, Häuser,
                Mehrfamilienhäuser, Gewerbeobjekte und Grundstücke.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#E1251D] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Langjährige Markterfahrung</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#E1251D] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Persönliche Betreuung</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#E1251D] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Starkes Partnernetzwerk</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#E1251D] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Transparente Prozesse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Unsere Leistungen
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#E1251D]/10 rounded-full flex items-center justify-center mb-6">
                <Building2 className="text-[#E1251D]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Immobilienverkauf
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Bewertung, Exposé, Vermarktung, Besichtigungen, Verhandlung und
                notarielle Begleitung bis zum erfolgreichen Abschluss.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#C3A557]/10 rounded-full flex items-center justify-center mb-6">
                <Key className="text-[#C3A557]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Vermietung</h3>
              <p className="text-gray-600 leading-relaxed">
                Inserat, Besichtigung, Bonitätsprüfung und professionelle
                Vertragsabwicklung für eine sichere Vermietung.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-6">
                <Home className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Kaufberatung
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Suche, Bewertung, Verhandlung und persönliche Begleitung bis zum
                erfolgreichen Kaufabschluss.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-gradient-to-br from-[#E1251D] to-[#c41f17] rounded-3xl p-12 md:p-16 text-center text-white shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ihre Immobilie verdient die beste Betreuung.
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Lassen Sie sich persönlich beraten – transparent, effizient und
              auf Augenhöhe.
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
