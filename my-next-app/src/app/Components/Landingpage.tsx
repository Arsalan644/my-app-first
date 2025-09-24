import React from 'react';
import type { JSX } from 'react';
import "./Landingpage.css"
import "./Footer.css"
import Image from 'next/image';


// --- Header  ---
const GenieLogo: React.FC = () => (
  <div className="flex items-center">
    <span className="text-3xl font-extrabold tracking-tighter text-[#18453B] text-4xl">Genie</span>
    <div className="w-2 h-2 bg-astro-green rounded-full ml-1"></div>
  </div>
);

const Header: React.FC = () => {
  return (
    <header className="py-6 ">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <GenieLogo />
          <nav className="hidden lg:flex items-center gap-8 text-gray-600 font-medium">
            <a href="#" className="hover:text-black transition-colors">Why Genie</a>
            <a href="#" className="hover:text-black transition-colors">Genie Users</a>
            {/* <a href="#" className="hover:text-black transition-colors">About</a> */}
          </nav>
          <div className="flex items-center gap-4">
            {/* <a href="#" className="hidden sm:block text-gray-600 font-medium hover:text-black transition-colors">Login</a> */}
            <button className="bg-[#18453B] text-white font-bold py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all">
              Join Beta
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};


// --- Hero Component ---
const Hero: React.FC = () => {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200/80 rounded-full px-4 py-2 mb-6 shadow-sm">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" />
          </svg> */}
          <span className="text-sm font-medium text-gray-700">Worldwide Conversational Matchmaking</span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
          Hi, I'm <span className="text-[#e017e0]">Genie</span>, the first AI-powered
          <br />
          matchmaker for Muslims globally.
        </h1>
        <p className="mt-6 text-gray-500 text-lg max-w-3xl mx-auto italic">
          The future of matchmaking is here. Genie uses Voice AI in 10 major languages, validated psychological frameworks, and advanced algorithmic matching to create meaningful values-based connections for Muslims globally.
        </p>
        <div className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow w-full px-5 py-3.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-astro-green/50 transition-shadow"
            aria-label="Email address"
          />
          <button className="bg-[#18453B] text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg flex-shrink-0">
            Join Beta
          </button>
        </div>

        <div className="hero-media relative w-1/2 h-auto flex mx-auto justify-center relative">
          <img className="block mt-16 mx-auto w-full h-full relative right-40"
            src="https://framerusercontent.com/images/rCIMHt27gC7cXNDlBoqtQFsq4.webp?scale-down-to=1024"
            alt="Hero Image"
          />
        </div>
      </div>
    </section>
  );
};


// --- Features Component ---
interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  rotation: string;
  translateY: string;
  grayscale?: boolean;
}

const features: FeatureCardProps[] = [
  {
    title: 'AI Matchmaking',
    description: 'Our AI finds matches on deep compatibility, not just swipes.',
    image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=300&auto=format&fit=crop&q=60',
    rotation: '-rotate-6',
    translateY: 'translate-y-0',
  },
  {
    title: 'Voice AI Connections',
    description: 'Connect authentically using our Voice AI in 10+ languages.',
    image: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?w=300&auto=format&fit=crop&q=60',
    rotation: 'rotate-3',
    translateY: 'translate-y-4',
  },
  {
    title: 'Values-Based',
    description: 'Find someone who truly shares your core values and life goals.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&auto=format&fit=crop&q=60',
    rotation: '-rotate-2',
    translateY: 'translate-y-6',
  },
  {
    title: 'Psychological Frameworks',
    description: 'Matches rooted in validated principles for lasting connections.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=300&auto=format&fit=crop&q=60',
    rotation: 'rotate-3',
    translateY: 'translate-y-4',
  },
  {
    title: 'Global Community',
    description: 'Join a diverse community of Muslims seeking real relationships.',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=300&auto=format&fit=crop&q=60',
    rotation: 'rotate-6',
    translateY: 'translate-y-0',
  },
];

const Clip: React.FC = () => (
  <div className="absolute -top-[1.1rem] left-1/2 -translate-x-1/2 w-8 h-8 bg-[#e017e0] rounded-lg z-20 flex justify-center items-start pt-1.5 shadow-sm">
    <div className="w-2 h-2 bg-white/40 rounded-full shadow-inner"></div>
  </div>
);

