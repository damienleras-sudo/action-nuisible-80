import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog Nuisibles Somme : conseils, guides & actualités | Action Nuisible 80",
  description:
    "Conseils d'experts, guides pratiques et actualités sur la lutte contre les nuisibles dans la Somme (80). Dératisation, punaises de lit, frelons, taupes…",
  alternates: { canonical: "/blog" },
};

const categoryColors: Record<string, string> = {
  Dératisation: "bg-red-100 text-red-700",
  Désinsectisation: "bg-orange-100 text-orange-700",
  Taupier: "bg-amber-100 text-amber-700",
  Professionnels: "bg-blue-100 text-blue-700",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Blog & Conseils</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Guides pratiques, conseils d&apos;experts et actualités sur la lutte contre les nuisibles
            dans la Somme.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 text-lg py-20">
              Des articles arrivent bientôt…
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-2xl shadow-md overflow-hidden card-hover group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          categoryColors[post.category] ?? "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-400 text-xs mb-2">
                      {new Date(post.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <h2 className="font-black text-green-900 text-lg mb-3 group-hover:text-orange-500 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                    <div className="mt-4 text-orange-500 font-bold text-sm">
                      Lire l&apos;article →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SEO block */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-green-900 mb-4">
            Besoin d&apos;aide rapidement ?
          </h2>
          <p className="text-gray-600 mb-6">
            Nos articles vous informent, mais rien ne vaut l&apos;intervention d&apos;un expert. Action Nuisible 80
            intervient dans toute la Somme pour tous les types de nuisibles.
          </p>
          <Link
            href="/contact"
            className="btn-primary"
          >
            Demander un devis gratuit →
          </Link>
        </div>
      </section>
    </>
  );
}
