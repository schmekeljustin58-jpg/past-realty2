import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-black mb-4">
              PAST <span className="text-[#E1251D]">+</span> REALTY
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ihr Partner für Verkauf & Vermietung in Basel
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-4">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-600 hover:text-[#E1251D] transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/immobilien"
                className="text-gray-600 hover:text-[#E1251D] transition-colors text-sm"
              >
                Immobilien
              </Link>
              <Link
                href="/kontakt"
                className="text-gray-600 hover:text-[#E1251D] transition-colors text-sm"
              >
                Kontakt
              </Link>
              <Link
                href="/impressum"
                className="text-gray-600 hover:text-[#E1251D] transition-colors text-sm"
              >
                Impressum
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-4">Kontakt</h4>
            <div className="text-gray-600 text-sm space-y-1">
              <p>Albina Past</p>
              <p>Landauerstrasse 23a</p>
              <p>CH-4058 Basel</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} PAST + REALTY. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
