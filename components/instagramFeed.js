import Link from "next/link"
import { FaThumbsUp, FaComment } from 'react-icons/fa';

export default function InstagramFeed({ instagramPosts }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 px-4">
        {instagramPosts.map(({ node }, i) => {
          return (
            <div className="flex bg-white p-4 rounded">
              <a className="w-full block" href={`https://www.instagram.com/p/${node.shortcode}`} target="_blank" key={i}>
                <div className="mb-4">
                  <div className="image" style={{ backgroundImage: "url(" + node.display_resources[0].src + ")" }}>
                  </div>
                </div>
                <div class="flex flex-row">
                  <div class="flex flex-row mr-6 items-center">
                    <FaThumbsUp className="text-gray-500 mr-2 block" />
                    <p className="text-sm text-gray-500 font-bold block">
                      {node.edge_media_preview_like.count}
                    </p>
                  </div>
                  <div class="flex flex-row mr-6 items-center">
                    <FaComment className="text-gray-500 mr-2 block" />
                    <p className="text-sm text-gray-500 font-bold block">
                      {node.edge_media_to_comment.count}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </>
  )
}