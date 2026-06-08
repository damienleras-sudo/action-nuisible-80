export interface ServiceData {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  metaDescription: string;
  heroImage: string;
  sections: { title: string; content: string }[];
  symptoms: string[];
  process: { step: string; title: string; desc: string }[];
  faq: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const servicesData: Record<string, ServiceData> = {
  deratisation: {
    slug: "deratisation",
    name: "Dératisation",
    icon: "🐀",
    tagline: "Élimination efficace des rats, souris et mulots dans la Somme",
    description:
      "La présence de rongeurs dans votre habitat ou vos locaux professionnels est un risque sanitaire majeur. Action Nuisible 80 intervient rapidement pour éliminer rats, souris et mulots dans toute la Somme.",
    metaDescription:
      "Dératisation dans la Somme (80) : intervention rapide pour l'élimination de rats, souris et mulots. Particuliers et professionnels. Certibiocide. Devis gratuit.",
    heroImage: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1200&q=80",
    sections: [
      {
        title: "Les dangers des rongeurs",
        content:
          "Les rats et souris ne sont pas seulement un problème de confort. Ils transmettent des maladies graves (leptospirose, salmonellose, hantavirus), contaminent les denrées alimentaires et peuvent provoquer des dégâts matériels considérables en rongeant fils électriques, tuyauteries et structures. Dans les locaux professionnels (restauration, industrie alimentaire), leur présence peut entraîner la fermeture administrative de l'établissement.",
      },
      {
        title: "Notre méthode de dératisation",
        content:
          "Notre approche repose sur un diagnostic complet de votre situation : identification des espèces présentes, localisation des nids et couloirs de passage, évaluation de l'ampleur de l'infestation. Nous utilisons des appâts rodenticides homologués, placés dans des boîtiers sécurisés pour protéger les enfants et les animaux domestiques. Le traitement est suivi d'une vérification et d'un bouchage des points d'entrée pour éviter toute réinfestation.",
      },
    ],
    symptoms: [
      "Bruits de grattements ou de courses dans les murs et plafonds la nuit",
      "Présence de déjections (crottes noires de 1 à 2 cm pour les rats)",
      "Traces de morsures sur emballages alimentaires, fils ou structures",
      "Odeur forte et caractéristique",
      "Présence de terriers ou de couloirs dans le jardin",
      "Taches de graisse le long des murs (traces de passage)",
    ],
    process: [
      { step: "01", title: "Diagnostic", desc: "Inspection complète de vos locaux pour identifier les espèces, les foyers et les voies de pénétration." },
      { step: "02", title: "Pose des appâts", desc: "Installation de boîtiers sécurisés contenant des rodenticides homologués aux endroits stratégiques." },
      { step: "03", title: "Suivi", desc: "Contrôle régulier des boîtiers et adaptation du traitement selon l'évolution de la situation." },
      { step: "04", title: "Bouchage & Prévention", desc: "Identification et colmatage des points d'entrée + conseils pour éviter toute réinfestation." },
    ],
    faq: [
      { q: "Combien de temps dure une intervention de dératisation ?", a: "Une première intervention dure généralement 1 à 2 heures selon la superficie. Le traitement complet nécessite plusieurs visites sur 2 à 4 semaines pour s'assurer de l'élimination totale." },
      { q: "Est-ce dangereux pour mes animaux de compagnie ?", a: "Nos appâts sont placés dans des boîtiers sécurisés inaccessibles aux animaux et aux enfants. Nous choisissons également les produits les plus adaptés à votre situation familiale." },
      { q: "Dois-je quitter mon domicile pendant le traitement ?", a: "Non, il n'est généralement pas nécessaire de quitter votre domicile lors d'une dératisation. Nous vous informerons des précautions spécifiques si nécessaire." },
      { q: "Le traitement est-il efficace en une seule visite ?", a: "Pour une infestation légère, une visite peut suffire. Mais en général, 2 à 3 passages espacés de quelques jours sont nécessaires pour garantir l'élimination complète." },
    ],
    relatedSlugs: ["cafards-blattes", "taupes", "pigeons"],
  },

  taupes: {
    slug: "taupes",
    name: "Taupier",
    icon: "⛏️",
    tagline: "Élimination professionnelle des taupes dans votre jardin ou terrain – Somme (80)",
    description:
      "Les taupes causent des dégâts considérables aux jardins, pelouses et terrains agricoles. Action Nuisible 80, taupier professionnel dans la Somme, intervient rapidement et efficacement.",
    metaDescription:
      "Taupier professionnel dans la Somme (80). Élimination des taupes dans jardins, pelouses et terrains. Intervention rapide, résultats garantis. Devis gratuit.",
    heroImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
    sections: [
      {
        title: "Pourquoi les taupes sont nuisibles",
        content:
          "La taupe commune creuse des galeries souterraines à raison de plusieurs dizaines de mètres par jour. Elle détériore les racines des plantes, abîme les pelouses et crée des monticules de terre (taupinières) inesthétiques et dangereux (risques de chute, dommages aux outils). Pour les terrains agricoles, les prairies et les golfs, l'impact économique peut être très significatif.",
      },
      {
        title: "Nos techniques d'élimination",
        content:
          "Nous utilisons des techniques professionnelles adaptées à chaque situation : piégeage avec des pièges homologués posés dans les galeries actives, ou traitement chimique selon les cas. Notre expertise nous permet d'identifier rapidement les galeries actives et de placer les dispositifs aux endroits les plus stratégiques pour un résultat rapide et durable.",
      },
    ],
    symptoms: [
      "Présence de taupinières (monticules de terre) sur votre pelouse",
      "Sol soulevé suivant des lignes (galeries superficielles)",
      "Plantes qui semblent déchaussées ou qui jaunissent",
      "Terrain irrégulier sous la pelouse",
    ],
    process: [
      { step: "01", title: "Diagnostic terrain", desc: "Identification des galeries actives et évaluation de la densité de la population." },
      { step: "02", title: "Pose des pièges", desc: "Installation de pièges professionnels dans les galeries principales aux endroits stratégiques." },
      { step: "03", title: "Contrôle quotidien", desc: "Vérification régulière des pièges et repositionnement si nécessaire." },
      { step: "04", title: "Résultat & Conseils", desc: "Confirmation de l'élimination et conseils pour éviter le retour des taupes." },
    ],
    faq: [
      { q: "Combien de temps prend l'élimination des taupes ?", a: "En général, quelques jours à une semaine selon la surface et la densité. Pour de grands terrains, plusieurs semaines peuvent être nécessaires." },
      { q: "Les taupes reviennent-elles après le traitement ?", a: "Une fois les taupes présentes éliminées, d'autres peuvent potentiellement revenir si le terrain est attractif. Nous vous donnerons des conseils de prévention." },
      { q: "Intervenez-vous sur les grandes surfaces agricoles ?", a: "Oui, nous intervenons sur tous types de terrains : jardins particuliers, terrains de sport, prairies et terres agricoles dans toute la Somme." },
    ],
    relatedSlugs: ["deratisation", "fourmis"],
  },

  "punaises-de-lit": {
    slug: "punaises-de-lit",
    name: "Punaises de lit",
    icon: "🛏️",
    tagline: "Traitement radical des punaises de lit dans la Somme – Particuliers & Hôteliers",
    description:
      "Les punaises de lit (Cimex lectularius) sont des parasites nocturnes qui se nourrissent de sang humain. Leur traitement nécessite une expertise professionnelle. Action Nuisible 80 intervient avec des méthodes garantissant l'élimination totale.",
    metaDescription:
      "Traitement punaises de lit Somme (80). Élimination garantie par professionnels certifiés. Particuliers et hôtels. Intervention discrète et rapide. Devis gratuit.",
    heroImage: "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=1200&q=80",
    sections: [
      {
        title: "Comment reconnaître une infestation",
        content:
          "Les punaises de lit se cachent dans les recoins de vos matelas, sommiers, cadres de lit, mais aussi dans les plinthes, derrière les prises électriques et sous les papiers peints. Elles sortent la nuit pour se nourrir et leurs piqûres provoquent des démangeaisons intenses. On repère souvent leur présence grâce aux taches de sang ou d'excréments (points noirs) sur les draps.",
      },
      {
        title: "Traitement professionnel garantissant l'élimination",
        content:
          "Un traitement efficace des punaises de lit ne s'improvise pas. Les méthodes de bricolage (sprays du commerce) sont totalement insuffisantes face à des insectes résistants qui se cachent dans des espaces inaccessibles. Notre protocole professionnel combine traitement chimique par insecticide à effet rémanent et traitement thermique si nécessaire, pour atteindre tous les stades de développement des punaises (adultes, nymphes et œufs).",
      },
    ],
    symptoms: [
      "Piqûres alignées sur la peau au réveil (souvent en ligne de 3)",
      "Démangeaisons nocturnes intenses",
      "Petites taches de sang sur les draps",
      "Points noirs (excréments) sur le matelas ou cadre de lit",
      "Présence visible d'insectes plats brun-rougeâtres de 5-7 mm",
      "Odeur sucrée et écœurante dans la pièce",
    ],
    process: [
      { step: "01", title: "Inspection", desc: "Contrôle minutieux du matelas, sommier, cadre de lit, plinthes, prises et revêtements." },
      { step: "02", title: "Traitement chimique", desc: "Application d'insecticide professionnel à effet rémanent sur toutes les zones infestées et alentour." },
      { step: "03", title: "2ème passage", desc: "Traitement complémentaire 2 semaines plus tard pour éliminer les individus issus des œufs non touchés." },
      { step: "04", title: "Garantie", desc: "Vérification finale et garantie de résultat. Conseils pour éviter toute réintroduction." },
    ],
    faq: [
      { q: "Doit-on jeter le matelas ?", a: "Non, dans la majorité des cas. Le matelas peut être traité et protégé avec une housse spéciale. Jeter le matelas sans traiter la chambre ne résout rien : les punaises sont ailleurs dans la pièce." },
      { q: "Combien de séances sont nécessaires ?", a: "Minimum 2 passages espacés de 2 semaines, car les œufs sont résistants aux insecticides et éclosent après le premier traitement. Un 3ème contrôle peut être nécessaire." },
      { q: "Faut-il quitter l'appartement pendant le traitement ?", a: "Oui, il faut quitter les lieux pendant environ 4 heures après l'application, puis aérer avant de revenir. Nous vous donnons toutes les instructions précises." },
      { q: "Intervenez-vous pour les hôtels et logements locatifs ?", a: "Absolument. Nous avons une approche discrète et rapide pour les professionnels de l'hébergement, avec des rapports d'intervention pour vos assurances." },
    ],
    relatedSlugs: ["cafards-blattes", "fourmis"],
  },

  "frelons-guepes": {
    slug: "frelons-guepes",
    name: "Frelons & Guêpes",
    icon: "🐝",
    tagline: "Destruction de nids de frelons et guêpes en toute sécurité – Somme (80)",
    description:
      "Un nid de frelons ou de guêpes est un danger réel, surtout à proximité des habitations. Ne prenez aucun risque : l'intervention de professionnels équipés est indispensable. Action Nuisible 80 intervient en urgence.",
    metaDescription:
      "Destruction nids frelons et guêpes Somme (80). Intervention urgente et sécurisée. Équipement professionnel. Particuliers et professionnels. Devis gratuit.",
    heroImage: "https://images.unsplash.com/photo-1558618047-3d5c30e97f59?w=1200&q=80",
    sections: [
      {
        title: "Danger des nids de frelons et guêpes",
        content:
          "Un nid de frelons peut abriter plusieurs centaines d'individus. Contrairement aux abeilles, les frelons et guêpes peuvent piquer plusieurs fois et leur venin peut provoquer des réactions allergiques graves (choc anaphylactique) pouvant être mortelles. Le frelon asiatique (Vespa velutina), espèce invasive désormais présente dans la Somme, est particulièrement agressif et représente aussi une menace pour les colonies d'abeilles.",
      },
      {
        title: "Une intervention sécurisée par des experts",
        content:
          "N'essayez jamais de détruire vous-même un nid de frelons ou de guêpes. Nos techniciens interviennent avec une combinaison de protection complète et utilisent des insecticides professionnels pour neutraliser le nid rapidement et en toute sécurité. Nous intervenons de jour comme en soirée (moment idéal car tous les insectes sont dans le nid).",
      },
    ],
    symptoms: [
      "Va-et-vient important d'insectes autour d'un point précis",
      "Présence d'une structure en papier mâché (gris, sphérique ou en forme de poire)",
      "Nid sous une avancée de toit, dans un arbre, un garage ou une cave",
      "Bourdonnement fort et permanent",
      "Insectes agressifs aux alentours",
    ],
    process: [
      { step: "01", title: "Localisation", desc: "Identification précise du nid et évaluation de la situation (espèce, taille, accessibilité)." },
      { step: "02", title: "Protection", desc: "Équipement complet du technicien et sécurisation de la zone d'intervention." },
      { step: "03", title: "Traitement", desc: "Application d'insecticide professionnel directement dans le nid pour neutraliser tous les individus." },
      { step: "04", title: "Retrait du nid", desc: "Une fois le nid neutralisé (en général le lendemain), retrait si accessible et conseils de prévention." },
    ],
    faq: [
      { q: "Peut-on détruire soi-même un nid de frelons ?", a: "C'est fortement déconseillé et potentiellement mortel. Sans équipement adapté, vous risquez d'être attaqué par des centaines d'insectes. Appelez des professionnels." },
      { q: "Intervenez-vous pour les frelons asiatiques ?", a: "Oui, nous traitons aussi bien les frelons européens qu'asiatiques, avec des protocoles adaptés à chaque espèce." },
      { q: "Faut-il retirer le nid après le traitement ?", a: "Il est recommandé de retirer le nid traité pour éviter qu'il ne serve d'attractant l'année suivante. Nous le faisons quand c'est accessible en sécurité." },
      { q: "À quelle période les nids sont-ils les plus dangereux ?", a: "Les nids sont les plus peuplés et donc les plus dangereux entre juillet et octobre. Mais il vaut mieux agir dès la détection, même au printemps." },
    ],
    relatedSlugs: ["chenilles-processionnaires", "fourmis"],
  },

  "cafards-blattes": {
    slug: "cafards-blattes",
    name: "Cafards & Blattes",
    icon: "🪳",
    tagline: "Désinsectisation complète cafards et blattes – Somme (80)",
    description:
      "Les cafards et blattes sont des vecteurs de maladies et leur présence dans un établissement professionnel peut avoir des conséquences désastreuses. Action Nuisible 80 propose un traitement radical et durable.",
    metaDescription:
      "Désinsectisation cafards et blattes Somme (80). Traitement professionnel garanti pour cuisines, restaurants, logements. Certibiocide. Devis gratuit.",
    heroImage: "https://images.unsplash.com/photo-1589742015411-c11de80db4b6?w=1200&q=80",
    sections: [
      {
        title: "Risques sanitaires des blattes",
        content:
          "Les blattes (cafards) sont des insectes omnivores nocturnes qui contaminent les aliments, les surfaces et les équipements. Elles transportent de nombreux agents pathogènes : salmonelles, staphylocoques, E. coli, et peuvent déclencher des allergies et de l'asthme. Dans un restaurant ou une cuisine professionnelle, leur présence est rédhibitoire et peut entraîner une fermeture administrative par les autorités sanitaires.",
      },
      {
        title: "Traitement professionnel multi-cibles",
        content:
          "Notre traitement contre les cafards repose sur une combinaison de méthodes : application de gel insecticide appât (très efficace en milieu alimentaire car il n'y a pas de résidu chimique en spray), traitement en fissures et crevasses où les blattes se réfugient, et monitoring avec des pièges de détection pour évaluer l'efficacité du traitement. Nous adaptons le protocole à votre type d'établissement.",
      },
    ],
    symptoms: [
      "Présence d'insectes brun-rougeâtres de 1 à 4 cm en cuisine ou salle de bain",
      "Odeur caractéristique forte et désagréable",
      "Déjections noires (ressemblant à du poivre) sur les surfaces",
      "Œufs ou coques d'œufs (oothèques) dans les recoins",
      "Présence nocturne accrue (les cafards fuient la lumière)",
    ],
    process: [
      { step: "01", title: "Audit", desc: "Inspection complète pour identifier les espèces, les zones de vie et l'ampleur de l'infestation." },
      { step: "02", title: "Traitement gel", desc: "Application de gel insecticide appât dans toutes les fissures, joints et zones de refuge." },
      { step: "03", title: "Monitoring", desc: "Pose de pièges de détection pour suivre l'évolution de la population." },
      { step: "04", title: "Suivi & garantie", desc: "Contrôle à J+15 et J+30 pour confirmer l'élimination complète." },
    ],
    faq: [
      { q: "Le traitement gel est-il adapté aux cuisines professionnelles ?", a: "Oui, c'est même la méthode préférentielle. Le gel ne laisse pas de résidu chimique dans les zones de contact alimentaire et est très efficace pour attirer et éliminer les cafards." },
      { q: "Doit-on vider complètement la cuisine avant le traitement ?", a: "Non nécessairement. Nous vous donnerons des instructions précises selon votre situation (couvrir les aliments, sortir certains appareils, etc.)." },
      { q: "Les cafards peuvent-ils revenir après le traitement ?", a: "Si la source d'infestation est éliminée et les points d'entrée traités, les risques de retour sont faibles. Nous vous donnons des conseils d'hygiène et de prévention." },
    ],
    relatedSlugs: ["deratisation", "punaises-de-lit", "fourmis"],
  },

  fourmis: {
    slug: "fourmis",
    name: "Fourmis",
    icon: "🐜",
    tagline: "Traitement anti-fourmis intérieur et extérieur dans la Somme",
    description:
      "Une invasion de fourmis peut rapidement devenir incontrôlable. Des milliers d'individus envahissent cuisine, garde-manger et structure du bâtiment. Action Nuisible 80 propose un traitement ciblé et durable.",
    metaDescription:
      "Traitement fourmis Somme (80). Élimination fourmis en maison, appartement, restaurant. Solutions intérieur et extérieur. Devis gratuit.",
    heroImage: "https://images.unsplash.com/photo-1474009476966-38bddbb6f4d8?w=1200&q=80",
    sections: [
      {
        title: "Pourquoi les fourmis envahissent vos locaux",
        content:
          "Les fourmis entrent dans les bâtiments à la recherche de nourriture et d'humidité. Une colonie peut compter plusieurs millions d'individus. Certaines espèces, comme la fourmi charpentière, creusent dans le bois et peuvent causer des dommages structurels. La fourmi pharaon, petite et rousse, est particulièrement difficile à éliminer et pose des problèmes spécifiques dans les milieux hospitaliers et de restauration.",
      },
      {
        title: "Méthodes de traitement anti-fourmis",
        content:
          "L'efficacité d'un traitement anti-fourmis dépend de l'espèce et de la localisation du nid. Nous utilisons des appâts insecticides que les fourmis transportent jusqu'à la reine, permettant d'éliminer toute la colonie à la source. Cette méthode est bien plus efficace que les sprays répulsifs qui ne font que déplacer le problème.",
      },
    ],
    symptoms: [
      "Files de fourmis en cuisine ou dans les placards",
      "Présence de fourmis ailées (essaimage printanier)",
      "Sciure de bois près des structures en bois (fourmi charpentière)",
      "Fourmis dans les zones humides (salle de bain, sous-sol)",
    ],
    process: [
      { step: "01", title: "Identification", desc: "Détermination de l'espèce et localisation du nid ou des voies d'entrée." },
      { step: "02", title: "Appâtage", desc: "Pose d'appâts insecticides que les fourmis transportent jusqu'à la reine." },
      { step: "03", title: "Traitement périmétrique", desc: "Traitement des zones d'entrée et du périmètre du bâtiment." },
      { step: "04", title: "Contrôle", desc: "Vérification de l'efficacité et renouvellement du traitement si nécessaire." },
    ],
    faq: [
      { q: "Pourquoi les fourmis reviennent-elles chaque année ?", a: "Parce que les produits du commerce ne tuent que les fourmis ouvrières sans atteindre la reine. Un traitement professionnel ciblant la reine et le nid est seul efficace à long terme." },
      { q: "Le traitement est-il sans danger pour mes enfants et animaux ?", a: "Nous utilisons des appâts en gel placés dans des zones inaccessibles, sans spray chimique en suspension dans l'air. La méthode est sûre en milieu familial." },
    ],
    relatedSlugs: ["cafards-blattes", "taupes"],
  },

  "chenilles-processionnaires": {
    slug: "chenilles-processionnaires",
    name: "Chenilles processionnaires",
    icon: "🐛",
    tagline: "Élimination des chenilles processionnaires – Danger pour humains et animaux",
    description:
      "Les chenilles processionnaires du pin et du chêne sont un danger de santé publique. Leurs poils urticants provoquent des réactions allergiques graves. Action Nuisible 80 intervient pour les éliminer en sécurité dans toute la Somme.",
    metaDescription:
      "Élimination chenilles processionnaires Somme (80). Traitement nids de chenilles, protection familles et animaux. Intervention professionnelle certifiée. Devis gratuit.",
    heroImage: "https://images.unsplash.com/photo-1559181567-c3190b008177?w=1200&q=80",
    sections: [
      {
        title: "Danger des chenilles processionnaires",
        content:
          "Les chenilles processionnaires sont couvertes de poils microscopiques (soies) chargés de substances urticantes. Au contact ou simplement à leur approche (les poils se dispersent dans l'air), elles provoquent des démangeaisons intenses, des éruptions cutanées, des réactions oculaires graves et des réactions allergiques pouvant nécessiter une hospitalisation. Pour les chiens et les chats, le contact avec les chenilles peut être fatal (nécrose de la langue).",
      },
      {
        title: "Traitement et prévention",
        content:
          "Nous intervenons sur vos pins et chênes pour éliminer les nids (pochons) et traiter les arbres. Le traitement peut être préventif (en automne avant la formation des nids) ou curatif (en hiver et au printemps). N'essayez jamais de retirer vous-même un nid de chenilles processionnaires : le risque d'exposition aux poils urticants est trop important.",
      },
    ],
    symptoms: [
      "Présence de pochons blancs dans les pins ou chênes (nids soyeux)",
      "Processions de chenilles au sol (file indienne)",
      "Démangeaisons ou plaques rouges sur la peau après passage sous un pin",
      "Animal de compagnie qui salive abondamment ou présente une gonflement de la bouche",
    ],
    process: [
      { step: "01", title: "Repérage", desc: "Identification et comptage des nids dans vos arbres." },
      { step: "02", title: "Traitement", desc: "Application d'insecticide biologique (Bt) ou retrait mécanique des nids selon la période." },
      { step: "03", title: "Prévention", desc: "Conseil sur les méthodes préventives (pièges, traitement en automne)." },
      { step: "04", title: "Suivi", desc: "Surveillance saisonnière pour détecter toute nouvelle colonisation." },
    ],
    faq: [
      { q: "Quand intervenir contre les chenilles processionnaires ?", a: "Idéalement en automne (traitement préventif) ou entre décembre et mars (les nids sont visibles et les chenilles peu mobiles). Au printemps, lors des processions, le risque est maximal." },
      { q: "Mon chien a touché des chenilles, que faire ?", a: "Consultez immédiatement un vétérinaire. Ne nettoyez pas la bouche de votre animal avec les mains nues et ne frottez pas. C'est une urgence vétérinaire." },
    ],
    relatedSlugs: ["frelons-guepes", "taupes"],
  },

  pigeons: {
    slug: "pigeons",
    name: "Pigeons & Volatiles",
    icon: "🐦",
    tagline: "Dépigeonnage et pose de filets anti-pigeons dans la Somme",
    description:
      "Les pigeons causent de graves dommages aux bâtiments et constituent un risque sanitaire. Leurs fientes corrodent les façades et transmettent des maladies. Action Nuisible 80 propose des solutions de dépigeonnage durables.",
    metaDescription:
      "Dépigeonnage Somme (80). Pose filets, pics anti-pigeons, effarouchement. Solutions durables pour particuliers et professionnels. Devis gratuit.",
    heroImage: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?w=1200&q=80",
    sections: [
      {
        title: "Dommages causés par les pigeons",
        content:
          "Les fientes de pigeons sont très acides et corrodent pierre, métal et béton. Elles dégradent les façades, bouchent les gouttières et créent des risques de glissade. Les pigeons transmettent également des maladies (ornithose, salmonellose, cryptococcose) et abritent des parasites (puces, acariens, poux). Pour les professionnels, leur présence peut entraîner des infractions sanitaires.",
      },
      {
        title: "Nos solutions anti-pigeons",
        content:
          "Nous proposons des solutions mécaniques durables : pose de filets anti-pigeons pour exclure les oiseaux de zones ouvertes, installation de pics anti-pigeons sur les rebords et corniches, systèmes de fils tendus. Ces méthodes sont humaines et conformes à la réglementation. Nous réalisons également le nettoyage et la désinfection des zones souillées.",
      },
    ],
    symptoms: [
      "Accumulation de fientes sur rebords, balcons, terrasses",
      "Présence de nids entre tuiles ou sur corniches",
      "Dégradation accélérée des façades",
      "Nuisances sonores (roucoulements)",
      "Présence d'ectoparasites (puces, acariens) dans le bâtiment",
    ],
    process: [
      { step: "01", title: "Diagnostic", desc: "Évaluation des zones de nidification et de perchage, identification des points d'entrée." },
      { step: "02", title: "Nettoyage", desc: "Décroutage et désinfection des zones souillées par les fientes." },
      { step: "03", title: "Pose des protections", desc: "Installation de filets, pics ou fils tendus selon les zones et l'architecture." },
      { step: "04", title: "Garantie", desc: "Vérification de l'efficacité du dispositif et retouches si nécessaire." },
    ],
    faq: [
      { q: "Peut-on tuer les pigeons ?", a: "Non, les pigeons sont protégés en France. Seules des méthodes de dissuasion et d'exclusion sont autorisées (filets, pics, fils). Des dérogations existent pour des situations exceptionnelles." },
      { q: "Les filets sont-ils visibles et esthétiques ?", a: "Nos filets professionnels sont quasi invisibles une fois en place. Nous choisissons la couleur et la maille adaptées à votre bâtiment." },
      { q: "Le dépigeonnage est-il efficace durablement ?", a: "Oui, les méthodes mécaniques bien installées sont permanentes. Les pigeons ne peuvent plus accéder aux zones protégées et cherchent d'autres sites." },
    ],
    relatedSlugs: ["deratisation", "cafards-blattes"],
  },
};
