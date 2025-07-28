import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 pt-20 md:pt-24 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="fade-in">
            <h1 className="hero-text mb-6 sm:mb-8">
              MAKING
              <br />
              THE WORLD
              <br />
              A DIGITAL
              <br />
              EXTENSION
              <br />
              OF
              <br />
              MEANINGFUL
              <br />
              REALITY
            </h1>
          </div>
          
          <div className="slide-up animation-delay-300">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
              We create digital experiences that bridge the gap between imagination and reality,
              crafting solutions that matter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button asChild size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 group">
                <Link to="/portfolio">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
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