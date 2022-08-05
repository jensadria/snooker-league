import type { NextPage } from "next";
import Head from "next/head";
import MainPage from "../components/main/MainPage";
import { useSession } from "next-auth/react";
import Image from "next/image";
//import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  return (
    <div className='w-4/5 mx-auto mt-8'>
      <Head>
        <title>Snooker League</title>
        <meta name='description' content='Pot Black Snooker League' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainPage />

      <footer className='text-3xl'></footer>
    </div>
  );
};

export default Home;

//import type { ReactElement } from 'react'
//import Layout from '../components/layout'
//import NestedLayout from '../components/nested-layout'
//import type { NextPageWithLayout } from './_app'

//const Page: NextPageWithLayout = () => {
//  return <p>hello world</p>
//}

//Page.getLayout = function getLayout(page: ReactElement) {
//  return (
//    <Layout>
//      <NestedLayout>{page}</NestedLayout>
//    </Layout>
//  )
//}

//export default Page
