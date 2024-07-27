import callme from '../assets2/p4-removebg-preview.png'
import moi from '../assets2/latest.png'

const Contact = () => {
    return (
      <div className="container-fluid my-5" style={{ backgroundColor: '#1A1C2B', color: 'white' }}>
        <div className='my-5 text-center mx-auto'>
          <h1>PROFESSIONAL<br />EXPERIENCE</h1>
        </div>
        {/* accordion part start */}
        <div className='container' style={{width:600,backgroundColor:' rgb(107, 107, 248)'}}>
          <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Accordion Item #1
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by
        default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance,
        as well as the showing and hiding via CSS transitions. You can modify
        any of this with custom CSS or overriding our default variables. It's
        also worth noting that just about any HTML can go within the{" "}
        <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        Accordion Item #2
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        Accordion Item #3
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
</div>

   </div>
     
        {/* accordion part end */}
  <div className="row justify-content-center align-items-center">

    <div className="col-md-6">
            <div className="speech-bubble mt-4 ml-3">
              <img src={callme} alt="contactme?" />
      </div>
    </div>
  
    <div className="col-md-5">
            <img src={moi} alt="" className='mb-2'/>
            <div className="social-icons">
          {/*social icon  */}
          <a href="mailto:emmatexiii@gmail.com">
           <i className="fa-regular fa-envelope "></i>
          </a>
          &nbsp;
          <a href="https://x.com/Emmawhyteee?t=P0QMyAuhAXtZ9vA3hViQSw&s=09">
          <i className="fa-brands fa-twitter px-1"></i>
           
          </a>
          &nbsp;
          <a href="http://www.linkedin.com/in/emmanuel-ebuka-nwankwo-32227a120">
          <i className="fa-brands fa-linkedin"></i>

          </a>
        
<div className="author-name mb-2">𝓝𝔀𝓪𝓷𝓴𝔀𝓸 𝓔𝓶𝓶𝓪𝓷𝓾𝓮𝓵</div>
        </div>
            </div>
          
  </div>
</div>

    )
}

export default Contact