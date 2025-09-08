import React from 'react';

const About = () => {
  const stats = [
    { number: '10K+', label: 'Happy Customers', icon: 'fas fa-users' },
    { number: '50K+', label: 'Products Sold', icon: 'fas fa-shopping-bag' },
    { number: '5+', label: 'Years Experience', icon: 'fas fa-calendar-alt' },
    { number: '99%', label: 'Customer Satisfaction', icon: 'fas fa-heart' }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: 'Passionate about creating exceptional shopping experiences with over 10 years in e-commerce.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: 'Expert in product curation and customer experience optimization.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Success Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Dedicated to ensuring every customer has an amazing experience with our brand.'
    }
  ];

  const values = [
    {
      icon: 'fas fa-gem',
      title: 'Quality First',
      description: 'We carefully curate every product to ensure exceptional quality and value for our customers.'
    },
    {
      icon: 'fas fa-shipping-fast',
      title: 'Fast & Reliable',
      description: 'Quick shipping and reliable service are at the core of our customer experience.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Secure Shopping',
      description: 'Your security and privacy are our top priority with encrypted transactions and data protection.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Customer First',
      description: 'Every decision we make is centered around delivering the best possible experience for you.'
    }
  ];

  return (
    <div className="about-main-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <h1 className="about-hero-title">About Shop This</h1>
            <p className="about-hero-subtitle">
              Your trusted destination for quality products and exceptional service since 2019
            </p>
            <p className="about-hero-description">
              We're more than just an online store – we're a community of passionate individuals 
              dedicated to bringing you the best products at unbeatable prices, backed by 
              outstanding customer service.
            </p>
          </div>
          <div className="about-hero-image">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" 
              alt="Our modern workspace" 
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="about-stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="about-stat-item">
              <div className="about-stat-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="about-stat-number">{stat.number}</div>
              <div className="about-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-story-container">
          <div className="about-story-content">
            <h2 className="about-section-title">Our Story</h2>
            <div className="about-story-text">
              <p>
                Shop This was born from a simple idea: everyone deserves access to quality products 
                at fair prices, delivered with exceptional service. What started as a small venture 
                in 2019 has grown into a trusted e-commerce platform serving thousands of satisfied 
                customers worldwide.
              </p>
              <p>
                Our journey began when our founder, Sarah Johnson, noticed a gap in the market for 
                a truly customer-centric online shopping experience. Frustrated by poor customer 
                service and overpriced products elsewhere, she set out to create something different.
              </p>
              <p>
                Today, we're proud to offer a carefully curated selection of products across 
                multiple categories, each chosen for its quality, value, and ability to enhance 
                our customers' lives. Our commitment to excellence has earned us a 99% customer 
                satisfaction rating and thousands of five-star reviews.
              </p>
            </div>
          </div>
          <div className="about-story-image">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
              alt="Our team collaborating" 
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="about-values-container">
          <h2 className="about-section-title">Our Values</h2>
          <p className="about-values-subtitle">
            These core principles guide everything we do and shape our commitment to you.
          </p>
          <div className="about-values-grid">
            {values.map((value, index) => (
              <div key={index} className="about-value-item">
                <div className="about-value-icon">
                  <i className={value.icon}></i>
                </div>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="about-team-container">
          <h2 className="about-section-title">Meet Our Team</h2>
          <p className="about-team-subtitle">
            The passionate individuals working behind the scenes to make your shopping experience exceptional.
          </p>
          <div className="about-team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="about-team-member">
                <div className="about-member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="about-member-info">
                  <h3 className="about-member-name">{member.name}</h3>
                  <p className="about-member-role">{member.role}</p>
                  <p className="about-member-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta-container">
          <div className="about-cta-content">
            <h2 className="about-cta-title">Ready to Experience the Difference?</h2>
            <p className="about-cta-description">
              Join thousands of satisfied customers who have made Shop This their go-to destination 
              for quality products and exceptional service.
            </p>
            <div className="about-cta-buttons">
              <a href="/" className="about-cta-primary">Start Shopping</a>
              <a href="/contact" className="about-cta-secondary">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
