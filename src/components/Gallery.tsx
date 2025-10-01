import React from 'react';
import shivaLingamAbhishekam from '@/assets/shiva-lingam-abhishekam.jpg';
import homamRitualFire from '@/assets/homam-ritual-fire.jpg';
import homamCeremonyCloseup from '@/assets/homam-ceremony-closeup.jpg';
import homamFamilyRitual from '@/assets/homam-family-ritual.jpg';
import navagrahaPooja from '@/assets/navagraha-pooja-setup.jpg';
import deityOffering from '@/assets/deity-offering-decoration.jpg';

const Gallery = () => {
  const galleryImages = [
    {
      src: shivaLingamAbhishekam,
      alt: 'శివలింగం అభిషేకం - దివ్య ప్రకాశం',
      title: 'శివ అభిషేకం'
    },
    {
      src: homamRitualFire,
      alt: 'హోమ కార్యక్రమం - పవిత్ర అగ్ని',
      title: 'హోమ కార్యక్రమం'
    },
    {
      src: homamCeremonyCloseup,
      alt: 'హోమ సంప్రదాయ ఆచారం',
      title: 'హోమ ఆచారం'
    },
    {
      src: homamFamilyRitual,
      alt: 'కుటుంబ హోమ కార్యక్రమం',
      title: 'కుటుంబ హోమం'
    },
    {
      src: navagrahaPooja,
      alt: 'నవగ్రహ పూజా అమరిక',
      title: 'నవగ్రహ పూజ'
    },
    {
      src: deityOffering,
      alt: 'దేవతా నైవేద్య అలంకరణ',
      title: 'దేవతా అలంకరణ'
    }
  ];

  return (
    <section className="py-16 md:py-20 xl:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-primary font-telugu-serif">
            మా గ్యాలరీ
          </h2>
          <p className="text-base md:text-lg xl:text-xl text-muted-foreground max-w-4xl mx-auto font-telugu-sans mb-6 md:mb-8">
            మా ఆధ్యాత్మిక సేవలు మరియు పవిత్ర కార్యక్రమాల చిత్రాలు
          </p>
          <div className="divider-sacred mx-auto w-32"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-sm md:text-base font-telugu-serif">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;