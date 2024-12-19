import Card from "./Components/Card";
import { CardArray } from "./Helper";

const CustomerPage = () => {
  return (
    <div className="bg-[#fff] max-w-[1440px] mx-auto max-h-screen justify-center text-center">
      <h2 className="text-black text-2xl font-bold m-8">Customer opinion</h2>

      <div className="grid justify-center text-center">
        <Card cards={CardArray} />
      </div>
    </div>
  );
};

export default CustomerPage;
