"use client";

import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import {
  FloatingCircle,
  Zigzag,
  Badge,
  WavyBackground,
} from "../DecorativeElements";
import GithubImage from "../GithubImage";

// Structure des données pour les distinctions
const distinctions = [
  {
    id: 1,
    title: "Hackathon Tech Innov 2025 - 2ème Prix",
    description:
      "Récompense pour notre projet technologique pour améliorer la gestion des chantiers dans le BTP",
    linkedinUrl:
      "https://www.linkedin.com/posts/bureau-des-el%C3%A8ves-ept_f%C3%A9licitations-nous-avons-limmense-plaisir-activity-7357885540358078465-P5Ap?",
    imageUrl: "/placeholders/techinnov.jpeg", // Image SVG représentant le prix
  },
  {
    id: 2,
    title: "Hackathon Senelec 2025 - 3ème Prix",
    description:
      "Notre équipe a développé une solution innovante pour optimiser la gestion des retours clients dans le secteur de l'énergie",
    linkedinUrl:
      "https://www.linkedin.com/posts/mamadou-falilou-diaw-4249a726b_hackathon-innovation-senelec-activity-7354284259068518400-jyeQ",
    imageUrl: "/placeholders/senelec.jpeg", // Image SVG représentant le prix
  },
  {
    id: 3,
    title: "Prix Polytech IT Day",
    description:
      "Récompense pour notre projet technologique présenté lors de la journée de l'innovation à l'École Polytechnique de Thiès",
    linkedinUrl:
      "https://www.linkedin.com/posts/ibrahima-dia-1b6992294_itday-ept-hackathon-activity-7339381057441423360-bplI",
    imageUrl: "/placeholders/itday.jpeg", // Image SVG représentant le prix
  },
  {
    id: 4,
    title: "Prix Bitcoin Conference 2025",
    description:
      "Reconnaissance pour notre contribution innovante dans le domaine de la blockchain et des technologies Bitcoin",
    linkedinUrl:
      "https://www.linkedin.com/posts/ibrahima-dia-1b6992294_bitcoin-stacks-sbtc-activity-7335055952271859715-YoD8",
    imageUrl: "/placeholders/paysats.jpeg", // Image SVG représentant le prix
  },
];

const Distinction = () => {
  return (
    <section
      id="distinction"
      className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Éléments décoratifs */}
      <FloatingCircle
        size="w-64 h-64"
        color="bg-blue-300/10"
        className="left-[-5%] top-[10%]"
      />
      <FloatingCircle
        size="w-96 h-96"
        color="bg-purple-300/10"
        className="right-[-10%] bottom-[5%]"
        delay={2}
      />
      <Zigzag className="top-24 right-24 z-0" color="stroke-blue-200" />
      <WavyBackground className="opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">
              NOS DISTINCTIONS
            </Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              <span className="inline-flex items-center">
                <span className="mr-2">🏆</span>
                Prix et Reconnaissances
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les distinctions qui témoignent de l&apos;excellence et
              de l&apos;impact de notre équipe
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {distinctions.map((distinction) => (
              <motion.div
                key={distinction.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: distinction.id * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="relative h-48 overflow-hidden">
                  <GithubImage
                    src={distinction.imageUrl}
                    alt={distinction.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 p-4">
                      <motion.a
                        href={distinction.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full transition-colors inline-flex"
                        whileHover={{ y: -3, scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <FaLinkedin className="text-white text-xl" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {distinction.title}
                  </h3>
                  {/* <p className="text-gray-600">{distinction.description}</p> */}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 italic">
              Ces distinctions reflètent notre engagement à développer des
              solutions innovantes et à fort impact social.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Distinction;
