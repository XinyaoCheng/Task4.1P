import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function App() {
  return (
    <div className="App">
      
        <nav className="navbar">
        <h4 className="compmay_name">DevLink Marketplace</h4>
        <ul className="nav_items">
          <li>
            <a href="#">Find DEV</a>
          </li>
          <li>
            <a href="#">Find Jobs</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Create Account</a>
          </li>
        </ul>
      </nav>
      
      <div id="carouselAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://picsum.photos/400/300?random=1" className="d-block w-100" alt="Image 1" />
        </div>
        <div className="carousel-item">
          <img src="https://picsum.photos/400/300?random=2" className="d-block w-100" alt="Image 2" />
        </div>
        <div className="carousel-item">
          <img src="https://picsum.photos/400/300?random=3" className="d-block w-100" alt="Image 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
}
