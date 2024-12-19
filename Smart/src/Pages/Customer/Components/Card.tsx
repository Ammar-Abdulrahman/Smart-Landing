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
    <div className="flex justify-center text-center">
      {cards.map((card: CardProps) => {
        return (
          <div
            className={`bg-white border w-76 m-2 p-2 h-72 rounded-lg`}
            style={{
              boxShadow: `-5px 10px 25px ${card.color}`, // Shadow color passed dynamically
            }}
          >
            <div className="flex justify-end text-right">
              <div className="absolute">
                <img src={card.quote} className="-mt-5 mr-3 w-8" />
              </div>
            </div>
            <div className="flex justify-center text-center">
              <img className="m-2" src={card.url} />
            </div>
            <h1 className="text-md m-2 font-semibold"> {card.titleCard} </h1>
            <h4 className="font-normal">{card.bodyCard} </h4>
            <div className="m-2 flex justify-center text-center">
              <FaStar className="text-[#EEB777] m-1" />
              <FaStar className="text-[#EEB777] m-1" />
              <FaStar className="text-[#EEB777] m-1" />
              <FaStar className="text-[#EEB777] m-1" />
              <FaStar className="text-[#EEB777] m-1" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
