import React from 'react'

export default function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary"data-bs-theme="dark">
  <div className="container-fluid">
  <a className="navbar-brand"> <img src="images/logo12.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
   MedWallet</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav" >
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/newdrug">Add New Drug</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact Us</a>
        </li>
      
        
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            account
          </a>
          <ul className="dropdown-menu ">
            <li><a className="dropdown-item" href="/register">Register</a></li>
            <li><a className="dropdown-item" href="/signin">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

        
     </div>
  )
}
