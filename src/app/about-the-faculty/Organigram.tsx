import Image from "next/image";
import React from "react";

const Organigram: React.FC = () => {
  return (
    <div>
      <div className=" mb-8 text-center">
        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl capitalize">
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
