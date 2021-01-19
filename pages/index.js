import Head from 'next/head'
import Instagram from "instagram-web-api"
import InstagramFeed from "../components/instagramFeed"

import Header from '../components/Header'

export default function Home({ instagramPosts }) {
  return (
    <>
      <Head>
        <title>Domov - Slomemes.si</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <InstagramFeed instagramPosts={instagramPosts} />
    </>
  )
}
export async function getStaticProps(context) {
  const client = new Instagram({
    username: process.env.IG_USERNAME,
    password: process.env.IG_PASSWORD,
  })
  let posts = []
  try {
    await client.login()
    // request photos for a specific instagram user
    const instagram = await client.getPhotosByUsername({
      username: process.env.IG_USERNAME,
    })
    if (instagram["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
      // if we receive timeline data back
      //  update the posts to be equal
      // to the edges that were returned from the instagram API response
      posts = instagram["user"]["edge_owner_to_timeline_media"]["edges"]
    }
  } catch (err) {
    console.log(
      "Something went wrong while fetching content from Instagram",
      err
    )
  }
  return {
    props: {
      instagramPosts: posts, // returns either [] or the edges returned from the Instagram API based on the response from the `getPhotosByUsername` API call
    },
  }
}
