import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import Badge from "../Badge";
import LinkButton from "../LinkButton";

const wrapper: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.22,
    },
  },
};

const image: Variants = {
  offscreen: {
    opacity: 0,
    y: 10,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.22,
    },
  },
};

const text: Variants = {
  offscreen: {
    opacity: 0,
    x: -10,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.22,
    },
  },
};

type Link = {
  text: string;
  href: string;
};

type PersonalWorkCardProps = {
  children?: React.ReactNode;
  datespan: string;
  name: string;
  description: string;
  links?: Link[];
  tags: string[];
};

const PersonalWorkCard: React.FC<PersonalWorkCardProps> = ({
  children,
  datespan,
  name,
  description,
  links,
  tags,
}) => {
  const { t } = useTranslation("curriculum", { keyPrefix: "personal_work" });

  return (
    <motion.div
      variants={wrapper}
      className="grid gap-8 sm:grid-cols-2 sm:gap-4"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={text}>
        <motion.span
          variants={text}
          className="mt-2 text-sm font-normal leading-5 text-gray-500"
        >
          {datespan}
        </motion.span>
        <motion.h4
          variants={text}
          className="mt-2 text-base font-medium leading-6 text-gray-900"
        >
          {name}
        </motion.h4>
        <motion.p
          variants={text}
          className="mt-2 text-base font-normal leading-6 text-gray-500 sm:text-sm sm:leading-5"
        >
          {description}
        </motion.p>
        <div className="flex space-x-4">
          {links?.map((link) => (
            <motion.div key={link.text} variants={text}>
              <LinkButton className="mt-2" text={link.text} href={link.href} />
            </motion.div>
          ))}
        </div>
        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} value={tag} />
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={image}
        className="order-first sm:order-last sm:place-self-end"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default PersonalWorkCard;
