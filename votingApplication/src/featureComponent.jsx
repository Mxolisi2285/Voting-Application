import React from "react";

const Features = () => {
  return (
    <section id="features" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Why Choose VoteHub?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="text-blue-600 text-4xl mb-4">🔒</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Secure Voting
            </h4>
            <p className="text-gray-600">
              Your votes are encrypted and stored securely with advanced
              technologies.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="text-blue-600 text-4xl mb-4">🚀</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Fast & Efficient
            </h4>
            <p className="text-gray-600">
              A seamless and responsive voting experience for all users.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="text-blue-600 text-4xl mb-4">📊</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Transparent Results
            </h4>
            <p className="text-gray-600">
              Monitor election results in real-time with transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
