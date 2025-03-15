import React from 'react';
import '../mobile.css'; // Import Mobile CSS

const mobg1 = '/assets2/mobg1.png';
const mobglet = '/assets2/mobglet.png';
const touch = '/assets2/touch.png';
const welcome = '/assets2/welcome.png';
const cutting = '/assets2/cutting.png';
const envo = '/assets2/envo.png';
const weput = '/assets2/weput.png';
const howdoes = '/assets2/howdoes.png';
const requestmob = '/assets2/requestmob.png';
const brandsmob = '/assets2/brandsmob.png';
const rect = '/assets2/rect.png';
const services = '/assets2/services.png';
const we = '/assets2/we.png';
const service1 = '/assets2/service1.png';
const service2 = '/assets2/service2.png';
const service3 = '/assets2/service3.png';
const service4 = '/assets2/service4.png';
const learn = '/assets2/learn.png';
const allser = '/assets2/allsermob.png';
const buzzmob = '/assets2/buzzmob.png';
const smallrect = '/assets2/smallrectmob.png';
const get = '/assets2/get.png';
const logo = '/assets2/logo.png';
const mobpic = '/assets2/mobpic.png'
const About = '/assets2/about.png';
const card1 = '/assets2/card1.png';
const card2 = '/assets2/card2.png';
const card3 = '/assets2/card3.png';
const card4 = '/assets2/card4.png';
import { useState } from 'react';




