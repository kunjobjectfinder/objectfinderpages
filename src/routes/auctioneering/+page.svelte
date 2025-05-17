<script>
    import { fade } from 'svelte/transition';
    import { fly } from 'svelte/transition';
    
        // Navbar component inlined
        let currentPage = "scrap-finder";
        let brandName = "ScrapFinder";
  
    const features = [
      {
        icon: "🔍",
            title: "High-Value Object Detection",
            description: "AI identifies valuable items like control panels, circuit breakers, and transformers in large scrap piles, preventing them from being sold at generic prices"
          },
          {
            icon: "💰",
            title: "Rapid ROI",
            description: "A single detected high-value object sold at market price can recoup the platform cost over 10,000 times. The software pays for itself with one success"
          },
          {
            icon: "🤝",
            title: "Integrated Marketplace",
            description: "One-click submission of detected high-value electrical and automation items to our wholesale partner. Get competitive offers within 24 hours without creating listings or manual outreach"
      },
      {
        icon: "📊",
            title: "Smart Value Estimation",
            description: "Each detected object receives a predefined value range based on historical market data, ensuring smarter pricing and maximized profits"
          },
          {
            icon: "🗺️",
            title: "GPS-Powered Retrieval",
            description: "Interactive map plotting of valuable items using image metadata enables quick location and extraction without manual searching"
          },
          {
            icon: "⚡",
            title: "24-Hour Wholesale Offers",
            description: "Receive competitive wholesale offers from our trusted partner within 24 hours for electrical and automation equipment, all managed through your dashboard"
          },
          {
            icon: "📱",
            title: "Mobile Integration",
            description: "Capture and analyze images directly from your smartphone. Get instant notifications when high-value items are detected"
          },
          {
            icon: "🤖",
            title: "Automated Sorting",
            description: "AI-powered recommendations for optimal sorting and categorization of materials, maximizing efficiency and value recovery"
      },
      {
        icon: "⚠️",
        title: "Hazard Detection",
            description: "Automatic identification of hazardous materials and safety risks, ensuring compliance and worker protection"
          },
          {
            icon: "📈",
            title: "Market Trend Analysis",
            description: "Real-time insights into scrap material prices and market trends to optimize selling decisions"
          },
          {
            icon: "🔄",
            title: "Batch Processing",
            description: "Upload and analyze thousands of images simultaneously with our powerful cloud infrastructure"
          },
          {
            icon: "📊",
            title: "Custom Reports",
            description: "Generate detailed reports on inventory, value estimations, and market opportunities with exportable formats"
      }
    ];
  
    const stats = [
          { value: "10,000x", label: "ROI Potential" },
      { value: "99.9%", label: "Detection Accuracy" },
          { value: "-75%", label: "Manual Labor" }
    ];
  
    let isProcessing = false;
    let showResults = false;
    let enlargedImage = null;
  
    function handleProcess() {
      if (showResults) {
        showResults = false;
        return;
      }
  
      isProcessing = true;
      
      setTimeout(() => {
        isProcessing = false;
        showResults = true;
        }, 800);
    }
  
    function enlargeImage(src) {
      enlargedImage = src;
    }
  
    function closeEnlarged() {
      enlargedImage = null;
    }
  </script>
  
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="py-16 px-4 text-center bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400 via-rose-600 to-transparent pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-rose-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
      <div class="relative z-10">
        <div class="inline-block mb-6 px-4 py-2 bg-rose-500/10 rounded-full border border-amber-400/30">
          <span class="text-amber-200 font-medium">Enterprise Auction Solutions</span>
        </div>
        <h1 class="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400 leading-tight py-2">
          Transform Your<br />Auction Process
        </h1>
        <p class="text-amber-100 text-xl mb-8 max-w-6xl mx-auto font-medium leading-relaxed">
          Step into the future of auction excellence. Our AI-powered platform revolutionizes your workflow, turning hours of manual work into minutes. From capturing photos to crafting compelling listings with market-optimized titles, descriptions, and pricing—all in one seamless experience. Reclaim your time, maximize your value, and elevate your auction game.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button class="group relative px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <span class="relative text-lg font-semibold">Start Free Trial</span>
          </button>
          <button class="px-10 py-4 bg-slate-800/50 backdrop-blur border border-amber-400/30 text-amber-100 rounded-lg hover:bg-slate-800/70 hover:border-amber-400/50 transition-all duration-300 text-lg font-semibold">
            Schedule Demo
          </button>
        </div>

        <!-- Trust Indicators -->
        <div class="mt-12 flex flex-wrap justify-center items-center gap-8 text-amber-100/80">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span>Trusted by Leading Auction Houses</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Secure & Compliant</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
   
    <!-- Removed inlined navigation bar, global nav will be used -->
    <main>
      
      <!-- Real Auction Impact Section -->
      <section class="py-20 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400 via-rose-600 to-transparent pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">Real Auction Impact, Real Results</h2>
            <p class="text-amber-100 text-lg max-w-3xl mx-auto">
              See how our technology is transforming auction operations
            </p>
          </div>
  
          <div class="grid md:grid-cols-4 gap-8 mb-16">
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-slate-900/50 backdrop-blur p-6 rounded-lg border border-amber-400/30 hover:border-amber-300 transition-all duration-300">
                <div class="text-center">
                  <div class="text-3xl font-bold text-amber-200 mb-2">+30%</div>
                  <div class="text-lg text-amber-100 font-medium mb-1">Hammer Price</div>
                  <div class="text-sm text-amber-100/80">Average increase</div>
                </div>
              </div>
            </div>
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-slate-900/50 backdrop-blur p-6 rounded-lg border border-amber-400/30 hover:border-amber-300 transition-all duration-300">
                <div class="text-center">
                  <div class="text-3xl font-bold text-amber-200 mb-2">-70%</div>
                  <div class="text-lg text-amber-100 font-medium mb-1">Listing Time</div>
                  <div class="text-sm text-amber-100/80">Efficiency gain</div>
                </div>
              </div>
            </div>
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-slate-900/50 backdrop-blur p-6 rounded-lg border border-amber-400/30 hover:border-amber-300 transition-all duration-303">
                <div class="text-center">
                  <div class="text-3xl font-bold text-amber-200 mb-2">2 mins</div>
                  <div class="text-lg text-amber-100 font-medium mb-1">Turnaround</div>
                  <div class="text-sm text-amber-100/80">From photo to ready-to-list</div>
                </div>
              </div>
            </div>
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-slate-900/50 backdrop-blur p-6 rounded-lg border border-amber-400/30 hover:border-amber-300 transition-all duration-303">
                <div class="text-center">
                  <div class="text-3xl font-bold text-amber-200 mb-2">90%+</div>
                  <div class="text-lg text-amber-100 font-medium mb-1">Data Accuracy</div>
                  <div class="text-sm text-amber-100/80">Description & pricing</div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Customer Results -->
          <div class="grid md:grid-cols-2 gap-12">
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-slate-900/50 backdrop-blur p-8 rounded-lg border border-amber-400/30 hover:border-amber-300 transition-all duration-300">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-12 bg-slate-800/80 rounded-xl flex items-center justify-center border border-amber-400/20">
                    <span class="text-2xl">📈</span>
                  </div>
                  <h3 class="text-xl font-bold text-amber-200">Improved Auction Efficiency</h3>
                </div>
                <p class="text-amber-100/90 mb-6">
                  Auctioneers using our platform report significant improvements in listing speed and final sale prices
                </p>
                <ul class="space-y-4">
                  <li class="flex justify-between items-center">
                    <span class="text-amber-100/90">Increase in hammer price</span>
                    <span class="text-amber-200 font-bold">30%</span>
                  </li>
                  <li class="flex justify-between items-center">
                    <span class="text-amber-100/90">Reduction in listing time</span>
                    <span class="text-amber-200 font-bold">70%</span>
                  </li>
                  <li class="flex justify-between items-center">
                    <span class="text-amber-100/90">More auctions per year</span>
                    <span class="text-amber-200 font-bold">3x</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-slate-900/50 backdrop-blur p-8 rounded-lg border border-amber-400/30 hover:border-amber-300 transition-all duration-300">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-12 bg-slate-800/80 rounded-xl flex items-center justify-center border border-amber-400/20">
                    <span class="text-2xl">💰</span>
                  </div>
                  <h3 class="text-xl font-bold text-amber-200">Cost Savings</h3>
                </div>
                <p class="text-amber-100/90 mb-6">
                  Reduce operational costs and maximize profits with AI-powered automation
                </p>
                <ul class="space-y-4">
                  <li class="flex justify-between items-center">
                    <span class="text-amber-100/90">Labor costs</span>
                    <span class="text-amber-200 font-bold">-70%</span>
                  </li>
                  <li class="flex justify-between items-center">
                    <span class="text-amber-100/90">Manual errors</span>
                    <span class="text-amber-200 font-bold">-50%</span>
                  </li>
                  <li class="flex justify-between items-center">
                    <span class="text-amber-100/90">Listing accuracy</span>
                    <span class="text-amber-200 font-bold">+50%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Platform Features Section -->
      <section class="py-20 px-4 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400 via-rose-600 to-transparent pointer-events-none"></div>
        <div class="relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">Core Platform Features</h2>
            <p class="text-amber-100 text-lg max-w-3xl mx-auto">
              Powerful capabilities designed for modern auctioneers
            </p>
          </div>
  
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              {#each [
                { 
                  icon: "🧠", 
                  title: "AI-powered Lotting", 
                  description: "Automatically group similar items and create optimized lots with intelligent categorization" 
                },
                { 
                  icon: "💸", 
                  title: "Market-matched Pricing", 
                  description: "Real-time market data ensures your lots are priced competitively for maximum returns" 
                },
                { 
                  icon: "📈", 
                  title: "Higher Hammer Rates", 
                  description: "Detailed listings with accurate specifications drive buyer confidence and better prices" 
                },
                { 
                  icon: "🤖", 
                  title: "Automated Compliance", 
                  description: "Export-ready listings that meet all platform requirements, saving hours of manual work" 
                },
                { 
                  icon: "🔍", 
                  title: "Smart Research", 
                  description: "AI identifies part numbers, specifications, and market value for each item automatically" 
                },
                { 
                  icon: "📱", 
                  title: "Mobile Processing", 
                  description: "Capture and process items on-site with our mobile app, no computer needed" 
                }
              ] as feature}
                <div class="group relative">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                  <div class="relative p-6 rounded-lg bg-slate-900/50 backdrop-blur border border-amber-400/30 hover:border-amber-300 transition-all duration-300 h-full flex flex-col">
                    <div class="flex items-start gap-3 mb-4">
                      <div class="w-12 h-12 bg-amber-900/50 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <span class="text-2xl">{feature.icon}</span>
                      </div>
                      <h3 class="text-lg font-bold text-amber-100 pt-2">{feature.title}</h3>
                    </div>
                    <p class="text-amber-100/90 text-sm leading-relaxed flex-grow">{feature.description}</p>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </section>

      <!-- Traditional vs AI-Powered Auction Listing Section -->
      <section class="py-20 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400 via-rose-600 to-transparent pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">Traditional vs AI-Powered Auction Listing</h2>
            <p class="text-amber-100 text-lg max-w-3xl mx-auto">
              See how our platform transforms the auction listing process.
            </p>
          </div>
          <div class="grid md:grid-cols-2 gap-12">
            <!-- Traditional Auction Listing -->
            <div class="bg-gray-900/80 rounded-xl p-10 border border-yellow-400/30 flex flex-col items-center text-center shadow-lg">
              <div class="w-16 h-16 bg-yellow-900/50 rounded-full flex items-center justify-center mb-4">
                <span class="text-3xl">📝</span>
              </div>
              <h3 class="text-2xl font-bold text-yellow-100 mb-4">Traditional Auction Listing</h3>
              <ul class="space-y-4 text-blue-100 text-left">
                <li><span class="font-semibold text-yellow-400">•</span> Manual photo uploads and sorting</li>
                <li><span class="font-semibold text-yellow-400">•</span> Handwritten titles and descriptions</li>
                <li><span class="font-semibold text-yellow-400">•</span> Time-consuming research for each lot</li>
                <li><span class="font-semibold text-yellow-400">•</span> Prone to errors and missed value</li>
                <li><span class="font-semibold text-yellow-400">•</span> 4–5 minutes per item</li>
              </ul>
            </div>
            <!-- AI-Powered Auction Listing -->
            <div class="bg-gray-900/80 rounded-xl p-10 border border-yellow-400/30 flex flex-col items-center text-center shadow-lg">
              <div class="w-16 h-16 bg-yellow-900/50 rounded-full flex items-center justify-center mb-4">
                <span class="text-3xl">🤖</span>
              </div>
              <h3 class="text-2xl font-bold text-yellow-100 mb-4">AI-Powered Auction Listing</h3>
              <ul class="space-y-4 text-blue-100 text-left">
                <li><span class="font-semibold text-yellow-400">•</span> Snap photos directly in the app</li>
                <li><span class="font-semibold text-yellow-400">•</span> Automatic lot grouping and research</li>
                <li><span class="font-semibold text-yellow-400">•</span> Instant, accurate titles and descriptions</li>
                <li><span class="font-semibold text-yellow-400">•</span> Live market data and SEO optimization</li>
                <li><span class="font-semibold text-yellow-400">•</span> Ready-to-upload listings in seconds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- How It Works Section -->
      <section class="py-20 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400 via-rose-600 to-transparent pointer-events-none"></div>
        <div class="max-w-5xl mx-auto px-4 relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">How It Works</h2>
            <p class="text-amber-100 text-lg max-w-2xl mx-auto">
              From snap to sale—see how our platform streamlines your auction listing process
            </p>
          </div>
          <div class="grid md:grid-cols-6 gap-8 items-start">
            <!-- Step 1: User -->
            <div class="flex flex-col items-center text-center group">
              <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/20">
                <span class="text-3xl">📱</span>
              </div>
              <div class="font-bold text-amber-200 mb-1">Snap Photos</div>
              <div class="text-amber-100/90 text-sm">Take pictures of your lots directly in our mobile app</div>
            </div>
            <!-- Step 2: Platform -->
            <div class="flex flex-col items-center text-center group">
              <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/20">
                <span class="text-3xl">🤖</span>
              </div>
              <div class="font-bold text-amber-200 mb-1">Instant Upload & Grouping</div>
              <div class="text-amber-100/90 text-sm">Your images are automatically uploaded and grouped into lots</div>
            </div>
            <!-- Step 3: Platform -->
            <div class="flex flex-col items-center text-center group">
              <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/20">
                <span class="text-3xl">🧠</span>
              </div>
              <div class="font-bold text-amber-200 mb-1">AI Research & Description</div>
              <div class="text-amber-100/90 text-sm">We research product details and generate accurate listings</div>
            </div>
            <!-- Step 4: Platform -->
            <div class="flex flex-col items-center text-center group">
              <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/20">
                <span class="text-3xl">💸</span>
              </div>
              <div class="font-bold text-amber-200 mb-1">Market Data & SEO</div>
              <div class="text-amber-100/90 text-sm">Each lot is matched with live market data and optimized keywords</div>
            </div>
            <!-- Step 5: Platform -->
            <div class="flex flex-col items-center text-center group">
              <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/20">
                <span class="text-3xl">📦</span>
              </div>
              <div class="font-bold text-amber-200 mb-1">Export-Ready Listings</div>
              <div class="text-amber-100/90 text-sm">Your lots are formatted and ready to upload to any platform</div>
            </div>
            <!-- Step 6: User -->
            <div class="flex flex-col items-center text-center group">
              <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/20">
                <span class="text-3xl">💻</span>
              </div>
              <div class="font-bold text-amber-200 mb-1">Review & Launch</div>
              <div class="text-amber-100/90 text-sm">Review your ready-to-go listings and launch your auction</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Demo Section -->
      <section class="py-20 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400 via-rose-600 to-transparent pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
              See It In Action
            </h2>
            <p class="text-amber-100 text-lg max-w-3xl mx-auto font-medium">
              Watch how our AI transforms your auction workflow in seconds
            </p>
          </div>
  
          <div class="max-w-6xl mx-auto">
            <!-- Demo Interface -->
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-slate-900/50 backdrop-blur p-6 rounded-lg border border-amber-400/30">
                <!-- Sample Image Display -->
                <div class="bg-slate-800/50 rounded-lg mb-6 overflow-hidden relative">
                  {#if !isProcessing && !showResults}
                    <div in:fly={{ y: 20, duration: 600 }}>
                      <img
                        src="/exampleauc.png"
                        alt="Sample auction lot"
                        class="w-full h-auto"
                      />
                    </div>
                  {:else if isProcessing}
                    <div class="absolute inset-0 flex items-center justify-center bg-slate-900/80">
                      <div class="text-center">
                        <div class="text-amber-400 animate-spin h-8 w-8 border-4 border-current border-t-transparent rounded-full mb-4"></div>
                        <div class="text-amber-100 text-lg">
                          Analyzing lots...
                          <div class="text-sm text-amber-100/80 mt-2">Detecting items and creating optimized listings</div>
                        </div>
                      </div>
                    </div>
                  {:else}
                    <div in:fly={{ y: 20, duration: 600 }} class="p-6">
                      <div class="grid grid-cols-1 gap-8">
                        {#each [
                          { src: '/auction2.png', alt: 'Lot analysis with AI detection', label: 'Smart Lot Analysis' },
                          { src: '/auction3.png', alt: 'Market data analysis', label: 'Market Research & Pricing' },
                          { src: '/auction4.png', alt: 'Export-ready listings', label: 'Ready-to-List Format' }
                        ] as image}
                          <div class="relative group/image">
                            <img
                              src={image.src}
                              alt={image.alt}
                              class="w-full h-auto rounded-lg transform group-hover/image:scale-[1.02] transition-transform duration-300"
                            />
                            <div class="absolute bottom-0 left-0 right-0 bg-slate-900/90 text-white p-4 rounded-b-lg backdrop-blur">
                              <div class="font-semibold text-amber-100">{image.label}</div>
                            </div>
                          </div>
                        {/each}
                      </div>
                    </div>
                  {/if}
                </div>
                <div class="flex justify-center">
                  <button 
                    class="group relative px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    on:click={handleProcess}
                  >
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                    <span class="relative text-lg font-semibold">
                      {#if !showResults}
                        Try It Now
                      {:else}
                        Start Over
                      {/if}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Auction Applications Section -->
      <section class="py-20 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400 via-rose-600 to-transparent pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">Auction Applications</h2>
            <p class="text-amber-100 text-lg max-w-3xl mx-auto">
              Advanced capabilities for every auction operation
            </p>
          </div>
  
          <!-- Primary Use Cases -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {#each [
              {
                icon: "🏛️",
                title: "Auction Houses",
                subtitle: "High-volume auction processing",
                features: [
                  { title: "Speed Up Lot Cataloging", desc: "Auto-upload and group photos into lots instantly—no manual sorting needed", icon: "⚡" },
                  { title: "Boost Accuracy & Consistency", desc: "AI generates uniform listings with exact specs and part numbers—eliminating human errors", icon: "🎯" },
                  { title: "Maximize Hammer Prices", desc: "Live market data and SEO optimization attract more bidders and drive up final prices", icon: "💰" },
                  { title: "Scale Without Headcount", desc: "Process hundreds of lots quickly—free your team to focus on client relationships", icon: "📈" },
                  { title: "Seamless Multi-Platform Deployment", desc: "One-click publishing to BidSpotter, eBay, or your own site—no rework needed", icon: "🚀" }
                ]
              },
              {
                icon: "🛒",
                title: "eBay Sellers",
                subtitle: "E-commerce and online auctions",
                features: [
                  { title: "Faster Listing Creation", desc: "Snap photos on the go; lots auto-upload and group for immediate listing—no file juggling", icon: "⚡" },
                  { title: "Optimized Titles & Descriptions", desc: "AI crafts eBay-friendly listings with key specs and condition details—reducing returns", icon: "📝" },
                  { title: "Data-Driven Pricing", desc: "Market analysis suggests competitive prices and keywords—helping items rank and sell faster", icon: "💰" },
                  { title: "Bulk Processing", desc: "Upload and process multiple items at once—scale your business efficiently", icon: "📦" },
                  { title: "Consistent SEO & Categorization", desc: "Auto-matched categories and optimized keywords boost visibility and click-through rates", icon: "🎯" }
                ]
              },
              {
                icon: "🌐",
                title: "3rd Party Listings",
                subtitle: "External platform integration",
                features: [
                  { title: "Streamlined Photo Workflow", desc: "Snap photos once—auto-upload and group for all marketplaces—no file juggling", icon: "📸" },
                  { title: "Tailored Titles & Descriptions", desc: "AI generates platform-specific copy that matches each site's style and requirements", icon: "📝" },
                  { title: "Channel-Specific Market Insights", desc: "Get pricing and keyword recommendations tuned to each platform's audience", icon: "📊" },
                  { title: "Clipboard-Ready Export Kits", desc: "One-click export of formatted listings ready to paste into any marketplace", icon: "📋" },
                  { title: "Unified Performance Dashboard", desc: "Track metrics across all channels with AI-driven optimization suggestions", icon: "📈" }
                ]
              },
              {
                icon: "🔧",
                title: "Personal Website Listings",
                subtitle: "Custom auction platforms",
                features: [
                  { title: "Effortless Image Capture & Organization", desc: "Snap photos in-app for auto-upload and grouping—keep your media library organized", icon: "📸" },
                  { title: "Rich, AI-Generated Titles & Descriptions", desc: "Get detailed, web-ready content with specs and condition details—ready for product pages", icon: "📝" },
                  { title: "SEO-Driven Keyword Recommendations", desc: "Get market-trend based keywords and pricing guidance—boost your search rankings", icon: "🔍" },
                  { title: "Website-Formatted Export Packages", desc: "Get CMS-friendly HTML or Markdown blocks—paste directly into any website builder", icon: "📦" },
                  { title: "Desktop Review & Launch Workflow", desc: "Preview listings in your site's layout—ensure perfect matches before going live", icon: "💻" }
                ]
              },
              {
                icon: "⚙️",
                title: "Equipment Recovery",
                subtitle: "Industrial equipment processing",
                features: [
                  { title: "On-Site Photo Documentation", desc: "Snap timestamped photos in the field—auto-upload and group by recovery batch", icon: "📸" },
                  { title: "Automated Asset Identification", desc: "AI scans photos for make, model, and serial numbers—populates equipment registry instantly", icon: "🔍" },
                  { title: "Recovery Lot Grouping", desc: "Organize assets from each recovery operation into tracked lots—know what came from where", icon: "📦" },
                  { title: "Salvage Valuation & Pricing", desc: "Get market-based salvage values and keywords—optimize your recovery returns", icon: "💰" },
                  { title: "Export-Ready Recovery Reports", desc: "Generate shareable reports with images, specs, and valuations—ready for stakeholders", icon: "📋" }
                ]
              },
              {
                icon: "🔍",
                title: "Appraisers",
                subtitle: "Professional valuation services",
                features: [
                  { title: "Comprehensive Photo Evidence", desc: "Capture high-res photos that auto-upload and group by property—document every detail", icon: "📸" },
                  { title: "Accurate Asset Identification", desc: "AI extracts make, model, and serial numbers—reduce manual data entry time", icon: "🔍" },
                  { title: "Project-Based Lot Organization", desc: "Group assets by appraisal assignment—manage multiple clients efficiently", icon: "📦" },
                  { title: "Data-Backed Valuation Insights", desc: "Get live market data and comparable sales—support your appraisal conclusions", icon: "💰" },
                  { title: "Report-Ready Export Packages", desc: "Generate formatted appraisal summaries with images and specs—ready for final reports", icon: "📋" }
                ]
              }
            ] as card}
              <div class="group relative h-full">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                <div class="relative bg-slate-900/50 backdrop-blur p-8 rounded-lg border border-amber-400/30 hover:border-amber-300 transition-all duration-300 h-full flex flex-col">
                  <div class="flex items-center gap-6 mb-8">
                    <div class="h-16 w-16 bg-amber-900/50 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <span class="text-4xl">{card.icon}</span>
                    </div>
                    <div>
                      <h3 class="text-2xl font-bold mb-1 text-amber-100">{card.title}</h3>
                      <p class="text-amber-100/80">{card.subtitle}</p>
                    </div>
                  </div>
                  <div class="space-y-6 flex-grow">
                    {#each card.features as feature}
                      <div class="flex items-start gap-4 group/item">
                        <div class="w-10 h-10 bg-amber-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-amber-800/50 transition-colors">
                          <span class="text-xl">{feature.icon}</span>
                        </div>
                        <div>
                          <div class="font-semibold text-amber-100 mb-1">{feature.title}</div>
                          <p class="text-sm text-amber-100/80">{feature.desc}</p>
                        </div>
                      </div>
                    {/each}
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </section>

      <!-- Advanced Ways to Maximize Value Section -->
      <section class="py-20 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400 via-rose-600 to-transparent pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">Advanced Ways to Maximize Value</h2>
            <p class="text-amber-100 text-lg max-w-3xl mx-auto">
              Unlock every dollar from your auction inventory with our advanced features
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-10">
            <!-- Card 1 -->
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-slate-900/50 backdrop-blur p-8 rounded-lg border border-amber-400/30 hover:border-amber-300 transition-all duration-300 h-full flex flex-col">
                <div class="w-16 h-16 bg-slate-800/80 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 border border-amber-400/20">
                  <span class="text-3xl">📊</span>
                </div>
                <h3 class="text-xl font-bold text-amber-200 mb-4">Smart Lot Optimization</h3>
                <p class="text-amber-100/90">AI analyzes your inventory to suggest optimal lot combinations, ensuring maximum value and buyer interest for each grouping.</p>
              </div>
            </div>
            <!-- Card 2 -->
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-slate-900/50 backdrop-blur p-8 rounded-lg border border-amber-400/30 hover:border-amber-300 transition-all duration-300 h-full flex flex-col">
                <div class="w-16 h-16 bg-slate-800/80 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 border border-amber-400/20">
                  <span class="text-3xl">🔍</span>
                </div>
                <h3 class="text-xl font-bold text-amber-200 mb-4">Condition Analysis</h3>
                <p class="text-amber-100/90">Advanced image analysis detects wear, damage, and quality factors to accurately represent item condition and maximize buyer confidence.</p>
              </div>
            </div>
            <!-- Card 3 -->
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-slate-900/50 backdrop-blur p-8 rounded-lg border border-amber-400/30 hover:border-amber-300 transition-all duration-300 h-full flex flex-col">
                <div class="w-16 h-16 bg-slate-800/80 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 border border-amber-400/20">
                  <span class="text-3xl">⚡</span>
                </div>
                <h3 class="text-xl font-bold text-amber-200 mb-4">Bidder Engagement</h3>
                <p class="text-amber-100/90">Automated notifications and targeted outreach to relevant buyers based on their interests and past bidding history.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Trusted by Leading Auctioneers Section -->
      <section class="py-20 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400 via-rose-600 to-transparent pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">Trusted by Leading Auctioneers</h2>
            <p class="text-amber-100 text-lg max-w-3xl mx-auto font-medium">
              Real stories from auction professionals transforming their business
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <!-- First Card -->
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-slate-900/50 backdrop-blur p-8 rounded-lg border border-amber-400/30 hover:border-amber-300 transition-all duration-300">
                <div class="flex items-center gap-4 mb-6">
                  <div class="h-14 w-14 bg-slate-800/80 rounded-xl flex items-center justify-center border border-amber-400/20">
                    <span class="text-3xl">🏆</span>
                  </div>
                  <div>
                    <div class="text-amber-400 text-lg mb-1">★★★★★</div>
                    <div class="text-amber-100 font-medium">Midwest Auction Co.</div>
                  </div>
                </div>
                <blockquote class="text-amber-100/90 mb-6 font-medium">
                  "The AI-powered listing workflow cut our prep time by 80% and boosted our hammer prices."
                </blockquote>
                <div class="flex items-center justify-between">
                  <div class="text-sm text-amber-100/80 font-medium">Auctioneer</div>
                  <div class="text-sm text-amber-200 font-semibold">+30% Hammer Price</div>
                </div>
              </div>
            </div>
            <!-- Second Card -->
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-slate-900/50 backdrop-blur p-8 rounded-lg border border-amber-400/30 hover:border-amber-300 transition-all duration-300">
                <div class="flex items-center gap-4 mb-6">
                  <div class="h-14 w-14 bg-slate-800/80 rounded-xl flex items-center justify-center border border-amber-400/20">
                    <span class="text-3xl">📦</span>
                  </div>
                  <div>
                    <div class="text-amber-400 text-lg mb-1">★★★★★</div>
                    <div class="text-amber-100 font-medium">Estate Liquidators Group</div>
                  </div>
                </div>
                <blockquote class="text-amber-100/90 mb-6 font-medium">
                  "We list more lots, with better descriptions, and our buyers are more confident."
                </blockquote>
                <div class="flex items-center justify-between">
                  <div class="text-sm text-amber-100/80 font-medium">Auction Team</div>
                  <div class="text-sm text-amber-200 font-semibold">10x Listing Speed</div>
                </div>
              </div>
            </div>
            <!-- Third Card -->
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-slate-900/50 backdrop-blur p-8 rounded-lg border border-amber-400/30 hover:border-amber-300 transition-all duration-300">
                <div class="flex items-center gap-4 mb-6">
                  <div class="h-14 w-14 bg-slate-800/80 rounded-xl flex items-center justify-center border border-amber-400/20">
                    <span class="text-3xl">🔗</span>
                  </div>
                  <div>
                    <div class="text-amber-400 text-lg mb-1">★★★★★</div>
                    <div class="text-amber-100 font-medium">FastTrack Auctions</div>
                  </div>
                </div>
                <blockquote class="text-amber-100/90 mb-6 font-medium">
                  "The market data and instant export to BidSpotter is a game-changer."
                </blockquote>
                <div class="flex items-center justify-between">
                  <div class="text-sm text-amber-100/80 font-medium">Operations Lead</div>
                  <div class="text-sm text-amber-200 font-semibold">+50% Listing Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Flexible Pricing Options Section -->
      <section class="py-20 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400 via-rose-600 to-transparent pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">Flexible Pricing Options</h2>
            <p class="text-amber-100 text-lg max-w-3xl mx-auto">
              Choose the payment model that works best for your auction business
            </p>
          </div>
          <div class="grid md:grid-cols-2 gap-12">
            <!-- Prepaid Lots -->
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-slate-900/50 backdrop-blur p-10 rounded-lg border border-amber-400/30 hover:border-amber-300 transition-all duration-300 flex flex-col h-full">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-14 h-14 bg-amber-900/50 rounded-xl flex items-center justify-center">
                    <span class="text-3xl">💳</span>
                  </div>
                  <h3 class="text-2xl font-bold text-amber-100">Prepaid Tokens</h3>
                </div>
                <p class="text-amber-100/90 mb-6">Purchase tokens in advance and use them as needed for maximum flexibility.</p>
                <ul class="space-y-4 mb-8">
                  <li class="flex items-start gap-3">
                    <span class="text-amber-400">✓</span>
                    <span class="text-amber-100/90">Buy tokens in bulk at discounted rates</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-amber-400">✓</span>
                    <span class="text-amber-100/90">Instant access to all platform features</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-amber-400">✓</span>
                    <span class="text-amber-100/90">No surprise charges or monthly fees</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-amber-400">✓</span>
                    <span class="text-amber-100/90">Track remaining tokens in your dashboard</span>
                  </li>
                </ul>
                <div class="mt-auto">
                  <button class="w-full group relative px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                    <span class="relative text-lg font-semibold">Get Started</span>
                  </button>
                </div>
              </div>
            </div>
            <!-- Monthly Billing -->
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-slate-900/50 backdrop-blur p-10 rounded-lg border border-amber-400/30 hover:border-amber-300 transition-all duration-300 flex flex-col h-full">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-14 h-14 bg-amber-900/50 rounded-xl flex items-center justify-center">
                    <span class="text-3xl">🗓️</span>
                  </div>
                  <h3 class="text-2xl font-bold text-amber-100">Pay As You Go</h3>
                </div>
                <p class="text-amber-100/90 mb-6">Get billed at the end of each month based on your actual usage.</p>
                <ul class="space-y-4 mb-8">
                  <li class="flex items-start gap-3">
                    <span class="text-amber-400">✓</span>
                    <span class="text-amber-100/90">No upfront payment required</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-amber-400">✓</span>
                    <span class="text-amber-100/90">Pay only for what you use</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-amber-400">✓</span>
                    <span class="text-amber-100/90">Detailed monthly usage report</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-amber-400">✓</span>
                    <span class="text-amber-100/90">Auto-billing and invoice management</span>
                  </li>
                </ul>
                <div class="mt-auto">
                  <button class="w-full group relative px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                    <span class="relative text-lg font-semibold">Contact Sales</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Story Section -->
      <section class="py-20 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400 via-rose-600 to-transparent pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
              Why We Built This
            </h2>
            <p class="text-amber-100 text-xl max-w-3xl mx-auto font-medium">
              A mission to transform auction operations through innovation
            </p>
          </div>
  
          <div class="grid md:grid-cols-2 gap-12 items-start">
            <div class="space-y-6">
              <div class="bg-slate-900/50 p-8 rounded-lg border border-amber-400/30">
                <h3 class="text-2xl font-bold mb-4 text-amber-100">The Challenge</h3>
                <p class="text-amber-100/90 leading-relaxed">
                  The auction industry is trapped in an antiquated cycle. Teams spend countless hours manually capturing photos, grouping images into lots, and struggling to extract critical details like part numbers and serial numbers. With limited expertise across diverse inventory, listings often lack essential information, leaving buyers uncertain and reducing hammer prices. The time-consuming nature of this process means auctioneers are turning away business, while the cost of manual research makes it impossible to maximize the value of each lot.
                </p>
              </div>
  
              <div class="bg-slate-900/50 p-8 rounded-lg border border-amber-400/30">
                <h3 class="text-2xl font-bold mb-4 text-amber-100">The Solution</h3>
                <p class="text-amber-100/90 leading-relaxed">
                  Our AI-powered platform revolutionizes the auction workflow. Simply capture photos of your items, and our system automatically identifies key details like part numbers, serial numbers, and specifications. The AI then researches each item, generating comprehensive listings with accurate descriptions, market data, and competitive pricing. This isn't just automation—it's a complete transformation of the listing process. Your team can now process hundreds of lots in the time it used to take for dozens, with listings that attract more confident buyers and command higher prices. Plus, with our mobile app, you can capture and process items right on the auction floor, eliminating the need for manual photo management and data entry.
                </p>
              </div>
            </div>

            <div class="space-y-6">
              <div class="bg-slate-900/50 p-8 rounded-lg border border-amber-400/30">
                <h3 class="text-2xl font-bold mb-4 text-amber-100">The Vision</h3>
                <p class="text-amber-100/90 leading-relaxed">
                  We're building a future where auctioneers can process more lots than ever before, with listings that rival expert-level detail. Imagine capturing photos that instantly transform into comprehensive listings, complete with accurate specifications, market data, and competitive pricing. A world where your team can focus on building client relationships and closing deals, while our AI handles the heavy lifting of research, categorization, and listing creation. This isn't just about automation—it's about empowering auctioneers to take on more business and achieve higher hammer prices through better-informed buyers.
                </p>
              </div>

              <!-- Combined Stats and Benefits Card -->
              <div class="bg-slate-900/50 p-8 rounded-lg border border-amber-400/30 h-full flex flex-col justify-center">
                <div class="flex items-center mb-8">
                  <div class="grid grid-cols-3 gap-8">
                    <div class="text-center">
                      <div class="text-4xl font-bold text-amber-200 mb-2">4-5 min</div>
                      <div class="text-amber-100/90">Saved per item</div>
                    </div>
                    <div class="text-center">
                      <div class="text-4xl font-bold text-amber-200 mb-2">-70%</div>
                      <div class="text-amber-100/90">Manual work reduced</div>
                    </div>
                    <div class="text-center">
                      <div class="text-4xl font-bold text-amber-200 mb-2">10-30%</div>
                      <div class="text-amber-100/90">Higher hammer rates</div>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  {#each [
                    { icon: "🧠", title: "AI-powered", desc: "Lotting & descriptions" },
                    { icon: "💸", title: "Market-matched", desc: "Pricing" },
                    { icon: "📈", title: "Higher", desc: "Hammer rates" },
                    { icon: "🤖", title: "Automated", desc: "Compliance & export" },
                    { icon: "📱", title: "Mobile-first", desc: "On-site processing" },
                    { icon: "🔍", title: "Smart Research", desc: "Market data & trends" }
                  ] as benefit}
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-amber-900/50 to-amber-800/50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span class="text-xl">{benefit.icon}</span>
                      </div>
                      <div>
                        <div class="font-semibold text-amber-100 mb-0.5">{benefit.title}</div>
                        <div class="text-sm text-amber-100/90">{benefit.desc}</div>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-24 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400 via-rose-600 to-transparent pointer-events-none"></div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
              Ready to Transform Your<br />Auction Operations?
            </h2>
            <p class="text-amber-100 text-lg md:text-xl mb-12 max-w-3xl mx-auto font-medium">
              Join auctioneers already using our platform to maximize results
            </p>
            <div class="flex flex-col md:flex-row gap-6 justify-center max-w-lg mx-auto">
              <button class="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <span class="relative text-lg font-semibold">Start Free Trial</span>
              </button>
              <button class="px-8 py-4 bg-slate-800/50 backdrop-blur border border-amber-400/30 text-amber-100 rounded-lg hover:bg-slate-800/70 hover:border-amber-400/50 transition-all duration-300 text-lg font-semibold">
              Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  
  <style>
            .animate-gradient {
              background-size: 200% 200%;
              animation: gradient 15s ease infinite;
            }
     
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
    }
  
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
            .animate-blob {
              animation: blob 7s infinite;
    }
  
    .animation-delay-2000 {
      animation-delay: 2s;
    }
     
            @keyframes float {
              0% { transform: translate(0, 0) rotate(0deg); }
              33% { transform: translate(30px, -30px) rotate(5deg); }
              66% { transform: translate(-20px, 20px) rotate(-5deg); }
              100% { transform: translate(0, 0) rotate(0deg); }
            }
     
            .animate-float {
              animation: float 20s ease-in-out infinite;
            }
     
            .animation-delay-4000 {
              animation-delay: 4s;
    }
  </style> 
     
     