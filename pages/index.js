import Head from 'next/head';
import Footer from '../components/ui/footer/Footer';
import Header from '../components/ui/header/Header';
import Steps from '../components/ui/steps/Steps';

export default function Home() {
  return (
    <> 
      <Head>
        <title>
          NEAR dev 101
        </title>
      </Head>

      {/* ===== start: Header bar ====== */}
        <Header />
      {/* ======= end: Header bar ====== */}

      {/* ==== start: Steps section ==== */}
        <Steps />
      {/* ===== end: Steps section ===== */}

      {/* ======= start: footer ======== */}
        <Footer />
      {/* ========= end: footer ======== */}
    </>
  )
}
