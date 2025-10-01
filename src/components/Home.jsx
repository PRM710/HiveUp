import React, { useState } from 'react';
import '../App.css';

const bgPost = '/assets/bg_post.png';
const grid = '/assets/grid.png';
const gridBackground = '/assets/grid3.png';
const gridBackground2 = '/assets/gridsec2.png';
const lastgrid = '/assets/lastgrid.png';
const innovateLine = '/assets/innovate-line.png';
const rectangleButton = '/assets/Rectangle.png';
const whiteRect = '/assets/WhiteRect.png';
const learnMore = '/assets/learnmore.png';
const smallrect = '/assets/smallrect.png';
const Buzz = '/assets/Buzz.png';
const Custom = '/assets/Custom.png';
const Logo = '/assets/logo.png';
const Service1 = '/assets/Service1.png';
const Service2 = '/assets/Service2.png';
const Service3 = '/assets/Service3.png';
const Service4 = '/assets/Service4.png';
const Service5 = '/assets/Service5.png';
const Service6 = '/assets/Service6.png';
const allser = '/assets/allser.png';
const card1 = '/assets/card1.png';
const card2 = '/assets/card2.png';
const card3 = '/assets/card3.png';
const card4 = '/assets/card4.png';
const requestImage = '/assets/request.png';
const brandsImage = '/assets/Brands.png';
const grpic = '/assets/grpic.png';
const AboutUs = '/assets/AboutUs.png';
const envolope = '/assets/envolope.png';

const initialCards = [card1, card2, card3, card4];

