import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { PHONE, PHONE_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tarifs Lutte Antiparasitaire Somme (80) | Action Nuisible 80",
  description:
    "Découvrez nos tarifs pour la dératisation, désinsectisation, traitement punaises de lit et autres services de lutte antiparasitaire dans la Somme. Devis gratuit.",
  alternates: { canonical: "/tarifs" },
};

export default function TarifsPage() {
  return (
    <>
      <section className="bg-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Nos Tarifs</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Des tarifs transparents, adaptés à votre situation. Devis gratuit et sans engagement.
          </p>
        </div>
      </section>

      {/* Coming soon banner */}
      <section className="py-10 bg-orange-50 border-y border-orange-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🔧</div>
          <h2 className="text-2xl font-black text-orange-700 mb-3">Grille tarifaire en cours de publication</h2>
          <p className="text-orange-600">
            Notre grille tarifaire détaillée sera disponible très prochainement. En attendant, contactez-nous
            directement pour obtenir un devis personnalisé gratuit adapté à votre situation.
          </p>
        </div>
      </section>

      {/* Pricing principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-green-900 mb-4">Comment sont établis nos tarifs ?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Chaque situation est unique. Nos tarifs dépendent de plusieurs facteurs que nous évaluons lors du diagnostic gratuit.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "Surface & Type de bien",
                factors: ["Studio / Appartement", "Maison individuelle", "Local professionnel", "Entrepôt / Grand bâtiment"],
              },
              {
                icon: "🐜",
                title: "Type de nuisible",
                factors: ["Punaises de lit", "Rats / Souris", "Frelons / Guêpes", "Cafards / Blattes"],
              },
              {
                icon: "📊",
                title: "Niveau d'infestation",
                factors: ["Infestation légère", "Infestation modérée", "Infestation sévère", "Traitement préventif"],
              },
            ].map((cat) => (
              <div key={cat.title} className="bg-gray-50 rounded-2xl p-6">
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="font-black text-green-900 text-xl mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.factors.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-600">
                      <span className="text-orange-500">→</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder price cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-green-900 mb-4">Tarifs indicatifs</h2>
            <p className="text-gray-600">Les tarifs exacts seront communiqués lors du devis personnalisé gratuit.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { service: "Dératisation", icon: "🐀", from: "Sur devis", desc: "Selon surface et niveau d'infestation" },
              { service: "Traitement punaises de lit", icon: "🛏️", from: "Sur devis", desc: "À partir d'une chambre, traitement en 2 passages" },
              { service: "Destruction nid frelons", icon: "🐝", from: "Sur devis", desc: "Selon accessibilité et taille du nid" },
              { service: "Taupier", icon: "⛏️", from: "Sur devis", desc: "Selon surface du terrain" },
              { service: "Cafards / Blattes", icon: "🪳", from: "Sur devis", desc: "Traitement gel professionnel, cuisine ou logement" },
              { service: "Contrat pro annuel", icon: "📋", from: "Sur devis", desc: "Selon établissement, fréquence et services inclus" },
            ].map((item) => (
              <div key={item.service} className="bg-white rounded-2xl shadow-md p-6 card-hover text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-black text-green-900 text-lg mb-1">{item.service}</h3>
                <div className="text-3xl font-black text-orange-500 mb-2">{item.from}</div>
                <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
                <Link href="/contact" className="text-green-900 border border-green-900 rounded-xl px-4 py-2 text-sm font-bold hover:bg-green-900 hover:text-white transition-colors inline-block">
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-10">Nos engagements tarifaires</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🆓", title: "Devis gratuit", desc: "Estimation sans engagement après diagnostic de votre situation." },
              { icon: "🔒", title: "Prix ferme", desc: "Le prix du devis est définitif, sans surprise ni surcoût caché." },
              { icon: "💳", title: "Paiement facilité", desc: "Plusieurs moyens de paiement acceptés. Possibilité d'échelonnement selon les cas." },
              { icon: "✅", title: "Résultat garanti", desc: "Si l'infestation persiste après notre traitement, nous revenons sans frais supplémentaires." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-green-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white py-8 text-center">
        <a href={PHONE_LINK} className="btn-primary text-lg py-4 px-10">
          📞 Obtenir mon devis gratuit – {PHONE}
        </a>
      </div>

      <CTABanner />
    </>
  );
}
