import Navbar from "@/components/Navbar";
import Head from "next/head";
import ProfileScreen from "@/components/ProfileScreen";

const profile = () => {
  return (
    <>
    <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ProfileScreen />
    </>
  )
}

export default profile
