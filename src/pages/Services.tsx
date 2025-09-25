import React from 'react';
import { Flame, Heart, Crown, BookOpen, Phone, MessageCircle } from 'lucide-react';
import homamService from '@/assets/homam-service.jpg';
import abhishekamService from '@/assets/abhishekam-service.jpg';
import kalyanamService from '@/assets/kalyanam-service.jpg';
import vratamService from '@/assets/vratam-service.jpg';
import ayushyaRudraHomam from '@/assets/ayushya-rudra-homam.jpg';
import chandiHomam from '@/assets/chandi-homam.jpg';
import ganapatiHomam from '@/assets/ganapati-homam.jpg';
import navagrahaHomam from '@/assets/navagraha-homam.jpg';

const Services = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919989101037";
    const teluguMessage = "నమస్తే గురువు గారు, నాకు సేవల గురించి సమాచారం కావాలి";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(teluguMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-telugu-serif">
            మా సేవలు
          </h1>
          <h2 className="text-3xl font-semibold text-secondary mb-4">
            Our Spiritual Services
          </h2>
          <div className="divider-sacred"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-telugu-sans">
            సాంప్రదాయిక వైదిక విధానాలతో నిర్వహించబడే అన్ని రకాల ఆధ్యాత్మిక సేవలు
          </p>
        </div>

        {/* Homams Section */}
        <section id="homams" className="mb-16">
          <div className="flex items-center mb-8">
            <div className="relative w-16 h-16 mr-4">
              <img 
                src={homamService} 
                alt="Homams" 
                className="w-full h-full object-cover rounded-full border-4 border-primary"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full flex items-center justify-center">
                <Flame className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary font-telugu-serif">హోమాలు</h2>
              <h3 className="text-2xl font-semibold text-secondary">Sacred Fire Rituals</h3>
              <p className="text-muted-foreground font-telugu-sans">అగ్ని దేవుడికి అర్పించే పవిత్ర కార్యక్రమాలు</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-divine overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={ayushyaRudraHomam} 
                  alt="Ayushya Rudra Homam" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">ఆయుష్య రుద్ర హోమం</h4>
                <h5 className="text-lg font-medium text-secondary mb-4">Ayushya Rudra Homam</h5>
                <p className="text-muted-foreground mb-4 font-telugu-sans">
                  దీర్ఘాయుష్షు, ఆరోగ్యం మరియు అభివృద్ధి కోసం నిర్వహించబడే అత్యంత శక్తివంతమైన హోమం. 
                  లార్డ్ శివుని పవిత్ర రుద్రం చదివి, 121 ఆహుతులతో నిర్వహించబడుతుంది. 
                  కుటుంబ సభ్యుల ఆరోగ్యం, జీవితంలో స్థిరత్వం, మరియు అకాల మృత్యు భయాన్ని తొలగిస్తుంది.
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  Most powerful homam performed for longevity, health, and prosperity. 
                  Dedicated to Lord Shiva with sacred Rudram recitation and 121 offerings. 
                  Protects family health, brings stability, and removes fear of untimely death.
                </p>
                <div className="border-t pt-4">
                  <p className="text-sm text-primary font-medium">ప్రత్యేక లాభాలు / Special Benefits:</p>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• దీర్ఘాయుష్షు మరియు ఆరోగ్యం</li>
                    <li>• కుటుంబ సుఖ శాంతులు</li>
                    <li>• అకాల మృత్యు భయ నివారణ</li>
                    <li>• మానసిక స్థైర్యం</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-divine overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={chandiHomam} 
                  alt="Chandi Homam" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">చండీ హోమం</h4>
                <h5 className="text-lg font-medium text-secondary mb-4">Chandi Homam (700 Slokas)</h5>
                <p className="text-muted-foreground mb-4 font-telugu-sans">
                  దుర్గా సప్తశతి 700 శ్లోకాలతో నిర్వహించబడే అత్యంత పవిత్రమైన మరియు శక్తివంతమైన హోమం. 
                  దేవి దుర్గ యొక్క దైవిక శక్తిని ఆవాహన చేసి, దుష్ట శక్తుల నివారణ, శత్రు భయ నివారణ, 
                  మరియు ఆధ్యాత్మిక శక్తి పెరుగుటకు నిర్వహించబడుతుంది.
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  Most sacred and powerful homam performed with 700 slokas of Durga Saptashati. 
                  Invokes divine energy of Goddess Durga for protection from negative forces, 
                  removal of enemies, and enhancement of spiritual power.
                </p>
                <div className="border-t pt-4">
                  <p className="text-sm text-primary font-medium">ప్రత్యేక లాభాలు / Special Benefits:</p>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• దుష్ట శక్తుల నివారణ</li>
                    <li>• శత్రు భయ నివారణ</li>
                    <li>• దైవిక రక్షణ</li>
                    <li>• ఆధ్యాత్మిక శక్తి వృద్ధి</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-divine overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={ganapatiHomam} 
                  alt="Maha Ganapati Homam" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">మహా గణపతి హోమం</h4>
                <h5 className="text-lg font-medium text-secondary mb-4">Maha Ganapati Homam</h5>
                <p className="text-muted-foreground mb-4 font-telugu-sans">
                  విఘ్నేశ్వరుడైన లార్డ్ గణేశకు సమర్పించబడే అత్యంత ముఖ్యమైన హోమం. 
                  కొత్త ఇల్లు, వ్యాపారం, వివాహం, విద్య వంటి అన్ని శుభ కార్యాలకు ముందు నిర్వహించబడుతుంది. 
                  21 రకాల మోదకాలు మరియు దుర్వ గడ్డితో ప్రత్యేకంగా పూజించబడుతుంది.
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  Essential homam dedicated to Lord Ganesha, the remover of obstacles. 
                  Performed before all auspicious activities like new house, business, marriage, education. 
                  Special worship with 21 varieties of modakas and durva grass.
                </p>
                <div className="border-t pt-4">
                  <p className="text-sm text-primary font-medium">ప్రత్యేక లాభాలు / Special Benefits:</p>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• విఘ్న నివారణ</li>
                    <li>• కార్య సిద్ధి</li>
                    <li>• బుద్ధి వైభవం</li>
                    <li>• సకల సంపత్తులు</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-divine overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={navagrahaHomam} 
                  alt="Navagraha Shanti Homam" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">నవగ్రహ శాంతి హోమం</h4>
                <h5 className="text-lg font-medium text-secondary mb-4">Navagraha Shanti Homam</h5>
                <p className="text-muted-foreground mb-4 font-telugu-sans">
                  తొమ్మిది గ్రహాల (సూర్యుడు, చంద్రుడు, మంగళుడు, బుధుడు, గురువు, శుక్రుడు, శనిభగవాన్, రాహువు, కేతువు) 
                  దోషాలను తొలగించడానికి నిర్వహించబడే విశేష హోమం. 
                  జాతకంలో గ్రహ దోషాలు, సాడేసాతి, కాలసర్ప దోషం వంటి వాటి నివారణకు అత్యంత ప్రభావకరం.
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  Special homam to appease nine planets and remove planetary doshas. 
                  Highly effective for astrological problems, Sade Sati, Kala Sarpa Dosha. 
                  Each planet is worshipped with specific mantras and offerings.
                </p>
                <div className="border-t pt-4">
                  <p className="text-sm text-primary font-medium">ప్రత్యేక లాభాలు / Special Benefits:</p>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• గ్రహ దోష నివారణ</li>
                    <li>• జ్యోతిష్య సమస్యల పరిష్కారం</li>
                    <li>• కాలసర్ప దోష నివారణ</li>
                    <li>• జీవిత సమస్యలకు పరిష్కారం</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Abhishekams Section */}
        <section id="abhishekams" className="mb-16">
          <div className="flex items-center mb-8">
            <div className="relative w-16 h-16 mr-4">
              <img 
                src={abhishekamService} 
                alt="Abhishekams" 
                className="w-full h-full object-cover rounded-full border-4 border-primary"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary font-telugu-serif">అభిషేకాలు</h2>
              <h3 className="text-2xl font-semibold text-secondary">Sacred Bathing Rituals</h3>
              <p className="text-muted-foreground font-telugu-sans">దేవతలకు పవిత్ర స్నానాలు అర్పించే వేద విధానాలు</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-divine p-6 text-center group hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">పాలాభిషేకం</h4>
              <h5 className="text-lg font-medium text-secondary mb-4">Palabhishekam</h5>
              <p className="text-muted-foreground font-telugu-sans mb-3">
                పవిత్రమైన గోపాలతో లార్డ్ శివ లింగం మరియు ఇతర దేవతలకు అభిషేకం చేసి దైవ కృపను పొందడం. 
                ధన, ధాన్య, సంతాన సంపత్తుల కోసం అత్యంత ప్రభావకరం.
              </p>
              <p className="text-muted-foreground text-sm">
                Sacred cow milk abhishekam for divine blessings, wealth, prosperity, and fertility.
              </p>
            </div>

            <div className="card-divine p-6 text-center group hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">జలాభిషేకం</h4>
              <h5 className="text-lg font-medium text-secondary mb-4">Jalabhishekam</h5>
              <p className="text-muted-foreground font-telugu-sans mb-3">
                గంగా జలం, కావేరి జలం వంటి పవిత్ర నదుల జలంతో దేవతలకు అభిషేకం చేసి మనస్సుకు శాంతిని తెచ్చే విధానం. 
                పాప నివారణ మరియు మానసిక స్వచ్ఛత కోసం.
              </p>
              <p className="text-muted-foreground text-sm">
                Sacred water abhishekam with holy river water for mental peace, purification, and sin removal.
              </p>
            </div>

            <div className="card-divine p-6 text-center group hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">పంచామృత అభిషేకం</h4>
              <h5 className="text-lg font-medium text-secondary mb-4">Panchamruta Abhishekam</h5>
              <p className="text-muted-foreground font-telugu-sans mb-3">
                పాలు, తేనె, చక్కెర, దధి, నెయ్యి అనే ఐదు పవిత్ర పదార్థాల మిశ్రమంతో చేసే అత్యంత ప్రత్యేకమైన అభిషేకం. 
                సంపూర్ణ దైవ కృపా కోసం.
              </p>
              <p className="text-muted-foreground text-sm">
                Most special abhishekam with five sacred ingredients (milk, honey, sugar, curd, ghee) for complete divine blessings.
              </p>
            </div>
          </div>
        </section>

        {/* Kalyanams Section */}
        <section id="kalyanams" className="mb-16">
          <div className="flex items-center mb-8">
            <Crown className="h-8 w-8 text-primary mr-3" />
            <div>
              <h2 className="text-3xl font-bold text-primary font-telugu-serif">కళ్యాణాలు</h2>
              <h3 className="text-2xl font-semibold text-secondary">Kalyanams</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-divine p-6">
              <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">వేంకటేశ్వర కల్యాణం</h4>
              <h5 className="text-lg font-medium text-secondary mb-4">Venkateswara Kalyanam</h5>
              <p className="text-muted-foreground font-telugu-sans">
                లార్డ్ వేంకటేశ్వరుడు మరియు లక్ష్మీ దేవి కల్యాణం. ధన సంపత్తులు మరియు సుఖ శాంతుల కోసం.
              </p>
            </div>

            <div className="card-divine p-6">
              <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">గోదాదేవి కల్యాణం</h4>
              <h5 className="text-lg font-medium text-secondary mb-4">Godadevi Kalyanam</h5>
              <p className="text-muted-foreground font-telugu-sans">
                గోదాదేవి మరియు రంగనాథ స్వామి కల్యాణం. కుటుంబ సుఖ సంతోషాల కోసం.
              </p>
            </div>

            <div className="card-divine p-6">
              <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">శివ పార్వతి కల్యాణం</h4>
              <h5 className="text-lg font-medium text-secondary mb-4">Shiva-Parvati Kalyanam</h5>
              <p className="text-muted-foreground font-telugu-sans">
                శివ పార్వతుల దివ్య కల్యాణం. దాంపత్య జీవితంలో సుఖ శాంతుల కోసం.
              </p>
            </div>

            <div className="card-divine p-6">
              <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">రామ సీత కల్యాణం</h4>
              <h5 className="text-lg font-medium text-secondary mb-4">Rama-Sita Kalyanam</h5>
              <p className="text-muted-foreground font-telugu-sans">
                రామ సీతల కల్యాణం. ధర్మం మరియు న్యాయం కోసం. ఆదర్శ దాంపత్య జీవితం కోసం.
              </p>
            </div>
          </div>
        </section>

        {/* Vratams Section */}
        <section id="vratams" className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-primary mr-3" />
            <div>
              <h2 className="text-3xl font-bold text-primary font-telugu-serif">వ్రతాలు</h2>
              <h3 className="text-2xl font-semibold text-secondary">Vratams</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-divine p-6">
              <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">సత్యనారాయణ వ్రతం</h4>
              <h5 className="text-lg font-medium text-secondary mb-4">Satyanarayana Vratam</h5>
              <p className="text-muted-foreground font-telugu-sans">
                లార్డ్ విష్ణువుకు సమర్పించబడే పవిత్ర వ్రతం. సర్వ కార్య సిద్ధి కోసం.
              </p>
            </div>

            <div className="card-divine p-6">
              <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">వరలక్ష్మి వ్రతం</h4>
              <h5 className="text-lg font-medium text-secondary mb-4">Varalakshmi Vratam</h5>
              <p className="text-muted-foreground font-telugu-sans">
                లక్ష్మీ దేవికి సమర్పించబడే వ్రతం. ధన ధాన్య సంపత్తుల కోసం.
              </p>
            </div>

            <div className="card-divine p-6">
              <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">వినాయక చవితి వ్రతం</h4>
              <h5 className="text-lg font-medium text-secondary mb-4">Vinayaka Chavithi Vratam</h5>
              <p className="text-muted-foreground font-telugu-sans">
                లార్డ్ గణేశకు సమర్పించబడే వ్రతం. విఘ్న నివారణ కోసం.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-sacred text-white rounded-xl p-8">
          <h3 className="text-3xl font-bold mb-4 font-telugu-serif">
            సేవల బుకింగ్ కోసం
          </h3>
          <h4 className="text-2xl font-semibold mb-6">
            For Service Booking
          </h4>
          
          <p className="text-lg mb-8 font-telugu-sans">
            మీ ఇంటికి వచ్చి లేదా దేవాలయంలో సేవలు నిర్వహించుకోవాలంటే మమ్మల్ని సంప్రదించండి
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-primary hover:bg-primary-glow hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-telugu-sans">WhatsApp లో మాట్లాడండి</span>
            </button>
            
            <a
              href="tel:+919989101037"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              <span>కాల్ చేయండి</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;