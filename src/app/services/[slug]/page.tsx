import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";
import { SERVICES } from "@/lib/constants";
import CTABanner from "@/components/CTABanner";
import { PHONE_LINK, PHONE } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};
  return {
    title: `${service.name} Somme (80) | Action Nuisible 80`,
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) notFound();

  const related = SERVICES.filter((s) => service.relatedSlugs.includes(s.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Action Nuisible 80",
      telephone: "03XXXXXXXX",
      address: { "@type": "PostalAddress", addressRegion: "Somme", addressCountry: "FR" },
    },
    areaServed: "Somme (80)",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative bg-green-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={service.heroImage} alt={service.name} fill className="object-cover opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-green-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-white">{service.name}</span>
          </div>
          <div className="text-6xl mb-4">{service.icon}</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">{service.name}</h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl">{service.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={PHONE_LINK} className="btn-primary text-lg py-4 px-8">
              📞 Appel gratuit – {PHONE}
            </a>
            <Link href="/contact" className="btn-outline text-lg py-4 px-8">
              Demander un devis →
            </Link>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>

              {service.sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-2xl font-black text-green-900 mb-4">{section.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              ))}

              {/* Symptoms */}
              <div className="bg-red-50 border-l-4 border-red-500 rounded-r-2xl p-6">
                <h2 className="text-xl font-black text-red-800 mb-4">🚨 Signes d&apos;infestation à surveiller</h2>
                <ul className="space-y-2">
                  {service.symptoms.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-red-700">
                      <span className="mt-0.5 text-red-500">▶</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl font-black text-green-900 mb-6">Notre processus d&apos;intervention</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.process.map((step) => (
                    <div key={step.step} className="bg-green-50 rounded-2xl p-5 flex gap-4">
                      <div className="w-12 h-12 bg-green-900 text-white rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-green-900 mb-1">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-black text-green-900 mb-6">Questions fréquentes</h2>
                <div className="space-y-4">
                  {service.faq.map((item) => (
                    <details key={item.q} className="group bg-gray-50 rounded-2xl overflow-hidden">
                      <summary className="p-5 cursor-pointer font-bold text-green-900 flex justify-between items-center">
                        {item.q}
                        <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{item.a}</div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-orange-500 text-white rounded-2xl p-6 sticky top-24">
                <h3 className="font-black text-xl mb-2">Besoin d&apos;une intervention ?</h3>
                <p className="text-orange-100 text-sm mb-4">Devis gratuit, réponse rapide, intervention dans toute la Somme.</p>
                <a href={PHONE_LINK} className="block bg-white text-orange-600 font-black py-3 px-4 rounded-xl text-center text-lg mb-3 hover:bg-orange-50 transition-colors">
                  📞 {PHONE}
                </a>
                <Link href="/contact" className="block border-2 border-white text-white font-bold py-3 px-4 rounded-xl text-center hover:bg-white hover:text-orange-600 transition-colors">
                  Devis en ligne →
                </Link>
                <div className="mt-4 space-y-2 text-sm text-orange-100">
                  <div className="flex items-center gap-2"><span>✓</span> Devis gratuit</div>
                  <div className="flex items-center gap-2"><span>✓</span> Intervention rapide</div>
                  <div className="flex items-center gap-2"><span>✓</span> Certifié Certibiocide</div>
                  <div className="flex items-center gap-2"><span>✓</span> Toute la Somme (80)</div>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="font-bold text-green-900 mb-4">Nos autres services</h3>
                {related.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-3 py-2 text-gray-700 hover:text-orange-500 transition-colors border-b border-gray-200 last:border-0">
                    <span>{s.icon}</span>
                    <span className="font-medium">{s.name}</span>
                    <span className="ml-auto text-orange-400">→</span>
                  </Link>
                ))}
                <Link href="/" className="mt-4 block text-center text-green-900 font-bold hover:text-orange-500 transition-colors text-sm">
                  Voir tous nos services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title={`Vous avez un problème de ${service.name.toLowerCase()} ?`} subtitle="Ne laissez pas la situation s'aggraver. Contactez-nous pour un diagnostic gratuit." />
    </>
  );
}
