import Image from "next/image";
import React from "react";

const Organigram: React.FC = () => {
  return (
    <div>
      <div className=" mb-8 text-center">
        <h3 className="mb-5 block w-full bg-gradient-to-b from-black dark:from-white dark:to-black to-gray-500  bg-clip-text font-bold text-transparent text-3xl sm:text-3xl capitalize">
          Organigram of the faculty
        </h3>
        <p className="text-gray-400 mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
      </div>
      <div className="relative aspect-square">
        <Image
          src="https://fs.univ-tlemcen.dz/assets/uploads/Sans%20titre_5.jpg"
          fill
          sizes="(100vw - 2rem) (100vw - 2rem)"
          alt="Image Description"
        />
      </div>
    </div>
  );
};

export default Organigram;
