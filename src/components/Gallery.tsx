import React from 'react';
import traditionalHomam from '@/assets/traditional-homam-ceremony.jpg';
import sacredAbhishekam from '@/assets/sacred-abhishekam-ritual.jpg';
import divineKalyanam from '@/assets/divine-kalyanam-ceremony.jpg';
import traditionalVratam from '@/assets/traditional-vratam-ceremony.jpg';
import chandiHomam from '@/assets/chandi-homam.jpg';
import ganapatiHomam from '@/assets/ganapati-homam.jpg';
import navagrahaHomam from '@/assets/navagraha-homam.jpg';
import ayushyaRudraHomam from '@/assets/ayushya-rudra-homam.jpg';
import shivaAbhishekam from '@/assets/shiva-abhishekam.jpg';
import ganeshaAbhishekam from '@/assets/ganesha-abhishekam.jpg';
import venkateswaraKalyanam from '@/assets/venkateswara-kalyanam.jpg';
import shivaparvatikalyanam from '@/assets/shivaparvati-kalyanam.jpg';
import varalakshmiVratam from '@/assets/varalakshmi-vratam.jpg';
import vinayakaChavithiVratam from '@/assets/vinayaka-chavithi-vratam.jpg';
import templeAmbiance from '@/assets/temple-spiritual-ambiance.jpg';

const Gallery = () => {
  const galleryImages = [
    {
      src: traditionalHomam,
      alt: 'సాంప్రదాయిక హోమ కార్యక్రమం',
      title: 'హోమ కార్యక్రమం'
    },
    {
      src: sacredAbhishekam,
      alt: 'పవిత్ర అభిషేక రిచువల్',
      title: 'అభిషేక సేవ'
    },
    {
      src: divineKalyanam,
      alt: 'దైవిక కళ్యాణ వేడుక',
      title: 'కళ్యాణ వేడుక'
    },
    {
      src: traditionalVratam,
      alt: 'సాంప్రదాయిక వ్రత కార్యక్రమం',
      title: 'వ్రత కార్యక్రమం'
    },
    {
      src: chandiHomam,
      alt: 'చండీ హోమం',
      title: 'చండీ హోమం'
    },
    {
      src: ganapatiHomam,
      alt: 'గణపతి హోమం',
      title: 'గణపతి హోమం'
    },
    {
      src: navagrahaHomam,
      alt: 'నవగ్రహ హోమం',
      title: 'నవగ్రహ హోమం'
    },
    {
      src: ayushyaRudraHomam,
      alt: 'ఆయుష్య రుద్ర హోమం',
      title: 'ఆయుష్య రుద్ర హోమం'
    },
    {
      src: shivaAbhishekam,
      alt: 'శివ అభిషేకం',
      title: 'శివ అభిషేకం'
    },
    {
      src: ganeshaAbhishekam,
      alt: 'గణేశ అభిషేకం',
      title: 'గణేశ అభిషేకం'
    },
    {
      src: venkateswaraKalyanam,
      alt: 'వెంకటేశ్వర కళ్యాణం',
      title: 'వెంకటేశ్వర కళ్యాణం'
    },
    {
      src: shivaparvatikalyanam,
      alt: 'శివ పార్వతి కళ్యాణం',
      title: 'శివ పార్వతి కళ్యాణం'
    },
    {
      src: varalakshmiVratam,
      alt: 'వరలక్ష్మి వ్రతం',
      title: 'వరలక్ష్మి వ్రతం'
    },
    {
      src: vinayakaChavithiVratam,
      alt: 'వినాయక చవితి వ్రతం',
      title: 'వినాయక చవితి వ్రతం'
    },
    {
      src: templeAmbiance,
      alt: 'ఆలయ ఆధ్యాత్మిక వాతావరణం',
      title: 'ఆలయ వాతావరణం'
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