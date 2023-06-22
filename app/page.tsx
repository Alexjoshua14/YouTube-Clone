import Image from 'next/image';
import { feedVideos } from './_util/data';
import { GiSeaTurtle } from 'react-icons/gi';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center overflow-x-hidden">
      <div 
        className="grid gap-2
          grid-cols-1 grid-flow-row
          sm:grid-cols-none sm:grid-rows-2 sm:grid-flow-col sm:overflow-x-scroll">
        {feedVideos.map((video, index) => (
          <div className="p-2 w-auto max-w-xs sm:w-80 sm:max-w-none" key={index}>
            <div>
              <Image 
                src={video.thumbnail} 
                height={150} width={300} 
                alt={`thumbnail image for ${video.title}`} 
                className="rounded-xl"
                />
            </div>
            <div className="flex items-start gap-3 py-2">
              <div >
                <GiSeaTurtle size={24} />
              </div>
              <div>
                <span className="font-semibold text-zinc-50">{video.title}</span>
                <div className="text-zinc-400 font-light text-sm">
                  <div className="flex items-center gap-1">
                    <span >{video.channel}</span>
                    <IoCheckmarkCircleSharp className={`${video.verified ? `flex` : `hidden`}`} size={14}/>
                  </div>
                  <div className="flex gap-1">
                    <span>{video.views} views</span>
                    <span className="font-extrabold">·</span>
                    <span>{video.createdAt.getFullYear()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
