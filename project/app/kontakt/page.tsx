"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Ich freue mich auf Ihre Anfrage
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Ob Verkauf, Vermietung oder Suche – ich berate Sie persönlich und
            unverbindlich.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">
                Kontaktformular
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-black">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-black">
                    E-Mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-black">
                    Nachricht
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="mt-2 min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="bg-[#E1251D] hover:bg-[#c41f17] text-white rounded-full px-8 w-full"
                >
                  Absenden
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-6">
                Kontaktinformationen
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#E1251D]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#E1251D]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-2">Adresse</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Interkulturelle Brückenbauer (IBB)
                        <br />
                        Landauerstrasse 23a
                        <br />
                        CH-4058 Basel
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#C3A557]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#C3A557]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-2">E-Mail</h3>
                      <p className="text-gray-600">Auf Anfrage verfügbar</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-black" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-2">Telefon</h3>
                      <p className="text-gray-600">Auf Anfrage verfügbar</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-[#E1251D] to-[#c41f17] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Öffnungszeiten</h3>
                <p className="text-white/90 text-sm">
                  Termine nach Vereinbarung
                  <br />
                  Persönliche Beratung vor Ort oder digital möglich
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
