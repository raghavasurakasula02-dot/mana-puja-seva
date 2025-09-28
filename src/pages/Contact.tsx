import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Clock } from 'lucide-react';
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
    'హోమాలు',
    'అభిషేకాలు',
    'కళ్యాణాలు',
    'వ్రతాలు',
    'గృహప్రవేశం',
    'ఇతర సేవలు'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      toast({
        title: "అన్ని ఫీల్డ్లు పూరించండి",
        variant: "destructive"
      });
      return;
    }

    const phoneNumber = "919989101037";
    const whatsappMessage = `నమస్తే గురువు గారు,

పేరు: ${formData.name}
ఇమెయిల్: ${formData.email}
సేవ: ${formData.service}

సందేశం: ${formData.message}

దయచేసి నాకు మరింత సమాచారం అందించండి.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "మీ సందేశం పంపబడింది",
    });

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
          <div className="divider-sacred mx-auto w-24"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-telugu-sans">
            మీ ఆధ్యాత్మిక సేవల అవసరాలకు సంబంధించి మమ్మల్ని సంప్రదించండి
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-divine p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary font-telugu-serif">
                  మాకు సందేశం పంపండి
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 font-telugu-sans">
                      పేరు *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="మీ పూర్తి పేరు"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 font-telugu-sans">
                      ఇమెయిల్ *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="మీ ఇమెయిల్"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 font-telugu-sans">
                      సేవ *
                    </label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="సేవను ఎంచుకోండి" />
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
                      సందేశం *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="మీ అవసరాలను వివరంగా రాయండి"
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
            </div>

            {/* Contact Information */}
            <div className="grid grid-rows-4 gap-6 h-full">
              {/* Phone Numbers */}
              <div className="card-divine p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <Phone className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-primary font-telugu-serif">
                      ఫోన్ నంబర్లు
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <a
                      href="tel:+919989101037"
                      className="flex items-center p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <Phone className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <p className="font-semibold text-primary">+91 99891 01037</p>
                        <p className="text-sm text-muted-foreground font-telugu-sans">ప్రాథమిక సంప్రదింపు</p>
                      </div>
                    </a>

                    <a
                      href="tel:+918886207347"
                      className="flex items-center p-3 bg-secondary/5 rounded-lg hover:bg-secondary/10 transition-colors"
                    >
                      <Phone className="h-5 w-5 text-secondary mr-3" />
                      <div>
                        <p className="font-semibold text-secondary">+91 88862 07347</p>
                        <p className="text-sm text-muted-foreground font-telugu-sans">ప్రత్యామ్నాయ సంప్రదింపు</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="card-divine p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <MessageCircle className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-xl font-semibold text-primary font-telugu-serif">
                      WhatsApp
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4 font-telugu-sans">
                    త్వరిత సమాధానం కోసం WhatsApp లో మాట్లాడండి
                  </p>
                  <Button onClick={handleWhatsAppClick} className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    <span className="font-telugu-sans">WhatsApp లో చాట్ చేయండి</span>
                  </Button>
                </div>
              </div>

              {/* Service Hours */}
              <div className="card-divine p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-primary font-telugu-serif">
                      సేవ సమయాలు
                    </h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p><span className="font-medium">సోమవారం - శనివారం:</span> 6:00 AM - 8:00 PM</p>
                    <p><span className="font-medium">ఆదివారం:</span> 6:00 AM - 6:00 PM</p>
                    <p className="text-sm mt-3"><span className="font-medium">తాత్కాలిక సేవలు:</span> 24/7 అందుబాటులో</p>
                  </div>
                </div>
              </div>

              {/* Website */}
              <div className="card-divine p-6 flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-primary font-telugu-serif">
                    వెబ్‌సైట్
                  </h3>
                </div>
                <p className="text-muted-foreground">www.manapooja.in</p>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-16 text-center bg-gradient-temple rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-primary font-telugu-serif">
              సేవా ప్రాంతాలు
            </h3>
            <p className="text-muted-foreground mb-4 font-telugu-sans">
              మేము తెలంగాణ మరియు ఆంధ్రప్రదేశ్ అంతటా సేవలు అందిస్తాము
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