function Home() {
  const [cards, setCards] = useState(initialCards);
  
  // Function to move the clicked card to the last position
  const handleCardClick = (index) => {
    const updatedCards = [...cards];
    const selectedCard = updatedCards.splice(index, 1)[0]; // Remove clicked card
    updatedCards.push(selectedCard); // Move it to the last position
    setCards(updatedCards);
  };
  
  return (
    <div className="whole">
      {/* Section 1 */}
      <div className="section section1" style={{ position: 'relative', display: 'flex' }}>
        <div 
          className="bg-image"
          style={{
            backgroundImage: `url(${bgPost})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '51.5%',
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0
          }}
        >
          {/* Vertical Text */}
          <div className="text-overlay" style={{
            position: 'absolute',
            top: '25%',
            left: '21%',
            color: 'white',
            fontSize: '5.5rem',
            fontWeight: 900,
            fontFamily: 'Inter Tight, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '8px',
            lineHeight: '1.1',
          }}>
            <span>Innovate</span>
            <img 
            src={innovateLine} 
            alt="Line" 
            style={{ 
              position: 'absolute',
              width: '470px', 
              height: '40px', 
              marginTop: '17%',
              marginLeft: '1%',
            }} 
          />
            <span>Automate</span>
            <span>Elevate.</span>
          </div>

          {/* Line Image */}
          

          {/* Button */}
          <div 
            className="button-container"
            style={{ 
              position: 'absolute',
              top: '69%',
              left: '21%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '170px',
              height: '60px',
            }} 
            onClick={() => alert("Button Clicked!")}
          >
            <img 
              src={rectangleButton} 
              alt="Button" 
              style={{ width: '100%', height: '100%', position: 'absolute' }} 
            />
            <span 
              style={{ 
                position: 'relative',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                fontFamily: 'Inter Tight, sans-serif',
                color: 'white',
                textAlign: 'center',
                zIndex: 2,
              }}
            >
              Get in Touch
            </span>
          </div>
        </div>

        {/* Right-side Text */}
        <div className="text-container" style={{
          position: 'absolute',
          left: '55%',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'white',
          fontSize: '2rem',
          fontWeight: 'bold',
          zIndex: 1,
          width: '40%',
          textAlign: 'left',
          fontFamily: 'Inter Tight, sans-serif'
        }}>
          <p>Welcome to HiveUp—</p>
          <p>
            your hub for AI, Web3, and software<br /> 
            innovation. We build scalable, secure, <br />
            and intelligent solutions, specializing in <br />
            AI-powered tokenization, <br />
            smart contracts, automation, <br />
            and full-stack development.
          </p><br />
          <p className="highlight-text" style={{ color: '#b0b0b0' }}>
            Our cutting-edge approach sets us <br />
            apart, driving the future of <br />
            digital innovation.
          </p>
        </div>
        <img 
    src={envolope} 
    alt="Envelope Icon" 
    style={{
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      width: '70px',
      height: 'auto',
      cursor: 'pointer',
      zIndex: 1000
    }} 
  />
      </div>

      {/* Section 2 */}
      <div 
        className="section section2"
        style={{
          backgroundImage: `url(${gridBackground2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '10%',
          paddingRight: '10%',
          minHeight: '100vh',
          color: 'white',
          fontFamily: 'Inter Tight, sans-serif',
          position: 'relative'
        }}
      >
        {/* Left Side Text */}
        <div style={{ textAlign: 'left', position: 'relative' }}>
          <p style={{ fontSize: '3rem', color: '#b0b0b0', marginBottom: '25px', marginTop: '-350px' }}>
            We put the pieces together <br/>so that you don’t have to
          </p>
          <p style={{ fontSize: '5rem', fontFamily: 'Inter Tight, sans-serif', fontWeight: 600, margin: 0 }}>
            How does it work?
          </p>

          {/* Request Image Below Text */}
          <img 
            src={requestImage} 
            alt="Request Process" 
            style={{ 
              marginTop: '80px', 
              width: '300px', 
              height: 'auto',
              display: 'block'
            }} 
          />
        </div>

        {/* Right Side Stacked Cards */}
        <div className="cards-container" style={{
          position: 'absolute',
          right: '15%',
          top: '90px',
          width: '370px', 
          height: 'auto',
          zIndex: 1010
        }}>
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="card" 
              style={{
                position: 'absolute',
                top: `${index * 80}px`,
                left: `${index * 0}px`, 
                width: '450px', 
                height: '450px',
                borderRadius: '16px',
                overflow: 'hidden',
                transform: 'scaleX(-1)',
                transition: 'top 0.4s ease-in-out'
              }}
              onClick={() => handleCardClick(index)}
            >
              <img 
                src={card} 
                alt={`Card ${index + 1}`} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transform: 'scaleX(-1)',
                  cursor: 'pointer'
                }}
              />
            </div>
          ))}
        </div>

        {/* ✅ Brands Image at Bottom Center */}
        <img 
          src={brandsImage} 
          alt="Brands" 
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '750px', 
            height: 'auto',
          }} 
        />
      </div>
      <div 
  className="section section3" 
  style={{ 
    backgroundImage: `url(${gridBackground2})`,
    backgroundSize: '100% 80%', // Scales the image to 80% height
    backgroundPosition: 'center 10%', // Pushes it down by 10% to balance space
    backgroundRepeat: 'no-repeat',
    position: 'relative', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'column', 
    
  }}
>
  {/* WhiteRect.png */}
  <img 
    src={whiteRect} 
    alt="White Rectangle" 
    style={{  
      maxWidth: '1300px', 
      height: 'auto', 
      objectFit: 'contain', 
    }} 
  />

  {/* Text Overlay on the Top Side of WhiteRect */}
  <div 
    style={{
      position: 'absolute',
      top: '5%',  
      left: '50%', 
      transform: 'translateX(-50%)', 
      color: 'black',
      fontSize: '5rem',
      fontWeight: 600,
      textAlign: 'center',
      fontFamily: 'Inter Tight, sans-serif',
      zIndex: 10 
    }}
  >
    Our Services
  </div>

  {/* Subtext Below Title */}
  <div 
    style={{
      position: 'absolute',
      top: '12%',  
      left: '50%', 
      transform: 'translateX(-50%)', 
      color: 'grey',
      fontSize: '1.3rem',
      fontWeight: 400,
      textAlign: 'center',
      fontFamily: 'Inter Tight, sans-serif',
      zIndex: 10 
    }}
  >
    We engineer AI, blockchain, and digital solutions to power innovation,<br/> elevate brands, and drive growth.
  </div>

  {/* Services Grid Container */}
  <div 
    style={{
      position: 'absolute',
      top: '18%',  
      left: '50%',
      transform: 'translateX(-50%)',  
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '50px', 
      width: '80%', 
      maxWidth: '1000px',
      zIndex: 10
    }}
  >
    {/* Service Images */}
    {[Service1, Service2, Service3, Service4, Service5, Service6].map((service, index) => (
      <img 
        key={index}
        src={service} 
        alt={`Service ${index + 1}`} 
        style={{
          width: '300px',  
          height: 'auto',  
          objectFit: 'contain',  
        }} 
      />
    ))}

