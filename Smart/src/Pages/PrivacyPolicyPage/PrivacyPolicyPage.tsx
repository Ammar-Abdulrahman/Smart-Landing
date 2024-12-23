// import { data } from "./Helper/index";
import dataPrivacy from "./Helper/PrivacyData.json";
const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-300 mx-auto min-h-screen">
      <div className="flex justify-center text-left">
        <div className="m-4 p-8 rounded-lg grid w-3/4 bg-white shadow-lg shadow-[#020A16] overflow-scroll">
          <div className="">
            <h1 className="mt-2 mb-5 text-[#020A16] text-2xl font-bold">
              Privacy Policy
            </h1>
            <h1 className="text-black text-md font-bold">
              Last Updated AUGUST 2024
            </h1>
            <h1 className=" text-black font-bold">1.Overview</h1>
            <p className="">{dataPrivacy.overview}</p>
            <h1 className=" text-black font-bold">
              2. The Types of Information That Smartmidia Collects About You and
              How Smartmidia Collects Information About You
            </h1>
            <p className="">{dataPrivacy["second-part1"]}</p>
            <p className="">{dataPrivacy["second-part2"]}</p>
            <p className="">{dataPrivacy["second-part3"]}</p>
            <p className="">{dataPrivacy["second-part4"]}</p>
            <p className="">{dataPrivacy["second-part5"]}</p>
            <p className="">{dataPrivacy["second-part6"]}</p>
            <p className="mb-2">{dataPrivacy["second-part7"]}</p>
            <h1 className=" text-black font-bold">
              3. How Smartmidia Uses Personal Information It Collects About You
              and the Purposes for the Collection and Use
            </h1>
            <p className="">{dataPrivacy["third-part1"]}</p>
            <p className="">{dataPrivacy["third-part2"]}</p>
            <p className="">{dataPrivacy["third-part3"]}</p>
            <p className="">{dataPrivacy["third-part4"]}</p>
            <p className="">{dataPrivacy["third-part5"]}</p>
            <p className="">{dataPrivacy["third-part6"]}</p>
            <p className="">{dataPrivacy["third-part7"]}</p>
            <p className="">{dataPrivacy["third-part8"]}</p>
            <p className="">{dataPrivacy["third-part9"]}</p>
            <p className="mb-2">{dataPrivacy["third-part10"]}</p>
            <h1 className=" text-black font-bold">
              4. How Smartmidia Protects Your Information
            </h1>
            <p className="mb-2">{dataPrivacy.smartProject}</p>
            <h1 className=" text-black font-bold">
              5. When Smartmidia Shares Your Information
            </h1>
            <p className="">{dataPrivacy["five-part1"]}</p>
            <p className="">{dataPrivacy["five-part2"]}</p>
            <p className="">{dataPrivacy["five-part3"]}</p>
            <p className="">{dataPrivacy["five-part4"]}</p>
            <p className="">{dataPrivacy["five-part5"]}</p>
            <p className="">{dataPrivacy["five-part6"]}</p>
            <p className="">{dataPrivacy["five-part7"]}</p>
            <p className="">{dataPrivacy["five-part8"]}</p>
            <p className="mb-2">{dataPrivacy["five-part9"]}</p>
            <h1 className=" text-black font-bold">
              6. Information from Children
            </h1>
            <p className="mb-2">{dataPrivacy.children}</p>
            <h1 className=" text-black font-bold">
              7. Links to Other Websites and Services
            </h1>
            <p className="mb-2">{dataPrivacy.otherWebsites}</p>
            <h1 className=" text-black font-bold">8. Do Not Track </h1>
            <p className="mb-2">{dataPrivacy.track}</p>
            <h1 className=" text-black font-bold">9. YOUR LEGAL RIGHTS</h1>
            <p className="mb-2">{dataPrivacy.legal}</p>
            <h1 className=" text-black font-bold">
              10. European Privacy Rights
            </h1>
            <p className="">{dataPrivacy["ten-part1"]}</p>
            <p className="">{dataPrivacy["ten-part2"]}</p>
            <p className="">{dataPrivacy["ten-part3"]}</p>
            <a
              href={dataPrivacy["ten-part4"]}
              className="mt-1 mb-1 font-semibold"
            >
              {dataPrivacy["ten-part4"]}
            </a>
            <p className="">{dataPrivacy["ten-part5"]}</p>
            <p className="mb-2">{dataPrivacy["ten-part6"]}</p>
            <h1 className=" text-black font-bold">
              11. International Compliance
            </h1>
            <p className="mb-2">{dataPrivacy.compliance}</p>
            <h1 className=" text-black font-bold">
              12. Data Privacy Framework
            </h1>
            <p className="mb-2">{dataPrivacy.framwork}</p>

            <h1 className=" text-black font-bold">
              13. California Privacy Rights
            </h1>
            <p className="">{dataPrivacy["third13-part1"]}</p>
            <p className="">{dataPrivacy["third13-part2"]}</p>
            <p className="mb-2">{dataPrivacy["third13-part3"]}</p>

            <table className="border-collapse text-[13px] w-full mb-4">
              <tr className="border text-center p-2 border-[#ddd]">
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  Personal Information Category
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  Retention Period
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  Business Purpose
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  Collected
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  Disclosed
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  Sold
                </th>
              </tr>

              <tr className="border text-center p-2 border-[#ddd]">
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["1line1"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["1line2"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["1line3"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["1line4"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["1line5"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["1line6"]}
                </th>
              </tr>

              <tr className="border text-center p-2 border-[#ddd]">
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["2line1"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["2line2"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["2line3"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["2line4"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["2line5"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["2line6"]}
                </th>
              </tr>

              <tr className="border text-center p-2 border-[#ddd]">
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["3line1"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["3line2"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["3line3"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["3line4"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["3line5"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["3line6"]}
                </th>
              </tr>

              <tr className="border text-center p-2 border-[#ddd]">
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["4line1"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["4line2"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["4line3"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["4line4"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["4line5"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["4line6"]}
                </th>
              </tr>

              <tr className="border text-center p-2 border-[#ddd]">
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["5line1"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["5line2"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["5line3"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["5line4"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["5line5"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["5line6"]}
                </th>
              </tr>

              <tr className="border text-center p-2 border-[#ddd]">
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["6line1"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["6line2"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["6line3"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["6line4"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["6line5"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["6line6"]}
                </th>
              </tr>

              <tr className="border text-center p-2 border-[#ddd]">
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["7line1"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["7line2"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["7line3"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["7line4"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["7line5"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["7line6"]}
                </th>
              </tr>

              <tr className="border text-center p-2 border-[#ddd]">
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["8line1"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["8line2"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["8line3"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["8line4"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["8line5"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["8line6"]}
                </th>
              </tr>

              <tr className="border text-center p-2 border-[#ddd]">
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["9line1"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["9line2"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["9line3"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["9line4"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["9line5"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["9line6"]}
                </th>
              </tr>

              <tr className="border text-center p-2 border-[#ddd]">
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["10line1"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["10line2"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["10line3"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["10line4"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["10line5"]}
                </th>
                <th className="border-y-2 text-center p-3 border-[#ddd]">
                  {dataPrivacy.table["10line6"]}
                </th>
              </tr>
            </table>

            <h1 className=" text-black font-bold">
              14. Colorado Privacy Rights
            </h1>
            <p className="mb-2">{dataPrivacy.colorado}</p>
            <h1 className=" text-black font-bold">
              15. Connecticut Privacy Rights{" "}
            </h1>
            <p className="mb-2">{dataPrivacy.conecticut}</p>
            <h1 className=" text-black font-bold">16. Utah Privacy Rights </h1>
            <p className="mb-2">{dataPrivacy.utah}</p>
            <h1 className=" text-black font-bold">
              17. Virginia Privacy Rights
            </h1>
            <p className="mb-2">{dataPrivacy.virginia}</p>
            <h1 className=" text-black font-bold">Privacy Statment</h1>
            <p className="mb-2">{dataPrivacy.Privacy} </p>
            <h1 className=" text-black font-bold">Sign up</h1>
            <p className="mb-2">{dataPrivacy.signUp} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
