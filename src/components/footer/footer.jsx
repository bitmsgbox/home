import React from "react"
import { Link } from "gatsby"
import * as styles from "./footer.module.scss"
import logo from "../../assets/images/logo-with-title.svg"
import { BLOG_LINK } from "../../constant/links"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.siteInfo}>
          <div className={"logo"}>
            <Link to="/">
              <img
                style={{
                  height: 44,
                }}
                alt=""
                src={logo}
              />
            </Link>
          </div>

          <div className={"about"}>
            <p>
              帮助中小型服务平台快速接入用户聊天等服务, 节省早期开发、运营成本
            </p>
          </div>
        </div>

        <ul className={styles.colInfo}>
          <h4>友情链接</h4>
          <ul>
            <li>
              <a href="https://www.golang.org/" target="_blank">Golang</a>
            </li>
            <li>
              <a href={BLOG_LINK} target="_blank">Blog</a>
            </li>
            <li>
              <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby</a>
            </li>
          </ul>
        </ul>
        <ul className={styles.colInfo}>
          <h4>服务支持</h4>
          <ul>
            {/* <li>
              <Link to="/contact">
                联系我们
              </Link>
            </li> */}
            <li>
              <a href="/privacy.txt" target="_blank">隐私政策</a>
            </li>
            <li>
              <a href="/termsOfService.txt" target="_blank">服务条款</a>
            </li>
          </ul>
        </ul>
      </div>
      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()}, 版权归比特信箱所有</p>
      </div>
    </footer>
  )
}
