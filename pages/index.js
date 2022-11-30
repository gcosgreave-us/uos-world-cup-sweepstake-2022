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
