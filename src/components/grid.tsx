import { motion } from 'framer-motion';
import "../App.css"

export function BackgroundGrid() {
  return (
    <div className="relative h-screen w-screen">
      <motion.div
        animate={{ 
            opacity: 1,
        }}
        className="moving-grid-background absolute h-[200%] w-full"
        initial={{ opacity: 20 }}

        transition={{ duration: 0.1, delay: 0.6 }}
      />
      <div className="absolute h-[100%] w-[100%] shadow-white dark:shadow-black shadow-[inset_0_0_5rem_9rem]" />
    </div>
  );
}