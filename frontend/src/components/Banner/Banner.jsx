import React from "react";
import {
  Clock,
  PhoneCall,
  UserCheck
} from "lucide-react";
import heroImg from "../../assets/healthcare_team_hero.png";
import { useNavigate } from "react-router-dom";
import { bannerStyles } from "../../assets/dummyStyles";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className={bannerStyles.bannerContainer}>
      {/* Main Banner Container */}
      <div className="relative overflow-visible">
        {/* Content Container */}
        <div className={bannerStyles.contentContainer}>
          <div className={bannerStyles.flexContainer}>
            {/* Left Content Section */}
            <div className={bannerStyles.leftContent}>
              {/* Tagline / Subheading */}
              <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                  <span className="w-10 h-[2px] bg-emerald-500"></span>
                  <span className="text-emerald-600 font-semibold uppercase tracking-widest text-sm">Expert care from trusted professionals</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Your Health <br />
                is <span className="text-emerald-600">Our Priority</span>
              </h1>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                <button
                  onClick={() => navigate("/doctors")}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-emerald-200 transition-all transform hover:-translate-y-1"
                >
                  Book Appointment
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Image Section */}
            <div className={bannerStyles.rightImageSection}>
              <div className={bannerStyles.imageContainer}>
                <img
                  src={heroImg}
                  alt="Professional Healthcare Team"
                  className={bannerStyles.image}
                />
              </div>
            </div>
          </div>

          {/* Feature Cards Section */}
          <div className={bannerStyles.featureCardsSection}>
            <div className={bannerStyles.featureCard}>
              <div className={bannerStyles.featureCardIconContainer}>
                <Clock className={bannerStyles.featureCardIcon} />
              </div>
              <h3 className={bannerStyles.featureCardTitle}>24/7 Support</h3>
              <p className={bannerStyles.featureCardDesc}>
                Round-the-clock medical assistance for all your healthcare needs, whenever you need it.
              </p>
            </div>

            <div className={bannerStyles.featureCard}>
              <div className={bannerStyles.featureCardIconContainer}>
                <UserCheck className={bannerStyles.featureCardIcon} />
              </div>
              <h3 className={bannerStyles.featureCardTitle}>Qualified Doctors</h3>
              <p className={bannerStyles.featureCardDesc}>
                Consult with highly experienced and certified medical professionals across all specialties.
              </p>
            </div>

            <div className={bannerStyles.featureCard}>
              <div className={bannerStyles.featureCardIconContainer}>
                <PhoneCall className={bannerStyles.featureCardIcon} />
              </div>
              <h3 className={bannerStyles.featureCardTitle}>Emergency Care</h3>
              <p className={bannerStyles.featureCardDesc}>
                Rapid response and specialized care for medical emergencies to ensure your safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;