const NavigationBar = () => {
  return(
    <>
      <nav>
        <section className="right-nav-section">
          <div className="logo">
            <h1>Redux</h1>
            <h2>Blog</h2>
          </div>
          <p className="divider">|</p>

          <p className="nav-item">Blogs</p>

          <p className="nav-item">
            <span className="add-icon">+</span>Add New
          </p>
        </section>

        <section className="left-nav-section">
          <p className="divider">|</p>

          <p className="nav-item">
            <span>❤</span>Favorites
          </p>
        </section>
      </nav>
    </>
  )
};

export default NavigationBar;