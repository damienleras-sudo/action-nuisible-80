import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Action Nuisible 80",
  description: "Mentions légales du site Action Nuisible 80 – Leo Libra.",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-black text-green-900 mb-8">Mentions Légales</h1>

      <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
        <section>
          <h2 className="text-xl font-black text-green-900 mb-3">1. Éditeur du site</h2>
          <p>
            <strong>Raison sociale :</strong> Leo Libra<br />
            <strong>Nom commercial :</strong> Action Nuisible 80<br />
            <strong>Siège social :</strong> Somme (80), France<br />
            <strong>Email :</strong> contact@action-nuisible-80.fr<br />
            <strong>Téléphone :</strong> 03 XX XX XX XX
          </p>
        </section>

        <section>
          <h2 className="text-xl font-black text-green-900 mb-3">2. Hébergement</h2>
          <p>
            Ce site est hébergé par <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723, USA.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-black text-green-900 mb-3">3. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, logos) est la propriété de Leo Libra / Action Nuisible 80.
            Toute reproduction sans autorisation préalable est interdite.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-black text-green-900 mb-3">4. Protection des données personnelles</h2>
          <p>
            Les données collectées via le formulaire de contact sont utilisées exclusivement pour répondre à vos demandes.
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.
            Pour exercer ces droits, contactez-nous à : contact@action-nuisible-80.fr
          </p>
        </section>

        <section>
          <h2 className="text-xl font-black text-green-900 mb-3">5. Cookies</h2>
          <p>
            Ce site utilise uniquement des cookies techniques nécessaires au bon fonctionnement du site.
            Aucun cookie publicitaire ou de tracking tiers n&apos;est utilisé.
          </p>
        </section>
      </div>
    </div>
  );
}
