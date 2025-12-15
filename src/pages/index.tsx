import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// -------------------------------------------------------
// 🐧 CONFIGURATION & DATA
// -------------------------------------------------------

const FEATURES = [
  {
    title: 'Continuous Security',
    // You can replace these Emojis with your Penguin Icons (e.g., <img src="/img/penguin_guard.png" />)
    // icon: '🐧🛡️', 
    icon: (
      <img
        src={require('@site/static/img/excalead/ILLU_1.png').default}
        alt="Penguin Guard"
        style={{ height: 180 }}
      />
    ),
    description: (
      <>
        Smart contract audits should not be episodic. We offer 
        <strong> subscription-based auditing</strong> ensuring your code is verified 
        continuously as it evolves, not just once before launch.
      </>
    ),
  },
  {
    title: 'Formal Verification + AI',
    icon: (
      <img
        src={require('@site/static/img/excalead/ILLU_2.png').default}
        alt="Penguin Guard"
        style={{ height: 180 }}
      />
    ),
    description: (
      <>
        We combine the mathematical rigor of the <strong>Rocq (Coq) Prover</strong> with 
        the speed of AI automation. Prove your high-level logic matches your implementation 
        and avoid vulnerabilities.
      </>
    ),
  },
  {
    title: 'Solana Native',
    icon: (
      <img
        src={require('@site/static/img/excalead/ILLU_3.png').default}
        alt="Penguin Guard"
        style={{ height: 180 }}
      />
    ),
    description: (
      <>
        Built specifically for the <strong>Anchor Framework</strong> and the Solana account model.
        Our tools and methods understand account relationships, Anchor constraints, and IDLs.
      </>
    ),
  },
];

const PROCESS_STEPS = [
  {
    title: '1. Lifting',
    text: 'We translate your Rust/Anchor source code into a Rocq formal model. We speed up the translation using AI, and verify the result by snapshot testing.'
  },
  {
    title: '2. Specification',
    text: 'We define rules to describe the intended behavior of your contract. We write what should happen, and what should never happen.'
  },
  {
    title: '3. Verification',
    text: 'We mathematically verify that the specification is always satisfied by the smart contract, making sure it cannot be attacked on these rules.'
  },
];

