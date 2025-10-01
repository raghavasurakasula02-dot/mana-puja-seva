import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
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
            Privacy Policy
          </h1>
          <div className="divider-sacred"></div>
          <p className="text-muted-foreground">
            Last updated: September 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              When you contact MANA PUJA for spiritual services, we may collect the following information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Name and contact information (phone number, email address)</li>
              <li>Service preferences and requirements</li>
              <li>Location information for home visit services</li>
              <li>Communication history through WhatsApp or phone calls</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use your personal information to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide spiritual services as requested</li>
              <li>Schedule and coordinate service appointments</li>
              <li>Communicate about service details and updates</li>
              <li>Improve our service quality</li>
              <li>Send spiritual calendar updates and festival information (with consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Information Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">WhatsApp Communication</h2>
            <p className="text-muted-foreground">
              When you contact us via WhatsApp, your messages are subject to WhatsApp's privacy policy. 
              We use WhatsApp Business for professional communication and service coordination.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy, please contact us:
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
            <h2 className="text-2xl font-semibold text-primary mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
