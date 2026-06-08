import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import CTABanner from "@/components/CTABanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Action Nuisible 80`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.image }],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    image: post.image,
    author: { "@type": "Organization", name: "Action Nuisible 80" },
    publisher: { "@type": "Organization", name: "Action Nuisible 80" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative bg-green-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={post.image} alt={post.title} fill className="object-cover opacity-20" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-green-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span>/</span>
            <span className="text-white line-clamp-1">{post.title}</span>
          </div>
          <div className="inline-block bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
            {post.category}
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">{post.title}</h1>
          <p className="text-green-200 text-sm">
            Publié le{" "}
            {new Date(post.date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · Action Nuisible 80
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <div className="prose prose-lg max-w-none prose-headings:text-green-900 prose-headings:font-black prose-a:text-orange-500 prose-strong:text-green-900">
                <MDXRemote source={post.content} />
              </div>

              {/* CTA inline */}
              <div className="mt-12 bg-green-900 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-black mb-3">Vous avez un problème de nuisibles dans la Somme ?</h3>
                <p className="text-green-200 mb-6">Action Nuisible 80 intervient rapidement chez vous. Devis gratuit et sans engagement.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+33XXXXXXXXX" className="bg-orange-500 hover:bg-orange-600 font-black py-3 px-6 rounded-xl text-center transition-colors">
                    📞 Appel gratuit
                  </a>
                  <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-green-900 font-bold py-3 px-6 rounded-xl text-center transition-colors">
                    Devis en ligne →
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-orange-500 text-white rounded-2xl p-6 sticky top-24">
                <h3 className="font-black text-xl mb-2">Besoin d&apos;aide ?</h3>
                <p className="text-orange-100 text-sm mb-4">Intervention rapide dans toute la Somme.</p>
                <a href="tel:+33XXXXXXXXX" className="block bg-white text-orange-600 font-black py-3 rounded-xl text-center mb-3 hover:bg-orange-50">
                  📞 Appel gratuit
                </a>
                <Link href="/contact" className="block border-2 border-white text-white py-3 rounded-xl text-center hover:bg-white hover:text-orange-600 font-bold transition-colors">
                  Devis gratuit →
                </Link>
              </div>

              {related.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-green-900 mb-4">Articles similaires</h3>
                  <div className="space-y-4">
                    {related.map((p) => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} className="flex gap-3 group">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                          <Image src={p.image} alt={p.title} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-green-900 group-hover:text-orange-500 transition-colors leading-snug line-clamp-2">
                            {p.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">{p.category}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="font-bold text-green-900 mb-3">Nos services</h3>
                {[
                  { href: "/services/deratisation", label: "🐀 Dératisation" },
                  { href: "/services/punaises-de-lit", label: "🛏️ Punaises de lit" },
                  { href: "/services/frelons-guepes", label: "🐝 Frelons & Guêpes" },
                  { href: "/services/taupes", label: "⛏️ Taupier" },
                  { href: "/professionnels", label: "🏢 Espace Pro" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="flex items-center justify-between py-2 text-gray-700 hover:text-orange-500 border-b border-gray-200 last:border-0 transition-colors text-sm">
                    {link.label}
                    <span className="text-orange-400">→</span>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
