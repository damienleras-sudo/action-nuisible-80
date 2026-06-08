import type { Metadata } from "next";
import { PHONE, PHONE_LINK, EMAIL, ADDRESS, ZONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Devis Gratuit | Action Nuisible 80 – Somme",
  description:
    "Contactez Action Nuisible 80 pour un devis gratuit. Intervention rapide dans toute la Somme (80). Téléphone, email ou formulaire de contact.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contactez-nous</h1>
          <p className="text-xl text-green-100">Devis gratuit – Réponse rapide – Intervention dans toute la Somme</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Info cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="text-4xl mb-3">📞</div>
                <h2 className="font-black text-green-900 text-xl mb-2">Par téléphone</h2>
                <a href={PHONE_LINK} className="text-orange-500 font-black text-2xl hover:text-orange-600">
                  {PHONE}
                </a>
                <p className="text-gray-500 text-sm mt-2">Lun – Sam · 8h00 – 19h00</p>
                <p className="text-gray-500 text-sm">Urgences traitées en priorité</p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="text-4xl mb-3">✉️</div>
                <h2 className="font-black text-green-900 text-xl mb-2">Par email</h2>
                <a href={`mailto:${EMAIL}`} className="text-orange-500 font-bold hover:underline break-all">
                  {EMAIL}
                </a>
                <p className="text-gray-500 text-sm mt-2">Réponse sous 24h</p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="text-4xl mb-3">📍</div>
                <h2 className="font-black text-green-900 text-xl mb-2">Zone d&apos;intervention</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{ZONE}</p>
              </div>

              <div className="bg-orange-500 text-white rounded-2xl p-6">
                <h2 className="font-black text-xl mb-2">🚨 Urgence nuisibles</h2>
                <p className="text-orange-100 text-sm mb-3">
                  Nid de frelons, infestation soudaine, rongeurs dans vos locaux ? Appelez-nous maintenant.
                </p>
                <a href={PHONE_LINK} className="block bg-white text-orange-600 font-black py-3 rounded-xl text-center hover:bg-orange-50 transition-colors">
                  Appel d&apos;urgence →
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-black text-green-900 mb-2">Demande de devis gratuit</h2>
              <p className="text-gray-600 mb-6">Remplissez ce formulaire, nous vous recontactons sous 24h.</p>
              <form className="space-y-5" action="mailto:contact@action-nuisible-80.fr" method="POST" encType="text/plain">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Prénom & Nom *</label>
                    <input
                      type="text"
                      name="nom"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Téléphone *</label>
                    <input
                      type="tel"
                      name="telephone"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="06 XX XX XX XX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="jean@email.com"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Vous êtes *</label>
                    <select name="type" required className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option value="">Sélectionnez...</option>
                      <option>Particulier</option>
                      <option>Restaurant / Café</option>
                      <option>Industrie alimentaire</option>
                      <option>Hôtel / Hébergement</option>
                      <option>EHPAD / Santé</option>
                      <option>Collectivité</option>
                      <option>Commerce / Entreprise</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Type de nuisible *</label>
                    <select name="nuisible" required className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option value="">Sélectionnez...</option>
                      <option>Rats / Souris</option>
                      <option>Taupes</option>
                      <option>Punaises de lit</option>
                      <option>Frelons / Guêpes</option>
                      <option>Cafards / Blattes</option>
                      <option>Fourmis</option>
                      <option>Chenilles processionnaires</option>
                      <option>Pigeons / Volatiles</option>
                      <option>Autre / Je ne sais pas</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Ville / Code postal *</label>
                  <input
                    type="text"
                    name="ville"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Amiens – 80000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Description de votre problème</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Décrivez votre situation (depuis quand, où avez-vous observé les nuisibles, superficie approximative...)..."
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="urgent" name="urgent" className="mt-1" />
                  <label htmlFor="urgent" className="text-sm text-gray-600">
                    Situation urgente – je souhaite être rappelé(e) le plus tôt possible
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 px-6 rounded-xl text-lg transition-colors"
                >
                  Envoyer ma demande de devis →
                </button>
                <p className="text-gray-400 text-xs text-center">
                  Devis gratuit et sans engagement. Vos données ne sont pas transmises à des tiers.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
