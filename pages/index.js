import Head from 'next/head';
import Footer from '../components/ui/footer/Footer';
import Header from '../components/ui/header/Header';
import Steps from '../components/ui/steps/Steps';
import Model from "../components/model/Model";
import { useState } from 'react';

export default function Home() {
  const [ showModel, setShowModel ] = useState(false);

  return (
    <> 
      <Head>
        <title>
          NEAR dev 101
        </title>
      </Head>

      {/* ======== start: model ======== */}
        <Model setShowModel={setShowModel} showModel={showModel}  />
      {/* ========= end: model ========= */}

      {/* ===== start: Header bar ====== */}
        <Header setShowModel={setShowModel} />
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
