import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Monitor, 
  Smartphone, 
  Palette, 
  Code, 
  Search, 
  BarChart3,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
    },
    {
      icon: Palette,
      title: 'Digital Design',
      description: 'User-centered design solutions including UI/UX, branding, and visual identity development.',
    },
    {
      icon: Code,
      title: 'Technical Consulting',
      description: 'Strategic technology guidance to help you make informed decisions about your digital infrastructure.',
    },
    {
      icon: Search,
      title: 'SEO & Analytics',
      description: 'Data-driven optimization strategies to improve your online visibility and measure success.',
    },
    {
      icon: BarChart3,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation planning to align technology with your business objectives.',
    },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in">
            <h1 className="mb-8">Our Services</h1>
          </div>
          
          <div className="slide-up">
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              We offer comprehensive digital solutions tailored to meet your unique needs 
              and help you achieve your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-muted/30 hover:bg-muted/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <service.icon className="h-8 w-8 text-foreground group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="mb-4 group-hover:text-foreground transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16">Our Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                1
              </div>
              <h3 className="mb-4">Discovery</h3>
              <p className="text-muted-foreground">
                We start by understanding your goals, challenges, and target audience through research and collaboration.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                2
              </div>
              <h3 className="mb-4">Strategy</h3>
              <p className="text-muted-foreground">
                We develop a comprehensive strategy that aligns with your business objectives and user needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                3
              </div>
              <h3 className="mb-4">Execution</h3>
              <p className="text-muted-foreground">
                Our team brings the strategy to life through careful design and development processes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                4
              </div>
              <h3 className="mb-4">Launch</h3>
              <p className="text-muted-foreground">
                We ensure a smooth launch and provide ongoing support to optimize performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8">Let's Discuss Your Project</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Ready to transform your digital presence? We'd love to hear about your project 
            and explore how we can help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base px-8 py-6 group">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;