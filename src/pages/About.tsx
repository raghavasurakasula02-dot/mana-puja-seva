import React from 'react';
import { Award, Clock, Users, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-telugu-serif">
            గురువు గారి గురించి
          </h1>
          <h2 className="text-3xl font-semibold text-secondary mb-4">
            About Guru Garu
          </h2>
          <div className="divider-sacred"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary font-telugu-serif">
                  ఆధ్యాత్మిక అనుభవం
                </h3>
                <h4 className="text-xl font-medium text-secondary">
                  Spiritual Experience
                </h4>
                
                <p className="text-lg leading-relaxed font-telugu-sans">
                  గురువు గారు పంద్రేళ్లకు మించిన ఆధ్యాత్మిక అనుభవం కలిగిన అత్యంత విశ్వసనీయ వ్యక్తిత్వం. 
                  సాంప్రదాయిక వేద విధానాలను పూర్ణ భక్తి శ్రద్ధలతో అనుసరిస్తూ, అన్ని రకాల హోమాలు, అభిషేకాలు, 
                  కళ్యాణాలు మరియు వ్రతాలను అత్యంత పవిత్రత మరియు కచ్చితత్వంతో నిర్వహిస్తారు. 
                  భక్తుల ఆధ్యాత్మిక అవసరాలను పూర్తిగా అర్థం చేసుకొని, వారి కోరికలను దైవం ముందు వినవించడంలో నిపుణులు.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Guru Garu is a highly trusted spiritual personality with over 15 years of authentic experience. 
                  Following traditional vedic procedures with complete devotion and dedication, he performs all types of 
                  homams, abhishekams, kalyanams, and vratams with utmost sanctity and precision. 
                  He is expert in understanding devotees' spiritual needs and presenting their wishes before the divine.
                </p>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <p className="text-primary font-medium font-telugu-serif mb-2">
                    "సర్వే భవన్తు సుఖినః సర్వే సన్తు నిరామయాః"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Let everyone be happy, let everyone be free from disease - Our guiding principle
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary font-telugu-serif">
                  మా లక్ష్యం
                </h3>
                <h4 className="text-xl font-medium text-secondary">
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
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
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

            {/* Statistics/Features */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            
            <p className="text-muted-foreground mb-6 font-telugu-sans">
              మీ ఆధ్యాత్మిక అవసరాలకు సంబంధించి ఏదైనా సందేహాలు లేదా సేవల గురించి మరింత తెలుసుకోవాలంటే 
              మమ్మల్ని సంప్రదించండి.
            </p>
            
            <p className="text-muted-foreground mb-8">
              For any questions about our spiritual services or to book a consultation, 
              please feel free to contact us.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919989101037"
                className="btn-divine"
              >
                Call: +91 99891 01037
              </a>
              
              <a
                href="tel:+918886207347"
                className="btn-sacred"
              >
                Call: +91 88862 07347
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;