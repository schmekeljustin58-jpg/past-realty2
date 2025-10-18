import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Bed, Square, Calendar, Home } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  const { data: properties } = await supabase
    .from("properties_full")
    .select("slug");

  return properties?.map((property) => ({
    slug: property.slug,
  })) || [];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { data: property } = await supabase
    .from("properties_full")
    .select("title")
    .eq("slug", params.slug)
    .maybeSingle();

  return {
    title: property ? `${property.title} – PAST + REALTY` : "Immobilie – PAST + REALTY",
    description: property ? `Details zu ${property.title}` : "Immobiliendetails",
  };
}

export default async function PropertyDetail({ params }: { params: { slug: string } }) {
  const { data: property, error } = await supabase
    .from("properties_full")
    .select("*")
    .eq("slug", params.slug)
    .maybeSingle();

  if (error || !property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <section className="py-16 md:py-24 flex-grow">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
              <Home className="mx-auto mb-4 text-gray-400" size={48} />
              <h1 className="text-2xl font-bold text-black mb-4">
                Objekt nicht gefunden
              </h1>
              <p className="text-gray-600 mb-8">
                Die gesuchte Immobilie konnte nicht gefunden werden oder ist nicht mehr verfügbar.
              </p>
              <Link href="/immobilien">
                <Button
                  size="lg"
                  className="bg-[#E1251D] hover:bg-[#c41f17] text-white rounded-full px-8"
                >
                  Zurück zur Übersicht
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-8 md:py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <Link
            href="/immobilien"
            className="inline-flex items-center text-gray-600 hover:text-[#E1251D] transition-colors mb-6"
          >
            ← Zurück zur Übersicht
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-6">
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={property.image_url || "/placeholder.jpg"}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  {property.status && property.status !== "available" && (
                    <div className="absolute top-6 right-6 bg-[#C3A557] text-white px-4 py-2 rounded-full text-sm font-medium">
                      {property.status === "sold" ? "Verkauft" : property.status === "reserved" ? "Reserviert" : property.status}
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  {property.title}
                </h1>
                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin size={20} className="mr-2" />
                  <span className="text-lg">{property.location}</span>
                </div>

                {property.description && (
                  <div className="prose max-w-none">
                    <h2 className="text-xl font-bold text-black mb-4">Beschreibung</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {property.description}
                    </p>
                  </div>
                )}
              </div>

              {(property.features || property.equipment) && (
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold text-black mb-4">Ausstattung</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {property.features && (
                      <div>
                        <h3 className="font-semibold text-black mb-2">Merkmale</h3>
                        <p className="text-gray-700 text-sm">{property.features}</p>
                      </div>
                    )}
                    {property.equipment && (
                      <div>
                        <h3 className="font-semibold text-black mb-2">Ausstattung</h3>
                        <p className="text-gray-700 text-sm">{property.equipment}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 sticky top-24">
                {property.price ? (
                  <div className="text-3xl font-bold text-[#E1251D] mb-6">
                    CHF {Number(property.price).toLocaleString("de-CH")}
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-gray-700 mb-6">
                    Preis auf Anfrage
                  </div>
                )}

                <div className="space-y-4 mb-8">
                  {property.rooms && (
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div className="flex items-center text-gray-600">
                        <Bed size={20} className="mr-2" />
                        <span>Zimmer</span>
                      </div>
                      <span className="font-semibold text-black">{property.rooms}</span>
                    </div>
                  )}
                  {property.area_m2 && (
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div className="flex items-center text-gray-600">
                        <Square size={20} className="mr-2" />
                        <span>Wohnfläche</span>
                      </div>
                      <span className="font-semibold text-black">{property.area_m2} m²</span>
                    </div>
                  )}
                  {property.year_built && (
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={20} className="mr-2" />
                        <span>Baujahr</span>
                      </div>
                      <span className="font-semibold text-black">{property.year_built}</span>
                    </div>
                  )}
                  {property.property_type && (
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div className="flex items-center text-gray-600">
                        <Home size={20} className="mr-2" />
                        <span>Typ</span>
                      </div>
                      <span className="font-semibold text-black capitalize">{property.property_type}</span>
                    </div>
                  )}
                </div>

                <Link href="/kontakt" className="block">
                  <Button
                    size="lg"
                    className="w-full bg-[#E1251D] hover:bg-[#c41f17] text-white rounded-full"
                  >
                    Kontakt aufnehmen
                  </Button>
                </Link>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Wir beraten Sie gerne persönlich
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
