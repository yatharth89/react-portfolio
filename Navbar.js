function Navbar() {
  return (
    <div>
      <div class="site-main-wrapper">
        <button class="hamberger">
          <img src="./images/hamberger.svg" alt="" />
        </button>

        <div class="mobile-nav">
          <button class="times">
            <img src="./images/times.svg" alt="" />
          </button>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href='#'>Client</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
