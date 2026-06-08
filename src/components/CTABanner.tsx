import { PHONE, PHONE_LINK } from "@/lib/constants";
import Link from "next/link";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Un nuisible détecté ? Agissez maintenant !",
  subtitle = "Devis gratuit, intervention rapide dans toute la Somme. Ne laissez pas la situation s'aggraver.",
}: CTABannerProps) {
  return (
    <section className="bg-orange-500 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{title}</h2>
        <p className="text-orange-100 text-lg mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={PHONE_LINK} className="bg-white text-orange-600 font-black py-4 px-8 rounded-xl text-xl hover:bg-orange-50 transition-colors shadow-lg">
            📞 {PHONE}
          </a>
          <Link
            href="/contact"
            className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-white hover:text-orange-600 transition-colors"
          >
            Demander un devis gratuit →
          </Link>
        </div>
      </div>
    </section>
  );
}
