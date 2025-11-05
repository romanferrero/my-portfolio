const Section = ({ id, title, children, className }) => (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center ${className}`}
    >
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-surface-lighter mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );

export default Section;