import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading
          as="h1"
          className="hero__title"
          style={{
            // fontFamily: "'OurSnowFont', sans-serif",
            fontFamily: "'Audiowide', sans-serif",
            fontSize: 100,
            marginBottom: 35,
          }}
        >
          Smart contracts<br />
          audit with AI.
        </Heading>
        {/* <p className="hero__subtitle" style={{marginBottom: 40}}>{siteConfig.tagline}</p> */}
        <p className="hero__subtitle">
          Participating in the <a href="https://www.colosseum.com/cypherpunk" style={{color: 'var(--ifm-hero-text-color)'}}>Cypherpunk Colosseum Hackathon</a>.
        </p>
        <p>
          Helped by <a href="https://fr.superteam.fun/" style={{color: 'var(--ifm-hero-text-color)'}}>Superteam France</a>.
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
