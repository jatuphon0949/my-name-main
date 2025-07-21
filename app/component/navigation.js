import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid justify-content-center">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex align-items-center gap-4">
            <li className="nav-item">
              <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
                <img src="/bootstrap-logo.svg" alt="Logo" width={40} height={34} />
                <span>FrontEnd</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">หน้าแรก</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">เกี่ยวกับเรา</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="/service" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                บริการของเรา
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/service">Action</Link></li>
                <li><Link className="dropdown-item" href="/service">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" href="/service">Something else here</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">ติดต่อเรา</Link>
            </li>
          </ul>
        </div>
      </div>
          <ul
  className="navbar-nav ms-auto p-2"
  style={{
    border: '1px solid black',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 1)',
    backgroundColor: 'white'
  }}
>
  <li className="nav-item">
    <a href="/login.js" className="nav-link">Login</a>
  </li>
</ul>
       <ul
  className="navbar-nav ms-auto p-2"
  style={{
    border: '1px solid black',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 1)',
    backgroundColor: 'white'
  }}
>
  <li className="nav-item">
    <a href="/register" className="nav-link">Signup</a>
  </li>
</ul>


    </nav>
  );
}
