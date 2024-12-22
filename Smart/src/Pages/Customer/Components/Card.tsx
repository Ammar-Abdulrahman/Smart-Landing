import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

interface CardProps {
  url: string;
  quote: string;
  color: string;
  titleCard: string;
  bodyCard: string;
}

interface ComponentProps {
  cards: CardProps[];
}

const Card: React.FC<ComponentProps> = ({ cards }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {cards.map((card: CardProps) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
          className={`bg-white border w-68 sm:w-72 lg:w-64 m-2 p-4 rounded-lg`}
          style={{
            boxShadow: `-5px 10px 25px ${card.color}`,
          }}
        >
          <div className="relative flex justify-end">
            <img src={card.quote} className="-mt-5 mr-3 w-6 sm:w-8" />
          </div>
          <div className="flex justify-center">
            <img className="m-2 w-16 sm:w-20" src={card.url} />
          </div>
          <h1 className="text-sm sm:text-md lg:text-lg font-semibold my-2">
            {card.titleCard}
          </h1>
          <h4 className="text-xs sm:text-sm lg:text-base font-normal">
            {card.bodyCard}
          </h4>
          <div className="m-2 flex justify-center">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className="text-[#EEB777] mx-1 w-4 sm:w-5 lg:w-6"
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
