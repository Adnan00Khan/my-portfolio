
import Image from "next/image";


export default function Home() {
  return (
    <div className="box">

      <div className="nav">
        <br />
        <Image src="/img/img.jpg" alt="" width={250} height={250} className="img" />
        <hr />
       <a href="#about"><button className="nav-btn">about</button></a> 
        <hr />
        <a href="#education"><button className="nav-btn">education</button></a>
        <hr />
        <a href="#skills"><button className="nav-btn">skill</button></a>
        <hr />
        <a href="#project"><button className="nav-btn">projects</button></a>
      </div>


      <div className="box1">

      <div className="main" id="about">
        <br />
        <h1 className="about-h1">adnan khan</h1>
        <p className="about-p">Email: adyyy931@gmail.com Linkedin: <a className="about-a" href="https://www.linkedin.com/in/adnan-khan-14b0aa25b/">ADNAN KHAN</a></p>
        <br />
        <p className="about-p">Hi, AADNAN KHAN, I specialize in front-end and back-end development, bringing ideas to life through clean, efficient, and user-friendly code. Whether its designing visually appealing interfaces or ensuring seamless functionality, I thrive on creating solutions that meet both user and business needs. </p>
        <button className="about-btn"><a className="a" href="https://hackathon-1-2-one.vercel.app/">CV</a></button>
      </div>
<hr />
      <div className="main" id="education">
        <br />
       <ul className="education-ul">
        <li className="education-li">SSC (Secondary School Certificate)</li>
        <li className="education-li">HSC (Higher Secondary Certificate)</li>
        <li className="education-li">ADIT(Advanced Diploma In Information Technology)</li>
       </ul>
      </div>
<hr />
<div className="main" id="skills">
        <br />
       <ul className="education-ul">
       <li className="education-li">ms office</li>
        <li className="education-li">html</li>
        <li className="education-li">css</li>
        <li className="education-li">tailwind </li>
        <li className="education-li">javascript</li>
        <li className="education-li">typescript</li>
        <li className="education-li">nextjs</li>
        <li className="education-li">nodejs</li>
       </ul>
      </div>
<hr />
<div className="main" id="project">
        <br />
       <ul className="education-ul">
        <li className="education-li">static web ux/ui</li><a className="a" href="https://coffee-shop-livid-seven.vercel.app/">Go</a>
        <li className="education-li">resume builder</li><a className="a" href="https://hackthon-3-4.vercel.app/">Go</a>
        <li className="education-li">multipage web static</li><a className="a" href="https://multi-page-web-css.vercel.app/">Go</a>
       </ul>
      </div>


      </div>
      </div>
    
  );
}
