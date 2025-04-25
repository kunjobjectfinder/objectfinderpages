<script>
  import { fade } from 'svelte/transition';
  import { fly } from 'svelte/transition';

  const features = [
    {
      icon: "🔍",
      title: "Precision Mapping",
      description: "Advanced coordinate mapping with real-time GPS tracking and bounding boxes showing detection accuracy up to 99.9%"
    },
    {
      icon: "🤖",
      title: "Multi-Model AI",
      description: "Choose from multiple state-of-the-art LLMs trained on trillions of data points, continuously improving through federated learning"
    },
    {
      icon: "📱",
      title: "Seamless Dashboard",
      description: "Upload hundreds of images at once with our intuitive bulk processing system and intelligent search capabilities"
    },
    {
      icon: "💰",
      title: "Cost Effective",
      description: "Budget-friendly pricing with unlimited processing and no hidden fees, making advanced AI accessible to all rescue teams"
    },
    {
      icon: "🎮",
      title: "Custom Flight Planning",
      description: "Integrated drone waypoint planner with terrain awareness and optimal coverage patterns for search operations"
    },
    {
      icon: "🔍",
      title: "Smart Search",
      description: "Powerful search tools with custom prompts to identify specific objects, patterns, or anomalies across all uploads"
    }
  ];

  const stats = [
    { value: "99.9%", label: "Detection Accuracy" },
    { value: "500K+", label: "Images Processed Daily" },
    { value: "15min", label: "Average Response Time" },
    { value: "24/7", label: "AI Model Training" }
  ];

  let isProcessing = false;
  let showResults = false;
  let enlargedImage = null;

  function handleProcess() {
    if (showResults) {
      // Reset demo
      showResults = false;
      return;
    }

    isProcessing = true;
    
    // Simulate processing delay
    setTimeout(() => {
      isProcessing = false;
      showResults = true;
    }, 2000);
  }

  function enlargeImage(src) {
    enlargedImage = src;
  }

  function closeEnlarged() {
    enlargedImage = null;
  }
</script>

