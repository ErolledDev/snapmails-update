import React from 'react';
import { Helmet } from 'react-helmet-async';
import EmailBox from '../components/EmailBox';
import AdUnit from '../components/AdUnit';
import { Shield, Clock, Lock, Mail } from 'lucide-react';
import { ErrorBoundary } from '../components/ErrorBoundary';

const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <Helmet>
        <title>Temp Mail - Temporary Disposable Email | Spam-Free SnapMails</title>
        <meta name="description" content="Get instant disposable email addresses with unique customization features. Protect your real inbox from spam with SnapMails's secure temporary email service." />
        <meta name="keywords" content="temporary email, disposable email, temp mail, anonymous email, spam protection, custom email, temporary mail service, secure email" />
        <link rel="canonical" href="https://snapmails.xyz" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SnapMails - Secure & Customizable Temporary Email Service" />
        <meta property="og:description" content="Get instant disposable email addresses with unique customization features. Protect your real inbox from spam with SnapMails's secure temporary email service." />
        <meta property="og:url" content="https://snapmails.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://snapmails.xyz/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SnapMails - Secure Temporary Email Service" />
        <meta name="twitter:description" content="Get instant disposable email addresses with unique customization features. Protect your inbox from spam." />
        <meta name="twitter:image" content="https://snapmails.xyz/twitter-image.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "SnapMails",
            "description": "Secure and customizable disposable email service",
            "url": "https://snapmails.xyz",
            "applicationCategory": "Email Service",
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-blue-50/50 dark:from-blue-950/30 dark:via-transparent dark:to-blue-950/30 pointer-events-none"></div>
        <div className="relative">
          <div className="text-center max-w-4xl mx-auto px-4 pt-20 pb-16">
            <h1 className="text-4xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
              Secure Temporary Email Service
            </h1>
            <p className="text-2xl font-medium text-gray-800 dark:text-gray-100 max-w-2xl mx-auto mb-6 leading-relaxed">
              Get instant disposable email addresses with unique customization features
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
              Protect your privacy and keep your inbox clean with our secure temporary email service. Perfect for testing, signing up for services, or avoiding spam.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top ad unit with content before */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Instant Email Protection</h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
            Get started with our secure temporary email service in seconds. No registration required.
          </p>
          <AdUnit 
            slot="1234567890"
            format="auto"
            position="top"
            className="mt-4"
          />
        </section>

        <ErrorBoundary>
          <EmailBox />
        </ErrorBoundary>

        {/* Bottom ad unit with content after */}
        <AdUnit 
          slot="0987654321"
          format="auto"
          position="bottom"
          className="mb-8"
        />

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose SnapMails?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Privacy Protection</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Keep your real email address private and protect yourself from unwanted spam and marketing emails.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Easy to Use</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get a temporary email address instantly - no registration or personal information required.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Secure & Reliable</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our service is built with security in mind, ensuring your temporary emails are protected.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Get Email Address</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Receive an instant temporary email address
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Use Anywhere</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Use it to sign up for services or receive emails
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Read Messages</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Instantly receive and read your messages
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold mb-2">Stay Private</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Keep your real inbox clean and protected
              </p>
            </div>
          </div>
        </section>
      </main>
    </ErrorBoundary>
  );
};

export default Home;