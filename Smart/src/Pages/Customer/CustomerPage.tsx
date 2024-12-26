import React from "react";
import Card from "./Components/Card";
import { CardArray } from "./Helper";

interface CustomerPageProps {
  isVisible: boolean;
}

const CustomerPage: React.FC<CustomerPageProps> = ({ isVisible }) => {
  return (
    <div className="bg-[#fff] max-w-[1440px] mx-auto min-h-screen p-4 sm:p-6 lg:p-8 text-center">
      <h2 className="text-black text-xl sm:text-2xl font-bold my-4 sm:my-8">
        Customer opinion
      </h2>

      <div className="flex justify-center grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card cards={CardArray} isVisible={isVisible} />
      </div>
    </div>
  );
};

export default CustomerPage;
