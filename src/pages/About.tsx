import React from 'react';
import { Award, Clock, Users, Heart, Star, Shield, BookOpen } from 'lucide-react';
import templeImage from '@/assets/temple-spiritual-ambiance.jpg';
import guruTemple from '@/assets/guru-temple-meditation.jpg';

const About = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 xl:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 xl:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 xl:mb-8 text-primary font-telugu-serif">
            గురువు గారి గురించి
          </h1>
          <p className="text-base md:text-lg xl:text-xl font-telugu-sans text-secondary mb-6 md:mb-8 max-w-5xl mx-auto px-4 leading-relaxed">
            సనాతన ధర్మ సంప్రదాయాలను అనుసరించి వైదిక ఆధ్యాత్మిక సేవలను అందించే అనుభవజ్ఞులైన గురువు గారు
          </p>
          <div className="divider-sacred mx-auto w-32"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-start mb-16 md:mb-20">
            {/* Temple Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl glow-divine">
                <img 
                  src={guruTemple} 
                  alt="పవిత్ర దేవాలయ వాతావరణంలో ధ్యానం" 
                  className="w-full h-[400px] sm:h-[450px] lg:h-[480px] xl:h-[520px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-telugu-serif mb-3">పవిత్ర ధ్యాన స్థలం</h3>
                  <p className="text-base sm:text-lg lg:text-xl opacity-95">15+ సంవత్సరాల అనుభవంతో</p>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 md:space-y-8 xl:space-y-10 order-1 lg:order-2">
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold text-primary font-telugu-serif">
                  ఆధ్యాత్మిక అనుభవం
                </h3>
                <h4 className="text-lg md:text-xl xl:text-2xl font-medium text-secondary">
                  Spiritual Experience
                </h4>
                
                <p className="text-lg leading-relaxed font-telugu-sans">
                  గురువు గారు పంద్రేళ్లకు మించిన ఆధ్యాత్మిక అనుభవం కలిగిన అత్యంత విశ్వసనీయ వ్యక్తిత్వం. 
                  సాంప్రదాయిక వేద విధానాలను పూర్ణ భక్తి శ్రద్ధలతో అనుసరిస్తూ, అన్ని రకాల హోమాలు, అభిషేకాలు, 
                  కళ్యాణాలు మరియు వ్రతాలను అత్యంత పవిత్రత మరియు కచ్చితత్వంతో నిర్వహిస్తారు. 
                  భక్తుల ఆధ్యాత్మిక అవసరాలను పూర్తిగా అర్థం చేసుకొని, వారి కోరికలను దైవం ముందు వినవించడంలో నిపుణులు.
                </p>
                
                <p className="text-lg leading-relaxed font-telugu-sans">
                  గురువు గారు వైదిక సంస్కృతం, ప్రాచీన మంత్ర శాస్త్రం, యజ్ఞ కర్మకాండలలో గాఢ పాండిత్యం కలిగి ఉన్నారు. 
                  ప్రతిరోజూ ప్రాతఃకాలం సంధ్యావందనం, గాయత్రీ జపం, దేవీ దేవతల అర్చనలు చేసుకుంటూ తమ స్వంత జీవితంలో 
                  ఆధ్యాత్మిక క్రమశిక్షణను పాటిస్తున్నారు. ఈ నిబద్ధతతో భక్తులకు అందించే సేవలు అత్యంత పవిత్రమైనవిగా 
                  మారుతున్నాయి. భక్తుల సంతృప్తి మరియు దైవానుగ్రహ లాభమే గురువు గారి ప్రధాన లక్ష్యం.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Guru Garu is a highly trusted spiritual personality with over 15 years of authentic experience. 
                  Following traditional vedic procedures with complete devotion and dedication, he performs all types of 
                  homams, abhishekams, kalyanams, and vratams with utmost sanctity and precision. 
                  He is expert in understanding devotees' spiritual needs and presenting their wishes before the divine.
                </p>
                
                <div className="mt-8 p-6 lg:p-8 bg-primary/5 rounded-xl border-l-4 border-primary">
                  <p className="text-primary font-semibold font-telugu-serif mb-3 text-lg lg:text-xl">
                    "సర్వే భవన్తు సుఖినః సర్వే సన్తు నిరామయాః"
                  </p>
                  <p className="text-base text-muted-foreground">
                    Let everyone be happy, let everyone be free from disease - Our guiding principle
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-primary font-telugu-serif">
                  మా లక్ష్యం
                </h3>
                <h4 className="text-xl lg:text-2xl font-medium text-secondary">
                  Our Mission
                </h4>
                
                <p className="text-lg leading-relaxed font-telugu-sans">
                  భక్తుల ఆధ్యాత్మిక అవసరాలను సంపూర్ణంగా తీర్చడం, వైదిక సంప్రదాయాలను కాపాడటం, 
                  మరియు భవిష్యత్ తరాలకు అసలైన హిందూ ధర్మ సంస్కృతిని అందించడం మా ప్రధాన లక్ష్యం. 
                  ప్రతి భక్తుడు దైవ కృపను పొంది, శాంతి సంతోషాలతో జీవించాలని మా కోరిక. 
                  సేవే మాధవయ అని భావించి, అన్ని సేవలను భగవంతుడికి అర్పణగా భావిస్తాము.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Our primary mission is to completely fulfill devotees' spiritual needs, preserve vedic traditions, 
                  and deliver authentic Hindu dharma and culture to future generations. 
                  We wish that every devotee receives divine grace and lives with peace and happiness. 
                  Believing that service is devotion to God, we offer all our services as offerings to the divine.
                </p>
                
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-gradient-temple rounded-lg">
                    <h5 className="font-semibold text-primary font-telugu-serif">సంప్రదాయ పాలన</h5>
                    <p className="text-sm text-muted-foreground">Traditional Adherence</p>
                  </div>
                  <div className="p-4 bg-gradient-temple rounded-lg">
                    <h5 className="font-semibold text-primary font-telugu-serif">భక్తి భావన</h5>
                    <p className="text-sm text-muted-foreground">Devotional Spirit</p>
                  </div>
                  <div className="p-4 bg-gradient-temple rounded-lg">
                    <h5 className="font-semibold text-primary font-telugu-serif">సేవా భావన</h5>
                    <p className="text-sm text-muted-foreground">Service Minded</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Temple Ambiance Image */}
          <div className="mb-16 md:mb-20">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={templeImage} 
                alt="పవిత్ర దేవాలయ వాతావరణం" 
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
              <div className="absolute left-6 sm:left-8 lg:left-12 top-1/2 transform -translate-y-1/2 text-white max-w-sm sm:max-w-md lg:max-w-lg">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-telugu-serif mb-3 lg:mb-4">పవిత్ర వాతావరణం</h3>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl">దైవిక శక్తులు నివసించే పవిత్ర స్థలం</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary font-telugu-serif">
              మమ్మల్ని ఎందుకు ఎంచుకోవాలి?
            </h3>
            <h4 className="text-2xl font-semibold text-center mb-12 text-secondary">
              Why Choose Us?
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="card-divine p-6 text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h5 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">
                  ప్రామాణిక సేవలు
                </h5>
                <p className="text-muted-foreground font-telugu-sans">
                  వేద శాస్త్రానుసారంగా పూర్తిగా ప్రామాణిక విధానాలతో అన్ని సేవలు నిర్వహించబడతాయి. 
                  ఎలాంటి సంక్షిప్తీకరణలు లేకుండా పూర్ణ పద్ధతిలో హోమాలు, పూజలు చేయబడతాయి.
                </p>
              </div>

              <div className="card-divine p-6 text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h5 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">
                  విశ్వసనీయత
                </h5>
                <p className="text-muted-foreground font-telugu-sans">
                  1000+ కుటుంబాల విశ్వాసం పొందిన మా సేవలు పూర్తిగా నమ్మదగినవి. 
                  ప్రతి సేవలో నిజాయితీ, పవిత్రత, మరియు భక్తుల సంతృప్తిని అందించడంలో మేము నిపుణులం.
                </p>
              </div>

              <div className="card-divine p-6 text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h5 className="text-xl font-semibold text-primary mb-3 font-telugu-serif">
                  పూర్ణ మార్గదర్శకత్వం
                </h5>
                <p className="text-muted-foreground font-telugu-sans">
                  కేవలం సేవలు చేయడంతో ఆగిపోకుండా, భక్తులకు ఆధ్యాత్మిక విషయాలలో మార్గదర్శకత్వం కూడా అందిస్తాము. 
                  మీ ఆధ్యాత్మిక ప్రగతికి అవసరమైన సలహాలు ఇస్తాము.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics/Features */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-primary font-telugu-serif">
              మా విజయ గాథ
            </h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="card-divine p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-2">15+</h4>
                  <p className="text-sm text-muted-foreground font-telugu-sans">సంవత్సరాల అనుభవం</p>
                  <p className="text-xs text-muted-foreground">Years Experience</p>
                </div>

                <div className="card-divine p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-2">1000+</h4>
                  <p className="text-sm text-muted-foreground font-telugu-sans">సంతృప్త కుటుంబాలు</p>
                  <p className="text-xs text-muted-foreground">Happy Families</p>
                </div>

                <div className="card-divine p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-2">50+</h4>
                  <p className="text-sm text-muted-foreground font-telugu-sans">వేద విధానాలు</p>
                  <p className="text-xs text-muted-foreground">Vedic Procedures</p>
                </div>

                <div className="card-divine p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-2">100%</h4>
                  <p className="text-sm text-muted-foreground font-telugu-sans">భక్తి శ్రద్ధలు</p>
                  <p className="text-xs text-muted-foreground">Devotion</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary font-telugu-serif">
              విశేషతలు
            </h3>
            <h4 className="text-2xl font-semibold text-center mb-12 text-secondary">
              Specializations
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="card-divine p-6 text-center">
                <h5 className="text-lg font-semibold text-primary mb-2 font-telugu-serif">గృహప్రవేశం</h5>
                <p className="text-sm text-muted-foreground">Gruhapravesham</p>
              </div>
              
              <div className="card-divine p-6 text-center">
                <h5 className="text-lg font-semibold text-primary mb-2 font-telugu-serif">ఆయుష్య రుద్ర హోమం</h5>
                <p className="text-sm text-muted-foreground">Ayushya Rudra Homam</p>
              </div>
              
              <div className="card-divine p-6 text-center">
                <h5 className="text-lg font-semibold text-primary mb-2 font-telugu-serif">సత్యనారాయణ వ్రతం</h5>
                <p className="text-sm text-muted-foreground">Satyanarayana Vratam</p>
              </div>
              
              <div className="card-divine p-6 text-center">
                <h5 className="text-lg font-semibold text-primary mb-2 font-telugu-serif">వేంకటేశ్వర కల్యాణం</h5>
                <p className="text-sm text-muted-foreground">Venkateswara Kalyanam</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-gradient-temple rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-primary font-telugu-serif">
              సంప్రదించడానికి
            </h3>
            <h4 className="text-xl font-semibold mb-6 text-secondary">
              Get in Touch
            </h4>
            
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-muted-foreground font-telugu-sans text-lg">
                మీకు ఎలాంటి ఆధ్యాత్మిక సేవలు అవసరమైనా లేదా ఏమైనా సందేహాలు ఉంటే దయచేసి సంకోచించకుండా మాతో సంప్రదించండి
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="text-center">
                  <h5 className="font-semibold text-primary mb-2 font-telugu-serif">ఫోన్ నంబర్లు</h5>
                  <div className="space-y-1">
                    <a href="tel:+919989101037" className="block text-muted-foreground hover:text-primary transition-colors">
                      +91 99891 01037
                    </a>
                    <a href="tel:+918886207347" className="block text-muted-foreground hover:text-primary transition-colors">
                      +91 88862 07347
                    </a>
                  </div>
                </div>
                
                <div className="text-center">
                  <h5 className="font-semibold text-primary mb-2 font-telugu-serif">ఇమెయిల్</h5>
                  <a href="mailto:siva.karnam@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    siva.karnam@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;