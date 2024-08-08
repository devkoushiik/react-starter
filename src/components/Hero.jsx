import { HERO } from "../constants";
import carlImg from "../assets/carl.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex min-h-screen flex-wrap items-center">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2"
      >
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
          {HERO.name}
          {/* <span className="text-md ml-6">{HERO.lastName}</span> */}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
      </motion.div>
      <div className="w-full md:w-1/2 lg:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-end"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={carlImg}
            width={550}
            height={550}
            alt="Carl Frank"
            className="rounded-3xl"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
