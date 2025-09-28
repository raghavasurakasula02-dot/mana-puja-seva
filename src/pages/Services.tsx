import React from 'react';
import { Flame, Heart, Crown, BookOpen, Phone, MessageCircle } from 'lucide-react';
import traditionalHomam from '@/assets/traditional-homam-ceremony.jpg';
import sacredAbhishekam from '@/assets/sacred-abhishekam-ritual.jpg';
import divineKalyanam from '@/assets/divine-kalyanam-ceremony.jpg';
import traditionalVratam from '@/assets/traditional-vratam-ceremony.jpg';
import varalakshmiVratam from '@/assets/varalakshmi-vratam.jpg';
import vinayakaChavithiVratam from '@/assets/vinayaka-chavithi-vratam.jpg';
import venkateswaraKalyanam from '@/assets/venkateswara-kalyanam.jpg';
import shivaparvatiKalyanam from '@/assets/shivaparvati-kalyanam.jpg';
import ganeshaAbhishekam from '@/assets/ganesha-abhishekam.jpg';
import shivaAbhishekam from '@/assets/shiva-abhishekam.jpg';
import ayushyaRudraHomam from '@/assets/ayushya-rudra-homam.jpg';
import chandiHomam from '@/assets/chandi-homam.jpg';
import ganapatiHomam from '@/assets/ganapati-homam.jpg';
import navagrahaHomam from '@/assets/navagraha-homam.jpg';

