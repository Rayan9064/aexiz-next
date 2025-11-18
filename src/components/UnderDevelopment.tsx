"use client";

import type { ReactElement } from 'react';

export default function UnderDevelopment(): ReactElement {
  return (
    <div className="ud-root">
      <h1>Website Under Development</h1>
      <p>We’re working hard to launch something amazing. Stay tuned!</p>
      <div className="loader" />
      <div className="contact">
        Contact us at: <a href="mailto:hello@aexiz.com">hello@aexiz.com</a> &nbsp;|&nbsp; <a href="tel:+918088589275">+91 8088589275</a>
      </div>

      <style jsx>{`
        .ud-root {
          margin: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #D9D9D9;
          font-family: Arial, sans-serif;
          color: #333;
          text-align: center;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        p {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 15px;
        }
        .contact {
          margin-top: 20px;
          font-size: 1rem;
          color: #444;
        }
        a {
          color: #000;
          text-decoration: none;
          font-weight: bold;
        }
        .loader {
          width: 120px;
          height: 20px;
          background: 
            linear-gradient(#000 50%,#0000 0),
            linear-gradient(#0000 50%,#000 0),
            linear-gradient(#000 50%,#0000 0),
            linear-gradient(#0000 50%,#000 0),
            linear-gradient(#000 50%,#0000 0),
            linear-gradient(#0000 50%,#000 0)
            #ddd;
          background-size: calc(100%/6 + 1px) 200%;
          background-repeat: no-repeat;
          animation: l12 2s infinite;
          margin-top: 10px;
        }
        @keyframes l12 {
          0%     {background-position: calc(0*100%/5) 100%,calc(1*100%/5)   0%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
          16.67% {background-position: calc(0*100%/5)   0%,calc(1*100%/5)   0%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
          33.33% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
          50%    {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
          66.67% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
          83.33% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5)   0%,calc(5*100%/5)   0%}
          100%   {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5)   0%,calc(5*100%/5) 100%}
        }
      `}</style>
    </div>
  );
}
