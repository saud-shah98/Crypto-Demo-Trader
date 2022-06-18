import React from "react";
import { AuthProvider } from "./AuthProvider";
import { BalanceProvider } from "./BalanceProvider";
import {CoinsOwnedProvider} from './CoinsOwnedProvider';
import Router from "./Router";

export default function Providers() {
  return (
    <AuthProvider>
      <BalanceProvider> 
        <CoinsOwnedProvider>
          <Router />
      </CoinsOwnedProvider>    
      </BalanceProvider>
    </AuthProvider>
  );
}