<div class="min-h-screen bg-gray-50">
  <nav class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <a href="/homepage" class="text-xl font-bold text-[#4B6BFB]">ObjectFinder</a>
        </div>
        <div class="flex items-center space-x-8">
          <a href="/homepage" class="text-gray-600 hover:text-gray-900">Home</a>
          <a href="/agriculture" class="text-gray-600 hover:text-gray-900">AgriFinder</a>
          <a href="/scrap-finder" class="text-gray-600 hover:text-gray-900">ScrapyardFinder</a>
          <a href="/rescue-finder" class="text-gray-900">RescueFinder</a>
          <a href="/dashboard" class="text-gray-600 hover:text-gray-900">Dashboard</a>
          <a href="/billing" class="text-gray-600 hover:text-gray-900">Billing</a>
          <button class="bg-[#4B6BFB] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">Sign Out</button>
        </div>
      </div>
    </div>
  </nav>

  <main>
    <!-- Hero Section -->
    <section class="py-20 px-4 text-center bg-gradient-to-br from-red-100 via-red-50 to-white relative overflow-hidden">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      <div class="relative z-10">
        <h1 class="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 leading-tight py-2">
          Advanced Image Analysis Platform for Search & Rescue
        </h1>
        <p class="text-gray-700 text-xl mb-10 max-w-3xl mx-auto">
          Upload images from any source, get AI-powered object detection, precise GPS mapping, and intelligent search capabilities. Choose from self-service, automated Pi integration, or full enterprise drone operations.
        </p>
        <div class="flex gap-4 justify-center">
          <button class="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Try Platform Free
          </button>
          <button class="border border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors">
            View Solutions
          </button>
        </div>
      </div>
    </section>

    <!-- Add between sections -->
    <div class="relative h-32 -mt-16 -mb-16 z-10">
      <div class="absolute inset-0 transform skew-y-3 bg-gradient-to-r from-blue-600 to-blue-400 opacity-10"></div>
    </div>

    <!-- Core Features Section -->
    <section class="py-20 px-4 bg-gradient-to-b from-white to-blue-50 relative">
      <div class="absolute inset-0 bg-dot-pattern opacity-5"></div>
      <div class="relative z-10">
        <h2 class="text-3xl font-bold text-center mb-16">Core Platform Features</h2>
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            {#each features as feature}
              <div class="group p-8 rounded-xl bg-white border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div class="h-16 flex items-center">
                  <div class="text-4xl transform transition-all duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                </div>
                <h3 class="text-xl font-semibold mb-3">{feature.title}</h3>
                <p class="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            {/each}
          </div>
          <!-- Stats Section -->
          <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {#each stats as stat}
              <div class="text-center p-6 bg-blue-50/50 rounded-xl border border-blue-100">
                <div class="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div class="text-gray-600">{stat.label}</div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Demo Section -->
    <section class="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      <!-- Floating Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">
            See It In Action
          </h2>
          <p class="text-blue-200 text-lg max-w-3xl mx-auto">
            Experience how quickly our AI identifies search targets
          </p>
        </div>

        <div class="max-w-6xl mx-auto">
          <!-- Demo Interface -->
          <div class="group relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <div class="relative bg-gray-900 p-4 rounded-lg border border-blue-800/50">
              <!-- Sample Image Display -->
              <div class="bg-gray-800 rounded-lg mb-6 overflow-hidden relative">
                {#if !isProcessing && !showResults}
                  <div in:fly={{ y: 20, duration: 600 }}>
                    <div class="max-w-4xl mx-auto">
                      <img 
                        src="/sampleinput1.jpg" 
                        alt="Sample wilderness scene" 
                        class="w-full h-auto"
                      />
                    </div>
                  </div>
                {:else if isProcessing}
                  <div class="absolute inset-0 flex items-center justify-center bg-gray-900/80">
                    <div class="text-center">
                      <div class="text-blue-400 animate-spin h-8 w-8 border-4 border-current border-t-transparent rounded-full mb-4"></div>
                      <div class="text-blue-200 text-lg">
                        Analyzing image...
                        <div class="text-sm text-blue-300 mt-2">Detecting objects and mapping coordinates</div>
                      </div>
                    </div>
                  </div>
                {:else}
                  <div in:fly={{ y: 20, duration: 600 }}>
                    <div class="grid md:grid-cols-2 gap-8">
                      <div class="relative">
                        <img 
                          src="/sampleoutput1.jpg" 
                          alt="Detection results" 
                          class="w-full h-auto rounded-lg cursor-zoom-in hover:opacity-90 transition-opacity"
                          on:click={() => enlargeImage('/sampleoutput1.jpg')}
                        />
                        <div class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-base">
                          Detection View
                        </div>
                      </div>
                      <div class="relative">
                        <img 
                          src="/sampleoutput2.jpg" 
                          alt="Map view" 
                          class="w-full h-auto rounded-lg cursor-zoom-in hover:opacity-90 transition-opacity"
                          on:click={() => enlargeImage('/sampleoutput2.jpg')}
                        />
                        <div class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-base">
                          Map View
                        </div>
                      </div>
                    </div>
                  </div>
                {/if}
              </div>

              <!-- Enlarged Image Modal -->
              {#if enlargedImage}
                <div 
                  class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-zoom-out"
                  on:click={closeEnlarged}
                >
                  <div class="relative w-[90vw] h-[90vh] flex items-center justify-center">
                    <img 
                      src={enlargedImage} 
                      alt="Enlarged view"
                      class="max-w-full max-h-full object-contain"
                    />
                    <button 
                      class="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
                      on:click|stopPropagation={closeEnlarged}
                    >
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              {/if}

              <!-- Controls -->
              <div class="space-y-4">
                <div class="flex gap-4 justify-center">
                  <button 
                    class="flex-1 max-w-xs bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
                    on:click={handleProcess}
                    disabled={isProcessing}
                  >
                    {#if !showResults}
                      Process Image
                    {:else}
                      Reset Demo
                    {/if}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">Search & Rescue Applications</h2>
          <p class="text-blue-100 text-lg max-w-3xl mx-auto">
            Advanced detection capabilities for every SAR scenario
          </p>
        </div>

        <!-- Primary Use Cases -->
        <div class="grid md:grid-cols-2 gap-12 mb-16">
          <!-- Mountain SAR -->
          <div class="group relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <div class="relative bg-gray-900 p-8 rounded-lg border border-blue-800/50 hover:border-blue-400/50 transition-all duration-300">
              <div class="flex items-center gap-6 mb-8">
                <div class="h-16 w-16 bg-blue-900/50 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span class="text-4xl">🏔️</span>
                </div>
                <div>
                  <h3 class="text-2xl font-bold mb-1">Mountain SAR</h3>
                  <p class="text-blue-200">High-Altitude & Remote Operations</p>
                </div>
              </div>
              <div class="space-y-6">
                {#each [
                  { title: "All-Weather Operations", desc: "Thermal and infrared imaging in snow, rain, and fog", icon: "❄️" },
                  { title: "Night Vision Enhancement", desc: "Advanced low-light image processing for 24/7 operations", icon: "🌙" },
                  { title: "GPS Precision", desc: "Sub-meter accuracy for precise location tracking", icon: "📍" },
                  { title: "Avalanche Assessment", desc: "Snow pack analysis and risk detection", icon: "⚠️" }
                ] as feature}
                  <div class="flex items-start gap-4 group/item">
                    <div class="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-800/50 transition-colors">
                      <span class="text-xl">{feature.icon}</span>
                    </div>
                    <div>
                      <div class="font-semibold text-blue-100 mb-1">{feature.title}</div>
                      <p class="text-sm text-blue-200">{feature.desc}</p>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          </div>

          <!-- Wilderness SAR - Similar structure to Mountain SAR -->
          <div class="group relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <div class="relative bg-gray-900 p-8 rounded-lg border border-blue-800/50 hover:border-blue-400/50 transition-all duration-300">
              <div class="flex items-center gap-6 mb-8">
                <div class="h-16 w-16 bg-blue-900/50 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span class="text-4xl">🌲</span>
                </div>
                <div>
                  <h3 class="text-2xl font-bold mb-1">Wilderness SAR</h3>
                  <p class="text-blue-200">Forest & Remote Area Operations</p>
                </div>
              </div>
              <div class="space-y-6">
                {#each [
                  { title: "Canopy Penetration", desc: "Multi-spectral imaging through dense foliage", icon: "🌳" },
                  { title: "Trail Analysis", desc: "AI detection of human tracks and markers", icon: "👣" },
                  { title: "Wildlife Detection", desc: "Identify potential hazards and interference", icon: "🦌" }
                ] as feature}
                  <div class="flex items-start gap-4 group/item">
                    <div class="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-800/50 transition-colors">
                      <span class="text-xl">{feature.icon}</span>
                    </div>
                    <div>
                      <div class="font-semibold text-blue-100 mb-1">{feature.title}</div>
                      <p class="text-sm text-blue-200">{feature.desc}</p>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>

        <!-- Additional SAR Scenarios -->
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          {#each [
            {
              icon: "🌊",
              title: "Maritime SAR",
              description: "Coastal & water operations",
              features: [
                { icon: "🌙", text: "Night operations" },
                { icon: "🌊", text: "Current mapping" },
                { icon: "🔍", text: "Debris tracking" }
              ],
              gradient: "from-blue-400 to-blue-600"
            },
            {
              icon: "❄️",
              title: "Arctic SAR",
              description: "Cold weather operations",
              features: [
                { icon: "🧊", text: "Ice thickness mapping" },
                { icon: "🌨️", text: "Whiteout navigation" },
                { icon: "🌡️", text: "Cold weather ops" }
              ],
              gradient: "from-blue-300 to-blue-500"
            },
            {
              icon: "🏜️",
              title: "Desert SAR",
              description: "Arid environment operations",
              features: [
                { icon: "🌡️", text: "Heat signature analysis" },
                { icon: "🗺️", text: "Dune mapping" },
                { icon: "💧", text: "Water source detection" }
              ],
              gradient: "from-blue-500 to-blue-700"
            }
          ] as scenario}
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r {scenario.gradient} rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative h-full bg-gray-900 p-6 rounded-lg border border-blue-800/50 hover:border-blue-400/50 transition-all duration-300">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span class="text-2xl">{scenario.icon}</span>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold">{scenario.title}</h3>
                    <p class="text-sm text-blue-200">{scenario.description}</p>
                  </div>
                </div>
                <ul class="space-y-3">
                  {#each scenario.features as feature}
                    <li class="flex items-center text-sm text-blue-100 gap-2">
                      <span class="text-lg">{feature.icon}</span>
                      {feature.text}
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- Solution Comparison Flowchart -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-6">Solution Workflows</h2>
        <p class="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Compare our three solutions to find the perfect fit for your operations
        </p>

        <div class="grid md:grid-cols-3 gap-12">
          <!-- Standard Solution Flow -->
          <div class="relative">
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                Standard Solution
              </div>
            </div>
            <div class="border-2 border-blue-100 rounded-lg p-6 pt-8">
              <div class="space-y-4">
                {#each [
                  { step: 1, title: "Purchase Tokens", desc: "Buy processing credits", icon: "💳" },
                  { step: 2, title: "Upload Images", desc: "Use dropbox interface", icon: "📤" },
                  { step: 3, title: "Process Images", desc: "AI detection runs", icon: "⚙️" },
                  { step: 4, title: "View Results", desc: "Access interactive map", icon: "🗺️" }
                ] as { step, title, desc, icon }}
                  <div class="flex items-start gap-4 relative">
                    {#if step !== 4}
                      <div class="absolute h-full w-0.5 bg-blue-100 left-6 top-8"></div>
                    {/if}
                    <div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <div class="font-semibold">{title}</div>
                      <div class="text-sm text-gray-600">{desc}</div>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          </div>

          <!-- Raspberry Pi Solution Flow -->
          <div class="relative">
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div class="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                Pi Solution
              </div>
            </div>
            <div class="border-2 border-green-100 rounded-lg p-6 pt-8">
              <div class="space-y-4">
                {#each [
                  { step: 1, title: "Receive Pi Kit", desc: "Pre-configured hardware", icon: "📦" },
                  { step: 2, title: "Insert SD Card", desc: "Plug & play setup", icon: "💾" },
                  { step: 3, title: "Connect Camera", desc: "Automatic configuration", icon: "📸" },
                  { step: 4, title: "Images Auto-Upload", desc: "Real-time processing", icon: "🔄" },
                  { step: 5, title: "Access Dashboard", desc: "View live results", icon: "📊" }
                ] as { step, title, desc, icon }}
                  <div class="flex items-start gap-4 relative">
                    {#if step !== 5}
                      <div class="absolute h-full w-0.5 bg-green-100 left-6 top-8"></div>
                    {/if}
                    <div class="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <div class="font-semibold">{title}</div>
                      <div class="text-sm text-gray-600">{desc}</div>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          </div>

          <!-- Enterprise Solution Flow -->
          <div class="relative">
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">
                Enterprise Solution
              </div>
            </div>
            <div class="border-2 border-purple-100 rounded-lg p-6 pt-8">
              <div class="space-y-4">
                {#each [
                  { step: 1, title: "Define Requirements", desc: "Custom setup consultation", icon: "📋" },
                  { step: 2, title: "Drone Deployment", desc: "Professional team arrives", icon: "🚁" },
                  { step: 3, title: "Auto Flight Paths", desc: "Waypoint mapping", icon: "🎯" },
                  { step: 4, title: "Real-time Processing", desc: "Instant AI analysis", icon: "⚡" },
                  { step: 5, title: "Full Management", desc: "Complete data handling", icon: "✨" }
                ] as { step, title, desc, icon }}
                  <div class="flex items-start gap-4 relative">
                    {#if step !== 5}
                      <div class="absolute h-full w-0.5 bg-purple-100 left-6 top-8"></div>
                    {/if}
                    <div class="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <div class="font-semibold">{title}</div>
                      <div class="text-sm text-gray-600">{desc}</div>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>

        <!-- Key Differences Summary -->
        <div class="mt-16 grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="font-semibold mb-2">You Handle Everything</div>
            <p class="text-sm text-gray-600">Perfect for teams with existing equipment who want AI processing</p>
          </div>
          <div class="text-center">
            <div class="font-semibold mb-2">Automated Processing</div>
            <p class="text-sm text-gray-600">Ideal for continuous monitoring with minimal setup</p>
          </div>
          <div class="text-center">
            <div class="font-semibold mb-2">Full-Service Solution</div>
            <p class="text-sm text-gray-600">Complete management of your search operations</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced SAR Capabilities -->
    <section class="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16">Advanced SAR Capabilities</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
            <div class="text-3xl mb-4">🌡️</div>
            <h3 class="text-xl font-semibold mb-3">Multi-Spectrum Analysis</h3>
            <ul class="space-y-2 text-blue-100">
              <li>• Thermal imaging for night ops</li>
              <li>• Infrared detection</li>
              <li>• UV tracking capabilities</li>
              <li>• Weather penetration modes</li>
            </ul>
          </div>

          <div class="bg-gray-900/50 backdrop-blur p-6 rounded-lg border border-blue-800/50">
            <div class="flex items-center gap-3 mb-6">
              <span class="text-2xl">🎯</span>
              <h3 class="text-xl font-semibold">Precision Navigation</h3>
            </div>
            <ul class="space-y-3">
              <li>• Sub-meter GPS accuracy</li>
              <li>• Real-time position tracking</li>
              <li>• Obstacle avoidance</li>
              <li>• Automated flight paths</li>
            </ul>
          </div>

          <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
            <div class="text-3xl mb-4">📡</div>
            <h3 class="text-xl font-semibold mb-3">Real-Time Integration</h3>
            <ul class="space-y-2 text-blue-100">
              <li>• Live video streaming</li>
              <li>• Team GPS tracking</li>
              <li>• Weather data integration</li>
              <li>• Emergency protocols</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Response Time Comparison -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16">Emergency Response Metrics</h2>
        <div class="grid md:grid-cols-2 gap-12">
          <div class="relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25"></div>
            <div class="relative bg-white p-8 rounded-lg border border-blue-100">
              <h3 class="text-xl font-semibold mb-6">Traditional Methods</h3>
              <ul class="space-y-4">
                <li class="flex items-center justify-between">
                  <span>Average Search Time</span>
                  <span class="font-semibold">4-6 hours</span>
                </li>
                <li class="flex items-center justify-between">
                  <span>Area Coverage</span>
                  <span class="font-semibold">2-3 sq km/hour</span>
                </li>
                <li class="flex items-center justify-between">
                  <span>Team Size Required</span>
                  <span class="font-semibold">10-15 people</span>
                </li>
                <li class="flex items-center justify-between">
                  <span>Night Operations</span>
                  <span class="font-semibold text-red-500">Limited</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25"></div>
            <div class="relative bg-white p-8 rounded-lg border border-blue-100">
              <h3 class="text-xl font-semibold mb-6">Our Drone AI System</h3>
              <ul class="space-y-4">
                <li class="flex items-center justify-between">
                  <span>Average Search Time</span>
                  <span class="font-semibold text-green-600">45-60 mins</span>
                </li>
                <li class="flex items-center justify-between">
                  <span>Area Coverage</span>
                  <span class="font-semibold text-green-600">20-25 sq km/hour</span>
                </li>
                <li class="flex items-center justify-between">
                  <span>Team Size Required</span>
                  <span class="font-semibold text-green-600">2-3 people</span>
                </li>
                <li class="flex items-center justify-between">
                  <span>Night Operations</span>
                  <span class="font-semibold text-green-600">24/7 Capable</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ROI Calculator -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div class="relative z-10">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-4">Real Impact, Real Numbers</h2>
          <p class="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            See how our solutions transform search and rescue operations with measurable results
          </p>

          <div class="max-w-4xl mx-auto bg-white/90 backdrop-blur-lg rounded-lg shadow-xl p-8 border border-blue-100">
            <div class="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 class="text-lg font-semibold mb-6 text-blue-800">Resource Optimization</h3>
                <ul class="space-y-4">
                  <li class="flex items-center justify-between">
                    <span>Personnel Hours Saved</span>
                    <span class="font-bold text-green-600">2,400+</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span>Fuel & Transport</span>
                    <span class="font-bold text-green-600">-70%</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span>Equipment Maintenance</span>
                    <span class="font-bold text-green-600">-45%</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-lg font-semibold mb-6 text-blue-800">Performance Metrics</h3>
                <ul class="space-y-4">
                  <li class="flex items-center justify-between">
                    <span>Success Rate Increase</span>
                    <span class="font-bold text-green-600">+85%</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span>Response Time</span>
                    <span class="font-bold text-green-600">-75%</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span>Coverage Area</span>
                    <span class="font-bold text-green-600">+900%</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-lg font-semibold mb-6 text-blue-800">Annual Impact</h3>
                <ul class="space-y-4">
                  <li class="flex items-center justify-between">
                    <span>Missions Supported</span>
                    <span class="font-bold text-blue-600">500+</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span>Area Covered</span>
                    <span class="font-bold text-blue-600">50,000 km²</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span>Lives Impacted</span>
                    <span class="font-bold text-blue-600">1,000+</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg">
              <div class="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 class="font-semibold text-blue-800 mb-2">First Year ROI</h4>
                  <div class="text-4xl font-bold text-blue-600">385%</div>
                  <p class="text-sm text-gray-600 mt-2">Average return across all implementations</p>
                </div>
                <div>
                  <h4 class="font-semibold text-blue-800 mb-2">Time to Value</h4>
                  <div class="text-4xl font-bold text-blue-600">&lt;48h</div>
                  <p class="text-sm text-gray-600 mt-2">From deployment to first successful mission</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-6">Choose Your Solution</h2>
        <p class="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          From self-service to full enterprise support, we have a solution that fits your needs
        </p>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Standard Solution -->
          <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 class="text-2xl font-semibold mb-2">Standard</h3>
            <p class="text-gray-600 mb-6">Self-service image processing</p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <span class="text-green-500 mr-2 mt-1">✓</span>
                <div>
                  <span class="font-semibold">Simple Upload System</span>
                  <p class="text-sm text-gray-600">Easy-to-use dropbox for batch uploads</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2 mt-1">✓</span>
                <div>
                  <span class="font-semibold">Smart Search</span>
                  <p class="text-sm text-gray-600">Filter by keywords, date, and image content</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2 mt-1">✓</span>
                <div>
                  <span class="font-semibold">Metadata Mapping</span>
                  <p class="text-sm text-gray-600">Automatic GPS plotting of images</p>
                </div>
              </li>
            </ul>
            <div class="bg-blue-50 p-4 rounded-lg mb-6">
              <div class="text-blue-800 font-semibold mb-2">Token-Based Pricing</div>
              <div class="text-sm text-blue-700">Starting at $10 for 100 tokens</div>
            </div>
            <button class="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          <!-- Raspberry Pi Solution -->
          <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 class="text-2xl font-semibold mb-2">Automated Pi Solution</h3>
            <p class="text-gray-600 mb-6">Pre-configured hardware & software</p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <span class="text-green-500 mr-2 mt-1">✓</span>
                <div>
                  <span class="font-semibold">Pre-configured Raspberry Pi</span>
                  <p class="text-sm text-gray-600">Plug & play setup with SD card</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2 mt-1">✓</span>
                <div>
                  <span class="font-semibold">Automatic Upload</span>
                  <p class="text-sm text-gray-600">Images automatically processed & displayed</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2 mt-1">✓</span>
                <div>
                  <span class="font-semibold">Custom Filters</span>
                  <p class="text-sm text-gray-600">Up to 5 custom detection filters</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2 mt-1">✓</span>
                <div>
                  <span class="font-semibold">Priority Support</span>
                  <p class="text-sm text-gray-600">Dedicated technical assistance</p>
                </div>
              </li>
            </ul>
            <div class="bg-blue-50 p-4 rounded-lg mb-6">
              <div class="text-blue-800 font-semibold mb-2">Hardware + Software</div>
              <div class="text-sm text-blue-700">Starting at $600 with tokens included</div>
            </div>
            <button class="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
              Order Package
            </button>
          </div>

          <!-- Enterprise Solution -->
          <div class="bg-white p-8 rounded-lg shadow-sm border border-blue-200 ring-1 ring-blue-500">
            <div class="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Full-Service Solution
            </div>
            <h3 class="text-2xl font-semibold mb-2">Enterprise</h3>
            <p class="text-gray-600 mb-6">Complete drone & software solution</p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <span class="text-green-500 mr-2 mt-1">✓</span>
                <div>
                  <span class="font-semibold">Professional Drone Service</span>
                  <p class="text-sm text-gray-600">Our team handles all drone operations</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2 mt-1">✓</span>
                <div>
                  <span class="font-semibold">Automated Waypoint Mapping</span>
                  <p class="text-sm text-gray-600">Optimized flight paths & coverage</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2 mt-1">✓</span>
                <div>
                  <span class="font-semibold">Unlimited Customization</span>
                  <p class="text-sm text-gray-600">Custom filters & detection models</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2 mt-1">✓</span>
                <div>
                  <span class="font-semibold">Full Data Management</span>
                  <p class="text-sm text-gray-600">Automated uploads & organization</p>
                </div>
              </li>
            </ul>
            <div class="bg-blue-50 p-4 rounded-lg mb-6">
              <div class="text-blue-800 font-semibold mb-2">Custom Enterprise Pricing</div>
              <div class="text-sm text-blue-700">Contact us for a tailored solution</div>
            </div>
            <div class="space-y-3">
              <button class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-md hover:from-blue-700 hover:to-blue-800 transition-colors">
                Contact Sales
              </button>
              <button class="w-full border border-blue-600 text-blue-600 py-3 rounded-md hover:bg-blue-50 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-white">Trusted by Search & Rescue Teams</h2>
          <p class="text-blue-200 text-lg max-w-3xl mx-auto">
            Real stories from teams saving lives with our technology
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Mountain Rescue -->
          <div class="group relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <div class="relative bg-gray-900 p-8 rounded-lg border border-blue-800/50 hover:border-blue-400/50 transition-all duration-300">
              <div class="flex items-center gap-4 mb-6">
                <div class="h-14 w-14 bg-blue-900/50 rounded-xl flex items-center justify-center">
                  <span class="text-3xl">🏔️</span>
                </div>
                <div>
                  <div class="text-yellow-400 text-lg mb-1">★★★★★</div>
                  <div class="text-blue-200">Mountain Rescue</div>
                </div>
              </div>
              <blockquote class="text-blue-100 mb-6">
                "This system has revolutionized our alpine search operations. The thermal imaging and AI detection have helped us locate missing hikers in conditions where traditional methods would be impossible."
              </blockquote>
              <div class="flex items-center justify-between">
                <div class="text-sm text-blue-300">Colorado Search & Rescue Team</div>
                <div class="text-sm text-blue-400">Response Time: -72%</div>
              </div>
            </div>
          </div>

          <!-- Wilderness SAR -->
          <div class="group relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <div class="relative bg-gray-900 p-8 rounded-lg border border-blue-800/50 hover:border-blue-400/50 transition-all duration-300">
              <div class="flex items-center gap-4 mb-6">
                <div class="h-14 w-14 bg-blue-900/50 rounded-xl flex items-center justify-center">
                  <span class="text-3xl">🌲</span>
                </div>
                <div>
                  <div class="text-yellow-400 text-lg mb-1">★★★★★</div>
                  <div class="text-blue-200">Wilderness SAR</div>
                </div>
              </div>
              <blockquote class="text-blue-100 mb-6">
                "The multi-drone system allows us to cover vast areas of wilderness quickly and efficiently. We've reduced our average response time by 65% since implementing this technology."
              </blockquote>
              <div class="flex items-center justify-between">
                <div class="text-sm text-blue-300">National Park Service SAR Unit</div>
                <div class="text-sm text-blue-400">Area Coverage: +800%</div>
              </div>
            </div>
          </div>

          <!-- Emergency Response -->
          <div class="group relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <div class="relative bg-gray-900 p-8 rounded-lg border border-blue-800/50 hover:border-blue-400/50 transition-all duration-300">
              <div class="flex items-center gap-4 mb-6">
                <div class="h-14 w-14 bg-blue-900/50 rounded-xl flex items-center justify-center">
                  <span class="text-3xl">🚨</span>
                </div>
                <div>
                  <div class="text-yellow-400 text-lg mb-1">★★★★★</div>
                  <div class="text-blue-200">Emergency Response</div>
                </div>
              </div>
              <blockquote class="text-blue-100 mb-6">
                "The real-time coordination and AI analysis have been game-changers for our disaster response operations. The ability to quickly map and assess large areas has saved countless lives."
              </blockquote>
              <div class="flex items-center justify-between">
                <div class="text-sm text-blue-300">State Emergency Services</div>
                <div class="text-sm text-blue-400">Success Rate: +85%</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Testimonial Stats -->
        <div class="grid md:grid-cols-4 gap-6 mt-12">
          {#each [
            { number: "150+", label: "SAR Teams", icon: "👥" },
            { number: "1,000+", label: "Missions", icon: "🎯" },
            { number: "24/7", label: "Support", icon: "🌍" },
            { number: "98%", label: "Satisfaction", icon: "⭐" }
          ] as stat}
            <div class="text-center p-4 rounded-lg bg-blue-900/30 border border-blue-800/50">
              <div class="text-2xl mb-2">{stat.icon}</div>
              <div class="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div class="text-sm text-blue-200">{stat.label}</div>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your<br />Search & Rescue Operations?
          </h2>
          <p class="text-blue-100 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Join over 150 SAR teams already using our platform to save more lives
          </p>
          
          <div class="flex flex-col md:flex-row gap-6 justify-center max-w-lg mx-auto">
            <button class="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <span class="relative text-lg font-semibold">Start Free Trial</span>
            </button>
            
            <button class="px-8 py-4 bg-gray-900/50 backdrop-blur border border-blue-400/30 text-blue-100 rounded-lg hover:bg-gray-900/70 hover:border-blue-400/50 transition-all duration-300 text-lg font-semibold">
              Schedule Demo
            </button>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {#each [
            { label: "Response Time", value: "-75%", desc: "Average reduction" },
            { label: "Coverage Area", value: "10x", desc: "Increased range" },
            { label: "Setup Time", value: "<48h", desc: "Ready to deploy" },
            { label: "Success Rate", value: "+85%", desc: "Mission improvement" }
          ] as stat}
            <div class="text-center p-4 rounded-lg bg-blue-900/30 border border-blue-800/50 hover:border-blue-400/50 transition-all duration-300">
              <div class="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div>
              <div class="font-semibold text-white mb-1">{stat.label}</div>
              <div class="text-sm text-blue-200">{stat.desc}</div>
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
