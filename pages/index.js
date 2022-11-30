import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TeamCard from '../components/TeamCard';

export default function Home() {
  return (
    <div className={`container mx-auto px-10 bg-chathams-blue`}>
      <Head>
        <title>University Of Surrey World Cup 2022 Sweepstake</title>
        <meta
          name='description'
          content='University Of Surrey World Cup 2022 Sweepstake'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className='flex p-8 justify-center align-i'>
          <h1 className='text-white text-4xl font-bold underline text-center'>
            University Of Surrey World Cup Sweepstake
          </h1>
        </div>
        <div className='rounded bg-white p-6 mb-6 w-1/3'>
          <h1 className='text-chathams-blue text-4xl font-bold underline text-left mb-4'>
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
      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
