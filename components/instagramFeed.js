import Link from "next/link"

export default function InstagramFeed({ instagramPosts }) {
  return (
    <>
      <div className="mt-20 flex flex-col px-4">
        {instagramPosts.map(({ node }, i) => {
          return (
            <div className="bg-white p-4 mb-4">
              <a href={`https://www.instagram.com/p/${node.shortcode}`} key={i}>
                <div>
                  <img className="image" src={node.display_resources[0].src} />
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </>
  )
}