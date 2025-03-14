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



function MobileHome() {
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
          paddingTop: '40px',
          position: 'relative'
        }}
      >
        <img src={mobglet} alt="Top Image" style={{ marginTop: '80px', width: '200px', height: 'auto', marginBottom: '20px' }} />
        <img src={touch} alt="Touch Image" style={{ width: '146px', height: 'auto', marginTop: '10px', marginBottom: '20px' }} />
        <img src={welcome} alt="Welcome Image" style={{ width: '320px', height: 'auto', marginTop: '40px' }} />
        <img src={cutting} alt="Cutting Image" style={{ width: '320px', height: 'auto', marginTop: '60px' }} />
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
        <img src={weput} alt="We Put Image" style={{ marginRight: '70px', width: '250px', height: 'auto', marginTop: '20px', marginBottom: '10px' }} />
        <img src={howdoes} alt="How Does Image" style={{ width: '320px', height: 'auto', marginTop: '10px' }} />
        <img src={requestmob} alt="Request Mobile" style={{ position: 'absolute', bottom: '150px', left: '50%', transform: 'translateX(-50%)', width: '147px', height: 'auto' }} />
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
        {/* ✅ Services Image (Slightly Above `rect.png`) */}
        <img 
          src={services} 
          alt="Services Image"
          style={{
            position: 'absolute',
            top: '5%', // ✅ Moves it slightly above `rect.png`
            left: '50%', 
            transform: 'translateX(-50%)', // ✅ Centers image horizontally
            width: '250px', 
            height: 'auto', 
            zIndex: 3 
          }}
        />

        {/* ✅ `we.png` Below `services.png` */}
        <img 
          src={we} 
          alt="we"
          style={{
            position: 'absolute',
            top: '8%', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            width: '340px', 
            height: 'auto', 
            zIndex: 3 
          }}
        />

        {/* ✅ Centered Image (rect.png) */}
        <img 
          src={rect} 
          alt="Centered Image"
          style={{
            position: 'absolute',
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            width: '350px', 
            height: 'auto', 
            objectFit: 'cover', 
            zIndex: 2 
          }}
        />

{/* ✅ Wrapper div for service images */}
<div 
  style={{
    position: 'absolute',
    top: '13%', // Positioned below `we.png`
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '70px', // ✅ Equal spacing between images
    zIndex: 5
  }}
>
  <img src={service1} alt="Service 1" style={{ width: '274px', height: '240px' }} />
  <img src={service2} alt="Service 2" style={{ width: '274px', height: '240px' }} />
  <img src={service3} alt="Service 3" style={{ width: '274px', height: '240px' }} />
  <img src={service4} alt="Service 4" style={{ width: '274px', height: '240px' }} />
</div>
<img 
          src={learn} 
          alt="learn"
          style={{
            position: 'absolute',
            marginTop: '980px', 
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
    bottom: '180px', // ✅ Places it slightly below `rect.png`
    left: '50%', 
    transform: 'translateX(-50%)', // ✅ Centers image horizontally
    width: '355px', 
    height: 'auto', 
    zIndex: 4 // Ensures visibility above `rect.png`
  }}
/>
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
  {/* ✅ BuzzMob Image on Top */}
  <img 
    src={smallrect} 
    alt="rect small"
    style={{
      width: '360px', 
      height: 'auto',
      marginBottom: '100px' // ✅ Space below the image
    }}
  />
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
    <p style={{ margin: '2px 0', fontWeight: 600 , color: '#B0B0B0', marginBottom: '15px' }}>+91 9933001027</p>
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
