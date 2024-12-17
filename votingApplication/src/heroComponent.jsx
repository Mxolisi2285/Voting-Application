const Hero = () => {
  return (
    <section className="text-center py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Your Voice, Your Choice
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Vote in a secure, transparent, and user-friendly way. Empowering
          elections for everyone, everywhere.
        </p>
        <a
          href="#vote"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
