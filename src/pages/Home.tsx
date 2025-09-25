import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flame, Heart, Crown, BookOpen, Phone, MessageCircle } from 'lucide-react';
import ServiceIcon from '@/components/ServiceIcon';
import heroBanner from '@/assets/hero-banner.png';
import homamService from '@/assets/homam-service.jpg';
import abhishekamService from '@/assets/abhishekam-service.jpg';
import kalyanamService from '@/assets/kalyanam-service.jpg';
import vratamService from '@/assets/vratam-service.jpg';

const Home = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Flame,
      title: 'హోమాలు',
      subtitle: 'Homams',
      description: 'వైదిక సంప్రదాయాలతో అగ్ని కార్యక్రమాలు',
      englishDesc: 'Sacred fire rituals following vedic traditions',
      image: homamService,
      href: '/services#homams'
    },
    {
      icon: Heart,
      title: 'అభిషేకాలు',
      subtitle: 'Abhishekams',
      description: 'దేవతలకు పవిత్ర స్నానాలు',
      englishDesc: 'Sacred bathing rituals for deities',
      image: abhishekamService,
      href: '/services#abhishekams'
    },
    {
      icon: Crown,
      title: 'కళ్యాణాలు',
      subtitle: 'Kalyanams',
      description: 'దైవ దంపతుల పవిత్ర వివాహ వేడుకలు',
      englishDesc: 'Divine wedding ceremonies',
      image: kalyanamService,
      href: '/services#kalyanams'
    },
    {
      icon: BookOpen,
      title: 'వ్రతాలు',
      subtitle: 'Vratams',
      description: 'ధార్మిక నిబంధనలు మరియు ఉపవాసాలు',
      englishDesc: 'Religious observances and fasting rituals',
      image: vratamService,
      href: '/services#vratams'
    }
  ];

  const handleServiceClick = (href: string) => {
    const [path, hash] = href.split('#');
    navigate(path);
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919989101037";
    const teluguMessage = "నమస్తే గురువు గారు, నాకు సేవల గురించి సమాచారం కావాలి";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(teluguMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBanner} 
            alt="Guru Garu performing traditional pooja ceremony with sacred fire and spiritual rituals" 
            className="w-full h-full object-cover object-center sm:object-top md:object-center"
            style={{ 
              objectPosition: window.innerWidth < 768 ? 'center top' : 'center center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-telugu-serif">
              మన పూజ
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 font-medium">
              MANA POOJA
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed font-telugu-sans">
              సాంప్రదాయిక హిందూ ఆధ్యాత్మిక సేవలు<br />
              Traditional Hindu Spiritual Services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="btn-divine flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="font-telugu-sans">సంప్రదించండి</span>
              </button>
              
              <a
                href="tel:+919989101037"
                className="btn-sacred flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gradient-temple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-telugu-serif">
            స్వాగతం
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-secondary">
            Welcome to MANA POOJA
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
            <p className="font-telugu-sans">
              గురువు గారి మార్గదర్శకత్వంలో సాంప్రదాయిక హిందూ ఆధ్యాత్మిక సేవలు అందిస్తున్నాము. 
              మీ ఇంటికి వచ్చి లేదా దేవాలయంలో అన్ని రకాల హోమాలు, అభిషేకాలు, కళ్యాణాలు మరియు వ్రతాలు నిర్వహిస్తాము.
            </p>
            
            <p className="text-muted-foreground">
              Under the guidance of Guru Garu, we provide authentic Hindu spiritual services. 
              We perform all types of homams, abhishekams, kalyanams, and vratams at your home or temple 
              with complete devotion and traditional vedic procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-telugu-serif">
              మా సేవలు
            </h2>
            <h3 className="text-2xl font-semibold text-secondary mb-6">
              Our Services
            </h3>
            <div className="divider-sacred"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="card-divine overflow-hidden cursor-pointer group transform hover:scale-105 transition-all duration-300 animate-scale-divine" 
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleServiceClick(service.href)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} - ${service.subtitle}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary/90 p-3 rounded-full">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2 font-telugu-serif">
                    {service.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-secondary mb-3">
                    {service.subtitle}
                  </h4>
                  <p className="text-muted-foreground mb-2 font-telugu-sans">
                    {service.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {service.englishDesc}
                  </p>
                  
                  <div className="mt-4">
                    <span className="text-primary font-medium hover:text-primary-glow transition-colors">
                      మరింత తెలుసుకోండి →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-sacred text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-telugu-serif">
            ఆధ్యాత్మిక మార్గదర్శకత్వం కోసం
          </h2>
          <h3 className="text-2xl font-semibold mb-8">
            For Spiritual Guidance & Services
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-primary hover:bg-primary-glow hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-telugu-sans">WhatsApp లో మాట్లాడండి</span>
            </button>
            
            <div className="flex flex-col sm:flex-row gap-2 text-lg font-medium">
              <a href="tel:+919989101037" className="hover:text-accent transition-colors flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>99891 01037</span>
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="tel:+918886207347" className="hover:text-accent transition-colors flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>88862 07347</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;