const FeatureCard: React.FC<Omit<FeatureCardProps, 'translateY'>> = ({ image, title, description, rotation, grayscale }) => {
  return (
    <div className={`relative p-3 bg-white rounded-2xl shadow-lg transform ${rotation} hover:scale-105 hover:!rotate-0 transition-transform duration-300 w-80 flex-shrink-0`}>
      <Clip />
      <div className="rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-48 object-cover ${grayscale ? 'grayscale' : ''}`}
        />
      </div>
      <div className="pt-4 pb-2 px-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};


const Features: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-16 w-[120rem] h-[120rem] border-t-2 border-gray-300/80 rounded-full" />
      <div
        className="group relative"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <style>
          {`
                    @keyframes scroll {
                        from { transform: translateX(0); }
                        to { transform: translateX(-100%); }
                    }
                    .animate-scroll {
                        animation: scroll 40s linear infinite;
                    }
                `}
        </style>
        <div className="flex gap-16 animate-scroll group-hover:[animation-play-state:paused]">
          {[...features, ...features].map((feature, index) => (
            <div key={index} className={`transform ${feature.translateY} pt-6`}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const WhyJoin: React.FC = () => {
  return (
<section className="py-20 bg-gray-50">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-8 text-center">Why Genie</h2>
    <ul className="space-y-6 text-gray-700 text-lg">
      <li><strong>Faith-centered:</strong> Genie ensures compatibility goes beyond surface-level attraction, prioritizing faith and long-term alignment.</li>
      <li><strong>AI-Powered:</strong> Harnessing Voice AI and psychology-backed frameworks, Genie uncovers genuine compatibility—not just swipes or photos.</li>
      <li><strong>Global Community:</strong> Connect with Muslims worldwide, from diverse cultures and backgrounds, all seeking meaningful relationships.</li>
      <li><strong>Privacy-first:</strong> Conversations and data are protected with end-to-end advanced encryption.</li>
      <li><strong>Citizen Genie:</strong> Join a movement, not just an app. A share of every dollar supports Muslim institutions worldwide.</li>
      <li><strong>Matched or you don’t pay:</strong> If you don’t find your match, you won’t pay.</li>
      <li><strong>Elevating Muslims globally:</strong> Beyond matchmaking, Genie uplifts Muslim voices, values, and visibility worldwide.</li>
    </ul>
  </div>
</section>
  )
};

// --- Partners Component ---
// const LogoIpsum: React.FC<{className?: string}> = ({className}) => (
//   <svg className={`h-8 text-gray-400 ${className}`} viewBox="0 0 119 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//     <path d="M34.664 21.037c-1.12 0-2.22-.315-3.14-.954l-1.68 2.871a5.85 5.85 0 0 0 4.82 2.457c3.36 0 5.6-2.015 5.6-5.12 0-2.88-1.92-4.63-4.62-4.63-1.68 0-3.12.87-3.78 2.22l5.16 2.07c.4.15.54.54.54 1.08zM15.824 10.457c-3.36 0-5.6 2.01-5.6 5.11 0 2.88 1.92 4.63 4.62 4.63 1.68 0 3.12-.87 3.78-2.22l-5.16-2.07a.978.978 0 0 1-.54-1.08c.03-.66 1.14-4.47 2.9-4.47 1.12 0 2.22.32 3.14.96l1.68-2.87a5.85 5.85 0 0 0-4.82-2.46zm-5.34 7.64c-.42 1.59-1.9 2.52-3.4 2.52-1.92 0-3.36-1.35-3.36-3.33s1.44-3.33 3.36-3.33c1.5 0 3 .93 3.4 2.52zm18.96 4.31c.42-1.59 1.9-2.52 3.4-2.52 1.92 0 3.36 1.35 3.36 3.33s-1.44 3.33-3.36 3.33c-1.5 0-3-.93-3.4-2.52zM21.944 23.327a3.49 3.49 0 0 1-3.36-3.33c0-1.98 1.44-3.33 3.36-3.33s3.36 1.35 3.36 3.33-1.44 3.33-3.36 3.33zm51.48 2.09c-3.12 0-4.86-1.62-4.86-4.23v-11.1h-3.36v11.4c0 4.5 2.88 6.3 7.02 6.3s7.02-1.8 7.02-6.3v-11.4h-3.36v11.1c0 2.61-1.74 4.23-4.86 4.23zm10.92-15.33h-3.36v15.33h3.36v-15.33zm21.36 15.33c-4.32 0-7.02-2.16-7.02-6.12v-.36c0-3.96 2.7-6.12 7.02-6.12s7.02 2.16 7.02 6.12v.36c0 3.96-2.7 6.12-7.02 6.12zm0-2.09c2.52 0 3.66-1.53 3.66-4.07v-.36c0-2.54-1.14-4.07-3.66-4.07s-3.66 1.53-3.66 4.07v.36c0 2.54 1.14 4.07 3.66 4.07zm14.58-13.24h-3.36v8.46h-5.04v-8.46h-3.36v15.33h3.36v-5.04h5.04v5.04h3.36v-15.33zM59.384 25.417c-4.32 0-7.02-2.16-7.02-6.12v-.36c0-3.96 2.7-6.12 7.02-6.12s7.02 2.16 7.02 6.12v.36c0 3.96-2.7 6.12-7.02 6.12zm0-2.09c2.52 0 3.66-1.53 3.66-4.07v-.36c0-2.54-1.14-4.07-3.66-4.07s-3.66 1.53-3.66 4.07v.36c0 2.54 1.14 4.07 3.66 4.07zM43.064 16.597c.42 1.11.42 2.4.42 3.6v.36h-7.02c.18 2.34 1.86 3.69 4.08 3.69 1.98 0 3.3-.99 4.02-2.43l2.76 1.53c-1.26 2.43-3.78 3.96-6.96 3.96-4.32 0-7.02-2.52-7.02-6.48 0-3.96 2.7-6.48 6.84-6.48 3.72 0 5.52 2.13 5.88 4.62zm-6.6-2.09h3.6c-.18-1.44-.9-2.43-2-2.43-1.02 0-1.62.9-1.6 2.43z"/>
//   </svg>
// );

// const LjjjLogo: React.FC<{className?: string}> = ({className}) => (
//     <svg className={`h-8 text-gray-400 ${className}`} viewBox="0 0 98 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//         <path d="M0 31.0401H9.28V0.960083H0V31.0401ZM14.72 0.960083V8.88008H21.28V14.6401H14.72V23.1201C14.72 25.2801 16.2 26.0001 17.6 26.0001C18.44 26.0001 19.24 25.8001 19.96 25.3201L21.48 30.6001C20.48 31.2801 18.96 31.6001 17.28 31.6001C14.8 31.6001 11.88 30.3601 11.88 26.5601V14.6401H8V8.88008H11.88V0.960083H14.72Z"/>
//         <path d="M26.88 0.960083V8.88008H33.44V14.6401H26.88V23.1201C26.88 25.2801 28.36 26.0001 29.76 26.0001C30.6 26.0001 31.4 25.8001 32.12 25.3201L33.64 30.6001C32.64 31.2801 31.12 31.6001 29.44 31.6001C26.96 31.6001 24.04 30.3601 24.04 26.5601V14.6401H20.16V8.88008H24.04V0.960083H26.88Z"/>
//         <path d="M38.08 0.960083V8.88008H44.64V14.6401H38.08V23.1201C38.08 25.2801 39.56 26.0001 40.96 26.0001C41.8 26.0001 42.6 25.8001 43.32 25.3201L44.84 30.6001C43.84 31.2801 42.32 31.6001 40.64 31.6001C38.16 31.6001 35.24 30.3601 35.24 26.5601V14.6401H31.36V8.88008H35.24V0.960083H38.08Z"/>
//         <path d="M57.6974 16.2401C57.6974 24.9201 51.9374 31.5201 43.4174 31.5201C34.8974 31.5201 29.1374 24.9201 29.1374 16.2401C29.1374 7.56008 34.8974 0.960083 43.4174 0.960083C51.9374 0.960083 57.6974 7.56008 57.6974 16.2401ZM50.8574 16.2401C50.8574 11.2401 47.6174 6.84008 43.4174 6.84008C39.2174 6.84008 35.9774 11.2401 35.9774 16.2401C35.9774 21.2401 39.2174 25.6401 43.4174 25.6401C47.6174 25.6401 50.8574 21.2401 50.8574 16.2401Z"/>
//         <path d="M78.6517 16.2401C78.6517 24.9201 72.8917 31.5201 64.3717 31.5201C55.8517 31.5201 50.0917 24.9201 50.0917 16.2401C50.0917 7.56008 55.8517 0.960083 64.3717 0.960083C72.8917 0.960083 78.6517 7.56008 78.6517 16.2401ZM71.8117 16.2401C71.8117 11.2401 68.5717 6.84008 64.3717 6.84008C60.1717 6.84008 56.9317 11.2401 56.9317 16.2401C56.9317 21.2401 60.1717 25.6401 64.3717 25.6401C68.5717 25.6401 71.8117 21.2401 71.8117 16.2401Z"/>
//     </svg>
// );

// const CircleLogo: React.FC<{className?: string}> = ({className}) => (
//     <svg className={`h-8 text-gray-400 ${className}`} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="4"/>
//     </svg>
// );

// const DoubleCircleLogo: React.FC<{className?: string}> = ({className}) => (
//     <svg className={`h-8 text-gray-400 ${className}`} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="4"/>
//         <circle cx="32" cy="16" r="14" stroke="currentColor" strokeWidth="4"/>
//     </svg>
// );

// const Partners: React.FC = () => {
//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-6 lg:px-8">
//         <div className="flex justify-center items-center gap-10 md:gap-16 flex-wrap">
//             <LogoIpsum />
//             <LjjjLogo />
//             <CircleLogo />
//             <DoubleCircleLogo />
//             <LogoIpsum className="hidden sm:block"/>
//             <CircleLogo className="hidden md:block"/>
//         </div>
//       </div>
//     </section>
//   );
// };

{/* <section className="py-20 text-center">
  <h2 className="text-4xl font-bold mb-8">Genie Users</h2>
  <p className="text-gray-600 mb-6">An app by Muslims for Muslims everywhere.</p>
  <div className="map-placeholder bg-gray-200 rounded-xl h-96 flex items-center justify-center">
    Interactive Map Coming Soon
  </div>
</section> */}



// --- Footer Component ---
// const AppStoreButton: React.FC = () => (
//   <div className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-3 opacity-50 cursor-not-allowed">
//     <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.1,6.54a3.48,3.48,0,0,0-2.47-1.13,3.66,3.66,0,0,0-3.3,2.15A3.54,3.54,0,0,0,11.2,5.3c-2.3,0-3.88,1.88-3.88,4.6,0,3.11,2.2,5.55,4.71,5.55A3.3,3.3,0,0,0,15.3,13a3.34,3.34,0,0,0,1.48-2.68h2.33A5.68,5.68,0,0,1,16.8,17.9a5.3,5.3,0,0,1-5.6,2.77c-3.59,0-6.19-2.58-6.19-6.2,0-3.61,2.83-6.6,6.28-6.6a5.4,5.4,0,0,1,5,2.89,4.88,4.88,0,0,1,.22,3.43,3.47,3.47,0,0,0,2.51-.15ZM13.8,4.31a3.49,3.49,0,0,0,2.44-1.12A3.56,3.56,0,0,0,14.65,1,3.43,3.43,0,0,0,12.2,2.1,3.54,3.54,0,0,0,13.8,4.31Z" /></svg>
//     <div>
//       <p className="text-xs">Download on the</p>
//       <p className="text-base font-semibold">App Store</p>
//     </div>
//   </div>
// );

// const PlayStoreButton: React.FC = () => (
//   <div className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-3 opacity-50 cursor-not-allowed">
//     <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.7,2.25l10.5,6.06-10.5,6.06Zm.15,13.3,10.2-5.89-10.2-5.89v11.78ZM16.05,9.45,4.35,2.25l10.5,6.06Zm5.1-1.65-1.65-.94-3,1.73,3,1.73,1.65-.94a.75.75,0,0,0,0-1.3Z" /></svg>
//     <div>
//       <p className="text-xs">GET IT ON</p>
//       <p className="text-base font-semibold">Google Play</p>
//     </div>
//   </div>
// );

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
        <button className="bg-[#18453B] text-white font-bold py-3 px-6  rounded-full shadow-lg hover:scale-105 transition-all mb-6">
        Join Beta</button>
      <p className="footer-text">
        Available on Android and iOS starting 2026.
      </p>
      <div className="store-buttons">
        <Image
          src="/playStore.png"
          alt="Google Play Store"
          width={190}
          height={50}
        />
          <Image
          src="/apple.png"
          alt="Google Play Store"
          width={150}
          height={50}
        />
      </div>
    </div>
  </footer>
);

// export default Footer;


// const Footer: React.FC = () => (
//   <footer className="py-12 text-center border-t border-gray-200">
//     <div className="container mx-auto px-6 lg:px-8">
//       <button className="bg-[#18453B] text-white font-bold py-3 px-6  rounded-full shadow-lg hover:scale-105 transition-all mb-6">
//         Join Beta
//       </button>
//       <p className="text-gray-600">Available on Android and iOS starting 2026.</p>
//       <div className="mt-4 flex justify-center items-center gap-4">
//         <AppStoreButton />
//         <PlayStoreButton />
//       </div>
//     </div>
//   </footer>
// );


// --- Main App Component ---
const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FCFDF5] text-gray-800 font-sans">
      <div className="background-gradient" />
      <Header />
      <main>
        <Hero />
        <Features />
        <WhyJoin />
        {/* <Partners /> */}
        {/* <GenieUsers /> */}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;