<img 
    src={learnMore} 
    alt="Learn More" 
    style={{
      marginTop: -30,  
      width: '240px',  
      height: '100px', 
      objectFit: 'contain',
      cursor: 'pointer', // If you want it clickable
      zIndex: 20
    }} 
  />

      <img 
    src={allser} 
    alt="allser" 
    style={{
      marginTop:50,
      width: '1050px',  
      height: 'auto', 
      objectFit: 'contain',
      zIndex:20
    }} 
  />
  </div>
</div>

<div 
        className="section section4" 
        style={{
          backgroundImage: `url(${gridBackground2})`,
          position: 'relative', 
          display: 'flex', 
          flexDirection: 'column', 

          paddingTop: '250px',  // Added extra padding on top to push it down
          paddingBottom: '80px'  
        }}
      >
{/* Small Rectangle Image */}
<img 
  src={smallrect} 
  alt="small rectangle" 
  style={{
    marginTop: 0,  
    width: '1300px',  
    height: '200px', 
    objectFit: 'contain',
    cursor: 'pointer',
    zIndex: 20
  }} 
/>

{/* New GRPic Image on top of smallrect */}
<img 
  src={grpic} 
  alt="Graphic Overlay" 
  style={{
    position: 'absolute',
    top: '25.5%',  // Adjust this based on where you want to place it
    left: '19%',
    transform: 'translate(-50%, -50%)',
    width: '230px',  // Adjust size as needed
    height: 'auto',
    objectFit: 'contain',
    zIndex: 25  // Ensures it's above the small rectangle
  }} 
/>

<img 
  src={AboutUs} 
  alt="AboutUs" 
  style={{
    position: 'absolute',
    top: '25.5%',  // Adjust this based on where you want to place it
    right: '5%',
    transform: 'translate(-50%, -50%)',
    width: '230px',  // Adjust size as needed
    height: 'auto',
    objectFit: 'contain',
    zIndex: 25  // Ensures it's above the small rectangle
  }} 
/>


        {/* Buzz Image */}
        <img 
          src={Buzz} 
          alt="Buzz" 
          style={{
            marginTop: 160,  
            width: '900px',  
            height: 'auto', 
            objectFit: 'contain',
            zIndex: 20
          }} 
        />

        {/* Custom PNG */}
        <img 
          src={Custom} 
          alt="Custom" 
          style={{
            marginTop: 50,  
            width: '300px',  
            height: 'auto', 
            objectFit: 'contain',
            zIndex: 20
          }} 
        />

        {/* Footer Section */}
        <div 
  style={{
    display: 'flex',
    justifyContent: 'center',  // Centering items
    alignItems: 'center',
    width: '80%',  
    marginTop: '90px',  // Adjusted margin
    paddingTop: '20px',
    color: 'white',
    fontFamily: 'Inter Tight, sans-serif',
    gap: '90px'  // Reduce space between items
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
    </div>

    {/* Team */}
    <div style={{ textAlign: 'center' }}>
      <h3 style={{ fontSize: '1.4rem', marginBottom: '30px' }}>Team</h3>
      <p style={{ fontSize: '1.1rem', margin: '12px 0' }}>Prakash Mane</p>
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

export default Home;
