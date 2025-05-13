"use client";

import { motion } from 'framer-motion';
import { FaLaptopCode, FaCode, FaChartLine, FaCommentDots, FaMobileAlt, FaBell, FaLightbulb } from 'react-icons/fa';
import { FloatingCircle, Zigzag, Badge, WavyBackground } from '../DecorativeElements';

const features = [
  {
    icon: <FaMobileAlt className="text-blue-500" />,
    title: "Application Mobile",
    description: "Interface intuitive pour soumettre et suivre les réclamations, suggestions et feedback"
  },
  {
    icon: <FaCommentDots className="text-purple-500" />,
    title: "Analyse de Sentiment",
    description: "Traitement automatique des messages avec évaluation du sentiment, de la gravité et de l'urgence"
  },
  {
    icon: <FaChartLine className="text-indigo-500" />,
    title: "Dashboard Analytique",
    description: "Visualisation en temps réel des tendances et alertes pour les décideurs de Senelec"
  },
  {
    icon: <FaBell className="text-pink-500" />,
    title: "Alertes Automatiques",
    description: "Notifications immédiates sur les problèmes critiques détectés par l'IA"
  }
];

const Project = () => {
  return (
    <section id="project" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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
            <Badge className="bg-blue-100 text-blue-800 mb-4">NOTRE PROJET</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              <span className="inline-flex items-center">
                <span className="mr-2">💡</span> 
                Senelec Voice & Feedback Insight
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
              Solution intelligente d&apos;analyse et gestion des retours clients pour améliorer la qualité de service de Senelec
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-8 text-white relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16 blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full transform -translate-x-16 translate-y-16 blur-xl"></div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <h3 className="text-2xl font-bold mb-2">À propos du projet</h3>
                <p className="text-white/90 max-w-3xl leading-relaxed">
                  Pour améliorer la relation client et la réactivité de Senelec face aux problématiques rencontrées par ses usagers,
                  nous proposons une solution complète de capture et d&apos;analyse intelligente des retours clients provenant de multiples canaux
                  (application mobile, réseaux sociaux, emails).
                </p>
                <p className="text-white/90 max-w-3xl mt-3 leading-relaxed">
                  Grâce à l&apos;intelligence artificielle, le système analyse automatiquement les messages pour en extraire le sentiment,
                  évaluer la gravité des problèmes signalés, et déterminer leur niveau d&apos;urgence. Ces données sont ensuite
                  présentées aux décideurs via un tableau de bord interactif offrant des alertes et recommandations stratégiques en temps réel.
                </p>
              </motion.div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <FaLaptopCode className="text-blue-600" />
                    </span>
                    Comment fonctionne notre solution
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    {[
                      "Les clients soumettent leurs feedback via l'application mobile 'Senelec Connect'",
                      "L'IA collecte et analyse également les messages des réseaux sociaux et emails",
                      "Le système traite automatiquement les messages pour en extraire le sentiment et l'urgence",
                      "Les plaintes sont classifiées par type, région et niveau de priorité",
                      "Le dashboard présente en temps réel les tendances et alertes aux décideurs de Senelec"
                    ].map((feature, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                      <FaCode className="text-purple-600" />
                    </span>
                    Technologies à utiliser
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['Flutter/React Native', 'Firebase', 'Python', 'TensorFlow','PHP', 'React',].map((tech, index) => (
                      <motion.div
                        key={tech}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 flex items-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * index, duration: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      >
                        <span className="font-medium text-gray-800">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              <div className="border-t border-gray-100 pt-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">Les points forts de notre solution</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                        {feature.icon}
                      </div>
                      <h5 className="font-semibold text-gray-800 mb-2">{feature.title}</h5>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="mt-12">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <FaLightbulb className="text-blue-600" />
                    </span>
                    Avantages de notre solution
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <h5 className="font-medium text-gray-800 mb-2">Pour les clients</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Communication facilitée avec l&apos;entreprise</li>
                        <li>• Suivi en temps réel de leurs réclamations</li>
                        <li>• Interface intuitive avec support de messages vocaux</li>
                        <li>• Notifications automatiques sur les résolutions</li>
                      </ul>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <h5 className="font-medium text-gray-800 mb-2">Pour Senelec</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Vision globale des retours clients en temps réel</li>
                        <li>• Identification rapide des zones problématiques</li>
                        <li>• Prise de décision stratégique facilitée</li>
                        <li>• Amélioration continue de la qualité de service</li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* <div className="mt-12 text-center">
                <Link 
                  href="https://www.figma.com/design/EQLB41iG5osxdOT0laPzaY/Untitled?node-id=0-1&t=htOHAtwo9yvsfrC3-1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <FaFigma className="text-xl" />
                  <span>Voir la maquette sur Figma</span>
                </Link>
              </div> */}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <motion.div
              className="bg-white rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📊</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Analyse en temps réel</h4>
              <p className="text-gray-600">
                Traitement instantané des retours clients avec analyse de sentiment et classification automatique
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🔔</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Alertes intelligentes</h4>
              <p className="text-gray-600">
                Détection automatique des problèmes critiques avec notifications immédiates aux équipes concernées
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🧠</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Recommandations stratégiques</h4>
              <p className="text-gray-600">
                Suggestions d&apos;actions prioritaires générées par IA pour améliorer la satisfaction client
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
