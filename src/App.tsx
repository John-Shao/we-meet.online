/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ArticleCard } from './components/ArticleCard';
import { Footer } from './components/Footer';
import { mockArticles } from './data/mockArticles';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-gray-900 selection:bg-black selection:text-white flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col">
        <Hero />
        
        <div id="latest" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between border-b border-gray-200 pb-5">
            <h2 className="font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              最新文章
            </h2>
          </div>
          
          <div className="flex flex-col gap-4 sm:gap-2">
            {mockArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
