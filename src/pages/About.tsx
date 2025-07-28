import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in">
            <h1 className="mb-12 text-center">About Us</h1>
          </div>
          
          <div className="slide-up">
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              We are a collective of designers, developers, and strategists who believe in the power 
              of digital transformation to create meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-8">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To create a world where digital experiences seamlessly integrate with human needs, 
                fostering genuine connections and driving positive impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision technology as an extension of human creativity, not a replacement for it.
              </p>
            </div>
            
            <div>
              <h2 className="mb-8">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We craft digital solutions that prioritize user experience, accessibility, and 
                sustainability. Every project is an opportunity to make the digital world more 
                inclusive and meaningful.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through careful research, thoughtful design, and technical excellence, we help 
                organizations tell their stories and achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="mb-4">Authenticity</h3>
              <p className="text-muted-foreground">
                We believe in honest design and transparent communication. Every solution reflects 
                the true essence of our clients' vision.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly explore new technologies and methodologies to deliver cutting-edge 
                solutions that push boundaries.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="mb-4">Collaboration</h3>
              <p className="text-muted-foreground">
                Our best work emerges from close partnerships with our clients, understanding 
                their challenges and working together toward solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8">Ready to Work Together?</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Let's explore how we can help bring your vision to life through thoughtful design 
            and technical excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base px-8 py-6 group">
              <Link to="/contact">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;