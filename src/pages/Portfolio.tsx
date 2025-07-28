import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Web Design', 'Mobile App', 'Branding', 'E-commerce'];
  
  const projects = [
    {
      id: 1,
      title: 'Modern E-commerce Platform',
      category: 'E-commerce',
      description: 'A comprehensive e-commerce solution built for a sustainable fashion brand, featuring custom checkout and inventory management.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Node.js', 'Stripe'],
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      category: 'Mobile App',
      description: 'Patient management application with real-time chat, appointment booking, and health tracking features.',
      image: '/api/placeholder/600/400',
      tags: ['React Native', 'Firebase', 'Healthcare'],
    },
    {
      id: 3,
      title: 'Corporate Website Redesign',
      category: 'Web Design',
      description: 'Complete digital transformation for a consulting firm, focusing on user experience and lead generation.',
      image: '/api/placeholder/600/400',
      tags: ['UI/UX', 'WordPress', 'SEO'],
    },
    {
      id: 4,
      title: 'Tech Startup Branding',
      category: 'Branding',
      description: 'Full brand identity development including logo design, style guide, and marketing materials.',
      image: '/api/placeholder/600/400',
      tags: ['Branding', 'Logo Design', 'Print'],
    },
    {
      id: 5,
      title: 'SaaS Dashboard Interface',
      category: 'Web Design',
      description: 'Clean and intuitive dashboard design for a project management tool with complex data visualization.',
      image: '/api/placeholder/600/400',
      tags: ['UI/UX', 'Dashboard', 'Analytics'],
    },
    {
      id: 6,
      title: 'Restaurant Ordering App',
      category: 'Mobile App',
      description: 'Mobile application for restaurant chain with online ordering, loyalty program, and delivery tracking.',
      image: '/api/placeholder/600/400',
      tags: ['Flutter', 'Payment', 'Location'],
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in">
            <h1 className="mb-8">Our Portfolio</h1>
          </div>
          
          <div className="slide-up">
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Explore our recent projects and see how we've helped organizations 
              transform their digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden border-0 bg-muted/30 hover:bg-muted/50 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-muted to-accent overflow-hidden">
                  <div className="w-full h-full bg-muted/50 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-muted-foreground group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="mb-3 group-hover:text-foreground transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-sm group">
                    View Project
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Let's work together to create something exceptional. 
            Contact us to discuss your next project.
          </p>
          
          <Button asChild size="lg" className="text-base px-8 py-6 group">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;