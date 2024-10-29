
import App from './App';
import { createRoot } from 'react-dom/client';
import { Route, MemoryRouter, Routes } from 'react-router-dom';
import { RootLayout } from './RootLayout';
import Aptos from './Pages/Aptos/Aptos';
import Foundry from './Pages/Foundry/Foundry';
import AddressAptos from './Pages/Aptos/features/WalletAddress/AddressAptos';
import AccountAptos from './Pages/Aptos/features/Account/Account';
import DeployAptos from './Pages/Aptos/features/Deploy/DeployAptos';
import AddressFoundry from './Pages/Foundry/features/WalletAddress/AddressFoundry';
import AccountFoundry from './Pages/Foundry/features/Account/Account'
import DeployFoundry from './Pages/Foundry/features/Deploy/DeployFoundry'

const root = createRoot(document.getElementById('root')!);
if (root) {
  root.render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<App />} />
          <Route path="aptos" element={<Aptos />} />
          <Route path="aptos/address-aptos" element={<AddressAptos />} />
          <Route path="aptos/account-aptos" element={<AccountAptos />} />
          <Route path="aptos/deploy-aptos" element={<DeployAptos />} />
          <Route path="foundry" element={<Foundry />} />
          <Route path="foundry/address-sol" element={<AddressFoundry />} />
          <Route path="foundry/account-sol" element={<AccountFoundry />} />
          <Route path="foundry/deploy-sol" element={<DeployFoundry />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}
