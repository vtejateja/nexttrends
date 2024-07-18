import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div>
      <div className="mobile-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="nav-con-logo-img"
        />
        <button className="logout-btn" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="clothes that get you noticed"
            className="nav-con-logout-img"
          />
        </button>
      </div>
      <div className="desktop-view">
        <div className="nav-desktop-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="nav-logo-img"
          />

          <ul className="nav-ul-con">
            <li className="li-element">Home</li>
            <li className="li-element">Products</li>
            <li className="li-element">Cart</li>
            <button className="logout-btn" type="button">
              Logout
            </button>
          </ul>
        </div>

        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nav-home-img"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="nav-home-img"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav-home-img"
          />
        </div>
      </div>
    </div>
  </nav>
)

export default Header
