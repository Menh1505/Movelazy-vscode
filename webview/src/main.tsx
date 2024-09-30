//@ts-ignore
import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Route, MemoryRouter, Routes } from 'react-router-dom';
import { RootLayout } from './RootLayout';
import Aptos from './Pages/Aptos';
import Foundry from './Pages/Foundry';

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
          <Route path="account-balance" element={<Foundry />} />
          <Route path="deploy" element={<Foundry />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}
