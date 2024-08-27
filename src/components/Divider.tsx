import { motion } from "framer-motion";

const Divider = () => {
  return (
    <div className="relative mx-0 py-8 lg:-mx-10">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="w-full border-t border-dashed border-gray-300"
        />
      </div>
    </div>
  );
};

export default Divider;
