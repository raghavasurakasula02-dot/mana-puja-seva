import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-telugu-sans"
        >
          <ArrowLeft className="h-5 w-5" />
          వెనుకకు వెళ్ళండి
        </button>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Terms of Service
          </h1>
          <div className="divider-sacred"></div>
          <p className="text-muted-foreground">
            Last updated: September 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By contacting MANA PUJA for spiritual services, you agree to these Terms of Service. 
              If you do not agree with these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Service Description</h2>
            <p className="text-muted-foreground mb-4">
              MANA PUJA provides traditional Hindu spiritual services including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Homams (హోమాలు) - Sacred fire rituals</li>
              <li>Abhishekams (అభిషేకాలు) - Sacred ablutions</li>
              <li>Kalyanams (కళ్యాణాలు) - Divine marriage ceremonies</li>
              <li>Vratams (వ్రతాలు) - Religious observances</li>
              <li>Other traditional Hindu rituals and ceremonies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Booking and Payment</h2>
            <p className="text-muted-foreground mb-4">
              Service bookings and payments are subject to the following terms:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Services must be booked in advance through phone or WhatsApp</li>
              <li>Payment terms will be discussed and agreed upon during booking</li>
              <li>Cancellations must be made at least 24 hours in advance</li>
              <li>Rescheduling is subject to availability</li>
              <li>Additional charges may apply for materials and travel expenses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Service Locations</h2>
            <p className="text-muted-foreground">
              We provide services at your home, temples, or other suitable locations across Telangana and Andhra Pradesh. 
              The client is responsible for providing a suitable space for conducting the rituals and any specific 
              materials required for the ceremony.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Client Responsibilities</h2>
            <p className="text-muted-foreground mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide accurate information about your requirements</li>
              <li>Ensure a clean and appropriate space for the ceremonies</li>
              <li>Arrange necessary materials as advised by Guru Garu</li>
              <li>Respect the traditional and religious nature of the services</li>
              <li>Make payment as agreed upon</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              MANA PUJA provides spiritual services based on traditional Hindu practices. While we perform all 
              rituals with complete devotion and according to vedic procedures, we cannot guarantee specific
              outcomes or results. Our services are provided for spiritual and religious purposes only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content on this website, including text, images, and design elements, is the property of 
              MANA PUJA or used with permission. The traditional mantras and procedures used in our services 
              are part of the ancient Vedic heritage and are performed with respect to their sacred nature.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Privacy and Communication</h2>
            <p className="text-muted-foreground">
              We respect your privacy and will handle your personal information according to our Privacy Policy. 
              Communications via WhatsApp or phone are kept confidential and used only for service coordination.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Modifications to Services</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify our service offerings, prices, and terms with reasonable notice. 
              Any changes will not affect services already booked and confirmed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For questions about these Terms of Service or our services, please contact us:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-muted-foreground">
                <strong>Phone:</strong> +91 99891 01037 or +91 88862 07347<br />
                <strong>WhatsApp:</strong> +91 99891 01037<br />
                <strong>Website:</strong> www.manapooja.in
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms of Service are governed by the laws of India. Any disputes will be resolved 
              through appropriate legal channels in the jurisdiction where our services are provided.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
