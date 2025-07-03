import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ModelForm from '@/components/ModelForm';
import ModelResult from '@/components/ModelResult';

// Main page component with all sections
export default function Home() {
  const [modelResult, setModelResult] = useState<any>(null);

  const handleModelResult = (result: any) => {
    setModelResult(result);
  };

  return (
    <>
      <Head>
        <title>Agente Voz A Voz - Conversación Natural</title>
        <meta name="description" content="Explora la tecnología de conversación natural mediante interacción voz a voz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <ModelForm onResult={handleModelResult} />
        <ModelResult result={modelResult} />
      </Layout>
    </>
  );
}