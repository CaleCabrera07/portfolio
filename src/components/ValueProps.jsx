import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const props = [
  {
    icon: "fa-solid fa-rocket",
    stat: "3+ Products Shipped",
    sub: "Real products, live in production, used by real users.",
  },
  {
    icon: "fa-solid fa-layer-group",
    stat: "End-to-End Ownership",
    sub: "Design, development, and deployment — all under one roof.",
  },
  {
    icon: "fa-solid fa-clock",
    stat: "On Time. Every Time.",
    sub: "We respect your timeline and keep you informed at every step.",
  },
];

const ValuePropCard = ({ icon, stat, sub, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.6)}
    className="green-pink-gradient p-[1px] rounded-2xl flex-1 min-w-[240px] max-w-[340px]"
  >
    <div className="bg-tertiary rounded-2xl p-8 flex flex-col items-center text-center h-full gap-4">
      <i className={`${icon} text-[40px] text-[#915EFF]`} />
      <h3 className="text-white font-bold text-[20px]">{stat}</h3>
      <p className="text-secondary text-[14px] leading-[24px]">{sub}</p>
    </div>
  </motion.div>
);

const ValueProps = () => (
  <motion.div variants={textVariant()} className="w-full">
    <div className="flex flex-wrap justify-center gap-8 mt-4">
      {props.map((p, i) => (
        <ValuePropCard key={p.stat} index={i} {...p} />
      ))}
    </div>
  </motion.div>
);

export default SectionWrapper(ValueProps, "");
