function Header() {
  return (
    <div>
      <header>
        <div class="container">
          <nav id="main-nav" class="flex items-center justify-between">
            <div class="left flex items-center">
              <div class="branding">
                <img src="./images/logo.svg" alt="" />
              </div>
              <div>
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#work">Work</a>
              </div>
            </div>
          </nav>
          <div class="hero flex items-center justify-between">
            <div class="left flex-1 flex justify-center">
              <img src="./images/man.png" alt="" />
            </div>
            <div class="right flex-1">
              <h6 class="name_head">Yatharth Bansal</h6>
              <h1>
                I’m a CS <span>Student</span>
              </h1>
              <p>
                I have some experience on multiple popular web technologies like
                React,Node,Express.js etc and UI/UX tool like figima and much
                more and i build websites which people love.
              </p>
              <div>
            
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
