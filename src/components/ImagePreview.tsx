import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";

import Favicon from "../app/favicon.ico";

export function ImagePreview() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <MdCheckCircle size={43} className="text-green" />

      <Image
        src={Favicon}
        className="rounded-xl"
        alt="Image Description"
        width={500}
        height={300}
      />

      <div className="rouded-lg boerder-2 borber-gray-200 w-full flex mt-4 items-center bg-gray-50">
        <div className="text-gray-500 px-3 text-xs overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
          https://unsplash.com/photos/snow-covered-mountain-under-gray-clouds-during-daytime-bBGpZ63zNi0
        </div>
        <button className="bg-primary hover:brightness-90 w-full m-[1px] py-3 text-xs text-white rounded-lg">
          Copiar link
        </button>
      </div>
    </div>
  );
}
