import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid } from "@swordlib/react-responsive"
import appScreenshot from "../assets/images/app-screenshot.png"
import basicFeaturePng from "../assets/images/basic-feature.png"
import twoModePng from "../assets/images/two-mode.png"
import * as styles from "./index.module.scss"
import { APP_LINK, GETTING_STARTED__LINK } from "../constant/links"

function FeatureItem(props) {
  const { xs, sm, md } = Grid.useBreakpoint()
  let shouldReverse = props.reverse

  if (xs || (sm && !md)) {
    shouldReverse = false
  }

  return (
    <div className={styles.featureItem}>
      <Grid.Row
        align="middle"
        gutter={{
          xs: 0,
          md: 24,
        }}
      >
        <Grid.Col className={styles.featureCol} xs={24} sm={24} md={12} order={shouldReverse ? 2 : undefined}>
          <img className={styles.featureImg} alt="" src={props.img} />
        </Grid.Col>
        <Grid.Col className={styles.featureCol} xs={24} sm={24} md={12}>
          <div
            className={styles.featureIntro}
            order={shouldReverse ? 1 : undefined}
          >
            <h2>{props.title}</h2>
            <p>{props.children}</p>
          </div>
        </Grid.Col>
      </Grid.Row>
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="比特信箱--中小平台IM解决方案" />

    <div className={styles.header}>
      <h1 className={styles.title}>快速建立用户与您的平台之间的聊天频道</h1>
      <p className={styles.subTitle}>
        我们帮助中小平台快速对接用户聊天
        <br />
        及时与您的用户沟通，能有效提高用户留存率
      </p>
      <img
        className={styles.appScreenshot}
        alt=""
        src={appScreenshot}
      />
    </div>
    <div className={styles.container}>
      <div>
        <FeatureItem img={basicFeaturePng} title={"丰富的表达方式"}>
          现已支持传送文本、图片，未来可享受免费升级更加多元化的信息传送功能
        </FeatureItem>
        <FeatureItem img={twoModePng} title="双模式客户端" reverse>
          现已支持独立窗口、站内小窗两种客户端模式，未来可免费接入更多种客户端
        </FeatureItem>
      </div>
    </div>

    <div className={styles.guide}>
      <div className={styles.guideText}>
        <h2>免费注册</h2>
        <p>
          马上免费注册，多一种留住用户的方式
        </p>
      </div>

      <div className={styles.startButtons}>
        <a href={APP_LINK} target={"_blank"}>
          免费注册
        </a>
        <a href={GETTING_STARTED__LINK} target={"_blank"}>
          接入说明
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
