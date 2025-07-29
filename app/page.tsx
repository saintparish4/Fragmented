import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar 
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-10 space-x-4">
            <button className="text-sm text-gray-600 hover:text-gray-900">Contact Sales</button>
            <button className="text-sm bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Sign up for free</button>
          </div>
        </div>
      </div>
      */}

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Image
                  src="/logo.png"
                  alt="Fragmented logo"
                  width={32}
                  height={32}
                  className="mr-3"
                />
                <h1 className="text-2xl font-bold text-gray-900">Fragmented</h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#platform" className="text-gray-600 hover:text-gray-900">Platform</a>
              <a href="#solutions" className="text-gray-600 hover:text-gray-900">Solutions</a>
              <a href="#resources" className="text-gray-600 hover:text-gray-900">Resources</a>
              <a href="#enterprise" className="text-gray-600 hover:text-gray-900">Enterprise</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 px-4 py-2">
                Contact Sales
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Sign up for free
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Decentralized AI inference for the blockchain era
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Create modern AI applications to manage and automate critical blockchain workflows with sub-100ms latency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium">
                  Sign up for free
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 font-medium">
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Inference Latency</span>
                  <span className="text-3xl font-bold text-green-600">47ms</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{width: '85%'}}></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <div className="text-sm text-gray-500">Active Nodes</div>
                    <div className="text-2xl font-bold text-gray-900">1,247</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <div className="text-sm text-gray-500">Daily Requests</div>
                    <div className="text-2xl font-bold text-gray-900">2.4M</div>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="text-sm text-blue-700 font-medium">Extracting trading patterns...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-xl font-bold text-gray-400">Uniswap</div>
            <div className="text-xl font-bold text-gray-400">Aave</div>
            <div className="text-xl font-bold text-gray-400">Compound</div>
            <div className="text-xl font-bold text-gray-400">dYdX</div>
            <div className="text-xl font-bold text-gray-400">Synthetix</div>
            <div className="text-xl font-bold text-gray-400">BlackRock</div>
          </div>
        </div>
      </section>

      {/* Agility at Scale Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Agility at scale, for every blockchain function
            </h2>
            <p className="text-xl text-gray-600">
              Connect end-to-end AI workflows across DeFi, gaming, and analytics
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-6 bg-blue-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">DeFi & Trading</h3>
                <p className="text-gray-600 mb-4">
                  Real-time risk assessment, liquidation engines, and MEV protection with sub-100ms inference.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Explore DeFi Solutions →
                </a>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">On-Chain Gaming</h3>
                <p className="text-gray-600 mb-4">
                  Responsive AI for interactive games and dynamic content generation.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Explore Gaming Solutions →
                </a>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Instant fraud detection and monitoring without verification overhead.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Explore Analytics Solutions →
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Execute / Manager Dashboard</h3>
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Project Progress</span>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">In Progress Tasks</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Completed Today</span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Priority Items</span>
                    <span className="font-medium">3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI with Real Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                AI with real blockchain impact
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Embed AI into your blockchain workflows. Shape AI to the unique context 
                of your decentralized applications, defined by the protocols closest to the work.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
                Explore Fragmented AI →
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="space-y-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="text-sm text-gray-500">AI Request</div>
                  <div className="font-mono text-sm">&ldquo;Analyze trading patterns for MEV detection&rdquo;</div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Processing...</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <div className="text-sm text-gray-500">Result (47ms)</div>
                  <div className="font-mono text-sm text-green-700">&ldquo;High MEV risk detected in block 1847293&rdquo;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create and Deploy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Deploy AI Models Instantly</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-sm text-gray-500">Model Registry</div>
                  <div className="font-mono text-sm">resnet50-v2</div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-sm text-gray-500">Deployment</div>
                  <div className="font-mono text-sm">fragmented.ai/inference/resnet50</div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-sm text-gray-500">Status</div>
                  <div className="text-green-600 text-sm">✓ Active across 1,247 nodes</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Create and deploy AI models instantly
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Deploy your AI models to the decentralized network in seconds. Keep iterating 
                with real-time performance data and understand the impact on your blockchain applications.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
                Explore Model Deployment →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Manage and Govern */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Manage and govern apps at scale
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Standardize processes and modernize data across your decentralized applications.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
                Explore Fragmented for Enterprise →
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Shared Data</h3>
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="bg-blue-100 p-3 rounded-lg border border-blue-200">
                    <div className="text-sm font-medium text-blue-900">Shared Data</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg border text-center">
                    <div className="text-sm font-medium">DeFi Apps</div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg border text-center">
                    <div className="text-sm font-medium">Gaming Apps</div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg border text-center">
                    <div className="text-sm font-medium">Analytics Apps</div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg border text-center">
                    <div className="text-sm font-medium">Trading Apps</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Results you can measure
            </h2>
            <p className="text-xl text-gray-600">
              Find out how protocols from all kinds of industries achieve amazing outcomes with Fragmented
            </p>
            <button className="mt-6 text-blue-600 hover:text-blue-700 font-medium">
              Read customer stories
            </button>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm text-gray-500 mb-2">Customer Story</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Uniswap</h3>
                                 <p className="text-gray-600 mb-4">
                   &ldquo;Fragmented&apos;s sub-100ms inference latency transformed our MEV protection system, 
                   reducing front-running incidents by 95%.&rdquo;
                 </p>
                <div className="text-sm text-gray-500">- Alex Johnson, Director of DeFi Operations</div>
                <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
                  Watch full video case study →
                </button>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">Reduction in MEV</div>
                  <div className="text-gray-600">Front-running incidents eliminated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Resources and insights to inspire. Start here.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Stay one step ahead with the latest insights, research, and best practices.
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Explore resources
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-blue-600 mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2024 DeFi trends report</h3>
              <p className="text-gray-600 text-sm">Latest insights on decentralized finance adoption</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-blue-600 mb-4">🤖</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How to build an AI-powered DeFi app</h3>
              <p className="text-gray-600 text-sm">Step-by-step guide to integrating AI with blockchain</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-blue-600 mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How we built it: Fragmented Network</h3>
              <p className="text-gray-600 text-sm">Technical deep dive into our infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            500,000+ protocols use Fragmented every day. Join them.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium">
              Sign up for free
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 font-medium">
              Contact Sales
            </button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-600">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-gray-600">X</a>
            <a href="#" className="text-gray-400 hover:text-gray-600">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-gray-600">YouTube</a>
            <a href="#" className="text-gray-400 hover:text-gray-600">Instagram</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Fragmented</h3>
              <p className="text-gray-400">
                The fastest decentralized AI inference network for blockchain applications.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Inference Network</a></li>
                <li><a href="#" className="hover:text-white">Model Registry</a></li>
                <li><a href="#" className="hover:text-white">API Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">DeFi & Trading</a></li>
                <li><a href="#" className="hover:text-white">On-Chain Gaming</a></li>
                <li><a href="#" className="hover:text-white">Real-Time Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Learn</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Tutorials</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white"><span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">POPULAR</span> Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Fragmented logo"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="text-gray-400">Fragmented</span>
            </div>
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white">News</a>
              <a href="#" className="hover:text-white">API</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <div className="flex space-x-2">
                <span>App Store</span>
                <span>Google Play</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