const Services = () => {
  const handleWhatsAppClick = (serviceName: string) => {
    const phoneNumber = "919989101037";
    const teluguMessage = `నమస్తే గురువు గారు, నాకు ${serviceName} గురించి వివరాలు తెలుసుకోవాలి`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(teluguMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-12 md:py-16 xl:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 text-primary font-telugu-serif">
            మా ఆధ్యాత్మిక సేవలు
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl font-telugu-sans text-secondary mb-4 md:mb-6 max-w-5xl mx-auto">
            సనాతన ధర్మ సంప్రదాయాలను అనుసరించి వైదిక విధానాలతో నిర్వహించబడే పవిత్ర సేవలు
          </p>
          <div className="divider-sacred mx-auto w-32"></div>
          <p className="text-base md:text-lg xl:text-xl text-muted-foreground max-w-4xl mx-auto font-telugu-sans mt-6 md:mt-8">
            మీ ఇంట్లో లేదా దేవాలయంలో పూర్ణ భక్తి శ్రద్ధలతో అన్ని వైదిక కార్యక్రమాలను నిర్వహిస్తాము
          </p>
        </div>

        {/* Homams Section */}
        <section id="homams" className="mb-20 md:mb-28">
          <div className="flex flex-col lg:flex-row items-center mb-12 md:mb-16 max-w-6xl mx-auto">
            <div className="relative w-24 h-24 lg:w-28 lg:h-28 mr-8 mb-6 lg:mb-0">
              <img 
                src={traditionalHomam} 
                alt="Homams అగ్ని కార్యక్రమాలు" 
                className="w-full h-full object-cover rounded-full border-4 border-primary shadow-xl"
              />
              <div className="absolute inset-0 bg-primary/30 rounded-full flex items-center justify-center">
                <Flame className="h-12 w-12 lg:h-14 lg:w-14 text-white" />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary font-telugu-serif mb-4">హోమాలు</h2>
              <p className="text-xl lg:text-2xl text-secondary font-telugu-sans mb-4">అగ్ని దేవుడికి అర్పించే పవిత్ర వైదిక కార్యక్రమాలు</p>
              <p className="text-lg text-muted-foreground font-telugu-sans max-w-2xl">
                వేద మంత్రాలతో అగ్ని హోత్రం చేసి దైవ కృపను పొందే అత్యంత పవిత్రమైన సేవలు
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 xl:gap-12 max-w-7xl mx-auto">
            {/* Ayushya Rudra Homam */}
            <div className="card-divine overflow-hidden group flex flex-col h-full">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={ayushyaRudraHomam} 
                  alt="ఆయుష్య రుద్ర హోమం - దీర్ఘాయుష్షు కోసం" 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-2xl lg:text-3xl font-bold text-white font-telugu-serif">ఆయుష్య రుద్ర హోమం</h4>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h5 className="text-lg lg:text-xl font-semibold text-secondary mb-4">దీర్ఘాయుష్షు మరియు ఆరోగ్య కోసం అత్యంత శక్తివంతమైన హోమం</h5>
                
                <div className="space-y-4 font-telugu-sans flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    భగవాన్ శివుని రుద్ర రూపానికి సమర్పించబడే అత్యంత పవిత్రమైన హోమం. 
                    రుద్రం చమకం పఠనంతో 121 ఆహుతులతో నిర్వహించబడుతుంది. 
                    దీర్ఘాయుష్షు, ఆరోగ్యం, కుటుంబ సుఖశాంతులు, అకాల మృత్యు భయ నివారణ కోసం చేయబడుతుంది.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <h6 className="font-semibold text-primary mb-2">ప్రత్యేక లాభాలు:</h6>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• దీర్ఘాయుష్షు మరియు ఆరోగ్య వృద్ధి</li>
                      <li>• కుటుంబ సభ్యుల రక్షణ</li>
                      <li>• అకాల మృత్యు భయం నివారణ</li>
                      <li>• మానసిక స్థైర్యం మరియు శాంతి</li>
                      <li>• రోగ నిరోధక శక్తి పెరుగుట</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <h6 className="font-semibold text-secondary mb-2">హోమ విధానం:</h6>
                    <p className="text-sm text-muted-foreground">
                      ప్రాతఃకాలం శుభ ముహూర్తంలో గణేశ పూజతో మొదలుపెట్టి, 
                      రుద్రం చమకం పారాయణంతో 121 ఆహుతులు అర్పించి, 
                      పూర్ణాహుతితో ముగించబడుతుంది.
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => handleWhatsAppClick('ఆయుష్య రుద్ర హోమం')}
                  className="w-full mt-6 btn-divine flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>బుకింగ్ కోసం సంప్రదించండి</span>
                </button>
              </div>
            </div>

            {/* Chandi Homam */}
            <div className="card-divine overflow-hidden group flex flex-col h-full">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={chandiHomam} 
                  alt="చండీ హోమం - దుర్గా సప్తశతి 700 శ్లోకాలు" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-2xl font-bold text-white font-telugu-serif">చండీ హోమం</h4>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h5 className="text-lg font-medium text-secondary mb-4">దుర్గా సప్తశతి 700 శ్లోకాలతో అత్యంత శక్తివంతమైన హోమం</h5>
                
                <div className="space-y-4 font-telugu-sans flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    మహిషాసుర మర్దిని దేవి దుర్గ యొక్క దైవిక శక్తిని ఆవాహన చేసే అత్యంత పవిత్రమైన హోమం. 
                    దుర్గా సప్తశతిలోని 700 శ్లోకాలను పఠిస్తూ నిర్వహించబడుతుంది. 
                    దుష్ట శక్తుల నివారణ, శత్రు భయ నశనం, రక్షణ కోసం చేయబడుతుంది.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <h6 className="font-semibold text-primary mb-2">ప్రత్యేక లాభాలు:</h6>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• దుష్ట శక్తుల పూర్ణ నివారణ</li>
                      <li>• శత్రు భయం మరియు అడ్డంకుల నశనం</li>
                      <li>• దేవి దుర్గ యొక్క దైవిక రక్షణ</li>
                      <li>• ఆధ్యాత్మిక శక్తి మరియు సాహసం</li>
                      <li>• కుటుంబానికి సంపూర్ణ రక్షణ</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <h6 className="font-semibold text-secondary mb-2">విశేషతలు:</h6>
                    <p className="text-sm text-muted-foreground">
                      మూడు రోజుల పాటు నిర్వహించబడే ఈ హోమంలో దుర్గా సప్తశతి పారాయణం, 
                      చండీ హవనం, మరియు దేవి పూజలు చేయబడతాయి.
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => handleWhatsAppClick('చండీ హోమం')}
                  className="w-full mt-6 btn-divine flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>బుకింగ్ కోసం సంప్రదించండి</span>
                </button>
              </div>
            </div>

            {/* Ganapati Homam */}
            <div className="card-divine overflow-hidden group flex flex-col h-full">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={ganapatiHomam} 
                  alt="మహా గణపతి హోమం - విఘ్న నివారణ" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-2xl font-bold text-white font-telugu-serif">మహా గణపతి హోమం</h4>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h5 className="text-lg font-medium text-secondary mb-4">విఘ్నేశ్వరుడికి సమర్పించే విఘ్న నివారణ హోమం</h5>
                
                <div className="space-y-4 font-telugu-sans flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    అన్ని విఘ్నాలను తొలగించే విఘ్నేశ్వరుడైన లార్డ్ గణేశకు సమర్పించబడే అత్యంత ముఖ్యమైన హోమం. 
                    కొత్త ఇల్లు, వ్యాపారం, వివాహం, విద్య వంటి అన్ని శుభ కార్యాలకు ముందు నిర్వహించబడుతుంది. 
                    21 రకాల మోదకాలు మరియు దుర్వా దళాలతో ప్రత్యేకంగా పూజించబడుతుంది.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <h6 className="font-semibold text-primary mb-2">ప్రత్యేక లాభాలు:</h6>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• అన్ని విఘ్నాలు మరియు అడ్డంకుల నివారణ</li>
                      <li>• కార్య సిద్ధి మరియు విజయం</li>
                      <li>• బుద్ధి వైభవం మరియు జ్ఞాన వృద్ధి</li>
                      <li>• వ్యాపార మరియు విద్యలో అభివృద్ధి</li>
                      <li>• సకల సంపత్తుల లాభం</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <h6 className="font-semibold text-secondary mb-2">ప్రత్యేక విధానం:</h6>
                    <p className="text-sm text-muted-foreground">
                      గణేశ అష్టోత్తర శత నామాలు, గణేశ సహస్రనామం, 
                      21 రకాల మోదకాల నైవేద్యంతో నిర్వహించబడుతుంది.
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => handleWhatsAppClick('మహా గణపతి హోమం')}
                  className="w-full mt-6 btn-divine flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>బుకింగ్ కోసం సంప్రదించండి</span>
                </button>
              </div>
            </div>

            {/* Navagraha Homam */}
            <div className="card-divine overflow-hidden group flex flex-col h-full">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={navagrahaHomam} 
                  alt="నవగ్రహ శాంతి హోమం - గ్రహ దోష నివారణ" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-2xl font-bold text-white font-telugu-serif">నవగ్రహ శాంతి హోమం</h4>
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-medium text-secondary mb-4">తొమ్మిది గ్రహాల దోషాలను తొలగించే ప్రత్యేక హోమం</h5>
                
                <div className="space-y-4 font-telugu-sans">
                  <p className="text-muted-foreground leading-relaxed">
                    సూర్యుడు, చంద్రుడు, మంగళుడు, బుధుడు, గురువు, శుక్రుడు, శనిభగవాన్, రాహువు, కేతువు 
                    అనే తొమ్మిది గ్రహాల దోషాలను తొలగించడానికి నిర్వహించబడే విశేష హోమం. 
                    జాతకంలోని గ్రహ దోషాలు, సాడేసాతి, కాలసర్ప దోషం వంటి వాటి నివారణకు అత్యంత ప్రభావకరం.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <h6 className="font-semibold text-primary mb-2">ప్రత్యేక లాభాలు:</h6>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• అన్ని గ్రహ దోషాల పూర్ణ నివారణ</li>
                      <li>• సాడేసాతి మరియు కాలసర్ప దోష నివారణ</li>
                      <li>• జ్యోతిష్య సమస్యలకు పరిష్కారం</li>
                      <li>• జీవిత అడ్డంకుల తొలగింపు</li>
                      <li>• గ్రహాల శుభ ప్రభావాల పెరుగుట</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <h6 className="font-semibold text-secondary mb-2">గ్రహ ప్రత్యేక పూజలు:</h6>
                    <p className="text-sm text-muted-foreground">
                      ప్రతి గ్రహానికి ప్రత్యేక మంత్రాలు, ప్రత్యేక సామగ్రి, 
                      ప్రత్యేక రంగుల వస్త్రాలతో హోమం చేయబడుతుంది.
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => handleWhatsAppClick('నవగ్రహ శాంతి హోమం')}
                  className="w-full mt-6 btn-divine flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>బుకింగ్ కోసం సంప్రదించండి</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Abhishekams Section */}
        <section id="abhishekams" className="mb-20">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="relative w-20 h-20 mr-6 mb-4 md:mb-0">
              <img 
                src={sacredAbhishekam}
                alt="అభిషేకాలు పవిత్ర స్నానాలు" 
                className="w-full h-full object-cover rounded-full border-4 border-primary shadow-lg"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full flex items-center justify-center">
                <Heart className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-primary font-telugu-serif mb-2">అభిషేకాలు</h2>
              <p className="text-xl text-secondary font-telugu-sans mb-2">దేవతలకు పవిత్ర స్నానాలు అర్పించే దైవిక విధానాలు</p>
              <p className="text-muted-foreground font-telugu-sans">
                పాలు, జలం, పంచామృతంతో దేవతలను అభిషేకం చేసి దైవ కృపను పొందే సేవలు
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-divine group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img 
                  src={sacredAbhishekam}
                  alt="పాలాభిషేకం" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-xl font-bold text-white font-telugu-serif">పాలాభిషేకం</h4>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4 font-telugu-sans">
                  <p className="text-muted-foreground leading-relaxed">
                    పవిత్రమైన గోపాలతో భగవాన్ శివలింగం మరియు ఇతర దేవతలకు అభిషేకం చేసి దైవ కృపను పొందడం. 
                    ధనం, ధాన్యం, సంతాన సంపత్తుల కోసం అత్యంత ప్రభావకరమైన సేవ.
                  </p>
                  
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <h6 className="font-semibold text-primary mb-2 text-sm">లాభాలు:</h6>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• ధన వృద్ధి మరియు సంపత్తుల లాభం</li>
                      <li>• సంతాన ప్రాప్తి మరియు కుటుంబ వృద్ధి</li>
                      <li>• ఆరోగ్యం మరియు శక్తి పెరుగుట</li>
                    </ul>
                  </div>
                </div>
                
                <button
                  onClick={() => handleWhatsAppClick('పాలాభిషేకం')}
                  className="w-full mt-4 btn-sacred text-sm flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>బుకింగ్ చేయండి</span>
                </button>
              </div>
            </div>

            <div className="card-divine group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img 
                  src={sacredAbhishekam}
                  alt="జలాభిషేకం" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-xl font-bold text-white font-telugu-serif">జలాభిషేకం</h4>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4 font-telugu-sans">
                  <p className="text-muted-foreground leading-relaxed">
                    గంగా జలం, కావేరి జలం వంటి పవిత్ర నదుల జలంతో దేవతలకు అభిషేకం చేసి మనస్సుకు శాంతిని తెచ్చే విధానం. 
                    పాప నివారణ మరియు మానసిక పవిత్రత కోసం.
                  </p>
                  
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <h6 className="font-semibold text-primary mb-2 text-sm">లాభాలు:</h6>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• పాప నివారణ మరియు పవిత్రత</li>
                      <li>• మానసిక శాంతి మరియు ఆధ్యాత్మిక వృద్ధి</li>
                      <li>• జీవిత శుద్ధత మరియు దైవ అనుగ్రహం</li>
                    </ul>
                  </div>
                </div>
                
                <button
                  onClick={() => handleWhatsAppClick('జలాభిషేకం')}
                  className="w-full mt-4 btn-sacred text-sm flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>బుకింగ్ చేయండి</span>
                </button>
              </div>
            </div>

            <div className="card-divine group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img 
                  src={sacredAbhishekam} 
                  alt="పంచామృత అభిషేకం" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-xl font-bold text-white font-telugu-serif">పంచామృత అభిషేకం</h4>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4 font-telugu-sans">
                  <p className="text-muted-foreground leading-relaxed">
                    పాలు, తేనె, చక్కెర, దధి, నెయ్యి అనే ఐదు పవిత్ర పదార్థాల మిశ్రమంతో చేసే అత్యంత ప్రత్యేకమైన అభిషేకం. 
                    సంపూర్ణ దైవ కృపా లాభం కోసం.
                  </p>
                  
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <h6 className="font-semibold text-primary mb-2 text-sm">లాభాలు:</h6>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• సంపూర్ణ దైవ దీవెనలు</li>
                      <li>• అష్ట ఐశ్వర్యాల ప్రాప్తి</li>
                      <li>• జీవిత సుఖశాంతులు మరియు సమృద్ధి</li>
                    </ul>
                  </div>
                </div>
                
                <button
                  onClick={() => handleWhatsAppClick('పంచామృత అభిషేకం')}
                  className="w-full mt-4 btn-sacred text-sm flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>బుకింగ్ చేయండి</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Kalyanams Section */}
        <section id="kalyanams" className="mb-20">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="relative w-20 h-20 mr-6 mb-4 md:mb-0">
              <img 
                src={divineKalyanam}
                alt="కళ్యాణాలు దైవ వివాహ వేడుకలు" 
                className="w-full h-full object-cover rounded-full border-4 border-primary shadow-lg"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full flex items-center justify-center">
                <Crown className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-primary font-telugu-serif mb-2">కళ్యాణాలు</h2>
              <p className="text-xl text-secondary font-telugu-sans mb-2">దైవ దంపతుల పవిత్ర వివాహ వేడుకలు</p>
              <p className="text-muted-foreground font-telugu-sans">
                కుటుంబ సుఖశాంతులు మరియు వైవాహిక జీవనంలో ఐక్యత కోసం నిర్వహించబడే దైవ కళ్యాణాలు
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-divine overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={venkateswaraKalyanam}
                  alt="వెంకటేశ్వర కళ్యాణం" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-2xl font-bold text-white font-telugu-serif">వెంకటేశ్వర కళ్యాణం</h4>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4 font-telugu-sans">
                  <p className="text-muted-foreground leading-relaxed">
                    తిరుమల వెంకటేశ్వర స్వామి మరియు పద్మావతి దేవి యొక్క పవిత్ర వివాహ వేడుక. 
                    దంపతుల మధ్య ప్రేమ, అవగాహన, కుటుంబ సుఖశాంతులు కోసం నిర్వహించబడుతుంది. 
                    వివాహిత దంపతులకు మరియు వివాహం కోరుకునే వారికి అత్యంత శుభకరమైన కళ్యాణం.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <h6 className="font-semibold text-primary mb-2">ప్రత్యేక లాభాలు:</h6>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• వైవాహిక జీవనంలో సుఖశాంతులు</li>
                      <li>• దంపతుల మధ్య ప్రేమ మరియు అవగాహన</li>
                      <li>• కుటుంబ ఐక్యత మరియు స్థిరత్వం</li>
                      <li>• వివాహ అవకాశాల లభ్యత</li>
                    </ul>
                  </div>
                </div>
                
                <button
                  onClick={() => handleWhatsAppClick('వెంకటేశ్వర కళ్యాణం')}
                  className="w-full mt-6 btn-divine flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>బుకింగ్ కోసం సంప్రదించండి</span>
                </button>
              </div>
            </div>

            <div className="card-divine overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={shivaparvatiKalyanam} 
                  alt="శివ-పార్వతి కళ్యాణం" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-2xl font-bold text-white font-telugu-serif">శివ-పార్వతి కళ్యాణం</h4>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4 font-telugu-sans">
                  <p className="text-muted-foreground leading-relaxed">
                    ఆది దంపతులైన భగవాన్ శివుడు మరియు మాత పార్వతి దేవి యొక్క దైవిక వివాహ వేడుక. 
                    దంపతుల మధ్య ఆధ్యాత్మిక అనుబంధం, పరస్పర గౌరవం, జీవిత లక్ష్యాలలో ఏకత్వం కోసం చేయబడుతుంది.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <h6 className="font-semibold text-primary mb-2">ప్రత్యేక లాభాలు:</h6>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• ఆధ్యాత్మిక అనుబంధం మరియు అవగాహన</li>
                      <li>• కుటుంబంలో సుఖశాంతులు</li>
                      <li>• దంపతుల మధ్య శాశ్వత ప్రేమ</li>
                      <li>• జీవిత లక్ష్యాలలో ఏకత్వం</li>
                    </ul>
                  </div>
                </div>
                
                <button
                  onClick={() => handleWhatsAppClick('శివ-పార్వతి కళ్యాణం')}
                  className="w-full mt-6 btn-divine flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>బుకింగ్ కోసం సంప్రదించండి</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Vratams Section */}
        <section id="vratams" className="mb-20">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="relative w-20 h-20 mr-6 mb-4 md:mb-0">
              <img 
                src={traditionalVratam}
                alt="వ్రతాలు ధార్మిక అనుష్ఠానాలు" 
                className="w-full h-full object-cover rounded-full border-4 border-primary shadow-lg"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-primary font-telugu-serif mb-2">వ్రతాలు</h2>
              <p className="text-xl text-secondary font-telugu-sans mb-2">పవిత్ర ధార్మిక అనుష్ఠానాలు మరియు ఉపవాసాలు</p>
              <p className="text-muted-foreground font-telugu-sans">
                మనోకోరికల నెరవేర్పు మరియు దైవ అనుగ్రహం కోసం నిర్వహించబడే పవిత్ర వ్రతాలు
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-divine overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={traditionalVratam}
                  alt="సత్యనారాయణ వ్రతం" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-xl font-bold text-white font-telugu-serif">సత్యనారాయణ వ్రతం</h4>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4 font-telugu-sans">
                  <p className="text-muted-foreground leading-relaxed">
                    భగవాన్ విష్ణువు యొక్క సత్యనారాయణ రూపానికి చేసే అత్యంత పవిత్రమైన వ్రతం. 
                    కుటుంబ సుఖశాంతులు, వ్యాపార అభివృద్ధి, సంతాన ప్రాప్తి కోసం చేయబడుతుంది.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h6 className="font-semibold text-primary mb-2">లాభాలు:</h6>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• కుటుంబ సుఖశాంతులు</li>
                      <li>• వ్యాపార అభివృద్ధి</li>
                      <li>• సంతాన ప్రాప్తి</li>
                      <li>• అన్ని మనోకోరికలు నెరవేర్చుట</li>
                    </ul>
                  </div>
                </div>
                
                <button
                  onClick={() => handleWhatsAppClick('సత్యనారాయణ వ్రతం')}
                  className="w-full mt-4 btn-sacred flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>బుకింగ్ చేయండి</span>
                </button>
              </div>
            </div>

            <div className="card-divine overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={varalakshmiVratam}
                  alt="వరలక్ష్మి వ్రతం" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-xl font-bold text-white font-telugu-serif">వరలక్ష్మి వ్రతం</h4>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4 font-telugu-sans">
                  <p className="text-muted-foreground leading-relaxed">
                    మహాలక్ష్మి దేవిని పూజించి కుటుంబంలో ధనం, ధాన్యం, ఐశ్వర్యం కోసం చేసే ప్రత్యేక వ్రతం. 
                    భర్త-భార్య సుఖసంతోషాలు, కుటుంబ సమృద్ధి కోసం చేయబడుతుంది.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h6 className="font-semibold text-primary mb-2">లాభాలు:</h6>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• ధన ధాన్య సంపత్తులు</li>
                      <li>• కుటుంబ ఐశ్వర్యం</li>
                      <li>• దంపతుల సుఖం</li>
                      <li>• లక్ష్మీ కటాక్షం</li>
                    </ul>
                  </div>
                </div>
                
                <button
                  onClick={() => handleWhatsAppClick('వరలక్ష్మి వ్రతం')}
                  className="w-full mt-4 btn-sacred flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>బుకింగ్ చేయండి</span>
                </button>
              </div>
            </div>

            <div className="card-divine overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={vinayakaChavithiVratam} 
                  alt="వినాయక చవితి వ్రతం" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-xl font-bold text-white font-telugu-serif">వినాయక చవితి వ్రతం</h4>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4 font-telugu-sans">
                  <p className="text-muted-foreground leading-relaxed">
                    విఘ్నేశ్వరుడైన గణేశుడిని పూజించి అన్ని విఘ్నాలను తొలగించడానికి చేసే ప్రత్యేక వ్రతం. 
                    కొత్త ప్రారంభాలు, విద్య, వ్యాపారంలో విజయం కోసం చేయబడుతుంది.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h6 className="font-semibold text-primary mb-2">లాభాలు:</h6>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• విఘ్న నివారణ</li>
                      <li>• కార్య సిద్ధి</li>
                      <li>• విద్యలో అభివృద్ధి</li>
                      <li>• బుద్ధి వైభవం</li>
                    </ul>
                  </div>
                </div>
                
                <button
                  onClick={() => handleWhatsAppClick('వినాయక చవితి వ్రతం')}
                  className="w-full mt-4 btn-sacred flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>బుకింగ్ చేయండి</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-sacred text-white rounded-2xl">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-telugu-serif">
              ఆధ్యాత్మిక సేవల కోసం నేటికే సంప్రదించండి
            </h2>
            <p className="text-xl font-telugu-sans mb-8 max-w-3xl mx-auto">
              మీ కుటుంబానికి దైవ దీవెనలు, సుఖశాంతులు, సమృద్ధి కలుగాలని కోరుకుంటున్నాము
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => handleWhatsAppClick('సేవల గురించి')}
                className="bg-white text-primary hover:bg-primary-glow hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl font-telugu-sans"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp లో సంప్రదించండి</span>
              </button>
              
              <div className="flex flex-col sm:flex-row gap-4 text-lg font-medium">
                <a href="tel:+919989101037" className="hover:text-accent transition-colors flex items-center space-x-2 font-telugu-sans">
                  <Phone className="h-5 w-5" />
                  <span>99891 01037</span>
                </a>
                <span className="hidden sm:inline">•</span>
                <a href="tel:+918886207347" className="hover:text-accent transition-colors flex items-center space-x-2 font-telugu-sans">
                  <Phone className="h-5 w-5" />
                  <span>88862 07347</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;