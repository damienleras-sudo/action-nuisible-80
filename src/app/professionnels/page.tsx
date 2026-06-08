import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { PHONE_LINK, PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lutte antiparasitaire pour professionnels Somme (80) | Action Nuisible 80",
  description:
    "Solutions complètes de lutte contre les nuisibles pour restaurants, industrie alimentaire, hôtels, EHPAD et collectivités dans la Somme. Plan de lutte, conformité HACCP, contrats de maintenance.",
  alternates: { canonical: "/professionnels" },
};

const sectors = [
  {
    icon: "🍽️",
    title: "Restauration",
    desc: "Restaurants, brasseries, cantines, traiteurs. Mise en conformité HACCP, interventions hors période d'ouverture, discrétion garantie. Rapports d'intervention pour les contrôles sanitaires.",
    risks: ["Fermeture administrative", "Contamination alimentaire", "Amende DDPP"],
  },
  {
    icon: "🏭",
    title: "Industrie alimentaire",
    desc: "Abattoirs, laiteries, boulangeries industrielles, conserveries. Plan de maîtrise sanitaire complet incluant le volet nuisibles. Traçabilité totale des interventions.",
    risks: ["Non-conformité IFS/BRC", "Retrait de produits", "Contamination de masse"],
  },
  {
    icon: "🏨",
    title: "Hôtellerie & Hébergement",
    desc: "Hôtels, gîtes, chambres d'hôtes, Airbnb. Traitement discret et efficace des punaises de lit, dératisation, désinsectisation. Intervention en urgence.",
    risks: ["Mauvaises reviews", "Responsabilité civile", "Perte de clientèle"],
  },
  {
    icon: "🏥",
    title: "Santé & EHPAD",
    desc: "Cliniques, maisons de retraite, EHPAD, cabinets médicaux. Protocoles adaptés aux résidents vulnérables, produits et méthodes homologués en milieu de soin.",
    risks: ["Infections nosocomiales", "Contrôles ARS", "Risques pour résidents"],
  },
  {
    icon: "🏫",
    title: "Collectivités & Éducation",
    desc: "Mairies, écoles, lycées, crèches, équipements sportifs. Traitement adapté aux établissements recevant du public, interventions pendant les vacances scolaires.",
    risks: ["Fermeture établissement", "Risque pour enfants", "Responsabilité publique"],
  },
  {
    icon: "🏪",
    title: "Commerce & Logistique",
    desc: "Supermarchés, entrepôts, centres commerciaux. Protection des zones de stockage alimentaire, traitement périmétrique, monitoring continu.",
    risks: ["Contamination stocks", "Perte marchandise", "Non-conformité sanitaire"],
  },
];

const contractFeatures = [
  { icon: "📋", title: "Plan de Lutte contre les Nuisibles (PLN)", desc: "Document complet recensant les risques, les mesures préventives et les protocoles d'intervention spécifiques à votre établissement." },
  { icon: "🔍", title: "Visites de contrôle planifiées", desc: "Inspections régulières selon votre contrat (mensuelle, trimestrielle, semestrielle) pour détecter et traiter toute infestation naissante." },
  { icon: "📊", title: "Rapports d'intervention détaillés", desc: "Chaque visite donne lieu à un rapport complet avec photos, observations et actions menées, archivés pour vos contrôles sanitaires." },
  { icon: "⚡", title: "Réactivité garantie", desc: "En cas de problème entre deux visites planifiées, intervention sous 24-48h sur votre établissement." },
  { icon: "🎓", title: "Formation de vos équipes", desc: "Sensibilisation de votre personnel aux bonnes pratiques pour limiter les risques d'infestation au quotidien." },
  { icon: "📞", title: "Interlocuteur dédié", desc: "Un technicien référent connaît votre établissement et assure la continuité des interventions." },
];

