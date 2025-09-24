import React from 'react';
import { Flame, Heart, Crown, BookOpen, Phone, MessageCircle } from 'lucide-react';

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
            <Flame className="h-8 w-8 text-primary mr-3" />
            <div>
              <h2 className="text-3xl font-bold text-primary font-telugu-serif">హోమాలు</h2>
              <h3 className="text-2xl font-semibold text-secondary">Homams</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-divine p-6">
              <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">ఆయుష్య రుద్ర హోమం</h4>
              <h5 className="text-lg font-medium text-secondary mb-4">Ayushya Rudra Homam</h5>
              <p className="text-muted-foreground mb-4 font-telugu-sans">
                దీర్ఘాయుష్షు, ఆరోగ్యం మరియు అభివృద్ధి కోసం నిర్వహించబడే శక్తివంతమైన హోమం. 
                లార్డ్ శివకు సమర్పించబడే ఈ హోమం అన్ని రకాల అడ్డంకులను తొలగిస్తుంది.
              </p>
              <p className="text-muted-foreground text-sm">
                Powerful homam performed for longevity, health, and prosperity. 
                This sacred fire ritual dedicated to Lord Shiva removes all obstacles.
              </p>
            </div>

            <div className="card-divine p-6">
              <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">చండీ హోమం</h4>
              <h5 className="text-lg font-medium text-secondary mb-4">Chandi Homam (700 Slokas)</h5>
              <p className="text-muted-foreground mb-4 font-telugu-sans">
                దుర్గా సప్తశతి 700 శ్లోకాలతో నిర్వహించబడే అత్యంత పవిత్రమైన హోమం. 
                దుష్ట శక్తుల నివారణ మరియు దైవ కృపా పొందడానికి.
              </p>
              <p className="text-muted-foreground text-sm">
                Most sacred homam performed with 700 slokas of Durga Saptashati. 
                For protection from negative energies and divine blessings.
              </p>
            </div>

            <div className="card-divine p-6">
              <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">మహా గణపతి హోమం</h4>
              <h5 className="text-lg font-medium text-secondary mb-4">Maha Ganapati Homam</h5>
              <p className="text-muted-foreground mb-4 font-telugu-sans">
                విఘ్న వినాశనం మరియు కార్య సిద్ధి కోసం లార్డ్ గణేశకు సమర్పించబడే హోమం. 
                కొత్త పనుల ప్రారంభంలో అత్యంత అవసరం.
              </p>
              <p className="text-muted-foreground text-sm">
                Homam dedicated to Lord Ganesha for removing obstacles and ensuring success. 
                Essential before starting any new ventures.
              </p>
            </div>

            <div className="card-divine p-6">
              <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">నవగ్రహ శాంతి హోమం</h4>
              <h5 className="text-lg font-medium text-secondary mb-4">Navagraha Shanti Homam</h5>
              <p className="text-muted-foreground mb-4 font-telugu-sans">
                తొమ్మిది గ్రహాల దోషాలను తొలగించడానికి నిర్వహించబడే హోమం. 
                జ్యోతిష్య సమస్యలు మరియు గ్రహ దోషాల నివారణకు.
              </p>
              <p className="text-muted-foreground text-sm">
                Homam performed to appease the nine planets and remove planetary doshas. 
                For astrological problems and planetary afflictions.
              </p>
            </div>
          </div>
        </section>

        {/* Abhishekams Section */}
        <section id="abhishekams" className="mb-16">
          <div className="flex items-center mb-8">
            <Heart className="h-8 w-8 text-primary mr-3" />
            <div>
              <h2 className="text-3xl font-bold text-primary font-telugu-serif">అభిషేకాలు</h2>
              <h3 className="text-2xl font-semibold text-secondary">Abhishekams</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-divine p-6">
              <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">పాలాభిషేకం</h4>
              <h5 className="text-lg font-medium text-secondary mb-4">Palabhishekam</h5>
              <p className="text-muted-foreground font-telugu-sans">
                పవిత్రమైన పాలతో దేవతలకు అభిషేకం చేసి దైవ కృపను పొందడం.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Sacred milk abhishekam for divine blessings and prosperity.
              </p>
            </div>

            <div className="card-divine p-6">
              <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">జలాభిషేకం</h4>
              <h5 className="text-lg font-medium text-secondary mb-4">Jalabhishekam</h5>
              <p className="text-muted-foreground font-telugu-sans">
                పవిత్ర జలంతో దేవతలకు అభిషేకం చేసి మనస్సుకు శాంతిని తెచ్చే విధానం.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Sacred water abhishekam for mental peace and purification.
              </p>
            </div>

            <div className="card-divine p-6">
              <h4 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">పంచామృత అభిషేకం</h4>
              <h5 className="text-lg font-medium text-secondary mb-4">Panchamruta Abhishekam</h5>
              <p className="text-muted-foreground font-telugu-sans">
                పాలు, తేనె, గుడ్డు, దధి, చక్కెర మిశ్రమంతో చేసే ప్రత్యేక అభిషేకం.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Special abhishekam with five sacred ingredients for complete blessings.
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