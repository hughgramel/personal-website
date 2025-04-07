"use client";

import Typewriter from 'typewriter-effect';

export default function TypewriterHero() {
    return (
        <div className="text-white text-3xl font-mono">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
              cursor: "_"
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(`Hi, I'm <span class="text-[#BD93F9]">Hugh!</span>`)
                .pauseFor(2000)
                .deleteAll()
                .typeString(`CS @ <span class="text-[#BD93F9]">UW</span>`)
                .pauseFor(2000)
                .deleteAll()
                // .typeString(`Hi, I'm <span class="text-[#8BE9FD]">open for work.</span>`)
                // .pauseFor(2000)
                // .deleteAll()
                .start();
            }}
          />
        </div>
      );
    
}