export default function ProfessionnelsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-green-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
            alt="Restaurant professionnel"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-full text-sm font-bold mb-6">
            🏢 Solutions Professionnelles
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 max-w-4xl leading-tight">
            La lutte antiparasitaire <span className="text-orange-400">clé en main</span> pour votre établissement
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl leading-relaxed">
            Restaurants, hôtels, EHPAD, industrie alimentaire… Action Nuisible 80 prend en charge
            l&apos;intégralité de votre plan de maîtrise des nuisibles dans la Somme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={PHONE_LINK} className="btn-primary text-lg py-4 px-8">
              📞 {PHONE} – Appel gratuit
            </a>
            <Link href="/contact" className="btn-outline text-lg py-4 px-8">
              Demander un devis pro →
            </Link>
          </div>
        </div>
      </section>

      {/* Urgence réglementaire */}
      <section className="bg-red-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-bold">
            ⚠️ La présence de nuisibles dans un établissement alimentaire peut entraîner une{" "}
            <strong>fermeture administrative immédiate</strong> par la DDPP ou la DREAL.
            Ne prenez aucun risque.
          </p>
        </div>
      </section>

      {/* Secteurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-green-900 mb-4">Nous intervenons dans votre secteur</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Chaque secteur a ses contraintes réglementaires et sanitaires. Nous adaptons nos interventions à vos exigences spécifiques.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector) => (
              <div key={sector.title} className="bg-white rounded-2xl shadow-md overflow-hidden card-hover">
                <div className="bg-green-900 p-6">
                  <span className="text-5xl">{sector.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-green-900 mb-3">{sector.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{sector.desc}</p>
                  <div className="bg-red-50 rounded-xl p-3">
                    <p className="text-red-700 text-xs font-bold mb-2">Risques en cas de non-conformité :</p>
                    <ul className="space-y-1">
                      {sector.risks.map((r) => (
                        <li key={r} className="text-red-600 text-xs flex items-center gap-1">
                          <span>⚠</span> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contrat de maintenance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-black text-green-900 mb-6">
                Contrat de maintenance : <span className="text-orange-500">la tranquillité au quotidien</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Plutôt que d&apos;attendre qu&apos;un problème se déclare, nos contrats de maintenance vous garantissent
                une surveillance permanente et une réactivité immédiate. Nous devenons votre prestataire
                nuisibles attitré, avec une connaissance approfondie de votre établissement.
              </p>
              <div className="space-y-4">
                {contractFeatures.map((f) => (
                  <div key={f.title} className="flex gap-4 p-4 bg-green-50 rounded-xl">
                    <span className="text-3xl">{f.icon}</span>
                    <div>
                      <h3 className="font-bold text-green-900 mb-1">{f.title}</h3>
                      <p className="text-gray-600 text-sm">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {/* CTA form card */}
              <div className="bg-green-900 text-white rounded-3xl p-8 sticky top-24">
                <h3 className="text-2xl font-black mb-2">Demander un devis professionnel</h3>
                <p className="text-green-200 mb-6">Réponse sous 24h, audit gratuit de votre établissement.</p>
                <div className="space-y-4">
                  <a
                    href={PHONE_LINK}
                    className="block bg-orange-500 hover:bg-orange-600 text-white font-black py-4 px-6 rounded-xl text-center text-xl transition-colors"
                  >
                    📞 {PHONE}
                  </a>
                  <Link
                    href="/contact"
                    className="block border-2 border-white text-white font-bold py-4 px-6 rounded-xl text-center hover:bg-white hover:text-green-900 transition-colors"
                  >
                    Formulaire de contact →
                  </Link>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    "Devis gratuit",
                    "Audit offert",
                    "Certibiocide",
                    "Certiphyto",
                    "Rapports HACCP",
                    "Toute la Somme",
                  ].map((item) => (
                    <div key={item} className="bg-green-800 rounded-lg p-2 text-center text-green-100 text-sm">
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-green-900 mb-4">Comment ça se passe ?</h2>
            <p className="text-gray-600 text-lg">De la prise de contact à la mise en place de votre plan de lutte</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "1", title: "Contact & Prise de RDV", desc: "Vous nous contactez par téléphone ou formulaire. Nous organisons rapidement un premier rendez-vous." },
              { n: "2", title: "Audit de votre établissement", desc: "Notre technicien visite votre établissement pour évaluer les risques, les points sensibles et vos obligations réglementaires." },
              { n: "3", title: "Proposition de contrat", desc: "Nous vous remettons un devis détaillé avec le plan de lutte personnalisé et la fréquence d'intervention recommandée." },
              { n: "4", title: "Mise en place & suivi", desc: "Début des interventions, remise des rapports, formation de vos équipes si souhaité. Vous êtes en conformité." },
            ].map((step) => (
              <div key={step.n} className="bg-white rounded-2xl shadow-md p-6 card-hover text-center">
                <div className="w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                  {step.n}
                </div>
                <h3 className="font-black text-green-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Protégez votre établissement dès aujourd'hui"
        subtitle="Un audit gratuit de votre établissement, un plan de lutte sur-mesure, une conformité garantie. Contactez-nous maintenant."
      />
    </>
  );
}
