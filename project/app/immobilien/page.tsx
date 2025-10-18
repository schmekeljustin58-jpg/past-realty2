import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Bed, Square } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export const metadata = {
  title: "Aktuelle Immobilien – PAST + REALTY",
  description:
    "Entdecken Sie aktuelle Wohnungen, Häuser und Grundstücke in der Schweiz mit PAST + REALTY – Ihr Partner für Immobilienverkauf und Vermietung.",
};

export default async function ImmobilienPage() {
  const { data: properties, error } = await supabase
    .from("properties_full")
    .select("slug, title, location, price, rooms, area_m2, image_url, status")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Aktuelle Immobilien
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Entdecken Sie eine Auswahl unserer aktuellen Objekte. Für weitere
            Informationen oder eine Besichtigung stehen wir Ihnen gerne zur
            Verfügung.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
              <p className="text-red-600">
                Fehler beim Laden der Immobilien. Bitte versuchen Sie es später erneut.
              </p>
            </div>
          )}

          {!properties || properties.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
              <p className="text-gray-600 text-lg">
                Derzeit sind keine Objekte verfügbar. Schauen Sie bald wieder vorbei oder{" "}
                <Link href="/kontakt" className="text-[#E1251D] hover:underline font-medium">
                  kontaktieren Sie uns
                </Link>{" "}
                für weitere Informationen.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <Link
                  key={property.slug}
                  href={`/immobilien/${property.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image_url || "/placeholder.jpg"}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {property.status && property.status !== "available" && (
                      <div className="absolute top-4 right-4 bg-[#C3A557] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {property.status === "sold" ? "Verkauft" : property.status === "reserved" ? "Reserviert" : property.status}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <MapPin size={16} className="mr-1" />
                      {property.location}
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">
                      {property.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      {property.rooms && (
                        <div className="flex items-center">
                          <Bed size={16} className="mr-1" />
                          {property.rooms} Zimmer
                        </div>
                      )}
                      {property.area_m2 && (
                        <div className="flex items-center">
                          <Square size={16} className="mr-1" />
                          {property.area_m2} m²
                        </div>
                      )}
                    </div>
                    {property.price ? (
                      <div className="text-2xl font-bold text-[#E1251D]">
                        CHF {Number(property.price).toLocaleString("de-CH")}
                      </div>
                    ) : (
                      <div className="text-lg text-gray-500">
                        Preis auf Anfrage
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
