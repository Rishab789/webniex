import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-sm">
              Webniex is a website development company. It believes in Customer
              Satisfactions on their business portfolios, landing pages,
              personal portfolios, Blog Content Websites etc.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a
                  href="/faq"
                  className="hover:text-yellow-300  text-sm no-underline transition duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  className="hover:text-yellow-300 transition text-sm no-underline duration-300"
                >
                  Get a Free Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-sm  mb-2">
              Email:{" "}
              <a
                href="mailto:support@twoweel.com"
                className="underline hover:text-yellow-300 duration-300"
              >
                beraprakash456@gmail.com
              </a>
            </p>
            <p className="text-sm mb-2">
              Phone:{" "}
              <a
                href="tel:7008716985"
                className="underline hover:text-yellow-300 duration-300"
              >
                7008716985
              </a>
            </p>
            <div className="flex items-center">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition duration-300"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.96.24 2.417.512.57.33.974.76 1.316 1.316.272.457.458 1.248.512 2.417.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.96-.512 2.417-.33.57-.76.974-1.316 1.316-.457.272-1.248.458-2.417.512-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.96-.24-2.417-.512a3.764 3.764 0 01-1.316-1.316c-.272-.457-.458-1.248-.512-2.417C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.96.512-2.417a3.764 3.764 0 011.316-1.316c.457-.272 1.248-.458 2.417-.512C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.748 0 8.336.013 7.053.073 5.732.135 4.812.305 4.125.579a5.48 5.48 0 00-2.02 1.292A5.482 5.482 0 00.813 3.891C.539 4.578.369 5.498.307 6.819.247 8.102.234 8.514.234 12c0 3.486.013 3.898.073 5.181.062 1.321.232 2.241.506 2.928a5.48 5.48 0 001.292 2.02 5.482 5.482 0 002.02 1.292c.687.274 1.607.444 2.928.506C8.336 23.987 8.748 24 12 24s3.664-.013 4.947-.073c1.321-.062 2.241-.232 2.928-.506a5.48 5.48 0 002.02-1.292 5.482 5.482 0 001.292-2.02c.274-.687.444-1.607.506-2.928.06-1.283.073-1.695.073-5.181s-.013-3.898-.073-5.181c-.062-1.321-.232-2.241-.506-2.928a5.48 5.48 0 00-1.292-2.02A5.482 5.482 0 0019.875.579c-.687-.274-1.607-.444-2.928-.506C15.664.013 15.252 0 12 0zm0 5.838a6.163 6.163 0 100 12.325 6.163 6.163 0 000-12.325zm0 10.163a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
