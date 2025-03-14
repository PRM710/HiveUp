import React from 'react';
import '../App.css';

const Logo = '/assets/Logo.png';
const number1 = '/assets/number1.png';
const number2 = '/assets/number2.png';
const number3 = '/assets/number3.png';
const number4 = '/assets/number4.png';

function About() {
  return (
    <div className="whole">
      {/* Section 1 - About Us with HiveUp Content */}
      <div className="section section5" style={{ 
        minHeight: '150vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        paddingTop: '120px',
        position: 'relative',
        textAlign: 'center'
      }}>
        {/* "About Us" Title - Centered */}
        <h1 style={{ 
          fontSize: '5rem', 
          fontWeight: '900', 
          color: 'white', 
          fontFamily: 'Inter Tight, sans-serif', 
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          About Us
        </h1>

        {/* HiveUp Headline and Description - Left Aligned */}
        <div style={{ 
          maxWidth: '900px', 
          color: 'white', 
          fontFamily: 'Inter Tight, sans-serif', 
          textAlign: 'left', 
          alignSelf: 'flex-start',
          marginLeft: '10%'
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '20px' }}>
            🚀 HiveUp | <span style={{ fontWeight: 'bold' }}>AI & Web3 Software Development Experts</span>
          </h2>
          <p style={{ fontSize: '1.3rem', lineHeight: '1.6', color: '#B0B0B0', fontWeight: '500' }}>
            <span style={{ fontWeight: 'bold'}}>At HiveUp</span>, we build the future of technology by combining AI, Web3, 
            and <br/>software innovation to create cutting-edge digital solutions.
          </p>
          <p style={{ fontSize: '1.3rem', lineHeight: '1.6', color: '#B0B0B0', fontWeight: '500' }}>
            Our mission is to empower businesses and enterprises with intelligent, scalable,<br/>
            and secure applications that drive growth and efficiency.
          </p>
        </div>

        {/* "Why Choose HiveUp?" - Centered Below the Paragraph */}
        <h2 style={{
          fontFamily: 'Inter Tight, sans-serif', 
          fontSize: '3rem', 
          fontWeight: '700', 
          color: 'white', 
          textAlign: 'center', 
          marginTop: '80px'
        }}>
          Why Choose HiveUp?
        </h2>

        {/* Four PNGs with Text Below - Aligned Horizontally */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '180px', 
          marginTop: '200px',
          flexWrap: 'wrap'
        }}>
          {/* PNG 1 */}
          <div style={{ textAlign: 'center', maxWidth: '200px' }}>
            <img src={number1} alt="Feature 1" style={{ width: '85px', height: '100px' }} />
            <p style={{ fontSize: '1.2rem', color: '#B0B0B0', marginTop: '10px' }}>Expertise in AI, Blockchain,<br/>and Full-Stack<br/>Development</p>
          </div>

          {/* PNG 2 */}
          <div style={{ textAlign: 'center', maxWidth: '200px' }}>
            <img src={number2} alt="Feature 2" style={{ width: '85px', height: '100px' }} />
            <p style={{ fontSize: '1.2rem', color: '#B0B0B0', marginTop: '10px' }}>Web3 Expertise</p>
          </div>

          {/* PNG 3 */}
          <div style={{ textAlign: 'center', maxWidth: '200px' }}>
            <img src={number3} alt="Feature 3" style={{ width: '85px', height: '100px' }} />
            <p style={{ fontSize: '1.2rem', color: '#B0B0B0', marginTop: '10px' }}>Scalable Applications</p>
          </div>

          {/* PNG 4 */}
          <div style={{ textAlign: 'center', maxWidth: '200px' }}>
            <img src={number4} alt="Feature 4" style={{ width: '85px', height: '100px' }} />
            <p style={{ fontSize: '1.2rem', color: '#B0B0B0', marginTop: '10px' }}>Enterprise Security</p>
          </div>
        </div>
      </div>

      {/* Section 2 - Placeholder */}
      <div className="section section2" style={{ minHeight: '100vh' }}>2</div>

      {/* Section 3 - Placeholder */}
      <div className="section section3" style={{ minHeight: '100vh' }}>3</div>

      {/* Section 4 - Footer */}
      <div className="section section5" style={{ minHeight: '100vh', position: 'relative', bottom: 0 }}>
        {/* Footer Section */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',  
            paddingTop: '20px',
            color: 'white',
            fontFamily: 'Inter Tight, sans-serif',
            gap: '90px'
          }}
        >
          {/* Left Side: Logo */}
          <div style={{ flex: '0 1 auto', textAlign: 'left' }}>
            <img 
              src={Logo} 
              alt="Company Logo" 
              style={{ width: '80px', height: 'auto' }} 
            />
          </div>

          {/* Right Side: Home - Team - Follow Us */}
          <div style={{ flex: '0 1 auto', display: 'flex', justifyContent: 'space-around', gap: '40px' }}>
            {/* Home */}
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '30px' }}>Home</h3>
              <p style={{ fontSize: '1.1rem', margin: '12px 0' }}>+91 9833001027</p>
              <p style={{ fontSize: '1.1rem', margin: '2px 0' }}>+91 9082945753</p>
            </div>

            {/* Team */}
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '30px' }}>Team</h3>
              <p style={{ fontSize: '1.1rem', margin: '12px 0' }}>Ahart Dhivar</p>
              <p style={{ fontSize: '1.1rem', margin: '12px 0' }}>Prakash Mane</p>
              <p style={{ fontSize: '1.1rem', margin: '2px 0' }}>Viraj</p>
            </div>

            {/* Follow Us */}
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '30px' }}>Follow Us</h3>
              <p style={{ fontSize: '1.1rem', margin: '12px 0' }}>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                  LinkedIn
                </a>
              </p>
              <p style={{ fontSize: '1.1rem', margin: '2px 0' }}>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
