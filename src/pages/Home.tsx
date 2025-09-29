import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flame, Heart, Crown, BookOpen, Phone, MessageCircle } from 'lucide-react';
import ServiceIcon from '@/components/ServiceIcon';
import Gallery from '@/components/Gallery';
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
      <section className="relative min-h-screen flex items-center justify-center py-8 md:py-12 xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-4 md:space-y-6 xl:space-y-8 order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-primary font-telugu-serif animate-fade-in leading-tight">
                మన పూజ
              </h1>
              
              <div className="space-y-3 md:space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p className="text-lg sm:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-secondary font-telugu-sans leading-relaxed">
                  సనాతన ధర్మ సంప్రదాయాలను అనుసరించి
                </p>
                <p className="text-base sm:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-muted-foreground font-telugu-sans leading-relaxed">
                  పవిత్ర వైదిక ఆధ్యాత్మిక సేవలు
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-4 md:pt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <button
                  onClick={handleWhatsAppClick}
                  className="btn-divine flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 text-base font-medium"
                >
                  <MessageCircle className="h-5 w-5" />
                  గురువు గారితో మాట్లాడండి
                </button>
                
                <a
                  href="tel:+919989101037"
                  className="btn-sacred flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 text-base font-medium"
                >
                  <Phone className="h-5 w-5" />
                  ఫోన్ చేయండి
                </a>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.3s' }}>
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl glow-divine">
                <img 
                  src={guruTemple} 
                  alt="గురువు గారు పవిత్ర ఆలయంలో ధ్యానంలో" 
                  className="w-full h-[350px] sm:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-telugu-serif mb-3">మా గురువు గారు</h3>
                  <p className="text-base sm:text-lg lg:text-xl opacity-95 font-telugu-sans">పవిత్ర ఆలయంలో ఆధ్యాత్మిక సేవలు</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 md:py-16 xl:py-20 bg-gradient-temple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 text-primary font-telugu-serif">
            స్వాగతం మన పూజకు
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl font-telugu-sans text-secondary mb-8 md:mb-12 max-w-4xl mx-auto">
            దైవ కృపను పొందడానికి మీకు అవసరమైన అన్ని ఆధ్యాత్మిక సేవలు
          </p>
          
          <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 text-base md:text-lg xl:text-xl leading-relaxed">
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
      <section className="py-12 md:py-16 xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-primary font-telugu-serif">
              మా సేవలు
            </h2>
            <p className="text-base md:text-lg xl:text-xl text-muted-foreground max-w-4xl mx-auto font-telugu-sans mb-6 md:mb-8">
              సనాతన ధర్మ సంప్రదాయాలను అనుసరించి, వైదిక విధానాలతో నిర్వహించబడే పవిత్ర సేవలు
            </p>
            <div className="divider-sacred mx-auto w-32"></div>
          </div>

          {/* Main Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 xl:gap-10 max-w-7xl mx-auto mb-16 md:mb-20">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="card-divine overflow-hidden cursor-pointer group transform hover:scale-[1.02] transition-all duration-500 animate-scale-divine h-full" 
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleServiceClick(service.href)}
              >
                <div className="relative h-60 md:h-72 lg:h-64 xl:h-72 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} spiritual service`}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="bg-primary/95 p-4 rounded-full glow-divine">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-telugu-serif">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <p className="text-muted-foreground mb-4 md:mb-6 font-telugu-sans leading-relaxed text-sm md:text-base lg:text-base xl:text-lg">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold hover:text-primary-glow transition-colors font-telugu-sans text-lg">
                      వివరాలు చూడండి →
                    </span>
                    <div className="bg-gradient-divine p-3 rounded-full">
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="text-center">
            <button
              onClick={() => handleServiceClick('/services')}
              className="btn-divine px-12 py-5 text-lg lg:text-xl font-semibold"
            >
              అన్ని సేవలు చూడండి
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Call to Action */}
      <section className="py-16 md:py-20 xl:py-24 bg-gradient-sacred text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 font-telugu-serif">
            ఆధ్యాత్మిక మార్గదర్శకత్వం కోసం సంప్రదించండి
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl font-telugu-sans mb-8 md:mb-12 max-w-4xl mx-auto">
            మీ కుటుంబానికి దైవ దీవెనలు మరియు శుభాలు కలుగాలని కోరుకుంటున్నాము
          </p>
          
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-primary hover:bg-primary hover:text-white px-10 py-5 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 shadow-xl hover:shadow-2xl text-lg group"
            >
              <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="font-telugu-sans">WhatsApp లో మాట్లాడండి</span>
            </button>
            
            <div className="flex flex-col sm:flex-row gap-4 text-xl font-medium">
              <a href="tel:+919989101037" className="hover:text-accent transition-colors flex items-center justify-center space-x-2 bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
                <Phone className="h-5 w-5" />
                <span>99891 01037</span>
              </a>
              <a href="tel:+918886207347" className="hover:text-accent transition-colors flex items-center justify-center space-x-2 bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
                <Phone className="h-5 w-5" />
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