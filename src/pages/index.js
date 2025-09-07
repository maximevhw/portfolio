import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ProfileCard from '@site/src/components/ProfileCard';
import LetterGlitch from '@site/src/components/LetterGlitch';
import { TerminalContextProvider } from "react-terminal";
import Terminal from '@site/src/components/Terminal';

import CustomTimeline from '@site/src/components/Timelines';

import Heading from '@theme/Heading';
import styles from './index.module.css';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      {/* LetterGlitch as background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }}>
        <LetterGlitch />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
          <ProfileCard
            showUserInfo={false}
            enableTilt={true}
            onContactClick={
              () => window.open('https://www.linkedin.com/in/maxime-vanhoorneweder/', '_blank')
            }
          />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Portfolio of Maxime Vanhoorneweder.">
      <HomepageHeader />
      <main>
        <CustomTimeline />
        <TerminalContextProvider>
          <Terminal />
        </TerminalContextProvider>
      </main>
    </Layout>
  );
}
