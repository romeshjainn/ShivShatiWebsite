import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Pricing from '../components/Pricing';
import Product from '../components/Product';
import Help from '../components/Help';

const App = () => {


  return (
    <div
      className={`bg-background grid gap-y-16 overflow-hidden relative mr-6`}
    >
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <Canvas />
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Pricing />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <Help />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow>
      <Analytics />
      <a
        href="https://web.whatsapp.com/send/?phone=917987222325&text&type=phone_number&app_absent=0"
        target="_blank"
        className="fixed right-14 bottom-10"
      >
        <img
          className="h-16 hover:h-20 aspect-square"
          src="https://cdn3.iconfinder.com/data/icons/social-media-app-2/128/Whatsapp.png"
          alt=""
        />
      </a>
    </div>
  );
};

export default App;