// -------------------------------------------------------
// 🧱 COMPONENTS
// -------------------------------------------------------

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* Placeholder for Main Hero Penguin */}
        {/* <div className={styles.heroPenguin}>
             <div style={{fontSize: '5rem'}}>🐧⚡</div>
        </div> */}
        <Heading
          as="h1"
          className="hero__title"
          style={{
            fontFamily: "'Audiowide', sans-serif",
            lineHeight: '1.2',
          }}
        >
          {/* {siteConfig.title} */}
          Continuous Security Audits
        </Heading>
        <p className="hero__subtitle" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          {/* {siteConfig.tagline} */}
          Dedicated to Solana. Formal Verification & AI.
        </p>
        <div className={styles.buttons} style={{ marginTop: '50px' }}>
          <Link
            className="button button--secondary button--lg"
            style={{marginTop: '8px'}}
            to="mailto:contact@excalead.com"
          >
            Start Your Audit 🕵️
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            style={{marginLeft: '10px', marginTop: '8px', color: 'white', borderColor:'white'}}
            to="https://github.com/Excalead/excalead">
            View on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading
          as="h3"
          style={{
            fontFamily: "'Audiowide', sans-serif",
            paddingBottom: 12,
            paddingTop: 20,
          }}
        >
          {title}
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function ProcessSection() {
  return (
    <div className={clsx(styles.processSection)}>
      <div className="container text--center" style={{ marginBottom: '2rem', marginTop: '2rem' }}>
        <Heading
          as="h2"
          style={{
            marginBottom: '4rem',
            fontFamily: "'Audiowide', sans-serif"
          }}
        >
          How Excalead Works
        </Heading>
        <div className="row">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="col col--4">
              <div className="card shadow--md" style={{ marginBottom: '2rem' }}>
                <div className="card__header">
                  <h3>{step.title}</h3>
                </div>
                <div className="card__body">
                  <p>{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AuditedBy() {
    return (
      <div className="container text--center margin-top--xl margin-bottom--xl">
        <p style={{opacity: 0.6, fontWeight: 'bold', textTransform: 'uppercase'}}>Trusted By</p>
        <div className={styles.trustBadgeRow}>
          <span className={styles.trustBadge}>
            <a href="https://piggybank.fi" target="_blank" rel="noopener noreferrer">
              <img src="/img/piggybank.svg" alt="PiggyBank" style={{height: 160, verticalAlign: 'middle', marginRight: 10}} />
              PiggyBank
            </a>
          </span>
          <span className={styles.trustBadge}>
            <a href="https://x.com/domin8Arena" target="_blank" rel="noopener noreferrer">
              <img src="/img/domin8.png" alt="Domin8" style={{height: 160, verticalAlign: 'middle', marginRight: 10}} />
              Domin8
            </a>
          </span>
          <span className={styles.trustBadge}>
            <a href="https://www.bill-z.com/" target="_blank" rel="noopener noreferrer">
              <img src="/img/billz.jpg" alt="Billz" style={{height: 140, verticalAlign: 'middle', marginRight: 10}} />
              Billz
            </a>
          </span>
        </div>
        <div className={styles.trustBadgeRow}>
          <span className={styles.trustBadge} style={{ opacity: 0.5, fontStyle: 'italic', marginTop: 48 }}>
            ...more coming!
          </span>
        </div>
      </div>
    )
}

function SupportedBy() {
    return (
      <div className="container text--center margin-top--xl margin-bottom--xl">
        <p style={{opacity: 0.6, fontWeight: 'bold', textTransform: 'uppercase'}}>Supported By</p>
        <div className={styles.trustBadgeRow}>
          {/* Add supporting teams' logos here */}
          <span className={styles.trustBadge} style={{ marginTop: 24 }}>
            <a href="https://fr.superteam.fun" target="_blank" rel="noopener noreferrer">
              <img src="/img/superteam_france.jpg" alt="Superteam France" style={{height: 96, verticalAlign: 'middle', marginRight: 24}} />
              Superteam France
            </a>
          </span>
          <span className={styles.trustBadge} style={{ marginTop: 24 }}>
            <a href="https://formal.land/" target="_blank" rel="noopener noreferrer">
              <img src="/img/formal-land.png" alt="Formal Land" style={{height: 96, verticalAlign: 'middle', marginRight: 24}} />
              Formal Land
            </a>
          </span>
        </div>
      </div>
    );
}

// -------------------------------------------------------
// 🚀 MAIN PAGE
// -------------------------------------------------------

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Audits for Solana`}
      description="Continuous auditing for Solana smart contracts, with Formal Verification & AI">
      <HomepageHeader />
      <main>
        <div className={styles.trustBadgeRow} style={{ marginTop: 60 }}>
          <div className={styles.trustBadge}>
            🏆 Honorable Mention @ <a href="https://blog.colosseum.com/announcing-the-winners-of-the-solana-cypherpunk-hackathon/">Solana Colosseum Hackathon</a>
          </div>
        </div>

        <section className={styles.features} style={{ marginBottom: '6rem', marginTop: '6rem' }}>
          <div className="container">
            <div className="row">
              {FEATURES.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>

        <ProcessSection />
        <AuditedBy />
        <SupportedBy />

        <section className={styles.ctaSection}>
            <div className="container text--center margin-bottom--xl">
                <Heading as="h2">
                  Ready to secure your protocol?
                </Heading>
                <p>
                  Do not wait for a hack. Get continuous formal verification today.
                </p>
                <Link
                    className="button button--primary button--lg"
                    to="mailto:contact@excalead.com">
                    Contact Us for a Quote
                </Link>
            </div>
        </section>
      </main>
    </Layout>
  );
}
