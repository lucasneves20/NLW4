import Head from 'next/head'
import { ChallengBox } from '../components/ChallengBox';
import { CompletedChalenges } from '../components/completedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/home.module.css'

export default function Home() {
  return (
<div className={styles.container}>
	<Head>
		<title>início | Move.it</title>
	</Head>
    <ExperienceBar />
      <section>
		  <CountdownProvider>
			<div >
				<Profile/>
				<CompletedChalenges />
				<Countdown />
			</div>
			<div>
				<ChallengBox />
			</div>
		  </CountdownProvider>
    </section>
</div>
  )
}
