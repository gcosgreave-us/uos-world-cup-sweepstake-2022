import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import TeamCard from '../components/TeamCard';
import stag from '../public/stag.svg';

export default function Home() {
  return (
    <div className='mx-auto px-10 bg-battersea-blue'>
      <Head>
        <title>University Of Surrey World Cup 2022 Sweepstake</title>
        <meta
          name='description'
          content='University Of Surrey World Cup 2022 Sweepstake'
        />
        <link rel='icon' href='/stag.svg' />
      </Head>

      <main>
        <div className='flex p-8 justify-center align-middle flex-col-reverse'>
          <h1 className='text-white text-4xl font-bold underline text-center'>
            University Of Surrey World Cup Sweepstake
          </h1>
          <Image src={stag} className='w-1/6 mx-auto pb-4' alt='' />
        </div>
        <div className='rounded bg-white p-6 mb-6 w-full lg:w-1/3'>
          <h1 className='text-battersea-blue text-4xl font-bold underline text-left mb-4'>
            Legend
          </h1>
          <p>
            <span className='text-2xl'>🥇</span> means the team is in line for a
            top 2 position
          </p>
          <p>
            <span className='text-2xl'>🥄</span> means the team is the worst
            team in the tournament
          </p>
        </div>
        <TeamCard />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
