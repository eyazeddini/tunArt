import React from 'react';
import styles from "src/styles/bid.module.css"

import { useRouter } from 'next/router';


interface RoomProps {
        post: any;
        index: number;
  }

  const Room: React.FC<RoomProps> = ({ post, index }) => {
  
const route=useRouter() 
  return (
    <div>
        
        <article key={index} className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.datetime} className="text-gray-500">
                {post.date}
              </time>
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"  onClick={()=>{console.log(post,"mehdi")
       ;route.push({ query: post,pathname:"/bid/Bid"})}}>
                Join Room
              </button>
              <a
                href={post.category.href}
                className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
              >
                {post.category.title}
              </a>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <img src={post.img} className={styles.img} />
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a href={post.author.href}>
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </a>
                </p>
                <p className="text-gray-600">{post.author.role}</p>
              </div>
            </div>
          </article>
    </div>
  );
}; 

export default Room;
