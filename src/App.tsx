import React, { useState } from "react";
import {
  Building2,
  Target,
  Users,
  CheckCircle,
  PhoneCall,
  Search,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { IntlProvider, FormattedMessage } from "react-intl";
import arMessages from "./translations/ar.json";
import enMessages from "./translations/en.json";
import logo from "./logo.png";

const messages = {
  ar: arMessages,
  en: enMessages,
};

function App() {
  const [locale, setLocale] = useState("en");

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "ar" : "en");
  };

  return (
    <IntlProvider messages={messages[locale]} locale={locale}>
      <div
        className={`min-h-screen bg-white ${locale === "ar" ? "rtl" : "ltr"}`}
      >
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-brand-brown to-brand-brown-light text-white">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="First Link Dept Collection"
                  className="h-12 w-auto"
                />
                <span className="ml-2 text-xl font-bold text-brand-sand">
                  <FormattedMessage id="nav.title" />
                </span>
              </div>
              <button onClick={toggleLanguage} className="btn-secondary">
                {locale === "en" ? "العربية" : "English"}
              </button>
            </div>
          </nav>

          <div className="container mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-sand">
              <FormattedMessage id="hero.title" />
            </h1>
            <p className="text-xl mb-8 text-brand-sand-light">
              <FormattedMessage id="hero.subtitle" />
            </p>
          </div>
        </header>

        {/* About Section */}
        <section className="py-16 bg-brand-sand-light/10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-brand-brown">
              <FormattedMessage id="about.title" />
            </h2>
            <div className="max-w-3xl mx-auto text-brand-brown-light leading-relaxed">
              <p className="mb-6">
                <FormattedMessage id="about.description1" />
              </p>
              <p className="mb-6">
                <FormattedMessage id="about.description2" />
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-brand-brown">
              <FormattedMessage id="whyUs.title" />
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-brand-sand/20">
                <Users className="h-12 w-12 text-brand-green mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-brand-brown">
                  <FormattedMessage id="whyUs.reason1.title" />
                </h3>
                <p className="text-brand-brown-light">
                  <FormattedMessage id="whyUs.reason1.description" />
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-brand-sand/20">
                <Search className="h-12 w-12 text-brand-green mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-brand-brown">
                  <FormattedMessage id="whyUs.reason2.title" />
                </h3>
                <p className="text-brand-brown-light">
                  <FormattedMessage id="whyUs.reason2.description" />
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-brand-sand/20">
                <CheckCircle className="h-12 w-12 text-brand-green mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-brand-brown">
                  <FormattedMessage id="whyUs.reason3.title" />
                </h3>
                <p className="text-brand-brown-light">
                  <FormattedMessage id="whyUs.reason3.description" />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Objectives */}
        <section className="py-16 bg-brand-sand-light/10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-brand-brown">
              <FormattedMessage id="objectives.title" />
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start">
                <Target className="h-6 w-6 text-brand-green mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-brown">
                    <FormattedMessage id="objectives.1.title" />
                  </h3>
                  <p className="text-brand-brown-light">
                    <FormattedMessage id="objectives.1.description" />
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-brand-green mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-brown">
                    <FormattedMessage id="objectives.2.title" />
                  </h3>
                  <p className="text-brand-brown-light">
                    <FormattedMessage id="objectives.2.description" />
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-6 w-6 text-brand-green mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-brown">
                    <FormattedMessage id="objectives.3.title" />
                  </h3>
                  <p className="text-brand-brown-light">
                    <FormattedMessage id="objectives.3.description" />
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Building2 className="h-6 w-6 text-brand-green mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-brown">
                    <FormattedMessage id="objectives.4.title" />
                  </h3>
                  <p className="text-brand-brown-light">
                    <FormattedMessage id="objectives.4.description" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-brand-brown">
              <FormattedMessage id="contact.title" />
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md border border-brand-sand/20">
                <PhoneCall className="h-8 w-8 text-brand-green mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-brand-brown">
                  <FormattedMessage id="contact.phone" />
                </h3>
                <p className="text-brand-brown-light">
                  <FormattedMessage id="contact.phone.number" />
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-brand-sand/20">
                <Mail className="h-8 w-8 text-brand-green mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-brand-brown">
                  <FormattedMessage id="contact.email" />
                </h3>
                <p className="text-brand-brown-light">info@firstlink.eg</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-brand-sand/20">
                <MapPin className="h-8 w-8 text-brand-green mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-brand-brown">
                  <FormattedMessage id="contact.address" />
                </h3>
                <p className="text-brand-brown-light">
                  <FormattedMessage id="contact.address.full" />
                </p>
              </div>
            </div>
            <div className="mt-12 bg-white p-6 rounded-lg shadow-md border border-brand-sand/20 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-brand-green mr-2" />
                <h3 className="text-xl font-semibold text-brand-brown">
                  <FormattedMessage id="contact.hours" />
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-center">
                <div>
                  <p className="font-semibold text-brand-brown">
                    <FormattedMessage id="contact.hours.weekdays" />
                  </p>
                  <p className="text-brand-brown-light">
                    <FormattedMessage id="contact.hours.timing" />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-brand-brown">
                    <FormattedMessage id="contact.hours.weekend" />
                  </p>
                  <p className="text-brand-brown-light">
                    <FormattedMessage id="contact.hours.closed" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-brand-brown text-white py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <img
                  src={logo}
                  alt="First Link Collection"
                  className="h-8 w-auto brightness-0 invert"
                />
                <span className="ml-2 text-lg font-semibold">
                  <FormattedMessage id="nav.title" />
                </span>
              </div>
              <div className="flex items-center">
                <PhoneCall className="h-5 w-5 mr-2" />
                <span>
                  <FormattedMessage id="contact.title" />
                </span>
              </div>
            </div>
            <div className="mt-4 text-center text-brand-sand-light text-sm">
              © {new Date().getFullYear()} <FormattedMessage id="nav.title" />.{" "}
              <FormattedMessage id="footer.rights" />
            </div>
          </div>
        </footer>
      </div>
    </IntlProvider>
  );
}

export default App;
