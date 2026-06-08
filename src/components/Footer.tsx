import Link from "next/link";
import { PHONE, PHONE_LINK, EMAIL, ADDRESS, SERVICES, CERTIFICATIONS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-xl">🛡️</span>
            </div>
            <div>
              <div className="font-black text-white text-lg leading-tight">ACTION NUISIBLE 80</div>
              <div className="text-orange-400 text-xs">Somme — Département 80</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Expert en lutte contre les nuisibles dans la Somme. Certifié Certibiocide & Certiphyto.
            Intervention rapide chez particuliers et professionnels.
          </p>
          <div className="space-y-2 text-sm">
            <a href={PHONE_LINK} className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold">
              📞 {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-gray-400 hover:text-white">
              ✉️ {EMAIL}
            </a>
            <p className="flex items-center gap-2 text-gray-400">📍 {ADDRESS}</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-white mb-4 text-lg">Nos Interventions</h3>
          <ul className="space-y-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center gap-2"
                >
                  <span>{s.icon}</span> {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful links */}
        <div>
          <h3 className="font-bold text-white mb-4 text-lg">Liens Utiles</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/professionnels" className="text-gray-400 hover:text-orange-400 transition-colors">
                Espace Professionnels
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-400 hover:text-orange-400 transition-colors">
                Blog & Conseils
              </Link>
            </li>
            <li>
              <Link href="/tarifs" className="text-gray-400 hover:text-orange-400 transition-colors">
                Nos Tarifs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">
                Demander un devis
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="text-gray-400 hover:text-orange-400 transition-colors">
                Mentions légales
              </Link>
            </li>
          </ul>

          <h3 className="font-bold text-white mb-3 mt-6 text-lg">Zones d'intervention</h3>
          <p className="text-gray-400 text-sm">
            Amiens · Abbeville · Péronne · Montdidier · Doullens · Albert · Rue · Friville · et toute la Somme
          </p>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="font-bold text-white mb-4 text-lg">Nos Certifications</h3>
          <div className="space-y-3">
            {CERTIFICATIONS.map((c) => (
              <div key={c.name} className="bg-green-900 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-orange-400">✓</span>
                  <span className="font-bold text-white">{c.name}</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-orange-500 rounded-xl p-4 text-center">
            <p className="font-bold mb-2">Besoin urgent ?</p>
            <a href={PHONE_LINK} className="text-xl font-black hover:underline">
              {PHONE}
            </a>
            <p className="text-orange-100 text-xs mt-1">Lun–Sam · 8h–19h</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-900 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Action Nuisible 80 – Leo Libra. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-gray-300">
              Mentions légales
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
