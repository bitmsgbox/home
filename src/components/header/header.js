import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Grid } from "@swordlib/react-responsive"
import logo from "../../assets/images/logo-with-title.svg"
import mobileNavIcon from '../../assets/images/mobile-nav-menu.svg'
import closeMobileNavIcon from '../../assets/images/close-mobile-nav-menu.svg'
import * as styles from "./header.module.scss"
import { APP_LINK, BLOG_LINK } from "../../constant/links"

const Nav = () => (
  <nav className={styles.nav}>
    <Link to="/" activeClassName={styles.activeLink}>
      首页
    </Link>
    <a href={APP_LINK} target="_blank">App</a>
    <Link to="/blog" activeClassName={styles.activeLink}>
      博客
    </Link>
  </nav>
)

const Header = ({ siteTitle }) => {
  const { xs } = Grid.useBreakpoint()
  const [showMobileNav, setShowMobileNav] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.headerBar}>
        <div>
          <Link to="/">
            <img className={styles.logo} alt={"Logo"} src={logo} />
          </Link>
        </div>
        {xs ? <div onClick={() => {
          setShowMobileNav(!showMobileNav)
        }}>
          <img width={24} height={24} src={showMobileNav ? closeMobileNavIcon : mobileNavIcon} alt="" />
        </div> : <Nav />}
      </div>
      {xs && <div
        className={styles.mobileNavContainer}
        style={{
          maxHeight: showMobileNav ? 200 : 0,
        }}
      >
        <Nav />
      </div>}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
