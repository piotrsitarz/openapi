import React from "react";

import "./App.css";
import Balances from "sdk-blockchain";
import { PersonasReadOnlySDKApi } from "openapi-test-123";

function App() {
  const balance: Balances = new Balances({
    // https://www.covalenthq.com/platform/#/auth/register/
    apiKey: "YOUR_API_KEY",
  });

  balance.getTokenBalances(1, "demo.eth").then((tokenBalances) => {
    console.log({ tokenBalances });
  });

  balance.getHistoricalPortfolio(1, "demo.eth").then((portfolio) => {
    console.log({ portfolio });
  });

  const sdkOpenApi = new PersonasReadOnlySDKApi({
    apiKey: "api-key",
  });

  sdkOpenApi.getWalletPersonaComparison(121, 123123).then((data) => {
    console.log("data", data);
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
