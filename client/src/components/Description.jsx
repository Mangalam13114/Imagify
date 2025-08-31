import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold">Create AI Images</h1>
      <p className="text-gray-500 mb-8">Turn your imagination in visuals</p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          src={assets.sample_img_1}
          alt=""
          className="w-80 xl:w-96 rounded-lg"
        />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Bring your imagination to life with the power of AI. Our
            text-to-image generator transforms simple words into detailed,
            high-quality visuals within seconds. Just describe what you want to
            see, and the tool will create unique images tailored to your ideas.
            From creative illustrations and concept art to product mockups and
            social media content, the possibilities are endless.
          </p>
          <p className="text-gray-600 mb-4">
            You don’t need design skills or complex software—simply type,
            generate, and download. Whether you’re an artist looking for
            inspiration, a student working on projects, or a business in need of
            quick visuals, this generator makes creativity accessible to
            everyone.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
