"use client";
import { useState } from "react";
import Link from "next/link";
import { PHONE, PHONE_LINK, SERVICES } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-green-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span>📍 Intervention dans toute la Somme (80)</span>
          <a href={PHONE_LINK} className="font-bold hover:text-orange-300 transition-colors">
            📞 {PHONE}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-green-900 rounded-xl flex items-center justify-center">
            <span className="text-white text-2xl">🛡️</span>
          </div>
          <div>
            <div className="font-black text-green-900 text-xl leading-tight">ACTION NUISIBLE</div>
            <div className="text-orange-500 font-bold text-sm leading-tight">SOMME — Département 80</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-green-900 font-medium transition-colors">
            Accueil
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-gray-700 hover:text-green-900 font-medium transition-colors flex items-center gap-1">
              Nos Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl py-2 w-64 border border-gray-100">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-green-50 hover:text-green-900 transition-colors"
                  >
                    <span className="text-xl">{s.icon}</span>
                    <div>
                      <div className="font-semibold text-sm">{s.name}</div>
                      <div className="text-xs text-gray-500">{s.shortDesc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/professionnels" className="text-gray-700 hover:text-green-900 font-medium transition-colors">
            Professionnels
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-green-900 font-medium transition-colors">
            Blog & Conseils
          </Link>
          <Link href="/tarifs" className="text-gray-700 hover:text-green-900 font-medium transition-colors">
            Tarifs
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-900 font-medium transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA button */}
        <a href={PHONE_LINK} className="hidden lg:inline-flex btn-primary">
          📞 Appel gratuit
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-700 font-medium">
            Accueil
          </Link>
          <div className="font-semibold text-green-900 pt-2 pb-1">Nos Services</div>
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 py-1.5 pl-4 text-gray-600 hover:text-green-900"
            >
              <span>{s.icon}</span> {s.name}
            </Link>
          ))}
          <Link href="/professionnels" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-700 font-medium">
            Professionnels
          </Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-700 font-medium">
            Blog & Conseils
          </Link>
          <Link href="/tarifs" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-700 font-medium">
            Tarifs
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-700 font-medium">
            Contact
          </Link>
          <a href={PHONE_LINK} className="btn-primary w-full justify-center mt-4">
            📞 {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
