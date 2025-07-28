import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Radical Split Hero Section */}
      <section className="min-h-screen flex items-center relative px-4 sm:px-6 pt-20 md:pt-24 pb-16">
        <div className="max-w-none w-full">
          {/* Split Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[80vh]">
            {/* Left Side - Main Text */}
            <div className="space-y-4 lg:pr-8">
              <div className="fade-in">
                <div className="hero-left text-foreground mb-2">
                  MAKING
                </div>
                <div className="hero-left text-foreground mb-2">
                  THE
                </div>
                <div className="hero-left text-foreground mb-2">
                  WORLD
                </div>
              </div>
            </div>

            {/* Right Side - Secondary Text with Glitch Effect */}
            <div className="space-y-4 lg:pl-8 lg:border-l border-accent">
              <div className="slide-up animation-delay-300">
                <div className="hero-right text-accent glitch-text mb-4" data-text="A DIGITAL">
                  A DIGITAL
                </div>
                <div className="hero-right text-muted-foreground mb-4">
                  EXTENSION
                </div>
                <div className="hero-right text-foreground mb-4">
                  OF
                </div>
                <div className="hero-right text-accent glitch-text" data-text="MEANINGFUL">
                  MEANINGFUL
                </div>
                <div className="hero-right text-foreground">
                  REALITY
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-20 left-4 sm:left-6 right-4 sm:right-6">
            <div className="grid md:grid-cols-2 gap-8 items-end">
              {/* Description */}
              <div className="slide-up animation-delay-500">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md">
                  We destroy conventional thinking and rebuild it into radical digital experiences 
                  that challenge reality itself.
                </p>
              </div>

              {/* Actions */}
              <div className="slide-up animation-delay-700">
                <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
                  <Button asChild className="group border border-accent bg-transparent hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                    <Link to="/portfolio">
                      <span className="font-mono text-xs uppercase tracking-widest">
                        ENTER_REALITY
                      </span>
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-muted-foreground text-muted-foreground hover:text-foreground hover:border-foreground">
                    <Link to="/about">
                      <span className="font-mono text-xs uppercase tracking-widest">
                        DECODE_MORE
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick intro section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-center">
            <div>
              <h3 className="mb-3 sm:mb-4">Creative Vision</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We transform ideas into compelling digital experiences that resonate with your audience.
              </p>
            </div>
            <div>
              <h3 className="mb-3 sm:mb-4">Technical Excellence</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Our solutions are built with cutting-edge technology and meticulous attention to detail.
              </p>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="mb-3 sm:mb-4">Lasting Impact</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Every project is designed to create meaningful connections and drive real results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;