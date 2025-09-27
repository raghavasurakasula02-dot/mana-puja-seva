import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flame, Heart, Crown, BookOpen, Phone, MessageCircle } from 'lucide-react';
import ServiceIcon from '@/components/ServiceIcon';
import guruTemple from '@/assets/guru-temple-meditation.jpg';
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
      description: 'అగ్ని దేవుడికి అర్పించే పవిత్ర వైదిక కార్యక్రమాలు. ఆయుష్య రుద్ర హోమం, చండీ హోమం, గణపతి హోమం, నవగ్రహ శాంతి హోమం వంటి అన్ని రకాల హోమాలను సాంప్రదాయిక విధానాలతో నిర్వహిస్తాము.',
      image: homamService,
      href: '/services#homams'
    },
    {
      icon: Heart,
      title: 'అభిషేకాలు',
      description: 'దేవతలకు పవిత్ర పాలు, జలం, పంచామృతంతో చేసే దైవిక స్నాన విధానాలు. పాలాభిషేకం, జలాభిషేకం, పంచామృత అభిషేకం వంటి సేవలతో దైవ కృపను పొందగలుగుతారు.',
      image: abhishekamService,
      href: '/services#abhishekams'
    },
    {
      icon: Crown,
      title: 'కళ్యాణాలు',
      description: 'వెంకటేశ్వర కళ్యాణం, గోదాదేవి కళ్యాణం, శివ-పార్వతి కళ్యాణం వంటి దైవ దంపతుల పవిత్ర వివాహ వేడుకలు. కుటుంబ సుఖశాంతులు మరియు వైవాహిక జీవనంలో ఐక్యత కోసం నిర్వహించబడతాయి.',
      image: kalyanamService,
      href: '/services#kalyanams'
    },
    {
      icon: BookOpen,
      title: 'వ్రతాలు',
      description: 'సత్యనారాయణ వ్రతం, వరలక్ష్మి వ్రతం, వినాయక చవితి వ్రతం వంటి పవిత్ర ధార్మిక అనుష్ఠానాలు. మనోకోరికల నెరవేర్పు మరియు దైవ అనుగ్రహం కోసం ఈ వ్రతాలను నిర్వహిస్తాము.',
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
            src={guruTemple}
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-telugu-serif text-divine">
              మన పూజ
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed font-telugu-sans">
              సనాతన ధర్మ సంప్రదాయాలను అనుసరించి<br />
              పవిత్ర వైదిక ఆధ్యాత్మిక సేవలు
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="btn-divine flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="font-telugu-sans">గురువు గారితో మాట్లాడండి</span>
              </button>
              
              <a
                href="tel:+919989101037"
                className="btn-sacred flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span className="font-telugu-sans">ఫోన్ చేయండి</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gradient-temple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-telugu-serif">
            స్వాగతం మన పూజకు
          </h2>
          <p className="text-xl font-telugu-sans text-secondary mb-8">
            దైవ కృపను పొందడానికి మీకు అవసరమైన అన్ని ఆధ్యాత్మిక సేవలు
          </p>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
            <p className="font-telugu-sans text-center">
              గురువు గారి అనుభవం మరియు వైదిక జ్ఞానంతో సనాతన ధర్మ సంప్రదాయాలను అనుసరించి 
              అన్ని రకాల హిందూ ఆధ్యాత్మిక సేవలను అందిస్తున్నాము. 
            </p>
            
            <p className="font-telugu-sans text-center">
              మీ ఇంట్లో లేదా దేవాలయంలో పూర్ణ భక్తి శ్రద్ధలతో వైదిక విధానాలను అనుసరించి 
              హోమాలు, అభిషేకాలు, కళ్యాణాలు, వ్రతాలను నిర్వహిస్తాము. 
              దైవ కృపను పొందడానికి మరియు జీవితంలో సుఖశాంతులను పొందడానికి మా సేవలను ఉపయోగించుకోండి.
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
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-telugu-sans mb-6">
              సనాతన ధర్మ సంప్రదాయాలను అనుసరించి, వైదిక విధానాలతో నిర్వహించబడే పవిత్ర సేవలు
            </p>
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
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} spiritual service`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary/90 p-3 rounded-full glow-divine">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1 font-telugu-serif">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 font-telugu-sans leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-medium hover:text-primary-glow transition-colors font-telugu-sans">
                      వివరాలు చూడండి →
                    </span>
                    <div className="bg-gradient-divine p-2 rounded-full">
                      <service.icon className="h-4 w-4 text-white" />
                    </div>
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
            ఆధ్యాత్మిక మార్గదర్శకత్వం కోసం సంప్రదించండి
          </h2>
          <p className="text-xl font-telugu-sans mb-8">
            మీ కుటుంబానికి దైవ దీవెనలు మరియు శుభాలు కలుగాలని కోరుకుంటున్నాము
          </p>
          
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