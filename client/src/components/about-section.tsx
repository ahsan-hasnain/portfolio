const AboutSection = () => {
  const stats = [
    { value: "5+", label: "Projects" },
    { value: "20+", label: "Clients" },
    { value: "2+", label: "Years" },
    { value: "94%", label: "Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-brand-gold">About</span> <span className="text-white">Zentix</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              We are a passionate team of digital creatives, strategists, and developers dedicated to transforming brands through innovative digital solutions. With over 2 years of experience, we've helped dozens of businesses establish their digital presence and achieve remarkable growth.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Our approach combines creative excellence with data-driven strategies, ensuring every project not only looks exceptional but delivers measurable results for our clients.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" data-testid={`stat-${stat.label.toLowerCase()}`}>
                  <div className="text-3xl font-bold text-brand-gold">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Creative team collaboration" 
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
