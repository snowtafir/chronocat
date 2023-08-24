import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { HomepageFeatures } from '@site/src/components/HomepageFeatures'
import Heading from '@theme/Heading'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import styles from './index.module.css'

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  )
}

export default () => (
  <Layout>
    <HomepageHeader />
    <main>
      <HomepageFeatures />
    </main>
  </Layout>
)
