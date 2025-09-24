import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const services = [
    'హోమాలు (Homams)',
    'అభిషేకాలు (Abhishekams)',
    'కళ్యాణాలు (Kalyanams)',
    'వ్రతాలు (Vratams)',
    'గృహప్రవేశం (Gruhapravesham)',
    'Other Services'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      toast({
        title: "అన్ని ఫీల్డ్లు పూరించండి",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const phoneNumber = "919989101037";
    const whatsappMessage = `నమస్తే గురువు గారు,

పేరు: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}

Message: ${formData.message}

దయచేసి నాకు మరింత సమాచారం అందించండి.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "మీ సందేశం పంపబడింది",
      description: "Your message has been sent via WhatsApp",
    });

    // Reset form
    setFormData({ name: '', email: '', service: '', message: '' });
  };

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
            సంప్రదించండి
          </h1>
          <h2 className="text-3xl font-semibold text-secondary mb-4">
            Contact Us
          </h2>
          <div className="divider-sacred"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-telugu-sans">
            మీ ఆధ్యాత్మిక సేవల అవసరాలకు సంబంధించి మమ్మల్ని సంప్రదించండి
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-divine p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary font-telugu-serif">
                మాకు సందేశం పంపండి
              </h3>
              <h4 className="text-xl font-semibold mb-8 text-secondary">
                Send Us a Message
              </h4>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 font-telugu-sans">
                    పేరు / Name *
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="మీ పూర్తి పేరు / Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 font-telugu-sans">
                    ఇమెయిల్ / Email *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 font-telugu-sans">
                    సేవ / Service *
                  </label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="సేవను ఎంచుకోండి / Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 font-telugu-sans">
                    సందేశం / Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="మీ అవసరాలను వివరంగా రాయండి / Please describe your requirements in detail"
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full btn-divine">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <span className="font-telugu-sans">WhatsApp లో పంపండి</span>
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Phone Numbers */}
              <div className="card-divine p-6">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-primary font-telugu-serif">
                    ఫోన్ నంబర్లు
                  </h3>
                </div>
                <h4 className="text-lg font-medium text-secondary mb-4">Phone Numbers</h4>
                
                <div className="space-y-3">
                  <a
                    href="tel:+919989101037"
                    className="flex items-center p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="font-semibold text-primary">+91 99891 01037</p>
                      <p className="text-sm text-muted-foreground font-telugu-sans">ప्राথमिक संपर्क / Primary Contact</p>
                    </div>
                  </a>
                  
                  <a
                    href="tel:+918886207347"
                    className="flex items-center p-3 bg-secondary/5 rounded-lg hover:bg-secondary/10 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-secondary mr-3" />
                    <div>
                      <p className="font-semibold text-secondary">+91 88862 07347</p>
                      <p className="text-sm text-muted-foreground font-telugu-sans">వैकल्पिक संपर्क / Alternative Contact</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="card-divine p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-primary font-telugu-serif">
                    WhatsApp
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4 font-telugu-sans">
                  త్వరిత సమాధానం కోసం WhatsApp లో మాట్లాడండి
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  Chat with us on WhatsApp for quick responses
                </p>
                
                <Button onClick={handleWhatsAppClick} className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <span className="font-telugu-sans">WhatsApp లో చాట్ చేయండి</span>
                </Button>
              </div>

              {/* Service Hours */}
              <div className="card-divine p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-primary font-telugu-serif">
                    సేవ సమయాలు
                  </h3>
                </div>
                <h4 className="text-lg font-medium text-secondary mb-4">Service Hours</h4>
                
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-medium">సోమవారం - శనివారం:</span> 6:00 AM - 8:00 PM</p>
                  <p><span className="font-medium">ఆదివారం:</span> 6:00 AM - 6:00 PM</p>
                  <p className="text-sm mt-3">
                    <span className="font-medium">Emergency Services:</span> Available 24/7
                  </p>
                </div>
              </div>

              {/* Website */}
              <div className="card-divine p-6">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-primary font-telugu-serif">
                    వెబ్‌సైట్
                  </h3>
                </div>
                
                <p className="text-muted-foreground">
                  <span className="font-medium">Website:</span> www.manapooja.in
                </p>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-16 text-center bg-gradient-temple rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-primary font-telugu-serif">
              సేవా ప్రాంతాలు
            </h3>
            <h4 className="text-xl font-semibold mb-6 text-secondary">
              Service Areas
            </h4>
            
            <p className="text-muted-foreground mb-4 font-telugu-sans">
              మేము తెలంగాణ మరియు ఆంధ్రప్రదేశ్ అంతటా సేవలు అందిస్తాము
            </p>
            <p className="text-muted-foreground">
              We provide services across Telangana and Andhra Pradesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;