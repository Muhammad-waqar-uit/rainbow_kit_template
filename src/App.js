import './App.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const App = () => {
  return (
    <div className="App">
      <ConnectButton label='Sign In Web3' accountStatus={{
        smallScreen :"avatar",
        largeScreen:"full"
      }} 
      showBalance={{
        smallScreen:false,
        largeScreen:true
      }}/>
    </div>
  );
}

export default App;
