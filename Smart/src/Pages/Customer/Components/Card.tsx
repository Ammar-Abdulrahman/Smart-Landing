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
  isVisible: boolean;
}

const Card: React.FC<ComponentProps> = ({ cards, isVisible }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // تأخير بين كل بطاقة
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // مخفي ونازل لأسفل
    visible: { opacity: 1, y: 0 }, // يظهر ويتحرك للأعلى
  };

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"} // تشغيل الأنيميشن عند عرض القسم
    >
      {cards.map((card: CardProps, index) => (
        <motion.div
          key={index}
          variants={cardVariants} // تطبق على كل بطاقة
          transition={{ duration: 0.7 }}
          className={`bg-white border w-68 sm:w-72 lg:w-64 m-2 p-4 rounded-lg`}
          whileHover={{ scale: 1.1 }}
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
    </motion.div>
  );
};

export default Card;
