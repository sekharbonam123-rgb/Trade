import { useEffect, useState } from 'react';

export default function AITradingDashboard() {
  const signals = [
    {
      market: 'NIFTY',
      signal: 'BUY CALL',
      confidence: '82%',
      entry: '24850',
      stoploss: '24790',
      target: '24980',
    },
    {
      market: 'SENSEX',
      signal: 'BUY PUT',
      confidence: '74%',
      entry: '81420',
      stoploss: '81580',
      target: '81050',
    },
  ];

  const [marketStatus, setMarketStatus] = useState('Analyzing...');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMarketStatus('Bullish Momentum Detected');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const aiModules = [
    'AI Sentiment Scanner',
    'Open Interest Analyzer',
    'VWAP Trend Engine',
    'Smart Money Detector',
    'Volatility Predictor',
    'Risk Management AI',
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold">AI Trading Software</h1>
            <p className="text-gray-400 mt-2">
              AI-assisted NIFTY & SENSEX trading dashboard
            </p>
          </div>

          <div className="bg-green-600 px-4 py-2 rounded-2xl shadow-lg">
            AI ACTIVE
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-zinc-900 rounded-3xl p-6 shadow-2xl">
            <h2 className="text-xl font-semibold mb-3">Market Sentiment</h2>
            <div className="text-3xl font-bold text-green-400">{marketStatus}</div>
            <p className="text-gray-400 mt-2">
              AI analyzed news, global markets, and volume activity.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 shadow-2xl">
            <h2 className="text-xl font-semibold mb-3">Risk Status</h2>
            <div className="text-5xl font-bold text-yellow-400">Moderate</div>
            <p className="text-gray-400 mt-2">
              AI recommends controlled position sizing.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 shadow-2xl">
            <h2 className="text-xl font-semibold mb-3">Volatility Index</h2>
            <div className="text-5xl font-bold text-blue-400">18.6</div>
            <p className="text-gray-400 mt-2">
              Market volatility detected from option chain activity.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6 mb-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6">Live AI Trade Signals</h2>

          <div className="grid gap-5">
            {signals.map((trade, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-700 rounded-2xl p-5"
              >
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <div>
                    <div className="text-2xl font-bold">{trade.market}</div>
                    <div className="text-green-400 text-lg mt-1">
                      {trade.signal}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-400">Confidence</div>
                    <div className="text-xl font-semibold">
                      {trade.confidence}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-400">Entry</div>
                    <div className="text-xl font-semibold">
                      {trade.entry}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-400">SL</div>
                    <div className="text-xl font-semibold text-red-400">
                      {trade.stoploss}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-400">Target</div>
                    <div className="text-xl font-semibold text-green-400">
                      {trade.target}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-zinc-900 rounded-3xl p-6 shadow-2xl">
            <h2 className="text-2xl font-bold mb-5">AI Modules</h2>

            <div className="space-y-3">
              {aiModules.map((module, idx) => (
                <div
                  key={idx}
                  className="bg-black border border-zinc-700 p-4 rounded-2xl"
                >
                  {module}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 shadow-2xl">
            <h2 className="text-2xl font-bold mb-5">AI Trading Logic</h2>

            <div className="bg-black border border-zinc-700 rounded-2xl p-4 overflow-auto text-green-400 text-sm">
              <pre>{`IF:

RSI < 30 AND Price > VWAP AND OI buildup bullish AND AI sentiment positive

THEN: Generate BUY CALL signal Apply trailing stoploss Lock profits automatically`}</pre>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6 shadow-2xl mb-8">
          <h2 className="text-2xl font-bold mb-5">TradingView Live Chart</h2>

          <div className="rounded-2xl overflow-hidden border border-zinc-700">
            <iframe
              title="TradingView"
              src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_widget&symbol=NSE%3ANIFTY&interval=5&hidesidetoolbar=1&theme=dark"
              width="100%"
              height="420"
            />
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6 shadow-2xl">
          <h2 className="text-2xl font-bold mb-5">Deployment Stack</h2>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              'React Frontend',
              'Python FastAPI',
              'OpenAI Integration',
              'Broker APIs',
              'TradingView Alerts',
              'Telegram Signals',
              'Cloud Deployment',
              'Backtesting Engine',
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-black border border-zinc-700 rounded-2xl p-4 text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          Educational AI-assisted trading dashboard. No profit guarantee.
        </div>
      </div>
    </div>
  );
}
