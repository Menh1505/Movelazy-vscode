
import App from './App';
import { createRoot } from 'react-dom/client';
import { Route, MemoryRouter, Routes } from 'react-router-dom';
import { RootLayout } from './RootLayout';
import Aptos from './Pages/Aptos';
import Foundry from './Pages/Foundry';
import AccountBalance from './features/AccountBalance';
import DeployFoundry from './features/Deploy/DeployFoundry';
import DeployAptos from './features/Deploy/DeployAptos';
import AddressFoundry from './features/YourAddress/AddressFoundry';
import YourAddressAptos from './features/YourAddress/AddressAptos'


const root = createRoot(document.getElementById('root')!);
if (root) {
  root.render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<App />} />
          <Route path="aptos" element={<Aptos />} />
          <Route path="foundry" element={<Foundry />} />
          <Route path="account-balance" element={<AccountBalance />} />
          <Route path="deploy-aptos" element={< DeployAptos />} />
          <Route path="deploy-foundry" element={< DeployFoundry />} />
          <Route path="your-address-foundry" element={<AddressFoundry />} />
          <Route path="your-address-aptos" element={<YourAddressAptos />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}
