import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flame, Heart, Crown, BookOpen, Phone, MessageCircle } from 'lucide-react';
import ServiceIcon from '@/components/ServiceIcon';
import heroBanner from '@/assets/hero-banner.png';

const Home = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Flame,
      title: 'హోమాలు',
      subtitle: 'Homams',
      href: '/services#homams'
    },
    {
      icon: Heart,
      title: 'అభిషేకాలు',
      subtitle: 'Abhishekams',
      href: '/services#abhishekams'
    },
    {
      icon: Crown,
      title: 'కళ్యాణాలు',
      subtitle: 'Kalyanams',
      href: '/services#kalyanams'
    },
    {
      icon: BookOpen,
      title: 'వ్రతాలు',
      subtitle: 'Vratams',
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
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBanner} 
            alt="Guru Garu performing traditional pooja" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="animate-scale-divine" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceIcon
                  icon={service.icon}
                  title={service.title}
                  subtitle={service.subtitle}
                  href={service.href}
                  onClick={() => handleServiceClick(service.href)}
                />
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