function MobileHome() {

  const [cards, setCards] = useState([card1, card2, card3, card4]);

  const handleNextCard = () => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const firstCard = updatedCards.shift(); // Remove the first card
      updatedCards.push(firstCard); // Move it to the last position
      return updatedCards;
    });
  };
  return (
    <div className="mobile-home">
      {/* Section 1 */}
      <section 
        className="mobsec1"
        style={{
          backgroundImage: `url(${mobg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '130vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          textAlign: 'center',
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold',
          paddingTop: '30px',
          position: 'relative'
        }}
      >
        <img src={mobglet} alt="Top Image" style={{ marginTop: '80px', width: '200px', height: 'auto', marginBottom: '20px' }} />
        <img src={touch} alt="Touch Image" style={{ width: '146px', height: 'auto', marginTop: '10px', marginBottom: '20px' }} />
        <div style={{ 
  width: '400px', 
  marginTop: '40px', 
  backgroundColor: 'transparent',
  textAlign: 'left',
  marginLeft:'50px',
  fontWeight:'750', 
  fontSize: '20px', // Adjust as needed
  lineHeight: '1.2' // Improves readability
}}>
  Welcome to HiveUp—<br/> your hub for AI, Web3, and software<br/>
  innovation. We build scalable, secure,<br/>
  and intelligent solutions, specializing in<br/>
  AI-powered tokenization,<br/>
  smart contracts, automation,<br/>
  and full-stack development.
</div>

        <div style={{ width: '340px', height: '100px', marginTop: '40px', backgroundColor: 'transparent',  textAlign: 'left',
  color:'#B0B0B0',
  marginLeft:'0px',
  fontWeight:'750', 
  fontSize: '20px', // Adjust as needed
  lineHeight: '1.2' }}>Our cutting-edge approach sets us<br/> apart, driving the future of<br/> digital innovation.</div>
        <img src={envo} alt="Envo Image" style={{ position: 'absolute', bottom: '20px', right: '20px', width: '56px', height: 'auto', zIndex: 10 }} />
      </section>

      {/* Section 2 */}
      <section 
        className="mobsec2"
        style={{
          width: '100vw',
          height: '130vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          textAlign: 'center',
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold',
          backgroundColor: 'black',
          paddingTop: '40px',
          position: 'relative'
        }}
      >
        <div style={{ 
    color:'#B0B0B0',

    width: '350px', 
    textAlign:'left',
    height: 'auto', 
    marginTop: '20px', 
    marginBottom: '10px',
    fontWeight:'600', 
    fontSize: '18px', 
     
}}>
    We put the pieces together<br/> so that you don’t have to
</div>

<div style={{
    marginLeft:'150px',
    width: '500px', 
    height: 'auto', 
    marginTop: '10px', 
    fontSize: '35px', 
    fontWeight: '550', 
    textAlign: 'left' 
}}>
    How Does It Work?
</div>


<div 
          style={{
            marginRight:'50px',
            position: 'relative',
            width: '360px',
            height: '360px',
            marginTop: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {cards.map((card, index) => (
            <img 
              key={index}
              src={card} 
              alt={`Card ${index + 1}`}
              style={{
                position: 'absolute',
                top: `${130 - index * 55}px`, // Moves each card downward
                width: '320px',
                height: '320px',
                objectFit: 'contain',
                transition: 'transform 0.5s ease-in-out',
                zIndex: cards.length - index, // Ensure the front card is on top
              }}
            />
          ))}
        </div>

        <button 
          onClick={handleNextCard}
          style={{
            marginLeft:'150px',
            fontSize:'15px',
            fontWeight:'600',
            opacity:'0.3',
            marginTop: '5px', 
            padding: '12px 24px',
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
 
            zIndex:50
          }}
        >
          Next
        </button>



        <img src={requestmob} alt="Request Mobile" style={{ position: 'absolute', bottom: '120px', left: '50%', transform: 'translateX(-50%)', width: '147px', height: 'auto' }} />
        <img src={brandsmob} alt="Brands Mobile" style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', width: '300px', height: 'auto' }} />
      </section>

      {/* ✅ Section 3 with Centered Images */}
      <section 
        className="mobsec3"
        style={{
          width: '100vw',
          height: '320vh', // Full height
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold',
          backgroundColor: 'black', // Dark Grey Background
          position: 'relative'
        }}
      >
{/* ✅ Services Text (Replaces services.png) */}



        {/* ✅ Centered Image (rect.png) */}
        <div 
  style={{
    position: 'absolute',
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    width: '330px', 
    height: '2000px', 
    minHeight: '600px', // Ensures enough space
    backgroundColor: 'white', 
    borderRadius: '20px', // ✅ Rounded corners
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // ✅ Subtle shadow for depth
    zIndex: 2
  }}
>
<div 
  style={{
    
    position: 'absolute',
    top: '2%', // ✅ Same position as `services.png`
    left: '50%', 
    transform: 'translateX(-50%)', // ✅ Centers horizontally
    fontSize: '45px',
    fontWeight: 'bold',
    color: 'black',
    width:'400px',
    textAlign: 'center',
    zIndex: 3 
  }}
>
  Our Services
</div>

{/* ✅ Description Text (Replaces we.png) */}
<div 
  style={{
    position: 'absolute',
    top: '5%', // ✅ Same position as `we.png`
    left: '50%', 
    transform: 'translateX(-50%)', 
    fontSize: '11px',
    fontWeight: '600',
    color: '#B0B0B0', // ✅ Subtle contrast
    textAlign: 'center',
    width: '320px', // ✅ Ensures proper wrapping
    zIndex: 3 
  }}
>
  We engineer AI, blockchain and digital solutions to power innovation, elevate brands and drive growth.<br/>
</div>

{/* ✅ Wrapper div for service images */}
<div 
  style={{
    position: 'absolute',
    top: '8%', // Positioned below `we.png`
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px', // ✅ Equal spacing between images
    zIndex: 5
  }}
>
  <img src={service1} alt="Service 1" style={{ width: '300px', height: '280px' }} />
  <img src={service2} alt="Service 2" style={{ width: '300px', height: '280px'  }} />
  <img src={service3} alt="Service 3" style={{ width: '300px', height: '280px'  }} />
  <img src={service4} alt="Service 4" style={{ width: '300px', height: '280px'  }} />
</div>
<img 
          src={learn} 
          alt="learn"
          style={{
            position: 'absolute',
            marginTop: '1450px', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            width: '200px', 
            height: 'auto', 
            zIndex: 3 
          }}
        />
        <img 
  src={allser} 
  alt="All Services Mobile"
  style={{
    position: 'absolute',
    bottom: '220px', // ✅ Places it slightly below `rect.png`
    left: '50%', 
    transform: 'translateX(-50%)', // ✅ Centers image horizontally
    width: '355px', 
    height: 'auto', 
    zIndex: 4 // Ensures visibility above `rect.png`
  }}
/>

</div>

      </section>
      {/* ✅ New Section 4 Below Section 3 */}
      <section 
  className="mobsec4"
  style={{
    width: '100vw',
    height: '190vh', // Adjust height as needed
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // ✅ Aligns content to the top
    textAlign: 'center',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    backgroundColor: 'black', // Slightly darker background for contrast
    position: 'relative',
    paddingTop: '40px' // ✅ Adds spacing from top
  }}
>
{/* ✅ Replacing rect small PNG with a rectangle and overlaying mobpic */}
<div 
  style={{
    position: 'relative', // ✅ Allows positioning child elements
    width: '330px', 
    height: '100px',
    backgroundColor: 'white', 
    borderRadius: '25px', 
    marginBottom: '100px' 
  }}
>
  {/* ✅ mobpic positioned on the left side */}
  <img 
    src={mobpic} 
    alt="Mob Pic"
    style={{
      position: 'absolute',
      top: '50%', // ✅ Aligns vertically
      left: '20px', // ✅ Positions it on the left
      transform: 'translateY(-50%)', // ✅ Centers it properly
      width: '156px', 
      height: '61px' 
    }} 
  />
    <img 
    src={About} 
    alt="About"
    style={{
      position: 'absolute',
      top: '50%', // ✅ Aligns vertically
      right: '40px', // ✅ Positions it on the left
      transform: 'translateY(-50%)', // ✅ Centers it properly
      width: '25px', 
      height: '25px' 
    }} 
  />
</div>
  <img 
    src={buzzmob} 
    alt="Buzz Mobile"
    style={{
      width: '360px', 
      height: 'auto',
      marginBottom: '50px' // ✅ Space below the image
    }}
  />
   <img 
    src={get} 
    alt="get"
    style={{
      width: '233px', 
      height: 'auto',
      marginBottom: '40px' // ✅ Space below the image
    }}
  />

{/* ✅ Footer Section */}
<div 
  style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Aligns text to left
    justifyContent: 'center',
    padding: '30px 20px', // Adjust padding for spacing
    color: 'white',
    fontSize: '16px', // ✅ Slightly smaller text
    fontWeight: 'normal', // ✅ Makes text thinner
    backgroundColor: 'black' // Ensure proper contrast
  }}
>
  {/* Logo */}
  <img 
    src={logo} 
    alt="Company Logo" 
    style={{ width: '71px', height: 'auto', marginBottom: '100px' }} 
  />

  {/* Contact Section */}
  <div>
    <h3 style={{textAlign:'left', fontSize: '18px', marginBottom: '35px', fontWeight: 900}}>Contact</h3>
    <p style={{ margin: '2px 0', fontWeight: 600 , color: '#B0B0B0', marginBottom: '15px' }}>+91 9082945753</p>
    <p style={{ margin: '2px 0', fontWeight: 'lighter' }}>
      <a href="mailto:hi@hiveup.co.in" style={{ color: '#B0B0B0', textDecoration: 'underline', fontWeight: 600  }}>
        hi@hiveup.co.in
      </a>
    </p>
  </div>

  {/* Team Section */}
  <div style={{ marginTop: '45px' }}>
    <h3 style={{textAlign:'left',fontSize: '18px', marginBottom: '35px', fontWeight: 900 }}>Team</h3>
    <p style={{ margin: '5px 0', fontWeight: 600, color: '#B0B0B0', marginBottom: '10px' }}>Ahart Dhivar</p>
    <p style={{textAlign:'left', margin: '5px 0', fontWeight: 600, color: '#B0B0B0', marginBottom: '10px' }}>Prakash</p>
    <p style={{textAlign:'left', margin: '5px 0', fontWeight: 600, color: '#B0B0B0' }}>Viraj</p>
  </div>

{/* Follow Us Section */}
{/* Follow Us Section */}
<div style={{ marginTop: '45px' }}>
  <h3 style={{ textAlign: 'left', fontSize: '18px', marginBottom: '25px', fontWeight: 900 }}>
    Follow Us
  </h3>
  
  <p style={{ margin: '5px 0', fontWeight: 600, marginBottom: '10px' }}>
    <a 
      href="https://www.instagram.com" 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ color: '#B0B0B0', textDecoration: 'none', marginRight:'20px' }}
    >
      Instagram
    </a>
  </p>

  <p style={{ margin: '5px 0', fontWeight: 600, marginBottom: '10px' }}>
    <a 
      href="https://www.linkedin.com" 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ color: '#B0B0B0', textDecoration: 'none', marginRight:'30px'  }}
    >
      LinkedIn
    </a>
  </p>
</div>


</div>

</section>

    </div>
  );
}

export default MobileHome;
