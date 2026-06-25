import React, { useState } from 'react';
import { ArrowRightLeft, Droplets, Activity, ExternalLink } from 'lucide-react';
import { TonConnectButton } from '@tonconnect/ui-react';

const BulvaraDex = () => {
  const [activeTab, setActiveTab] = useState('swap');

  // Truncated token address from the prompt
  const BULV_TOKEN_URL = "https://app.ston.fi/swap?chartVisible=false&ft=TON&tt=EQAzI1vqCFeR1UGWT9ZQeanyN5Jg1wIBWtPKZ";

  return (
    <div className="min-h-screen bg-[#05070A] text-white font-sans overflow-x-hidden selection:bg-[#FF007F] selection:text-white flex flex-col">
      {/* Ambient Neon Glows */}
      <div className="fixed top-[-15%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#00E5FF] opacity-10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-15%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#FF007F] opacity-10 blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-4 md:px-6 border-b border-white/[0.08] bg-black/30 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <Activity className="w-7 h-7 text-[#00E5FF]" />
          <h1 className="text-xl md:text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#FF007F]">
            BULVARA DEX
          </h1>
        </div>
        <div className="scale-90 md:scale-100 origin-right">
          <TonConnectButton />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-4 md:p-6 w-full max-w-lg mx-auto">
        
        {/* Glassmorphic Container */}
        <div className="w-full bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-1.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] overflow-hidden">
          
          {/* Tab Switcher */}
          <div className="flex p-1 mb-2 bg-black/50 rounded-[1.25rem]">
            <button 
              onClick={() => setActiveTab('swap')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === 'swap' 
                  ? 'bg-[#00E5FF]/10 text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <ArrowRightLeft className="w-4 h-4" /> SWAP
            </button>
            <button 
              onClick={() => setActiveTab('liquidity')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === 'liquidity' 
                  ? 'bg-[#FF007F]/10 text-[#FF007F] shadow-[0_0_15px_rgba(255,0,127,0.2)]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Droplets className="w-4 h-4" /> LIQUIDITY
            </button>
          </div>

          {/* Content Views */}
          <div className="bg-black/40 rounded-2xl p-1 md:p-2 border border-white/[0.04]">
            
            {activeTab === 'swap' && (
              <div className="w-full rounded-xl overflow-hidden bg-black/20" style={{ height: '500px' }}>
                <iframe 
                  src={BULV_TOKEN_URL}
                  title="STON.fi Swap"
                  className="w-full h-full border-none"
                  allow="clipboard-write; clipboard-read; camera" // Camera allowed for mobile QR scanning
                  scrolling="no"
                />
              </div>
            )}

            {activeTab === 'liquidity' && (
              <div className="flex flex-col items-center p-6 space-y-6 text-center h-[500px] overflow-y-auto custom-scrollbar">
                
                {/* Icon Graphic */}
                <div className="mt-4 p-5 bg-gradient-to-b from-[#00E5FF]/20 to-transparent rounded-full shadow-[0_0_30px_rgba(0,229,255,0.2)] border border-[#00E5FF]/20">
                  <Droplets className="w-12 h-12 text-[#00E5FF]" />
                </div>
                
                {/* Explainer Text */}
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-wide">Fuel the Ecosystem</h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Provide liquidity to the <span className="text-[#00E5FF] font-semibold">TON / $BULV</span> pool on STON.fi to earn trading fees, stabilize the token, and unlock exclusive community rewards.
                  </p>
                </div>

                {/* Benefits List */}
                <div className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 text-left space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF007F] shadow-[0_0_10px_rgba(255,0,127,0.8)]" />
                    <span className="text-sm font-medium text-gray-200">Earn 0.2% of all trades on your pool share</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
                    <span className="text-sm font-medium text-gray-200">Help deepen the $BULV market depth</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF007F] shadow-[0_0_10px_rgba(255,0,127,0.8)]" />
                    <span className="text-sm font-medium text-gray-200">Qualify for future yield farming rounds</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href="https://app.ston.fi/pools?search=BULV" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto w-full group flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#00E5FF] to-[#FF007F] rounded-xl font-bold text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,127,0.5)] active:scale-[0.98]"
                >
                  Provide Liquidity Now
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            )}
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default BulvaraDex;
