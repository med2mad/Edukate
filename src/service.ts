import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor() { }

  searchText: string = '';

  cours = [
    {
      id: 1,
      title: "Développement logiciel",
      category: "Développement informatique",
      description: "Ce cours vous initie à la création de logiciels efficaces, de l’analyse des besoins à la mise en production. Vous apprendrez à structurer du code propre, gérer des projets et utiliser des langages comme Java ou Python dans un environnement professionnel.",
      image: "courses-50.jpg",
      Instructor: "Jean Paul",
      prix: 199,
      sessions: 25,
      langue: "Français",
      niveau: "débutant",
      duree: 1.5
    },
    {
      id: 2,
      title: "Développement web",
      category: "Développement informatique",
      description: "Apprenez à construire des sites web dynamiques et modernes en maîtrisant HTML, CSS, JavaScript et les frameworks comme Angular ou React. Ce cours vous guidera à travers les bonnes pratiques du développement front-end et back-end pour des applications robustes.",
      image:"courses-50.jpg",
      Instructor:"Jean Paul",
      prix:199,
      sessions:25,
      langue:"Français",
      niveau : "Avancé",
      duree: 1.5
    },
    {
      id: 3,
      title: "Conception et Web design",
      category: "Développement informatique",
      description: "Maîtrisez les fondamentaux du design web en créant des interfaces esthétiques et intuitives. Ce cours couvre les principes de l’UX/UI, la hiérarchie visuelle, la typographie, les palettes de couleurs et l’utilisation d’outils comme Figma ou Adobe XD.",
      image:"courses-50.jpg",
      Instructor:"Jean Paul",
      prix:199,
      sessions:25,
      langue:"Français",
      niveau : "débutant",
      duree: 1.5
    },
    {
      id: 4,
      title: "Bases de données",
      category: "Big Data et IA",
      description: "Découvrez comment stocker, organiser et interroger des données efficacement. Vous apprendrez à utiliser des systèmes de gestion comme MySQL ou MongoDB, à créer des relations entre tables et à écrire des requêtes SQL pour extraire les données utiles.",
      image:"courses-10.jpg",
      Instructor:"Anne Sophie",
      prix:99,
      sessions:15,
      langue:"Français",
      niveau : "débutant",
      duree: 1
    },
    {
      id: 5,
      title: "Infographie: traitement d'images",
      category: "Infographie",
      description: "Ce cours vous enseigne les bases de la retouche photo, du dessin numérique et de la création visuelle. Vous utiliserez des outils comme Photoshop ou GIMP pour améliorer vos images, créer des compositions et comprendre les formats graphiques standards.",
      image:"courses-40.jpg",
      Instructor:"Marie Claire",
      prix:99,
      sessions:10,
      langue:"Français",
      niveau : "débutant",
      duree: 1.5
    },
    {
      id: 6,
      title: "Infographie: traitement de vidéos",
      category: "Infographie",
      description: "Apprenez à monter et éditer des vidéos à l’aide de logiciels professionnels comme Adobe Premiere Pro ou DaVinci Resolve. Ce cours couvre la narration visuelle, le découpage, les effets de transition, l’ajustement du son et l’exportation vidéo.",
      image:"courses-40.jpg",
      Instructor:"Marie Claire",
      prix:99,
      sessions:10,
      langue:"Français",
      niveau : "débutant",
      duree: 1.5
    },
    {
      id: 7,
      title: "Sécurité des applications web",
      category: "Développement informatique",
      description: "Protégez vos applications contre les failles courantes comme les injections SQL, les attaques XSS et CSRF. Ce cours vous apprend à auditer un code, corriger les vulnérabilités et suivre les normes de sécurité OWASP pour garantir des services fiables.",
      image:"courses-50.jpg",
      Instructor:"Jean Paul",
      prix:299,
      sessions:25,
      langue:"Anglais",
      niveau : "Avancé",
      duree: 2
    },
    {
      id: 8,
      title: "Big Data et IA",
      category: "Big Data et IA",
      description: "Explorez l’intelligence artificielle à travers le machine learning. Vous apprendrez à traiter des données, entraîner des modèles avec scikit-learn et Python, interpréter les résultats et les améliorer pour résoudre des problèmes concrets dans différents domaines.",
      image:"courses-10.jpg",
      Instructor:"Anne Sophie",
      prix:299,
      sessions:25,
      langue:"Anglais",
      niveau : "Avancé",
      duree: 2
    },
    {
      id: 9,
      title: "Réseaux informatiques",
      category: "Réseaux informatiques",
      description: "Comprenez le fonctionnement d’Internet et des réseaux locaux. Ce cours aborde les protocoles, le modèle OSI, la configuration d’un réseau, la sécurité des transmissions et les outils d’analyse comme Wireshark pour diagnostiquer et maintenir une infrastructure.",
      image:"courses-60.jpg",
      Instructor:"Sarah Jade",
      prix:199,
      sessions:25,
      langue:"Français",
      niveau : "débutant",
      duree: 1.5
    },
    {
      id: 10,
      title: "Cybersécurité",
      category: "Réseaux informatiques",
      description: "Apprenez à protéger les systèmes informatiques contre les menaces numériques. Ce cours couvre les attaques courantes, la gestion des identifiants, le chiffrement, les audits de sécurité et les bonnes pratiques à adopter dans les environnements professionnels.",
      image:"courses-60.jpg",
      Instructor:"Sarah Jade",
      prix:299,
      sessions:20,
      langue:"Français",
      niveau : "Avancé",
      duree: 2
    },
    {
      id: 11,
      title: "Version control avec Git et GitHub",
      category: "Développement informatique",
      description: "Maîtrisez la gestion de versions avec Git et la collaboration via GitHub. Vous apprendrez à suivre les modifications de code, à créer des branches, résoudre des conflits et collaborer efficacement en équipe sur des projets logiciels partagés.",
      image:"courses-50.jpg",
      Instructor:"Jean Paul",
      prix:99,
      sessions:10,
      langue:"Français",
      niveau : "débutant",
      duree: 1
    },
    {
      id: 12,
      title: "Développement de jeux vidéo",
      category: "Développement informatique",
      description: "Plongez dans le monde du jeu vidéo en apprenant à créer vos propres jeux. Ce cours vous guide à travers la logique de gameplay, la modélisation, les animations et l’interaction avec Unity ou Unreal Engine pour concevoir des expériences ludiques captivantes.",
      image:"courses-50.jpg",
      Instructor:"Jean Paul",
      prix:300,
      sessions:30,
      langue:"Anglais",
      niveau : "Avancé",
      duree: 2.5
    },
    {
      id: 13,
      title: "Commercialisation",
      category: "Finance et Comptabilité de base",
      description: "Découvrez comment positionner, promouvoir et vendre efficacement un produit ou un service. Le cours aborde les techniques de marketing, l’analyse du marché, la communication commerciale et la relation client pour optimiser les ventes dans divers contextes.",
      image:"courses-20.jpg",
      Instructor:"Pierre Louis",
      prix:99,
      sessions:15,
      langue:"Français",
      niveau : "débutant",
      duree: 1
    },
    {
      id: 14,
      title: "Comptabilité de base",
      category: "Finance et Comptabilité de base",
      description: "Initiez-vous aux principes fondamentaux de la comptabilité : bilans, journaux, écritures comptables et gestion financière. Ce cours est idéal pour ceux qui souhaitent comprendre la santé financière d’une organisation ou gérer une petite entreprise.",
      image: "courses-20.jpg",
      Instructor:"Pierre Louis",
      prix:99,
      sessions:15,
      langue:"Français",
      niveau : "débutant",
      duree: 1.5
    },
    {
      id: 15,
      title: "Anglais professionnel",
      category: "Langues professionnel",
      description: "Développez votre anglais dans un contexte professionnel. Ce cours vous aide à communiquer clairement lors de réunions, entretiens ou courriels, en enrichissant votre vocabulaire, votre grammaire et votre aisance orale dans le milieu du travail.",
      image: "courses-30.jpg",
      Instructor:"André René",
      prix:99,
      sessions:15,
      langue:"Anglais",
      niveau : "débutant",
      duree: 1
    },
    {
      id: 16,
      title: "Français professionnel",
      category: "Langues professionnel",
      description: "Perfectionnez votre maîtrise du français écrit et oral dans un cadre professionnel. Vous apprendrez à rédiger des documents, à communiquer en réunion et à utiliser un langage adapté aux échanges formels en entreprise ou en administration.",
      image: "courses-30.jpg",
      Instructor:"André René",
      prix:99,
      sessions:15,
      langue:"Français",
      niveau : "débutant",
      duree: 1
    }
  ];


  categories = [
    "Développement informatique",
    "Réseaux informatiques",
    "Infographie",
    "Finance et Comptabilité de base",
    "Langues professionnel",
    "Big Data et IA"
  ]


}
