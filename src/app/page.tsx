import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { SERVICES, TESTIMONIALS, PHONE_LINK, PHONE, ZONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Action Nuisible 80 | Expert Dératisation & Désinsectisation Somme",
  description:
    "Action Nuisible 80 : votre expert en lutte contre les nuisibles dans la Somme (80). Dératisation, désinsectisation, taupier, punaises de lit. Certibiocide & Certiphyto. Devis gratuit.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Action Nuisible 80",
  description: "Expert en lutte antiparasitaire dans la Somme (80)",
  telephone: "03XXXXXXXX",
  email: "contact@action-nuisible-80.fr",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Amiens",
    addressRegion: "Somme",
    postalCode: "80000",
    addressCountry: "FR",
  },
  areaServed: { "@type": "State", name: "Somme" },
  hasCredential: ["Certibiocide", "Certiphyto"],
  openingHours: "Mo-Sa 08:00-19:00",
  priceRange: "€€",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section className="relative hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Protection contre les nuisibles"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
              <span>✓</span> Certifié Certibiocide & Certiphyto – Somme (80)
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Débarrassez-vous des nuisibles{" "}
              <span className="text-orange-400">une bonne fois pour toutes</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
              Action Nuisible 80 intervient rapidement chez vous dans toute la Somme. Rats, punaises
              de lit, frelons, taupes, cafards : nous traitons tous les nuisibles avec des méthodes
              homologuées et efficaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_LINK} className="btn-primary text-lg py-4 px-8">
                📞 Appel gratuit – {PHONE}
              </a>
              <Link href="/contact" className="btn-outline text-lg py-4 px-8">
                Devis gratuit en ligne →
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10 text-sm">
              {["Intervention rapide", "Devis gratuit", "Produits homologués", "Résultat garanti"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-orange-400 text-lg">✓</span>
                    <span className="text-green-100">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full fill-white">
            <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════ URGENCE BAR ═══════════════════════════════════ */}
      <section className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <span className="text-2xl">🚨</span>
          <p className="font-bold text-lg">
            Situation urgente ? Nid de frelons, infestation de punaises de lit, rats dans vos locaux ?
          </p>
          <a
            href={PHONE_LINK}
            className="bg-white text-red-600 font-black px-6 py-2 rounded-full hover:bg-red-50 transition-colors whitespace-nowrap"
          >
            Intervention urgente →
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════ SERVICES ═══════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-green-900 mb-4">Nos Interventions</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Spécialistes de la lutte antiparasitaire, nous intervenons sur tous types de nuisibles
              avec des méthodes adaptées et des produits professionnels homologués.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card-hover bg-white rounded-2xl shadow-md overflow-hidden group"
              >
                <div className={`bg-gradient-to-br ${service.color} p-6 text-white`}>
                  <span className="text-5xl">{service.icon}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-green-900 text-lg mb-1 group-hover:text-orange-500 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">{service.shortDesc}</p>
                  <span className="text-orange-500 text-sm font-bold">En savoir plus →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ POURQUOI NOUS ═══════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-green-900 mb-6">
                Pourquoi choisir <span className="text-orange-500">Action Nuisible 80</span> ?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: "🏅",
                    title: "Certifié & Réglementé",
                    text: "Certifications Certibiocide et Certiphyto. Tous nos produits sont homologués et utilisés dans le strict respect de la réglementation.",
                  },
                  {
                    icon: "⚡",
                    title: "Intervention Rapide",
                    text: "Nous comprenons l'urgence d'une infestation. Délai d'intervention réduit pour limiter la propagation et les dommages.",
                  },
                  {
                    icon: "🎯",
                    title: "Résultats Garantis",
                    text: "Diagnostic précis, traitement ciblé, suivi post-intervention. Nous ne partons pas tant que le problème n'est pas résolu.",
                  },
                  {
                    icon: "🌿",
                    title: "Méthodes Responsables",
                    text: "Solutions adaptées à chaque situation, avec le souci de minimiser l'impact environnemental tout en garantissant l'efficacité.",
                  },
                  {
                    icon: "💼",
                    title: "Expertise Professionnelle",
                    text: "Secteur alimentaire, restauration, hôtellerie, EHPAD… nous maîtrisons les contraintes des milieux professionnels réglementés.",
                  },
                  {
                    icon: "📋",
                    title: "Plan de Lutte Complet",
                    text: "Pour les professionnels : élaboration et gestion de votre plan de maîtrise des nuisibles, rapports d'intervention, conformité garantie.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-green-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                  alt="Expert en lutte contre les nuisibles dans la Somme"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white rounded-2xl p-5 shadow-xl">
                <div className="text-4xl font-black">100%</div>
                <div className="font-bold">Certifié & Assuré</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-green-900 text-white rounded-2xl p-5 shadow-xl">
                <div className="text-3xl font-black">Dept. 80</div>
                <div className="font-bold text-sm">Toute la Somme</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ PROS SECTION ═══════════════════════════════════ */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-full text-sm font-bold mb-6">
                🏢 Espace Professionnels
              </div>
              <h2 className="text-4xl font-black mb-6">
                Une solution complète pour les{" "}
                <span className="text-orange-400">professionnels</span>
              </h2>
              <p className="text-green-100 text-lg mb-6 leading-relaxed">
                Restaurants, hôtels, industrie alimentaire, grande distribution, EHPAD, collectivités…
                Action Nuisible 80 vous accompagne avec un plan de lutte antiparasitaire complet,
                conforme aux exigences réglementaires (HACCP, DDPP, etc.).
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Contrat de maintenance annuel ou semestriel",
                  "Plan de Lutte contre les Nuisibles (PLN) sur-mesure",
                  "Rapports d'intervention détaillés",
                  "Mise en conformité HACCP et réglementaire",
                  "Intervention discrète adaptée à vos horaires",
                  "Interlocuteur dédié, réactivité garantie",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-orange-400 mt-0.5 text-lg">✓</span>
                    <span className="text-green-100">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/professionnels"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-colors inline-flex items-center gap-2 text-lg"
              >
                Découvrir nos offres pro →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🍽️", title: "Restauration", text: "Conformité HACCP, interventions hors ouverture" },
                { icon: "🏭", title: "Industrie alimentaire", text: "Plan de lutte rigoureux, traçabilité complète" },
                { icon: "🏨", title: "Hôtellerie", text: "Discrétion garantie, traitement punaises de lit" },
                { icon: "🏥", title: "EHPAD & Santé", text: "Protocoles adaptés aux résidents vulnérables" },
                { icon: "🏫", title: "Collectivités", text: "Écoles, mairies, bâtiments publics" },
                { icon: "🏪", title: "Commerce & GMS", text: "Réservoirs alimentaires, entrepôts logistiques" },
              ].map((item) => (
                <div key={item.title} className="bg-green-800 rounded-2xl p-4">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-green-200 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ TÉMOIGNAGES ═══════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-green-900 mb-4">Ils nous font confiance</h2>
            <p className="text-gray-600 text-lg">Particuliers et professionnels de la Somme témoignent</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl shadow-md p-6 card-hover">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-orange-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="font-bold text-green-900">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ ZONE ═══════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-green-900 mb-4">Zone d'intervention</h2>
          <p className="text-gray-600 text-lg mb-8">{ZONE}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {["Amiens", "Abbeville", "Péronne", "Montdidier", "Doullens", "Albert", "Rue", "Friville", "Poix-de-Picardie", "Moreuil", "Compiègne", "Nesle"].map(
              (city) => (
                <div key={city} className="bg-green-50 border border-green-200 rounded-xl py-2 px-3 text-green-800 font-medium text-sm">
                  📍 {city}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ CTA FINAL ═══════════════════════════════════ */}
      <CTABanner />
    </>
  );
}
