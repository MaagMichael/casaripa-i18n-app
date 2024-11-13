import heroImages from "@/data/hero.json";
import Image from "next/image";

interface HeroImage {
  label: string;
  url: string;
}

// interface HeroImagesData {
//   HeroImages: HeroImage[];
// }

export default function HeroImage() {
  return (
    <div className="w-full h-[40vh] md:h-[60vh] lg:h-[80vh] relative">

      {heroImages.HeroImage.map((image, index) => (
        <Image
          key={index}
          src={image.url}
          alt={image.label}
        //   width={4032}
        //   height={3042}
          fill
          style={{ objectFit: 'cover' }}        
        />
      ))}

    </div>
  );
}
