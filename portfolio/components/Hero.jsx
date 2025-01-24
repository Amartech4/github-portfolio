"use client";
import React from 'react'
import { FlipWords } from './ui/flip-words';
import { SparklesCore } from './ui/sparkles';

function Hero() {
    const words = ["frontend developer", "UI/UX enthusiast", "JavaScript expert"];
    const portfolioWords = ["modern tools", "clean code", "great design"];
    
  return (
  <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
    <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
    <p className="mb-4">
          Hi, I'm <span className="font-bold text-neutral-800 dark:text-neutral-200">Amar Mehdi</span>
        </p>
        <p className="text-3xl mb-4">
          I'm a <span className="font-semibold text-neutral-800 dark:text-neutral-200">
            <span className="inline-block min-w-[250px]">
              <FlipWords words={words} />
            </span>
          </span>
        </p>
        {/* New Line for Portfolio */}
        <p className="text-3xl">
          This is my portfolio with 
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">
            <span className="inline-block min-w-[250px]">
              <FlipWords words={portfolioWords} />
            </span>
          </span>
        </p>
    </div>
    
    <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
  </div>
  )
}

export default Hero