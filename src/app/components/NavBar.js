
const NavBar = (props) => {
  return (
  
    <nav className="navbar is-info is-spaced" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="">
          <h1 className="title" align="center">Research Dashboard</h1>
        </a>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            Monthly Reports
          </a>
        
          <a className="navbar-item">
            External Blog
          </a>
  
          <a className="navbar-item">
            Custom Research
          </a>
          <a className="navbar-item">
            Quick Takes
          </a>
          <a className="navbar-item">
            Ongoing Updates
          </a>
          <a className="navbar-item">
            Presentations
          </a>
          <a className="navbar-item">
            Podcasts
          </a>
          <a className="navbar-item">
            Consultations
          </a>
        </div>
      </div>
    </nav>
   /* <table>
      <thead>
      <tr>
        <th bgcolor="#EF2D61">Monthly Reports</th>
        <th bgcolor="22d6ad">External Blog</th>
        <th bgcolor="#1C6EDF">Custom Research</th>
        <th bgcolor="green">Quick Takes</th>
        <th bgcolor="#D76103">Ongoing Updates</th>
        <th bgcolor="#FFE4E1">Presentations</th>
        <th bgcolor="#A7FFF2">Podcasts</th>
        <th bgcolor="#9BD4E4">Consultations</th>
      </tr>
      </thead>
    </table>*/
  )
}

export default NavBar