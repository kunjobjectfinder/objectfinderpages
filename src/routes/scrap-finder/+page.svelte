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
        { value: "-75%", label: "Manual Labor" },
        { value: "24/7", label: "Monitoring" }
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
  <!-- Removed inlined navigation bar, global nav will be used -->
  <main>
    <!-- Hero Section -->
        <section class="py-20 px-4 text-center bg-gradient-to-br from-purple-100 via-purple-50 to-white relative overflow-hidden">
          <!-- Animated Background Elements -->
      <div class="absolute inset-0">
            <div class="absolute top-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      <div class="relative z-10">
            <h1 class="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-800 leading-tight py-2">
              Transform Your Scrap Yard with AI-Powered Detection
        </h1>
        <p class="text-gray-700 text-xl mb-10 max-w-3xl mx-auto">
              Discover hidden value in your scrap piles with our advanced AI detection system. Identify high-value components, ensure safety compliance, and maximize profits with automated object detection and valuation.
        </p>
        <div class="flex gap-4 justify-center">
              <button class="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-colors">
                Start Free Trial
          </button>
              <button class="border border-purple-600 text-purple-600 px-8 py-3 rounded-md hover:bg-purple-50 transition-colors">
                Schedule Demo
          </button>
        </div>
      </div>
    </section>
   
        <!-- Separator -->
        <div class="relative h-32 -mt-16 -mb-16 z-10">
          <div class="absolute inset-0 transform skew-y-3 bg-gradient-to-r from-purple-600 to-purple-400 opacity-10"></div>
        </div>
  
        <!-- Our Story Section -->
        <section class="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
          <div class="absolute inset-0">
            <div class="absolute top-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>
         
          <div class="max-w-7xl mx-auto px-4 relative z-10">
            <div class="text-center mb-16">
              <h2 class="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400">
                Why We Built This
              </h2>
              <p class="text-purple-100 text-xl max-w-3xl mx-auto font-medium">
                A personal mission to unlock hidden value in scrap yards
              </p>
            </div>
  
            <div class="grid md:grid-cols-2 gap-12 items-center">
              <div class="space-y-6">
                <div class="bg-gray-900/50 p-8 rounded-lg border border-purple-400/30">
                  <h3 class="text-2xl font-bold mb-4 text-purple-100">The Hidden Value</h3>
                  <p class="text-purple-200 leading-relaxed">
                    Growing up visiting scrap yards and working in electrical automation, I witnessed valuable control panels—worth hundreds to thousands of dollars—being sold for mere cents per pound as electronic scrap. Hundreds, if not thousands of these panels pass through scrap yards yearly, each representing significant lost value.
                  </p>
                </div>
  
                <div class="bg-gray-900/50 p-8 rounded-lg border border-purple-400/30">
                  <h3 class="text-2xl font-bold mb-4 text-purple-100">The Challenge</h3>
                  <p class="text-purple-200 leading-relaxed">
                    Scrap yards face unique challenges: they prioritize safety by limiting public access, lack time for creating individual listings, and need efficient processing methods. Items that could sell for hundreds of dollars often end up being processed for $5-10 in scrap value.
                  </p>
                </div>
  
                <div class="bg-gray-900/50 p-8 rounded-lg border border-purple-400/30">
                  <h3 class="text-2xl font-bold mb-4 text-purple-100">The Solution</h3>
                  <p class="text-purple-200 leading-relaxed">
                    We built this platform to bridge this gap—automatically identifying valuable components, connecting with qualified buyers, and streamlining the entire process. It's not just about profit; it's about environmental responsibility, ensuring valuable equipment finds new life instead of being scrapped.
                  </p>
                </div>
              </div>
  
              <div class="space-y-8">
                <!-- Value Stats -->
                <div class="grid grid-cols-2 gap-6">
                  <div class="bg-purple-900/50 p-6 rounded-lg border border-purple-400/30 text-center">
                    <div class="text-4xl font-bold text-purple-200 mb-2">$500+</div>
                    <div class="text-purple-300">Average control panel value</div>
                  </div>
                  <div class="bg-purple-900/50 p-6 rounded-lg border border-purple-400/30 text-center">
                    <div class="text-4xl font-bold text-purple-200 mb-2">$5-10</div>
                    <div class="text-purple-300">Current scrap value</div>
                  </div>
                </div>
  
                <!-- Key Benefits -->
                <div class="space-y-4">
                  {#each [
                    { icon: "🔍", title: "Automated Detection", desc: "AI identifies valuable components instantly" },
                    { icon: "🤝", title: "Qualified Buyers", desc: "Direct connection to wholesale market" },
                    { icon: "♻️", title: "Environmental Impact", desc: "Extending equipment lifecycle" },
                    { icon: "💰", title: "Value Maximization", desc: "10,000x potential ROI on components" }
                  ] as benefit}
                    <div class="flex items-start gap-4 bg-gray-900/50 p-4 rounded-lg border border-purple-400/30">
                      <div class="w-12 h-12 bg-purple-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span class="text-2xl">{benefit.icon}</span>
                      </div>
                      <div>
                        <div class="font-semibold text-purple-100 mb-1">{benefit.title}</div>
                        <div class="text-sm text-purple-200">{benefit.desc}</div>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Enlarged Image Modal -->
        {#if enlargedImage}
          <div
            class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            on:click={closeEnlarged}
            on:keydown={(e) => e.key === 'Escape' && closeEnlarged()}
            role="dialog"
            aria-modal="true"
          >
            <button
              class="absolute top-4 right-4 text-white hover:text-purple-300 transition-colors"
              on:click={closeEnlarged}
              aria-label="Close enlarged image"
            >
              <span class="text-3xl">×</span>
            </button>
            <div
              class="relative max-w-[90vw] max-h-[90vh]"
              on:click|stopPropagation
            >
              <img
                src={enlargedImage}
                alt="Enlarged view"
                class="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        {/if}
  
        <!-- Separator -->
        <div class="relative h-32 -mt-16 -mb-16 z-10">
          <div class="absolute inset-0 transform skew-y-3 bg-gradient-to-r from-purple-600 to-purple-400 opacity-10"></div>
        </div>

    <!-- Core Features Section -->
        <section class="py-20 px-4 bg-gradient-to-b from-white to-purple-50 relative">
      <div class="absolute inset-0 bg-dot-pattern opacity-5"></div>
      <div class="relative z-10">
            <div class="text-center mb-16">
              <h2 class="text-4xl font-bold mb-4 text-gray-900">Core Platform Features</h2>
              <p class="text-gray-600 text-lg max-w-3xl mx-auto">
                Powerful capabilities designed for modern scrap yard operations
              </p>
            </div>
  
            <!-- Flexibility Message -->
            <div class="max-w-4xl mx-auto mb-16">
              <div class="bg-purple-50 rounded-2xl p-8 border border-purple-200">
                <div class="flex items-start gap-6">
                  <div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span class="text-4xl">💡</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Simple Solutions for Every Yard</h3>
                    <div class="prose prose-purple">
                      <p class="text-gray-700 mb-4">
                        We've made it incredibly simple for scrap yard owners with three flexible solutions:
                      </p>
                      <ul class="space-y-3 text-gray-700">
                        <li class="flex items-start gap-2">
                          <span class="text-purple-600 font-bold mt-1">→</span>
                          <span><strong>Self-Service:</strong> Simply take pictures and upload them to instantly know where valuable items are located</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <span class="text-purple-600 font-bold mt-1">→</span>
                          <span><strong>Professional Service:</strong> Our team can scan your entire yard in just a couple of hours, daily or weekly</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <span class="text-purple-600 font-bold mt-1">→</span>
                          <span><strong>Cost-Effective:</strong> Per-image cost becomes negligible when even one high-value item is recovered from the scrap pile</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
        <div class="max-w-7xl mx-auto">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {#each features as feature}
                  <div class="group relative">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                    <div class="relative p-8 rounded-lg bg-white/80 backdrop-blur border border-purple-100 hover:border-purple-300 transition-all duration-300 h-full flex flex-col">
                      <div class="flex items-start gap-4 mb-6">
                        <div class="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <span class="text-3xl">{feature.icon}</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 pt-3">{feature.title}</h3>
                      </div>
                      <p class="text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
                    </div>
                  </div>
            {/each}
          </div>
  
          <!-- Stats Section -->
          <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {#each stats as stat}
                  <div class="group relative">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                    <div class="relative bg-white/80 backdrop-blur p-6 rounded-lg border border-purple-100 hover:border-purple-300 transition-all duration-300 text-center">
                      <div class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800 mb-2">
                        {stat.value}
                      </div>
                      <div class="text-gray-700 font-medium">{stat.label}</div>
                    </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </section>

        <!-- Separator -->
        <div class="relative h-32 -mt-16 -mb-16 z-10">
          <div class="absolute inset-0 transform skew-y-3 bg-gradient-to-r from-purple-600 to-purple-400 opacity-10"></div>
        </div>
   
        <!-- Interactive Demo Section -->
        <section class="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
          <div class="max-w-7xl mx-auto px-4 relative z-10">
            <div class="text-center mb-16">
              <h2 class="text-5xl font-bold mb-6 text-white drop-shadow-lg">
                See It In Action
              </h2>
              <p class="text-purple-100 text-lg max-w-3xl mx-auto font-medium">
                Experience how our AI detects valuable materials
              </p>
            </div>
  
            <div class="max-w-6xl mx-auto">
              <!-- Demo Interface -->
              <div class="group relative">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                <div class="relative bg-gray-900 p-6 rounded-lg border border-purple-800/50">
                  <!-- Sample Image Display -->
                  <div class="bg-gray-800 rounded-lg mb-6 overflow-hidden relative">
                    {#if !isProcessing && !showResults}
                      <div in:fly={{ y: 20, duration: 600 }}>
                        <img
                          src="/scrap2.png"
                          alt="Sample scrap pile"
                          class="w-full h-auto"
                        />
                      </div>
                    {:else if isProcessing}
                      <div class="absolute inset-0 flex items-center justify-center bg-gray-900/80">
                        <div class="text-center">
                          <div class="text-purple-400 animate-spin h-8 w-8 border-4 border-current border-t-transparent rounded-full mb-4"></div>
                          <div class="text-purple-200 text-lg">
                            Analyzing materials...
                            <div class="text-sm text-purple-300 mt-2">Detecting high-value components and hazards</div>
                          </div>
                        </div>
                      </div>
                    {:else}
                      <div in:fly={{ y: 20, duration: 600 }} class="p-6">
                        <div class="grid grid-cols-1 gap-8">
                          {#each [
                            { src: '/scrap21.png', alt: 'Component analysis with AI detection', label: 'Component Analysis & Search' },
                            { src: '/scrap22.png', alt: 'Value detection analysis', label: 'Value Detection' },
                            { src: '/scrap23.png', alt: 'GPS mapping with timestamps', label: 'GPS Location & Timestamp' }
                          ] as { src, alt, label }}
                            <button
                              class="relative block w-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg transform hover:scale-[1.02] transition-transform"
                              on:click={() => enlargeImage(src)}
                              on:keydown={(e) => e.key === 'Enter' && enlargeImage(src)}
                              aria-label="View enlarged {alt}"
                            >
                              <img
                                src={src}
                                alt={alt}
                                class="w-full h-auto rounded-lg hover:opacity-90 transition-opacity"
                              />
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div class="absolute bottom-4 left-4 text-white px-3 py-2 rounded-lg text-sm backdrop-blur-sm">
                                {label}
                              </div>
                            </button>
                          {/each}
                        </div>
                      </div>
                    {/if}
                  </div>
  
                  <!-- Controls -->
                  <div class="space-y-4">
                    <div class="flex gap-4 justify-center">
                      <button
                        class="flex-1 max-w-xs bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
                        on:click={handleProcess}
                        disabled={isProcessing}
                      >
                        {#if !showResults}
                          Analyze Scrap Pile
                        {:else}
                          Reset Demo
                        {/if}
                      </button>
                    </div>
                    {#if showResults}
                      <div class="text-center text-sm text-purple-200">
                        Click any image to view full size
                      </div>
                    {/if}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
   
        <!-- Separator -->
        <div class="relative h-32 -mt-16 -mb-16 z-10">
          <div class="absolute inset-0 transform skew-y-3 bg-gradient-to-r from-purple-600 to-purple-400 opacity-10"></div>
        </div>
   
        <!-- Scrapyard Applications Section -->
        <section class="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-gray-900 text-white relative overflow-hidden">
          <div class="max-w-7xl mx-auto px-4 relative z-10">
            <div class="text-center mb-16">
              <h2 class="text-4xl font-bold mb-4">Scrapyard Applications</h2>
              <p class="text-purple-100 text-lg max-w-3xl mx-auto">
                Advanced detection capabilities for every scrap yard operation
              </p>
            </div>
  
            <!-- Primary Use Cases -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {#each [
                {
                  icon: "🏭",
                  title: "Large Scale Operations",
                  subtitle: "High-volume scrap processing",
                  features: [
                    { title: "Bulk Processing", desc: "Process thousands of items daily with AI detection", icon: "🔍" },
                    { title: "Value Tracking", desc: "Automated high-value component identification", icon: "💰" },
                    { title: "Safety Compliance", desc: "Hazardous material detection and alerts", icon: "⚠️" },
                    { title: "Data Reports", desc: "Export findings for inventory management", icon: "📊" }
                  ]
                },
                {
                  icon: "⚡",
                  title: "Electronics Processing",
                  subtitle: "E-waste and component recovery",
                  features: [
                    { title: "Component Detection", desc: "Identify valuable electronic parts", icon: "🔌" },
                    { title: "Market Integration", desc: "Direct wholesale buyer connection", icon: "🤝" },
                    { title: "Value Assessment", desc: "Real-time pricing analysis", icon: "💰" },
                    { title: "Batch Processing", desc: "High-volume automated sorting", icon: "🔄" }
                  ]
                },
                {
                  icon: "⚠️",
                  title: "Safety & Compliance",
                  subtitle: "Regulatory and hazard management",
                  features: [
                    { title: "Hazard Detection", desc: "Identify dangerous materials and conditions", icon: "🚨" },
                    { title: "Safety Alerts", desc: "Real-time notification system", icon: "📱" },
                    { title: "Compliance Tracking", desc: "Regulatory requirement monitoring", icon: "✅" },
                    { title: "Documentation", desc: "Automated record keeping", icon: "📋" }
                  ]
                },
                {
                  icon: "🔧",
                  title: "Metal Processing",
                  subtitle: "Advanced metal sorting & grading",
                  features: [
                    { title: "Metal Classification", desc: "AI-powered material identification", icon: "🔍" },
                    { title: "Quality Assessment", desc: "Automated grade determination", icon: "⭐" },
                    { title: "Value Estimation", desc: "Real-time market pricing", icon: "💰" },
                    { title: "Sorting Automation", desc: "Efficient material categorization", icon: "🔄" }
                  ]
                },
                {
                  icon: "⚙️",
                  title: "Equipment Recovery",
                  subtitle: "Industrial equipment processing",
                  features: [
                    { title: "Part Detection", desc: "Identify valuable machinery components", icon: "🔧" },
                    { title: "Wholesale Connect", desc: "Direct buyer marketplace access", icon: "🤝" },
                    { title: "Value Optimization", desc: "Component-specific pricing", icon: "📈" },
                    { title: "Inventory Tracking", desc: "GPS-based part location", icon: "📍" }
                  ]
                },
                
              ] as card}
                <div class="group relative h-full">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                  <div class="relative bg-gray-900 p-8 rounded-lg border border-purple-800/50 hover:border-purple-400/50 transition-all duration-300 h-full flex flex-col">
                    <div class="flex items-center gap-6 mb-8">
                      <div class="h-16 w-16 bg-purple-900/50 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <span class="text-4xl">{card.icon}</span>
                      </div>
                      <div>
                        <h3 class="text-2xl font-bold mb-1">{card.title}</h3>
                        <p class="text-purple-200">{card.subtitle}</p>
                      </div>
                    </div>
                    <div class="space-y-6 flex-grow">
                      {#each card.features as feature}
                        <div class="flex items-start gap-4 group/item">
                          <div class="w-10 h-10 bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-purple-800/50 transition-colors">
                            <span class="text-xl">{feature.icon}</span>
                          </div>
                          <div>
                            <div class="font-semibold text-purple-100 mb-1">{feature.title}</div>
                            <p class="text-sm text-purple-200">{feature.desc}</p>
                          </div>
                        </div>
                      {/each}
                    </div>
                  </div>
                </div>
              {/each}
            </div>
   
            <!-- Solution Workflows Section -->
            <section class="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
              <div class="max-w-7xl mx-auto px-4 relative z-10">
                <div class="text-center mb-16">
                  <h2 class="text-4xl font-bold mb-4">Solution Workflows</h2>
                  <p class="text-purple-100 text-lg max-w-3xl mx-auto">
                    Compare our three solutions to find the perfect fit for your operations
                  </p>
                </div>
  
                <div class="grid md:grid-cols-3 gap-8">
                  <!-- Standard Solution -->
                  <div class="group relative">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                    <div class="relative bg-gray-900/90 p-8 rounded-lg border border-purple-400/50 h-full">
                      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div class="bg-purple-100 text-purple-900 px-6 py-2 rounded-full font-semibold shadow-lg">
                          Standard Solution
                        </div>
                      </div>
                      <div class="space-y-6 mt-4">
                        {#each [
                          { title: "Purchase Tokens", desc: "Buy processing credits", icon: "💳" },
                          { title: "Upload Images", desc: "Use dropbox interface", icon: "📤" },
                          { title: "Process Images", desc: "AI detection runs", icon: "⚙️" },
                          { title: "View Results", desc: "Access interactive map", icon: "🗺️" }
                        ] as { title, desc, icon }, i}
                          <div class="flex items-start gap-4 relative">
                            {#if i !== 3}
                              <div class="absolute h-full w-0.5 bg-purple-500/20 left-6 top-10"></div>
                            {/if}
                            <div class="w-12 h-12 rounded-xl bg-purple-900/50 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                              <span class="text-2xl">{icon}</span>
                            </div>
                            <div>
                              <div class="font-semibold text-purple-100 mb-1">{title}</div>
                              <div class="text-sm text-purple-200">{desc}</div>
                            </div>
                          </div>
                        {/each}
                      </div>
                      <div class="mt-8 text-center">
                        <div class="text-purple-100 font-semibold mb-2">You Handle Everything</div>
                        <p class="text-sm text-purple-200">Perfect for teams with existing equipment who want AI processing</p>
                      </div>
                    </div>
                  </div>
  
                  <!-- Pi Solution -->
                  <div class="group relative">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                    <div class="relative bg-gray-900/90 p-8 rounded-lg border border-purple-400/50 h-full">
                      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div class="bg-purple-100 text-purple-900 px-6 py-2 rounded-full font-semibold shadow-lg">
                          Pi Solution
                        </div>
                      </div>
                      <div class="space-y-6 mt-4">
                        {#each [
                          { title: "Receive Pi Kit", desc: "Pre-configured hardware", icon: "📦" },
                          { title: "Insert SD Card", desc: "Plug & play setup", icon: "💾" },
                          { title: "Connect Camera", desc: "Automatic configuration", icon: "📸" },
                          { title: "Images Auto-Upload", desc: "Real-time processing", icon: "🔄" },
                          { title: "Access Dashboard", desc: "View live results", icon: "📊" }
                        ] as { title, desc, icon }, i}
                          <div class="flex items-start gap-4 relative">
                            {#if i !== 4}
                              <div class="absolute h-full w-0.5 bg-purple-500/20 left-6 top-10"></div>
                            {/if}
                            <div class="w-12 h-12 rounded-xl bg-purple-900/50 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                              <span class="text-2xl">{icon}</span>
                            </div>
                            <div>
                              <div class="font-semibold text-purple-100 mb-1">{title}</div>
                              <div class="text-sm text-purple-200">{desc}</div>
                            </div>
                          </div>
                        {/each}
                      </div>
                      <div class="mt-8 text-center">
                        <div class="text-purple-100 font-semibold mb-2">Automated Processing</div>
                        <p class="text-sm text-purple-200">Ideal for continuous monitoring with minimal setup</p>
                      </div>
                    </div>
                  </div>
  
                  <!-- Enterprise Solution -->
                  <div class="group relative">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                    <div class="relative bg-gray-900/90 p-8 rounded-lg border border-purple-400/50 h-full">
                      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div class="bg-purple-100 text-purple-900 px-6 py-2 rounded-full font-semibold shadow-lg">
                          Enterprise Solution
                        </div>
                      </div>
                      <div class="space-y-6 mt-4">
                        {#each [
                          { title: "Define Requirements", desc: "Custom setup consultation", icon: "📋" },
                          { title: "Drone Deployment", desc: "Professional team arrives", icon: "🚁" },
                          { title: "Auto Flight Paths", desc: "Waypoint mapping", icon: "🎯" },
                          { title: "Real-time Processing", desc: "Instant AI analysis", icon: "⚡" },
                          { title: "Full Management", desc: "Complete data handling", icon: "✨" }
                        ] as { title, desc, icon }, i}
                          <div class="flex items-start gap-4 relative">
                            {#if i !== 4}
                              <div class="absolute h-full w-0.5 bg-purple-500/20 left-6 top-10"></div>
                            {/if}
                            <div class="w-12 h-12 rounded-xl bg-purple-900/50 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                              <span class="text-2xl">{icon}</span>
                            </div>
                            <div>
                              <div class="font-semibold text-purple-100 mb-1">{title}</div>
                              <div class="text-sm text-purple-200">{desc}</div>
                            </div>
                          </div>
                        {/each}
                      </div>
                      <div class="mt-8 text-center">
                        <div class="text-purple-100 font-semibold mb-2">Full-Service Solution</div>
                        <p class="text-sm text-purple-200">Complete management of your search operations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
   
            <!-- Advanced Capabilities Section -->
            <section class="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-gray-900 text-white relative overflow-hidden">
              <div class="max-w-7xl mx-auto px-4 relative z-10">
                <div class="text-center mb-16">
                  <h2 class="text-4xl font-bold mb-4">Advanced Ways to Maximize Value</h2>
                  <p class="text-purple-100 text-lg max-w-3xl mx-auto">
                    Turn AI detections into profitable opportunities
                  </p>
                </div>
  
                <div class="grid md:grid-cols-3 gap-8">
                  <!-- Wholesale Opportunities -->
                  <div class="group relative">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                    <div class="relative bg-gray-900/90 p-8 rounded-lg border border-purple-400/50">
                      <div class="flex items-center gap-4 mb-6">
                        <div class="h-14 w-14 bg-purple-900/50 rounded-xl flex items-center justify-center">
                          <span class="text-3xl">💰</span>
                        </div>
                        <div>
                          <h3 class="text-xl font-bold mb-1">Wholesale Opportunities</h3>
                          <p class="text-purple-200 text-sm">Direct buyer connections</p>
                        </div>
                      </div>
                      <ul class="space-y-3">
                        <li class="flex items-center gap-2">
                          <span class="text-purple-400">✓</span>
                          <span>24-hour competitive offers</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-purple-400">✓</span>
                          <span>Bulk sale opportunities</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-purple-400">✓</span>
                          <span>Premium pricing for quality items</span>
                        </li>
                      </ul>
                    </div>
                  </div>
  
                  <!-- Inventory Management -->
                  <div class="group relative">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                    <div class="relative bg-gray-900/90 p-8 rounded-lg border border-purple-400/50">
                      <div class="flex items-center gap-4 mb-6">
                        <div class="h-14 w-14 bg-purple-900/50 rounded-xl flex items-center justify-center">
                          <span class="text-3xl">📦</span>
                        </div>
                        <div>
                          <h3 class="text-xl font-bold mb-1">Smart Organization</h3>
                          <p class="text-purple-200 text-sm">GPS-powered inventory system</p>
                        </div>
                      </div>
                      <ul class="space-y-3">
                        <li class="flex items-center gap-2">
                          <span class="text-purple-400">✓</span>
                          <span>Location tracking for quick retrieval</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-purple-400">✓</span>
                          <span>Automated sorting recommendations</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-purple-400">✓</span>
                          <span>Real-time inventory updates</span>
                        </li>
                      </ul>
                    </div>
                  </div>
  
                  <!-- Business Intelligence -->
                  <div class="group relative">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                    <div class="relative bg-gray-900/90 p-8 rounded-lg border border-purple-400/50">
                      <div class="flex items-center gap-4 mb-6">
                        <div class="h-14 w-14 bg-purple-900/50 rounded-xl flex items-center justify-center">
                          <span class="text-3xl">📊</span>
                        </div>
                        <div>
                          <h3 class="text-xl font-bold mb-1">Strategic Insights</h3>
                          <p class="text-purple-200 text-sm">Data-driven decision making</p>
                        </div>
                      </div>
                      <ul class="space-y-3">
                        <li class="flex items-center gap-2">
                          <span class="text-purple-400">✓</span>
                          <span>Market trend analysis</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-purple-400">✓</span>
                          <span>Optimal timing for sales</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-purple-400">✓</span>
                          <span>Profit optimization reports</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
  
                <!-- Additional Benefits -->
                <div class="grid md:grid-cols-2 gap-8 mt-12">
                  <div class="bg-gray-900/50 p-8 rounded-lg border border-purple-400/30">
                    <h3 class="text-xl font-bold mb-4 flex items-center gap-3">
                      <span class="text-2xl">⚡</span>
                      Immediate Benefits
                    </h3>
                    <ul class="space-y-3">
                      <li class="flex items-center gap-3">
                        <span class="text-purple-400">→</span>
                        <span>Recover high-value items before generic processing</span>
                      </li>
                      <li class="flex items-center gap-3">
                        <span class="text-purple-400">→</span>
                        <span>Reduce manual inspection time by up to 75%</span>
                      </li>
                      <li class="flex items-center gap-3">
                        <span class="text-purple-400">→</span>
                        <span>Connect with specialized buyers for premium prices</span>
                      </li>
                    </ul>
                  </div>
  
                  <div class="bg-gray-900/50 p-8 rounded-lg border border-purple-400/30">
                    <h3 class="text-xl font-bold mb-4 flex items-center gap-3">
                      <span class="text-2xl">📈</span>
                      Long-Term Value
                    </h3>
                    <ul class="space-y-3">
                      <li class="flex items-center gap-3">
                        <span class="text-purple-400">→</span>
                        <span>Build a database of valuable material locations</span>
                      </li>
                      <li class="flex items-center gap-3">
                        <span class="text-purple-400">→</span>
                        <span>Optimize yard layout based on material flow</span>
                      </li>
                      <li class="flex items-center gap-3">
                        <span class="text-purple-400">→</span>
                        <span>Develop data-driven pricing strategies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
   
            <!-- Metrics Comparison Section -->
            <section class="py-20 bg-gradient-to-b from-white to-purple-50">
              <div class="max-w-7xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-4 text-gray-900">Traditional vs AI-Powered Scrap Processing</h2>
                <p class="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                  See how our solution transforms traditional scrap yard operations
                </p>
               
                <div class="grid md:grid-cols-2 gap-12">
                  <!-- Traditional Methods -->
                  <div class="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:border-red-200 transition-all duration-300">
                    <div class="flex items-center gap-4 mb-8">
                      <div class="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                        <span class="text-2xl">👨</span>
                      </div>
                      <h3 class="text-xl font-bold text-gray-900">Traditional Methods</h3>
                    </div>
                    <div class="space-y-6">
                      <div class="flex justify-between items-center">
                        <span class="text-gray-900 font-medium">Material Assessment</span>
                        <span class="text-red-600 font-semibold">2-3 hours/pile</span>
                      </div>
                      <div class="flex justify-between items-center">
                        <span class="text-gray-900 font-medium">Processing Rate</span>
                        <span class="text-red-600 font-semibold">50 items/hour</span>
                      </div>
                      <div class="flex justify-between items-center">
                        <span class="text-gray-900 font-medium">Staff Required</span>
                        <span class="text-red-600 font-semibold">3-4 workers</span>
                      </div>
                      <div class="flex justify-between items-center">
                        <span class="text-gray-900 font-medium">Value Recovery</span>
                        <span class="text-red-600 font-semibold">~40-60%</span>
                      </div>
                      <div class="flex justify-between items-center">
                        <span class="text-gray-900 font-medium">Detection Method</span>
                        <span class="text-red-600 font-semibold">Visual Only</span>
                      </div>
                    </div>
                  </div>
   
                  <!-- Our AI System -->
                  <div class="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:border-purple-200 transition-all duration-300">
                    <div class="flex items-center gap-4 mb-8">
                      <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                        <span class="text-2xl">🤖</span>
                      </div>
                      <h3 class="text-xl font-bold text-gray-900">AI-Powered Solution</h3>
                    </div>
                    <div class="space-y-6">
                      <div class="flex justify-between items-center">
                        <span class="text-gray-900 font-medium">Material Assessment</span>
                        <span class="text-purple-600 font-semibold">5-10 min/pile</span>
                      </div>
                      <div class="flex justify-between items-center">
                        <span class="text-gray-900 font-medium">Processing Rate</span>
                        <span class="text-purple-600 font-semibold">1000+ items/hour</span>
                      </div>
                      <div class="flex justify-between items-center">
                        <span class="text-gray-900 font-medium">Staff Required</span>
                        <span class="text-purple-600 font-semibold">1 operator</span>
                      </div>
                      <div class="flex justify-between items-center">
                        <span class="text-gray-900 font-medium">Value Recovery</span>
                        <span class="text-purple-600 font-semibold">>85%</span>
                      </div>
                      <div class="flex justify-between items-center">
                        <span class="text-gray-900 font-medium">Detection Method</span>
                        <span class="text-purple-600 font-semibold">AI + GPS Mapping</span>
                      </div>
                    </div>
                  </div>
                </div>
   
                <!-- Key Benefits Summary -->
                <div class="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div class="text-center">
                    <div class="text-2xl mb-2">⚡</div>
                    <div class="font-semibold text-gray-900 mb-2">20x Faster</div>
                    <p class="text-sm text-gray-600">Process materials in minutes instead of hours</p>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl mb-2">💰</div>
                    <div class="font-semibold text-gray-900 mb-2">Higher Recovery</div>
                    <p class="text-sm text-gray-600">AI detection finds valuable items humans miss</p>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl mb-2">📈</div>
                    <div class="font-semibold text-gray-900 mb-2">Better ROI</div>
                    <p class="text-sm text-gray-600">Reduce labor costs while maximizing value recovery</p>
                  </div>
                </div>
              </div>
            </section>
   
            <!-- Real Impact Section -->
            <section class="py-20 bg-white">
              <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-16">
                  <h2 class="text-4xl font-bold mb-4 text-gray-900">Real Scrap Yard Impact</h2>
                  <p class="text-gray-600 text-lg max-w-3xl mx-auto font-medium">
                    See how our technology is transforming scrap processing operations
                  </p>
                </div>
  
                <div class="grid md:grid-cols-4 gap-8">
                  <!-- Impact Stats -->
                  {#each [
                    { value: "+85%", label: "Value Recovery", desc: "Average increase" },
                    { value: "-75%", label: "Processing Time", desc: "Efficiency gain" },
                    { value: "99%", label: "Detection Rate", desc: "Component accuracy" },
                    { value: "24h", label: "Buyer Response", desc: "Average time" }
                  ] as stat}
                    <div class="bg-purple-50 p-6 rounded-lg border border-purple-200 hover:border-purple-300 transition-all duration-300 shadow-sm">
                      <div class="text-center">
                        <div class="text-3xl font-bold text-purple-700 mb-2">{stat.value}</div>
                        <div class="text-lg text-gray-900 font-medium mb-1">{stat.label}</div>
                        <div class="text-sm text-gray-600">{stat.desc}</div>
                      </div>
                    </div>
                  {/each}
                </div>
  
                <!-- Customer Results -->
                <div class="mt-16 grid md:grid-cols-2 gap-12">
                  <div class="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                    <div class="flex items-center gap-4 mb-6">
                      <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                        <span class="text-2xl">📈</span>
                      </div>
                      <h3 class="text-xl font-bold text-gray-900">Improved Yard Efficiency</h3>
                    </div>
                    <p class="text-gray-700 mb-6">
                      Scrap yards using our platform report significant improvements in processing speed and value recovery
                    </p>
                    <ul class="space-y-4">
                      {#each [
                        { value: "85%", label: "Increase in value recovery" },
                        { value: "75%", label: "Reduction in processing time" },
                        { value: "3x", label: "Faster component identification" }
                      ] as stat}
                        <li class="flex justify-between items-center">
                          <span class="text-gray-700">{stat.label}</span>
                          <span class="text-purple-700 font-bold">{stat.value}</span>
                        </li>
                      {/each}
                    </ul>
                  </div>
  
                  <div class="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                    <div class="flex items-center gap-4 mb-6">
                      <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                        <span class="text-2xl">💰</span>
                      </div>
                      <h3 class="text-xl font-bold text-gray-900">Revenue Growth</h3>
                    </div>
                    <p class="text-gray-700 mb-6">
                      Maximize profits with AI-powered detection and direct buyer connections
                    </p>
                    <ul class="space-y-4">
                      {#each [
                        { value: "+40%", label: "Average profit margin" },
                        { value: "24h", label: "Time to wholesale offer" },
                        { value: "10K×", label: "Potential ROI per detection" }
                      ] as stat}
                        <li class="flex justify-between items-center">
                          <span class="text-gray-700">{stat.label}</span>
                          <span class="text-purple-700 font-bold">{stat.value}</span>
                        </li>
                      {/each}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
   
            <!-- ROI Calculator -->
           
   
            <!-- Solutions Section -->
            <section class="py-20 bg-gray-50">
              <div class="max-w-7xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-6 text-gray-900">Choose Your Solution</h2>
                <p class="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                  From self-service to full enterprise support, we have a solution that fits your needs
                </p>
   
                <div class="grid md:grid-cols-3 gap-8">
                  <!-- Standard Solution -->
                  <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                    <h3 class="text-2xl font-semibold mb-2 text-gray-900">Standard</h3>
                    <p class="text-gray-600 mb-6">Self-service image processing</p>
                    <ul class="space-y-3 mb-8">
                      <li class="flex items-start">
                        <span class="text-purple-500 mr-2 mt-1">✓</span>
                        <div>
                          <span class="font-semibold text-gray-900">Simple Upload System</span>
                          <p class="text-sm text-gray-600">Easy-to-use dropbox for batch uploads</p>
                        </div>
                      </li>
                      <li class="flex items-start">
                        <span class="text-purple-500 mr-2 mt-1">✓</span>
                        <div>
                          <span class="font-semibold text-gray-900">Smart Search</span>
                          <p class="text-sm text-gray-600">Filter by keywords, date, and image content</p>
                        </div>
                      </li>
                      <li class="flex items-start">
                        <span class="text-purple-500 mr-2 mt-1">✓</span>
                        <div>
                          <span class="font-semibold text-gray-900">Metadata Mapping</span>
                          <p class="text-sm text-gray-600">Automatic GPS plotting of images</p>
                        </div>
                      </li>
                    </ul>
                    <div class="bg-purple-50 p-4 rounded-lg mb-6">
                      <div class="text-purple-800 font-semibold mb-2">Token-Based Pricing</div>
                      <div class="text-sm text-purple-700">Starting at $10 for 100 tokens</div>
                    </div>
                    <button class="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors">
                      Get Started
                    </button>
                  </div>
   
                  <!-- Raspberry Pi Solution -->
                  <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                    <h3 class="text-2xl font-semibold mb-2 text-gray-900">Automated Pi Solution</h3>
                    <p class="text-gray-600 mb-6">Pre-configured hardware & software</p>
                    <ul class="space-y-3 mb-8">
                      <li class="flex items-start">
                        <span class="text-purple-500 mr-2 mt-1">✓</span>
                        <div>
                          <span class="font-semibold text-gray-900">Pre-configured Raspberry Pi</span>
                          <p class="text-sm text-gray-600">Plug & play setup with SD card</p>
                        </div>
                      </li>
                      <li class="flex items-start">
                        <span class="text-purple-500 mr-2 mt-1">✓</span>
                        <div>
                          <span class="font-semibold text-gray-900">Automatic Upload</span>
                          <p class="text-sm text-gray-600">Images automatically processed & displayed</p>
                        </div>
                      </li>
                      <li class="flex items-start">
                        <span class="text-purple-500 mr-2 mt-1">✓</span>
                        <div>
                          <span class="font-semibold text-gray-900">Custom Filters</span>
                          <p class="text-sm text-gray-600">Up to 5 custom detection filters</p>
                        </div>
                      </li>
                      <li class="flex items-start">
                        <span class="text-purple-500 mr-2 mt-1">✓</span>
                        <div>
                          <span class="font-semibold text-gray-900">Priority Support</span>
                          <p class="text-sm text-gray-600">Dedicated technical assistance</p>
                        </div>
                      </li>
                    </ul>
                    <div class="bg-purple-50 p-4 rounded-lg mb-6">
                      <div class="text-purple-800 font-semibold mb-2">Hardware + Software</div>
                      <div class="text-sm text-purple-700">Starting at $600 with tokens included</div>
                    </div>
                    <button class="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors">
                      Order Package
                    </button>
                  </div>
   
                  <!-- Enterprise Solution -->
                  <div class="bg-white p-8 rounded-lg shadow-sm border border-purple-200 ring-1 ring-purple-500">
                    <div class="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                      Full-Service Solution
                    </div>
                    <h3 class="text-2xl font-semibold mb-2 text-gray-900">Enterprise</h3>
                    <p class="text-gray-600 mb-6">Complete drone & software solution</p>
                    <ul class="space-y-3 mb-8">
                      <li class="flex items-start">
                        <span class="text-purple-500 mr-2 mt-1">✓</span>
                        <div>
                          <span class="font-semibold text-gray-900">Professional Drone Service</span>
                          <p class="text-sm text-gray-600">Our team handles all drone operations</p>
                        </div>
                      </li>
                      <li class="flex items-start">
                        <span class="text-purple-500 mr-2 mt-1">✓</span>
                        <div>
                          <span class="font-semibold text-gray-900">Automated Waypoint Mapping</span>
                          <p class="text-sm text-gray-600">Optimized flight paths & coverage</p>
                        </div>
                      </li>
                      <li class="flex items-start">
                        <span class="text-purple-500 mr-2 mt-1">✓</span>
                        <div>
                          <span class="font-semibold text-gray-900">Unlimited Customization</span>
                          <p class="text-sm text-gray-600">Custom filters & detection models</p>
                        </div>
                      </li>
                      <li class="flex items-start">
                        <span class="text-purple-500 mr-2 mt-1">✓</span>
                        <div>
                          <span class="font-semibold text-gray-900">Full Data Management</span>
                          <p class="text-sm text-gray-600">Automated uploads & organization</p>
                        </div>
                      </li>
                    </ul>
                    <div class="bg-purple-50 p-4 rounded-lg mb-6">
                      <div class="text-gray-900 font-semibold mb-2">Custom Enterprise Pricing</div>
                      <div class="text-sm text-purple-700">Contact us for a tailored solution</div>
                    </div>
                    <div class="space-y-3">
                      <button class="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-md hover:from-purple-700 hover:to-purple-800 transition-colors">
                        Contact Sales
                      </button>
                      <button class="w-full border border-purple-600 text-purple-600 py-3 rounded-md hover:bg-purple-50 transition-colors">
                        View Case Studies
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
   
            <!-- Testimonials -->
            <section class="py-20 bg-gradient-to-br from-purple-50 to-white relative overflow-hidden">
              <!-- Background Elements -->
              <div class="absolute inset-0 bg-purple-50/50"></div>
  
              <div class="max-w-7xl mx-auto px-4 relative z-10">
                <div class="text-center mb-16">
                  <h2 class="text-4xl font-bold mb-4 text-gray-900">Trusted by Leading Scrap Yards</h2>
                  <p class="text-gray-600 text-lg max-w-3xl mx-auto font-medium">
                    Real stories from yards transforming their operations
                  </p>
                </div>
  
                <div class="grid md:grid-cols-3 gap-8">
                  <!-- First Card -->
                  <div class="group relative">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                    <div class="relative bg-white p-8 rounded-lg border border-purple-200 shadow-lg hover:border-purple-300 transition-all duration-300">
                      <div class="flex items-center gap-4 mb-6">
                        <div class="h-14 w-14 bg-purple-50 rounded-xl flex items-center justify-center">
                          <span class="text-3xl">🌾</span>
                        </div>
                        <div>
                          <div class="text-yellow-400 text-lg mb-1">★★★★★</div>
                          <div class="text-gray-900 font-medium">Large Scrap Yard</div>
                        </div>
                      </div>
                      <blockquote class="text-gray-700 mb-6 font-medium">
                        "The AI detection has transformed how we process materials. We're finding valuable components we used to miss and maximizing our profits."
                      </blockquote>
                      <div class="flex items-center justify-between">
                        <div class="text-sm text-gray-600 font-medium">Midwest Recycling Co.</div>
                        <div class="text-sm text-purple-700 font-semibold">ROI: 10,000x</div>
                      </div>
                    </div>
                  </div>
  
                  <!-- Second Card -->
                  <div class="group relative">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                    <div class="relative bg-white p-8 rounded-lg border border-purple-200 shadow-lg hover:border-purple-300 transition-all duration-300">
                      <div class="flex items-center gap-4 mb-6">
                        <div class="h-14 w-14 bg-purple-50 rounded-xl flex items-center justify-center">
                          <span class="text-3xl">⚡</span>
                        </div>
                        <div>
                          <div class="text-yellow-400 text-lg mb-1">★★★★★</div>
                          <div class="text-gray-900 font-medium">Auto Salvage</div>
                        </div>
                      </div>
                      <blockquote class="text-gray-700 mb-6 font-medium">
                        "The automated detection of high-value electrical components has increased our revenue significantly. The wholesale marketplace is a game-changer."
                      </blockquote>
                      <div class="flex items-center justify-between">
                        <div class="text-sm text-gray-600 font-medium">AutoParts Plus</div>
                        <div class="text-sm text-purple-700 font-semibold">Value: +85%</div>
                      </div>
                    </div>
                  </div>
  
                  <!-- Third Card -->
                  <div class="group relative">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                    <div class="relative bg-white p-8 rounded-lg border border-purple-200 shadow-lg hover:border-purple-300 transition-all duration-300">
                      <div class="flex items-center gap-4 mb-6">
                        <div class="h-14 w-14 bg-purple-50 rounded-xl flex items-center justify-center">
                          <span class="text-3xl">🥬</span>
                        </div>
                        <div>
                          <div class="text-yellow-400 text-lg mb-1">★★★★★</div>
                          <div class="text-gray-900 font-medium">Metal Recycling</div>
                        </div>
                      </div>
                      <blockquote class="text-gray-700 mb-6 font-medium">
                        "The GPS mapping and hazard detection features have improved our efficiency and safety standards dramatically."
                      </blockquote>
                      <div class="flex items-center justify-between">
                        <div class="text-sm text-gray-600 font-medium">Elite Metals</div>
                        <div class="text-sm text-purple-700 font-semibold">Efficiency: +60%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
   
            <!-- Separator -->
            <div class="relative h-32 -mt-16 -mb-16 z-10">
              <div class="absolute inset-0 transform skew-y-3 bg-gradient-to-r from-purple-600 to-purple-400 opacity-10"></div>
            </div>
   
            <!-- CTA Section -->
            <section class="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-gray-900 relative overflow-hidden">
              <!-- Background Elements -->
              <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <div class="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
              <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
   
              <div class="max-w-7xl mx-auto px-4 relative z-10">
                <div class="text-center mb-12">
                  <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Ready to Transform Your<br />Scrap Yard Operations?
                  </h2>
                  <p class="text-purple-100 text-lg md:text-xl mb-12 max-w-3xl mx-auto font-medium">
                    Join over 500 yards already using our platform to optimize their operations
                  </p>
                 
                  <div class="flex flex-col md:flex-row gap-6 justify-center max-w-lg mx-auto">
                    <button class="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                      <span class="relative text-lg font-semibold">Start Free Trial</span>
                    </button>
                   
                    <button class="px-8 py-4 bg-gray-900/50 backdrop-blur border border-purple-400/30 text-purple-100 rounded-lg hover:bg-gray-900/70 hover:border-purple-400/50 transition-all duration-300 text-lg font-semibold">
                      Schedule Demo
                    </button>
                  </div>
                </div>
   
                <!-- Quick Stats -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
                  {#each [
                    { label: "Value Recovery", value: "85%", desc: "Average increase" },
                    { label: "Processing Speed", value: "10K+", desc: "Items per day" },
                    { label: "Setup Time", value: "<24h", desc: "Ready to detect" },
                    { label: "Detection Rate", value: "99.9%", desc: "Object accuracy" }
                  ] as stat}
                    <div class="text-center p-4 rounded-lg bg-gray-900/80 border border-purple-400/50 hover:border-purple-300 transition-all duration-300">
                      <div class="text-2xl font-bold text-purple-300 mb-1 drop-shadow-lg">{stat.value}</div>
                      <div class="font-semibold text-purple-200 mb-1">{stat.label}</div>
                      <div class="text-sm text-purple-100/90 font-medium">{stat.desc}</div>
                    </div>
                  {/each}
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
   
   