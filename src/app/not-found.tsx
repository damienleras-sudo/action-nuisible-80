import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-96 flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="text-7xl mb-6">🐭</div>
      <h1 className="text-4xl font-black text-green-900 mb-4">Page introuvable</h1>
      <p className="text-gray-600 text-lg mb-8">
        Cette page a disparu… comme nos nuisibles après intervention !
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="btn-primary">
          ← Retour à l&apos;accueil
        </Link>
        <Link href="/contact" className="border-2 border-green-900 text-green-900 font-bold py-3 px-6 rounded-lg hover:bg-green-900 hover:text-white transition-colors">
          Nous contacter
        </Link>
      </div>
    </div>
  );
}
