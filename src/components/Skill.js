import img1 from "../assets2/mobile.png";
import img2 from "../assets2/nextproject.png";
import img3 from "../assets2/e-commerce.png";
import img4 from '../assets2/foodapp.png'
import img5 from '../assets2/reactdemo.png'

const Skills = () => {
  const Project = [
    {
      Image:require("../assets2/e-commerce.png"),
      description: "E-commerce website(Affordable luxury)",
      goto:"https://affordableluxury.pythonanywhere.com/",
    },
    {
      Image: require("../assets2/engineering_fest.png"),
      description: "Engineeringmeest Art",
      goto:"https://ema-one.vercel.app",
    },
    {
      Image: require("../assets2/reactdemo.png"),
      description: "Demo website(Affordable luxury)",
      goto:"https://my-react-demo-liart.vercel.app",
    },
  ];

  return (
    <>
      <div
        id="myworks"
        className="container"
        style={{backgroundColor: "#1A1C2B", color: "white"}}
      >
        <div className="row gy-4 px-4 d-flex justify-content-between mb-3">
          <div className="col-lg-5 me-5 mywork">
            <h1 className="work">
              MY <br />
              WORK
            </h1>
            <p>
              Recently Deployed a scalable e-commerce website, and hybrid mobile apps using
              React SPA and PWA. Collaborated in various projects with clients
              all around the world.
            </p>

            {/* End Features Item*/}
          </div>

          <div className="projectdirection features-image phone col-lg-2 ">
            <img src={img2} alt="project_direction" />
            <a
              className="btn btn-info ms-4 viewproj"
              href="https://affordableluxury.pythonanywhere.com/"
            >
              View project
            </a>
          </div>

          <div className="ms-5 project_mobile features-image phone col-lg-4">
            <img
              src={img1}
              height={400}
              alt="project_mobile"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
          </div>
        </div>
        {/* card loop_section */}
        <div className="row row-cols-xl-3 loopcard"  data-aos="fade-up" data-aos-duration="3000">
        {Project.map((proj => {
          return (
            <div className="col-10 col-sm-10 " >
            <div className="card mt-5  mx-2 projectimg " >
              <img src={proj.Image} className="card-img-top " alt="e-commerce" />
             
              <div className="card-body grayC">
                
                <p className="card-text">{proj.description}</p>
                <a href={proj.goto} >
               Visit Site
                </a>
              </div>
              </div>
              </div>
          );
        }))}
        </div>
      </div>
    </>
  );
};

export default Skills;
