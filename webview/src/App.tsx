// import React, { useState } from 'react';
// //@ts-ignore
// import Aptos from './Pages/Aptos';
// //@ts-ignore
// import Foundry from './Pages/Foundry';
// import { Logo } from './components/Logo';
// import { Link } from 'react-router-dom';
// import { Tab } from './components/Tab';
// import { AptosIcon } from './icons/AptosIcon';
// import { FoundryIcon } from './icons/FoundryIcon';

// const App: React.FC = () => {
//   //@ts-ignore
//   const [currentPage, setCurrentPage] = useState<string | null>(null);;
//   const togglePage = () => {
//     setCurrentPage(currentPage === 'Aptos' ? 'Foundry' : 'Aptos');
//   };
//   //@ts-ignore
//   const renderContent = () => {
//     switch (currentPage) {
//       case 'Aptos':
//         return <Aptos />;
//       case 'Foundry':
//         return <Foundry />;
//       default:
//         return (
//           <div className="flex flex-col items-center justify-center h-full">
//             <div className="text-white text-lg sm:text-xl mb-4 text-center">Select a simulator to Start</div>
//             <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
//               <button
//                 className="px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//                 onClick={() => setCurrentPage('Aptos')}
//               >
//                 <Link to="/Aptos" className="focus:outline-none">
//                   <Tab
//                     icon={<AptosIcon className="!relative !w-[24px] !h-[24px]" />}
//                     title="Aptos"
//                   />
//                 </Link>
//               </button>
//               <button
//                 className="px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//                 onClick={() => setCurrentPage('Foundry')}
//               >
//                 <Link to="/foundry" className="focus:outline-none">
//                   <Tab
//                     icon={<FoundryIcon className="!relative !w-[24px] !h-[24px]" />}
//                     title="Foundry"
//                   />
//                 </Link>
//               </button>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-[#1e1e1e] text-white">
//       <header className="flex flex-col sm:flex-row items-center p-4 bg-[#252526] border-b border-[#3c3c3c]">
//         <div className="flex items-center mb-2 sm:mb-0">
//           <a href="https://docs.movementnetwork.xyz/" className="flex items-center border hover:border-[#646cff] py-2 px-4 rounded transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500">
//             <Logo className="w-8 h-8 mr-3" />
//             <h1 className="text-lg sm:text-xl font-semibold text-white">Movement Simulator</h1>
//           </a>
//         </div>
//         {currentPage && (
//           <button
//             className="mt-2 sm:mt-0 sm:ml-auto px-3 py-1 bg-[#ffffff1a] rounded hover:bg-[#ffffff33] transition-colors"
//             onClick={togglePage}
//           >
//             Switch to {currentPage === 'Aptos' ? 'Foundry' : 'Aptos'}
//           </button>
//         )}
//       </header>
//       {/* <main className="flex-grow overflow-auto p-4">
//         {renderContent()}
//       </main> */}
//     </div>
//   );
// }
// export default App;


import { Link } from 'react-router-dom';
import './App.css';
import Aptos from './Pages/Aptos';
import Foundry from './Pages/Foundry';
import { Logo } from "./components/Logo";
import { useState } from 'react';
import { Tab } from './components/Tab';
import { AptosIcon } from './icons/AptosIcon';
import { FoundryIcon } from './icons/FoundryIcon';

function App() {
  const [currentPage, setCurrentPage] = useState<string | null>(null); // Keep this generic

  const togglePage = () => {
    setCurrentPage(currentPage === 'Aptos' ? 'Foundry' : 'Aptos');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'Aptos':
        return <Aptos />;
      case 'Foundry':
        return <Foundry />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-white text-lg sm:text-xl mb-4 text-center">Select a simulator to Start</div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <button
                className="px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={() => setCurrentPage('Aptos')}
              >
                <Link to="/Aptos" className="focus:outline-none">
                  <Tab
                    icon={<AptosIcon className="!relative !w-[24px] !h-[24px]" />}
                    title="Aptos"
                  />
                </Link>
              </button>
              <button
                className="px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"

              >
                <Link to="/deploy" className="focus:outline-none">
                  <Tab
                    icon={<FoundryIcon className="!relative !w-[24px] !h-[24px]" />}
                    title="Foundry"
                  />
                </Link>
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#1e1e1e] text-white">
      <header className="flex flex-col sm:flex-row items-center p-4 bg-[#252526] border-b border-[#3c3c3c]">
        <div className="flex items-center mb-2 sm:mb-0">
          <a href="https://docs.movementnetwork.xyz/" className="flex items-center border hover:border-[#646cff] py-2 px-4 rounded transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500">
            <Logo className="w-8 h-8 mr-3" />
            <h1 className="text-lg sm:text-xl font-semibold text-white">Movement Simulator</h1>
          </a>
        </div>
        {currentPage && (
          <button
            className="mt-2 sm:mt-0 sm:ml-auto px-3 py-1 bg-[#ffffff1a] rounded hover:bg-[#ffffff33] transition-colors"
            onClick={togglePage}
          >
            Switch to {currentPage === 'Aptos' ? 'Foundry' : 'Aptos'}
          </button>
        )}
      </header>
      <main className="flex-grow overflow-auto p-4">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;