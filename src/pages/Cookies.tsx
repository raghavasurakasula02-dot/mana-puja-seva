import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cookies = () => {
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
            Cookie Policy
          </h1>
          <div className="divider-sacred"></div>
          <p className="text-muted-foreground">
            Last updated: September 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">What Are Cookies</h2>
            <p className="text-muted-foreground">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better browsing experience by remembering your preferences 
              and improving website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">How We Use Cookies</h2>
            <p className="text-muted-foreground mb-4">
              MANA PUJA uses cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand website usage</li>
              <li>Performance cookies to improve website speed and functionality</li>
              <li>Preference cookies to remember your language and location settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-secondary mb-3">Essential Cookies</h3>
            <p className="text-muted-foreground mb-4">
              These cookies are necessary for the website to function properly. They enable basic functions 
              like page navigation and access to secure areas of the website.
            </p>

            <h3 className="text-xl font-semibold text-secondary mb-3">Analytics Cookies</h3>
            <p className="text-muted-foreground mb-4">
              These cookies help us understand how visitors interact with our website by collecting and 
              reporting information anonymously. This helps us improve our website performance.
            </p>

            <h3 className="text-xl font-semibold text-secondary mb-3">Functionality Cookies</h3>
            <p className="text-muted-foreground mb-4">
              These cookies allow the website to remember choices you make and provide enhanced, 
              more personal features such as language preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Third-Party Cookies</h2>
            <p className="text-muted-foreground mb-4">
              We may use third-party services that place cookies on your device:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Google Fonts for typography</li>
              <li>Web analytics services to understand website usage</li>
              <li>WhatsApp integration for communication</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Managing Cookies</h2>
            <p className="text-muted-foreground mb-4">
              You can control and manage cookies in several ways:
            </p>
            
            <h3 className="text-xl font-semibold text-secondary mb-3">Browser Settings</h3>
            <p className="text-muted-foreground mb-4">
              Most web browsers allow you to control cookies through their settings preferences. 
              You can usually find these settings in the "Options" or "Preferences" menu of your browser.
            </p>

            <h3 className="text-xl font-semibold text-secondary mb-3">Disabling Cookies</h3>
            <p className="text-muted-foreground mb-4">
              You can choose to disable cookies, but please note that some features of our website 
              may not function properly without them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Mobile Devices</h2>
            <p className="text-muted-foreground">
              For mobile devices, you can usually manage cookies through your device's browser settings. 
              The process varies depending on your device and browser type.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Updates to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. Please revisit this page 
              periodically to stay informed about our use of cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-muted-foreground">
                <strong>Phone:</strong> +91 99891 01037 or +91 88862 07347<br />
                <strong>WhatsApp:</strong> +91 99891 01037<br />
                <strong>Website:</strong> www.manapuja.in
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Consent</h2>
            <p className="text-muted-foreground">
              By using our website, you consent to the use of cookies as described in this Cookie Policy. 
              If you do not agree to the use of cookies, please adjust your browser settings accordingly 
              or refrain from using our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
