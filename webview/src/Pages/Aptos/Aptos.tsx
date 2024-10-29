import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Tab } from '../../components/Tab';
import { CoinIcon } from '../../icons/CoinIcon';
import { AptosIcon } from '../../icons/AptosIcon';
import { WalletIcon } from '../../icons/WalletIcon';
import NavigateTitle from '../../components/Aptos/Header';

const Aptos: React.FC = () => {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/`);
  };
  return (
    <div className="h-[200vh] grow overflow-y-scroll ">
      <div className="absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]">
        <div className="flex flex-col w-full items-start gap-[64px] absolute top-[228px] left-0">
          <div className="flex-col gap-[40px] p-[24px] self-stretch w-full flex-[0_0_auto] rounded-[16px] flex items-start relative">
            <NavigateTitle handleNavigate={handleNavigate} title="Aptos" />
          </div>
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full">
              <button
                className="px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full"
              >
                <Link to="address-aptos" className="focus:outline-none">
                  <Tab
                    icon={<WalletIcon className="!relative !w-[24px] !h-[24px]" />}
                    title="YourAddress"
                  />
                </Link>
              </button>
              <button
                className="px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full"

              >
                <Link to="account-aptos" className="focus:outline-none">
                  <Tab
                    icon={<CoinIcon className="!relative !w-[24px] !h-[24px]" />}
                    title="Account Balance"
                  />
                </Link>
              </button>

              <button
                className="px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full"
              >
                <Link to="deploy-aptos" className="focus:outline-none">
                  <Tab
                    icon={<AptosIcon className="!relative !w-[24px] !h-[24px]" />}
                    title="Deploy"
                  />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Aptos;