import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
        return (
          <section id="contact" className="py-5 bg-dark text-white">
            <div className="container">
              <h2 className="text-center mb-5">Contact Me</h2>
              <div className="row">
                <div className="col-md-6">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea className="form-control" id="message" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                  </form>
                </div>
                <div className="col-md-6">
                  <div className="contact-info">
                    <h4>Contact Information</h4>
                    <p><i className="bi bi-envelope"></i> Michael.daza@csu.fullerton.edu</p>
                    <p><i className="bi bi-phone"></i> +1 555-441-0425</p>
                    <p><i className="bi bi-geo-alt"></i> Fullerton, CA</p>
                    <div className="social-icons">
                      <a href="#" className="social-icon p-3">  <i className="bi bi-twitter"></i></a>
                      <a href="#" className="social-icon p-3">  <i className="bi bi-linkedin"></i></a>
                      <a href="https://github.com/Michael-Scrumlord" className="social-icon p-3">  <i className="bi bi-github"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
}

function WorkExperience() {
    return (
      <section id="work-experience" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Work Experience</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Christie Digital Systems</h5>
                  <p className="card-text">Position: Systems Support</p>
                  <ul className="list-group">
                    <li className='list-group-item'>HelpDesk Support</li>
                    <li className='list-group-item'>VoIP Management</li>
                    <li className='list-group-item'>Active Directory Administration</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Christie Digital Systems</h5>
                  <p className="card-text">Position: Service Desk</p>
                  <ul className="list-group">
                    <li className='list-group-item'>Technical Support</li>
                    <li className='list-group-item'>CRM Administration</li>
                    <li className='list-group-item'>Technical Analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };


function AboutApp(){
    return(
        <>
            <div className="container">
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Portfolio</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        </ul>
                    </div>
                    </nav>
                </header>

                <section id="about" className="py-5">
                    <div className="container">
                    <h2>About Me</h2>
                    <p>My name is Michael and I make music, fix computers, and consume a lot of media. </p>
                    <p>I work in I.T. currently and am finishing a B.S. in Computer Science from CSU Fullerton.</p>
                    <i>B.S. ETA Spring '24</i>
                    </div>
                </section>

                <section id="projects" className="py-5 bg-light">
                    <div className="container">
                        <h2>Projects</h2>
                        <div className="row">
                            <div className="col-md-4">
                            <div className="card mb-4">
                                <img src="./assets/astrodex.jpg" className="card-img-top" alt="AstroDex" />
                                <div className="card-body">
                                <h5 className="card-title">Astro-Dex</h5>
                                <p className="card-text">An exploration of the 3D library, ThreeJS. Planetary Simulator.</p>
                                <a href="https://github.com/Michael-Scrumlord/Astro-Dex" className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4">
                            <div className="card mb-4">
                                <img src="./assets/media-app.png" className="card-img-top" alt=".MediaApp" />
                                <div className="card-body">
                                <h5 className="card-title">MediaApp</h5>
                                <p className="card-text">An exploration of ReactJS, Bootstrap, and web development. Fully functional Front End.</p>
                                <a href="https://github.com/Michael-Scrumlord/movie-app" className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4">
                                    <img src="./assets/playpal.png" className="card-img-top" alt="PlayPal" />
                                    <div className="card-body">
                                        <h5 className="card-title">PlayPal</h5>
                                        <p className="card-text">An exploration of Python, Discord API, and media player APIs. Discord Bot. </p>
                                        <i>The code is private because the Bot's token was uploaded to the github.. rest assured, it's cool.</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <WorkExperience/>
                <Contact />
            </div>
        </>
    )
}

export default function About() {

    return(
        <AboutApp/>
    )
}