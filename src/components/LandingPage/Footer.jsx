'use client';
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black font-[Montserrat] overflow-x-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col items-start space-y-4 ">
            <div className="flex-shrink-0 mb-28 ml-10 mt-5">
              <Image
                src="/assets/logos/footerlogo.png"
                alt="Footer Logo"
                width={150} 
                height={150}
                priority
              />
            </div>
            <div className="flex items-center space-x-3 mt-10 ml-10">
              <a href="#facebook" aria-label="Facebook">
                <Image
                  src="/assets/Icons/facebookicon.png"
                  alt="Facebook"
                  width={30}
                  height={30}
                  className="object-contain border border-gray-300 p-1.5 rounded-full hover:opacity-80 transition-all"
                />
              </a>
              <a href="#instagram" aria-label="Instagram">
                <Image
                  src="/assets/Icons/instagramicon.png"
                  alt="Instagram"
                  width={30}
                  height={30}
                  className="object-contain border border-gray-300 p-1.5 rounded-full hover:opacity-80 transition-all"
                />
              </a>
              <a href="#twitter" aria-label="Twitter">
                <Image
                  src="/assets/Icons/twittericon.png"
                  alt="Twitter"
                  width={30}
                  height={30}
                  className="object-contain border border-gray-300 p-1.5 rounded-full hover:opacity-80 transition-all"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-10 w-full md:w-auto">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-base font-semibold mb-3">Services</h3>
                <ul className="text-xs space-y-1">
                  <li>UI/UX Designing</li>
                  <li>Software Development</li>
                  <li>Consultation</li>
                  <li>Digital Marketing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold mb-3">Company</h3>
                <ul className="text-xs space-y-1">
                  <li>Home</li>
                  <li>About</li>
                  <li>Career</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold mb-3">Follow Us</h3>
                <ul className="text-xs space-y-1">
                  <li>Instagram</li>
                  <li>LinkedIn</li>
                  <li>Facebook</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-base font-semibold mb-3">Keep in Touch</h3>
              <p className="text-xs mb-4">
                Subscribe our newsletter for latest updates or news
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full sm:w-[250px] h-10 px-3 rounded border border-gray-300 text-xs focus:outline-none focus:border-gray-400"
                />
                <button className="bg-black text-white h-10 px-4 rounded text-xs hover:bg-gray-800 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <hr className="w-11/12 mx-auto border-t-2 border-gray-300" />
        </div>
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 hover:bg-gray-200 rounded-full"
            aria-label="Back to Top"
          >
            <svg className="w-6 h-6 fill-current text-gray-600" viewBox="0 0 20 20">
              <polygon points="10,0 0,10 20,10" />
            </svg>
          </button>
        </div>
        <div className="mt-8 text-center text-xs">
          <p>
            &copy; 2025 Eloqwnt. All rights reserved
            <span className="mx-2">•</span>
            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
