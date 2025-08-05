import { motion } from "framer-motion";
import { clsx } from "clsx";

interface Props {
  id: string;
  title: string;
  className?: string;
}

const SectionHeading = ({ id, title, className = "" }: Props) => (
  <motion.h2
    id={`${id}-heading`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={clsx(
      "mb-10 text-2xl font-bold leading-tight tracking-tight sm:text-3xl",
      className
    )}
  >
    {title}
  </motion.h2>
);

export default SectionHeading;
