//@ts-ignore
import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Route, MemoryRouter, Routes } from 'react-router-dom';
import { RootLayout } from './RootLayout';
import Aptos from './Pages/Aptos';
import Foundry from './Pages/Foundry';
import AccountBalance from './features/AccountBalance';
import Deploy from './features/Deploy/Deploy';

declare const acquireVsCodeApi: <T = unknown>() => {
  getState: () => T;
  setState: (data: T) => void;
  postMessage: (msg: unknown) => void;
};

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
          <Route path="deploy" element={<Deploy />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}
