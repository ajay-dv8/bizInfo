import Image from "next/image"
import { JsxElement } from "typescript";

type CardType = {
  title?: string;
  description?: string;
  category?: string;
  icon?: JsxElement | any;
}

const Card = ({icon, title, description, category}: CardType) => {
  return (
    <div className="w-80 px-6 py-4 border rounded-xl hover:shadow-lg">
      <div className="flex flex-row items-center justify-between">
        <span className="text-gray-600">{category}</span>
        <span>
          <Image 
            src={icon} 
            alt=""
            className="opacity-50 p-1"
          />
        </span>
      </div>

      <div className="">
        <h2 className="text-lg font-semibold py-2">{title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>

    </div>
  )
}

export default Card