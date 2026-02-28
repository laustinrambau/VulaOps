const About = () => {
  return (
    <section id="about" className="py-32 bg-slate-950 border-t border-slate-800/80">
      <div className="container mx-auto px-6 bg-slate-950 ">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center text-white">
            <div>
                <h2 className="text-[18px] uppercase tracking-[0.2em] text-yellow-700">
            About Us
          </h2>
             <p className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Who We Are
            </p>
                
              <div className="space-y-8">
                 <p className="text-lg text-slate-300 leading-relaxed">
                We are an independent{' '}
                <span className="font-semibold text-yellow-700">
                  cybersecurity research and intelligence organization
                </span>{' '}
                dedicated to identifying, analyzing, and mitigating emerging cyber threats.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
              Our team of expert researchers, red team operators, and threat analysts conducts in-depth technical research, threat modeling, vulnerability discovery, and strategic risk analysis to help organizations stay ahead of attackers.

            <br /> <br /><span className="font-semibold text-yellow-700"> VulaOps</span> was formed to provide <span className="font-bold">high-end digital security services to Africa’s </span> start-ups, not-for-profit organizations, and government agencies.
              </p>
              </div>
            </div>
            
            <div className="space-y-12">
              <div>
                <h4 className="font-bold text-2xl text-muted-foreground mb-6">APPROACH</h4>
                <div className="space-y-6">
                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">EXPERIENCE</h5>
                    <p className="text-muted-foreground"><span className='font-bold'>10 years</span> of information security experience, combining local insight with global expertise.</p>
                  </div>
                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">OUR MISSION</h5>
                    <p className="text-muted-foreground">To strengthen digital resilience through cutting-edge cybersecurity research, intelligence reporting, and responsible disclosure.</p>
                  </div>
                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">OUR VISION</h5>
                    <p className="text-muted-foreground">To become a trusted authority in cybersecurity research across enterprise, government, and critical infrastructure sectors.</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;