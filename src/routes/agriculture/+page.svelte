<script>
    import { fade } from 'svelte/transition';
    import { fly } from 'svelte/transition';

    // Features array
    const features = [
      {
        icon: "🔍",
        title: "Bulk Image Processing",
        description: "Upload thousands of field images simultaneously. Our AI identifies and creates bounding boxes around every object, providing detailed analysis and summaries for each image"
      },
      {
        icon: "🗺️",
        title: "Automated Mapping",
        description: "We automatically extract GPS coordinates from image metadata to plot every analyzed image on an interactive map, giving you a comprehensive view of your fields"
      },
      {
        icon: "📱",
        title: "Data Export & Search",
        description: "Export all analysis results to CSV for your own use. Our powerful search tool helps you filter through thousands of results to find specific objects or conditions"
      },
      {
        icon: "📊",
        title: "Detailed Analytics",
        description: "Get comprehensive object detection, condition analysis, and location data for every image. Use our insights to inform your farming decisions"
      },
      {
        icon: "🤖",
        title: "AI Object Detection",
        description: "Our advanced AI identifies and categorizes everything in your images - from equipment to crop conditions - with precise bounding boxes and confidence scores"
      },
      {
        icon: "🚁",
        title: "Enterprise Imaging",
        description: "Optional drone service for enterprise clients. We handle image capture, processing, and analysis, delivering ready-to-use data for your operations"
      }
    ];
  
    // Stats array
    const stats = [
      { value: "99.9%", label: "Detection Accuracy" },
      { value: "10K+", label: "Images/Hour" },
      { value: "100%", label: "Data Ownership" },
      { value: "24/7", label: "Processing" }
    ];
  
    // Demo handling
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
    <main>
      <!-- Hero Section -->
      <section class="py-20 px-4 text-center bg-gradient-to-br from-emerald-100 via-emerald-50 to-white relative overflow-hidden">
        <!-- Animated Background Elements -->
        <div class="absolute inset-0">
          <div class="absolute top-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div class="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        <div class="relative z-10">
          <h1 class="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-emerald-900 leading-tight py-2">
            AgriFinder: Smart Farming Analytics Platform
          </h1>
          <p class="text-gray-900 text-xl mb-10 max-w-3xl mx-auto font-medium">
            Transform your farming operations with AI-powered crop health monitoring, precision irrigation management, and automated yield predictions. Perfect for small farms to large agricultural enterprises.
          </p>
          <div class="flex gap-4 justify-center">
            <button class="bg-emerald-600 text-white px-8 py-3 rounded-md hover:bg-emerald-700 transition-colors">
              Try Platform Free
            </button>
            <button class="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-md hover:bg-emerald-50 transition-colors">
              View Solutions
            </button>
          </div>
        </div>
      </section>
  
      <!-- Add between sections -->
      <div class="relative h-32 -mt-16 -mb-16 z-10">
        <div class="absolute inset-0 transform skew-y-3 bg-gradient-to-r from-emerald-600 to-emerald-400 opacity-10"></div>
      </div>
  
      <!-- Core Features Section -->
      <section class="py-20 px-4 bg-gradient-to-b from-white to-emerald-50 relative">
        <div class="absolute inset-0 bg-dot-pattern opacity-5"></div>
        <div class="relative z-10">
          <h2 class="text-3xl font-bold text-center mb-16 text-gray-900">Core Platform Features</h2>
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
              {#each features as feature}
                <div class="group p-8 rounded-xl bg-white border border-gray-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div class="h-16 flex items-center">
                    <div class="text-4xl transform transition-all duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 class="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p class="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              {/each}
            </div>
            <!-- Stats Section -->
            <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              {#each stats as stat}
                <div class="text-center p-6 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <div class="text-3xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                  <div class="text-gray-700 font-medium">{stat.label}</div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </section>
  
      <!-- Interactive Demo Section -->
      <section class="py-20 bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 text-white relative overflow-hidden">
        <!-- Floating Elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-5xl font-bold mb-6 text-white drop-shadow-lg">
              See It In Action
            </h2>
            <p class="text-emerald-100 text-lg max-w-3xl mx-auto font-medium">
              Experience how our AI analyzes crop health
            </p>
          </div>
  
          <div class="max-w-6xl mx-auto">
            <!-- Demo Interface -->
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-gray-900 p-4 rounded-lg border border-emerald-800/50">
                <!-- Sample Image Display -->
                <div class="bg-gray-800 rounded-lg mb-6 overflow-hidden relative">
                  {#if !isProcessing && !showResults}
                    <div in:fly={{ y: 20, duration: 600 }}>
                      <div class="max-w-4xl mx-auto">
                        <img 
                          src="/sampleinput2.jpg" 
                          alt="Sample agricultural field" 
                          class="w-full h-auto"
                        />
                      </div>
                    </div>
                  {:else if isProcessing}
                    <div class="absolute inset-0 flex items-center justify-center bg-gray-900/80">
                      <div class="text-center">
                        <div class="text-emerald-400 animate-spin h-8 w-8 border-4 border-current border-t-transparent rounded-full mb-4"></div>
                        <div class="text-emerald-200 text-lg">
                          Analyzing field conditions...
                          <div class="text-sm text-emerald-300 mt-2">Analyzing crop health and irrigation needs</div>
                        </div>
                      </div>
                    </div>
                  {:else}
                    <div in:fly={{ y: 20, duration: 600 }}>
                      <div class="grid md:grid-cols-2 gap-8">
                        <button 
                          class="relative block w-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg"
                          on:click={() => enlargeImage('/sampleoutput3.jpg')}
                          on:keydown={(e) => e.key === 'Enter' && enlargeImage('/sampleoutput3.jpg')}
                          aria-label="View enlarged crop health analysis"
                        >
                          <img 
                            src="/sampleoutput3.jpg" 
                            alt="Crop health analysis results" 
                            class="w-full h-auto rounded-lg hover:opacity-90 transition-opacity"
                          />
                          <div class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-base">
                            Crop Health Analysis
                          </div>
                        </button>
                        <button 
                          class="relative block w-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg"
                          on:click={() => enlargeImage('/sampleoutput4.jpg')}
                          on:keydown={(e) => e.key === 'Enter' && enlargeImage('/sampleoutput4.jpg')}
                          aria-label="View enlarged irrigation analysis"
                        >
                          <img 
                            src="/sampleoutput4.jpg" 
                            alt="Irrigation analysis results" 
                            class="w-full h-auto rounded-lg hover:opacity-90 transition-opacity"
                          />
                          <div class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-base">
                            Irrigation Analysis
                          </div>
                        </button>
                      </div>
                    </div>
                  {/if}
                </div>
  
                <!-- Enlarged Image Modal -->
                {#if enlargedImage}
                  <div 
                    role="dialog"
                    aria-label="Enlarged image view"
                    class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                    on:click={closeEnlarged}
                    on:keydown={(e) => e.key === 'Escape' && closeEnlarged()}
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
                        aria-label="Close enlarged view"
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
                      class="flex-1 max-w-xs bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
                      on:click={handleProcess}
                      disabled={isProcessing}
                    >
                      {#if !showResults}
                        Analyze Field
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
      <section class="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-gray-900 text-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4">Agricultural Applications</h2>
            <p class="text-emerald-100 text-lg max-w-3xl mx-auto">
              Advanced monitoring capabilities for every farming need
            </p>
          </div>
  
          <!-- Primary Use Cases -->
          <div class="grid md:grid-cols-3 gap-8 mb-16">
            <!-- First Row -->
            <!-- Large Scale Farming -->
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-gray-900 p-8 rounded-lg border border-emerald-800/50 hover:border-emerald-400/50 transition-all duration-300">
                <div class="flex items-center gap-6 mb-8">
                  <div class="h-16 w-16 bg-emerald-900/50 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span class="text-4xl">🏔</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold mb-1">Large Scale Farming</h3>
                    <p class="text-emerald-200">10,000+ acre operations</p>
                  </div>
                </div>
                <div class="space-y-6">
                  {#each [
                    { title: "Bulk Processing", desc: "Process 1000s of drone images daily with GPS mapping", icon: "🗺️" },
                    { title: "Equipment Tracking", desc: "Identify and locate machinery across fields", icon: "🚜" },
                    { title: "Damage Assessment", desc: "Quick analysis of storm or pest damage areas", icon: "🔍" },
                    { title: "CSV Exports", desc: "Export findings for integration with farm management software", icon: "📊" }
                  ] as feature}
                    <div class="flex items-start gap-4 group/item">
                      <div class="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-emerald-800/50 transition-colors">
                        <span class="text-xl">{feature.icon}</span>
                      </div>
                      <div>
                        <div class="font-semibold text-emerald-100 mb-1">{feature.title}</div>
                        <p class="text-sm text-emerald-200">{feature.desc}</p>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
  
            <!-- Research & Development -->
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-gray-900 p-8 rounded-lg border border-emerald-800/50 hover:border-emerald-400/50 transition-all duration-300">
                <div class="flex items-center gap-6 mb-8">
                  <div class="h-16 w-16 bg-emerald-900/50 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span class="text-4xl">🌲</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold mb-1">Research & Development</h3>
                    <p class="text-emerald-200">Agricultural research facilities</p>
                  </div>
                </div>
                <div class="space-y-6">
                  {#each [
                    { title: "Trial Plot Analysis", desc: "Process thousands of test plot images daily", icon: "🔍" },
                    { title: "Object Detection", desc: "Identify specific crop varieties and conditions", icon: "🎯" },
                    { title: "Data Organization", desc: "Auto-sort results by plot number and date", icon: "📁" },
                    { title: "Batch Exports", desc: "Export findings in research-ready formats", icon: "📊" }
                  ] as feature}
                    <div class="flex items-start gap-4 group/item">
                      <div class="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-emerald-800/50 transition-colors">
                        <span class="text-xl">{feature.icon}</span>
                      </div>
                      <div>
                        <div class="font-semibold text-emerald-100 mb-1">{feature.title}</div>
                        <p class="text-sm text-emerald-200">{feature.desc}</p>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
  
            <!-- Insurance & Assessment -->
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-gray-900 p-8 rounded-lg border border-emerald-800/50 hover:border-emerald-400/50 transition-all duration-300">
                <div class="flex items-center gap-6 mb-8">
                  <div class="h-16 w-16 bg-emerald-900/50 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span class="text-4xl">🏗️</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold mb-1">Insurance & Assessment</h3>
                    <p class="text-emerald-200">Damage evaluation & claims</p>
                  </div>
                </div>
                <div class="space-y-6">
                  {#each [
                    { title: "Rapid Processing", desc: "Analyze thousands of damage assessment images", icon: "⚡" },
                    { title: "Damage Detection", desc: "AI identifies and measures affected areas", icon: "🎯" },
                    { title: "Location Mapping", desc: "GPS plotting of all documented damage", icon: "🗺️" },
                    { title: "Report Generation", desc: "Export findings in insurance-ready formats", icon: "📄" }
                  ] as feature}
                    <div class="flex items-start gap-4 group/item">
                      <div class="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-emerald-800/50 transition-colors">
                        <span class="text-xl">{feature.icon}</span>
                      </div>
                      <div>
                        <div class="font-semibold text-emerald-100 mb-1">{feature.title}</div>
                        <p class="text-sm text-emerald-200">{feature.desc}</p>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
  
            <!-- Second Row -->
            <!-- Precision Agriculture -->
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-gray-900 p-8 rounded-lg border border-emerald-800/50 hover:border-emerald-400/50 transition-all duration-300">
                <div class="flex items-center gap-6 mb-8">
                  <div class="h-16 w-16 bg-emerald-900/50 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span class="text-4xl">🌱</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold mb-1">Crop Health Analysis</h3>
                    <p class="text-emerald-200 text-sm">Early disease and stress detection</p>
                  </div>
                </div>
                <div class="space-y-6">
                  {#each [
                    { title: "Disease Identification", desc: "Identify and diagnose plant diseases", icon: "🌱" },
                    { title: "Nutrient Deficiency Detection", desc: "Detect nutrient deficiencies in crops", icon: "🌱" },
                    { title: "Growth Stage Monitoring", desc: "Monitor crop growth stages", icon: "🌱" },
                    { title: "Irrigation Analysis", desc: "Optimize water distribution", icon: "💧" }
                  ] as feature}
                    <div class="flex items-start gap-4 group/item">
                      <div class="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-emerald-800/50 transition-colors">
                        <span class="text-xl">{feature.icon}</span>
                      </div>
                      <div>
                        <div class="font-semibold text-emerald-100 mb-1">{feature.title}</div>
                        <p class="text-sm text-emerald-200">{feature.desc}</p>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
  
            <!-- Orchard Management -->
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-gray-900 p-8 rounded-lg border border-emerald-800/50 hover:border-emerald-400/50 transition-all duration-300">
                <div class="flex items-center gap-6 mb-8">
                  <div class="h-16 w-16 bg-emerald-900/50 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span class="text-4xl">🌳</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold mb-1">Orchard Management</h3>
                    <p class="text-emerald-200">Tree crop operations</p>
                  </div>
                </div>
                <div class="space-y-6">
                  {#each [
                    { title: "Tree Counting", desc: "Automated inventory management", icon: "🔢" },
                    { title: "Health Monitoring", desc: "Individual tree health assessment", icon: "🌡️" },
                    { title: "Growth Tracking", desc: "Monitor canopy development", icon: "📏" },
                    { title: "Irrigation Analysis", desc: "Optimize water distribution", icon: "💧" }
                  ] as feature}
                    <div class="flex items-start gap-4 group/item">
                      <div class="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-emerald-800/50 transition-colors">
                        <span class="text-xl">{feature.icon}</span>
                      </div>
                      <div>
                        <div class="font-semibold text-emerald-100 mb-1">{feature.title}</div>
                        <p class="text-sm text-emerald-200">{feature.desc}</p>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
  
            <!-- Compliance & Certification -->
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div class="relative bg-gray-900 p-8 rounded-lg border border-emerald-800/50 hover:border-emerald-400/50 transition-all duration-300">
                <div class="flex items-center gap-6 mb-8">
                  <div class="h-16 w-16 bg-emerald-900/50 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span class="text-4xl">📜</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold mb-1">Compliance & Certification</h3>
                    <p class="text-emerald-200">Regulatory documentation</p>
                  </div>
                </div>
                <div class="space-y-6">
                  {#each [
                    { title: "Area Verification", desc: "Precise field measurements for compliance", icon: "📏" },
                    { title: "Practice Documentation", desc: "Track and verify farming practices", icon: "📝" },
                    { title: "Audit Support", desc: "Generate compliance reports", icon: "✅" },
                    { title: "Historical Records", desc: "Maintain detailed operation logs", icon: "📁" }
                  ] as feature}
                    <div class="flex items-start gap-4 group/item">
                      <div class="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-emerald-800/50 transition-colors">
                        <span class="text-xl">{feature.icon}</span>
                      </div>
                      <div>
                        <div class="font-semibold text-emerald-100 mb-1">{feature.title}</div>
                        <p class="text-sm text-emerald-200">{feature.desc}</p>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
          </div>
  
          <!-- Solution Comparison Flowchart -->
          <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4">
              <h2 class="text-3xl font-bold text-center mb-6 text-gray-900">Solution Workflows</h2>
              <p class="text-gray-700 text-center mb-16 max-w-3xl mx-auto font-medium">
                Compare our three solutions to find the perfect fit for your operations
              </p>
  
              <div class="grid md:grid-cols-3 gap-12">
                <!-- Standard Solution Flow -->
                <div class="relative">
                  <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div class="bg-emerald-200 text-emerald-800 px-4 py-2 rounded-full font-semibold shadow-md">
                      Standard Solution
                    </div>
                  </div>
                  <div class="border-2 border-emerald-100 rounded-lg p-6 pt-8">
                    <div class="space-y-4">
                      {#each [
                        { step: 1, title: "Purchase Tokens", desc: "Buy processing credits", icon: "💳" },
                        { step: 2, title: "Upload Images", desc: "Use dropbox interface", icon: "📤" },
                        { step: 3, title: "Process Images", desc: "AI detection runs", icon: "⚙️" },
                        { step: 4, title: "View Results", desc: "Access interactive map", icon: "🗺️" }
                      ] as { step, title, desc, icon }}
                        <div class="flex items-start gap-4 relative">
                          {#if step !== 4}
                            <div class="absolute h-full w-0.5 bg-emerald-100 left-6 top-8"></div>
                          {/if}
                          <div class="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                            {icon}
                          </div>
                          <div>
                            <div class="font-semibold text-gray-900">{title}</div>
                            <div class="text-sm text-gray-700">{desc}</div>
                          </div>
                        </div>
                      {/each}
                    </div>
                  </div>
                </div>
  
                <!-- Raspberry Pi Solution Flow -->
                <div class="relative">
                  <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div class="bg-emerald-200 text-emerald-800 px-4 py-2 rounded-full font-semibold shadow-md">
                      Pi Solution
                    </div>
                  </div>
                  <div class="border-2 border-emerald-100 rounded-lg p-6 pt-8">
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
                            <div class="absolute h-full w-0.5 bg-emerald-100 left-6 top-8"></div>
                          {/if}
                          <div class="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                            {icon}
                          </div>
                          <div>
                            <div class="font-semibold text-gray-900">{title}</div>
                            <div class="text-sm text-gray-700">{desc}</div>
                          </div>
                        </div>
                      {/each}
                    </div>
                  </div>
                </div>
  
                <!-- Enterprise Solution Flow -->
                <div class="relative">
                  <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div class="bg-emerald-300 text-emerald-900 px-4 py-2 rounded-full font-semibold shadow-md">
                      Enterprise Solution
                    </div>
                  </div>
                  <div class="border-2 border-emerald-200 rounded-lg p-6 pt-8">
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
                            <div class="absolute h-full w-0.5 bg-emerald-200 left-6 top-8"></div>
                          {/if}
                          <div class="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                            {icon}
                          </div>
                          <div>
                            <div class="font-semibold text-gray-900">{title}</div>
                            <div class="text-sm text-gray-700">{desc}</div>
                          </div>
                        </div>
                      {/each}
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Key Differences Summary -->
              <div class="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div class="text-center">
                  <div class="font-semibold mb-2 text-gray-900">You Handle Everything</div>
                  <p class="text-sm text-gray-700 font-medium">Perfect for teams with existing equipment who want AI processing</p>
                </div>
                <div class="text-center">
                  <div class="font-semibold mb-2 text-gray-900">Automated Processing</div>
                  <p class="text-sm text-gray-700 font-medium">Ideal for continuous monitoring with minimal setup</p>
                </div>
                <div class="text-center">
                  <div class="font-semibold mb-2 text-gray-900">Full-Service Solution</div>
                  <p class="text-sm text-gray-700 font-medium">Complete management of your search operations</p>
                </div>
              </div>
            </div>
          </section>
  
          <!-- Advanced Capabilities Section -->
          <section class="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-gray-900 text-white relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 relative z-10">
              <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4">Advanced Agricultural Analysis</h2>
                <p class="text-emerald-100 text-lg max-w-3xl mx-auto">
                  Comprehensive monitoring for every farming need
                </p>
              </div>

              <div class="grid md:grid-cols-3 gap-8">
                <!-- First Card -->
                <div class="group relative">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                  <div class="relative bg-gray-900/90 p-8 rounded-lg border border-emerald-400/50">
                    <div class="flex items-center gap-4 mb-6">
                      <div class="h-14 w-14 bg-emerald-900/50 rounded-xl flex items-center justify-center">
                        <span class="text-3xl">🌱</span>
                      </div>
                      <div>
                        <h3 class="text-xl font-bold mb-1">Crop Health Analysis</h3>
                        <p class="text-emerald-200 text-sm">Early disease and stress detection</p>
                      </div>
                    </div>
                    <ul class="space-y-3">
                      <li class="flex items-center gap-2">
                        <span class="text-emerald-400">✓</span>
                        <span>Disease identification</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="text-emerald-400">✓</span>
                        <span>Nutrient deficiency detection</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="text-emerald-400">✓</span>
                        <span>Growth stage monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Second Card -->
                <div class="group relative">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                  <div class="relative bg-gray-900/90 p-8 rounded-lg border border-emerald-400/50">
                    <div class="flex items-center gap-4 mb-6">
                      <div class="h-14 w-14 bg-emerald-900/50 rounded-xl flex items-center justify-center">
                        <span class="text-3xl">💧</span>
                      </div>
                      <div>
                        <h3 class="text-xl font-bold mb-1">Irrigation Analysis</h3>
                        <p class="text-emerald-200 text-sm">Precision water management</p>
                      </div>
                    </div>
                    <ul class="space-y-3">
                      <li class="flex items-center gap-2">
                        <span class="text-emerald-400">✓</span>
                        <span>Soil moisture mapping</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="text-emerald-400">✓</span>
                        <span>Irrigation efficiency tracking</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="text-emerald-400">✓</span>
                        <span>Water stress detection</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Third Card -->
                <div class="group relative">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                  <div class="relative bg-gray-900/90 p-8 rounded-lg border border-emerald-400/50">
                    <div class="flex items-center gap-4 mb-6">
                      <div class="h-14 w-14 bg-emerald-900/50 rounded-xl flex items-center justify-center">
                        <span class="text-3xl">📊</span>
                      </div>
                      <div>
                        <h3 class="text-xl font-bold mb-1">Yield Prediction</h3>
                        <p class="text-emerald-200 text-sm">Data-driven harvest planning</p>
                      </div>
                    </div>
                    <ul class="space-y-3">
                      <li class="flex items-center gap-2">
                        <span class="text-emerald-400">✓</span>
                        <span>Growth rate analysis</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="text-emerald-400">✓</span>
                        <span>Historical comparison</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="text-emerald-400">✓</span>
                        <span>Harvest timing optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <!-- Metrics Comparison Section -->
          <section class="py-20 bg-gradient-to-b from-white to-emerald-50">
            <div class="max-w-7xl mx-auto px-4">
              <h2 class="text-3xl font-bold text-center mb-4 text-gray-900">Traditional vs AI-Powered Agriculture</h2>
              <p class="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                See how our solution transforms traditional farming operations
              </p>
              
              <div class="grid md:grid-cols-2 gap-12">
                <!-- Traditional Methods -->
                <div class="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:border-red-200 transition-all duration-300">
                  <div class="flex items-center gap-4 mb-8">
                    <div class="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                      <span class="text-2xl">👨‍🌾</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">Traditional Methods</h3>
                  </div>
                  <div class="space-y-6">
                    <div class="flex justify-between items-center">
                      <span class="text-gray-900 font-medium">Field Assessment Time</span>
                      <span class="text-red-600 font-semibold">2-3 days/field</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-900 font-medium">Coverage Rate</span>
                      <span class="text-red-600 font-semibold">5 acres/hour</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-900 font-medium">Labor Required</span>
                      <span class="text-red-600 font-semibold">3-4 people</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-900 font-medium">Data Accuracy</span>
                      <span class="text-red-600 font-semibold">~60-70%</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-900 font-medium">Issue Detection</span>
                      <span class="text-red-600 font-semibold">Visual Only</span>
                    </div>
                  </div>
                </div>
  
                <!-- Our Drone AI System -->
                <div class="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:border-emerald-200 transition-all duration-300">
                  <div class="flex items-center gap-4 mb-8">
                    <div class="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                      <span class="text-2xl">🤖</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">AI-Powered Solution</h3>
                  </div>
                  <div class="space-y-6">
                    <div class="flex justify-between items-center">
                      <span class="text-gray-900 font-medium">Field Assessment Time</span>
                      <span class="text-emerald-600 font-semibold">2-3 hours/field</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-900 font-medium">Coverage Rate</span>
                      <span class="text-emerald-600 font-semibold">100 acres/hour</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-900 font-medium">Labor Required</span>
                      <span class="text-emerald-600 font-semibold">1 operator</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-900 font-medium">Data Accuracy</span>
                      <span class="text-emerald-600 font-semibold">>99%</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-900 font-medium">Issue Detection</span>
                      <span class="text-emerald-600 font-semibold">AI + Multispectral</span>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Key Benefits Summary -->
              <div class="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div class="text-center">
                  <div class="text-2xl mb-2">⚡</div>
                  <div class="font-semibold text-gray-900 mb-2">20x Faster</div>
                  <p class="text-sm text-gray-600">Complete field assessments in hours instead of days</p>
                </div>
                <div class="text-center">
                  <div class="text-2xl mb-2">📈</div>
                  <div class="font-semibold text-gray-900 mb-2">Higher Accuracy</div>
                  <p class="text-sm text-gray-600">AI-powered detection catches issues human eyes miss</p>
                </div>
                <div class="text-center">
                  <div class="text-2xl mb-2">💰</div>
                  <div class="font-semibold text-gray-900 mb-2">Cost Effective</div>
                  <p class="text-sm text-gray-600">Reduce labor costs while improving crop yields</p>
                </div>
              </div>
            </div>
          </section>
  
          <!-- Real Impact Section -->
          <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4">
              <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4 text-gray-900">Real Farm Impact, Real Results</h2>
                <p class="text-gray-600 text-lg max-w-3xl mx-auto font-medium">
                  See how our technology is transforming agricultural operations
                </p>
              </div>

              <div class="grid md:grid-cols-4 gap-8">
                <!-- Impact Stats -->
                {#each [
                  { value: "+40%", label: "Crop Yield", desc: "Average increase" },
                  { value: "-35%", label: "Water Usage", desc: "Resource savings" },
                  { value: "98%", label: "Early Detection", desc: "Issue prevention" },
                  { value: "-45%", label: "Labor Hours", desc: "Efficiency gain" }
                ] as stat}
                  <div class="bg-emerald-50 p-6 rounded-lg border border-emerald-200 hover:border-emerald-300 transition-all duration-300 shadow-sm">
                    <div class="text-center">
                      <div class="text-3xl font-bold text-emerald-700 mb-2">{stat.value}</div>
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
                    <div class="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                      <span class="text-2xl">📈</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">Improved Farm Efficiency</h3>
                  </div>
                  <p class="text-gray-700 mb-6">
                    Farms using our platform report significant improvements in resource utilization and crop yields
                  </p>
                  <ul class="space-y-4">
                    {#each [
                      { value: "40%", label: "Increase in crop yield" },
                      { value: "35%", label: "Reduction in water usage" },
                      { value: "3x", label: "Faster issue detection" }
                    ] as stat}
                      <li class="flex justify-between items-center">
                        <span class="text-gray-700">{stat.label}</span>
                        <span class="text-emerald-700 font-bold">{stat.value}</span>
                      </li>
                    {/each}
                  </ul>
                </div>

                <div class="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                  <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                      <span class="text-2xl">💰</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">Cost Savings</h3>
                  </div>
                  <p class="text-gray-700 mb-6">
                    Optimize resource allocation and reduce operational costs with AI-powered insights
                  </p>
                  <ul class="space-y-4">
                    {#each [
                      { value: "-45%", label: "Labor costs" },
                      { value: "-30%", label: "Input waste" },
                      { value: "+95%", label: "Resource efficiency" }
                    ] as stat}
                      <li class="flex justify-between items-center">
                        <span class="text-gray-700">{stat.label}</span>
                        <span class="text-emerald-700 font-bold">{stat.value}</span>
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
                      <span class="text-emerald-500 mr-2 mt-1">✓</span>
                      <div>
                        <span class="font-semibold text-gray-900">Simple Upload System</span>
                        <p class="text-sm text-gray-600">Easy-to-use dropbox for batch uploads</p>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <span class="text-emerald-500 mr-2 mt-1">✓</span>
                      <div>
                        <span class="font-semibold text-gray-900">Smart Search</span>
                        <p class="text-sm text-gray-600">Filter by keywords, date, and image content</p>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <span class="text-emerald-500 mr-2 mt-1">✓</span>
                      <div>
                        <span class="font-semibold text-gray-900">Metadata Mapping</span>
                        <p class="text-sm text-gray-600">Automatic GPS plotting of images</p>
                      </div>
                    </li>
                  </ul>
                  <div class="bg-emerald-50 p-4 rounded-lg mb-6">
                    <div class="text-emerald-800 font-semibold mb-2">Token-Based Pricing</div>
                    <div class="text-sm text-emerald-700">Starting at $10 for 100 tokens</div>
                  </div>
                  <button class="w-full bg-emerald-600 text-white py-3 rounded-md hover:bg-emerald-700 transition-colors">
                    Get Started
                  </button>
                </div>
  
                <!-- Raspberry Pi Solution -->
                <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                  <h3 class="text-2xl font-semibold mb-2 text-gray-900">Automated Pi Solution</h3>
                  <p class="text-gray-600 mb-6">Pre-configured hardware & software</p>
                  <ul class="space-y-3 mb-8">
                    <li class="flex items-start">
                      <span class="text-emerald-500 mr-2 mt-1">✓</span>
                      <div>
                        <span class="font-semibold text-gray-900">Pre-configured Raspberry Pi</span>
                        <p class="text-sm text-gray-600">Plug & play setup with SD card</p>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <span class="text-emerald-500 mr-2 mt-1">✓</span>
                      <div>
                        <span class="font-semibold text-gray-900">Automatic Upload</span>
                        <p class="text-sm text-gray-600">Images automatically processed & displayed</p>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <span class="text-emerald-500 mr-2 mt-1">✓</span>
                      <div>
                        <span class="font-semibold text-gray-900">Custom Filters</span>
                        <p class="text-sm text-gray-600">Up to 5 custom detection filters</p>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <span class="text-emerald-500 mr-2 mt-1">✓</span>
                      <div>
                        <span class="font-semibold text-gray-900">Priority Support</span>
                        <p class="text-sm text-gray-600">Dedicated technical assistance</p>
                      </div>
                    </li>
                  </ul>
                  <div class="bg-emerald-50 p-4 rounded-lg mb-6">
                    <div class="text-emerald-800 font-semibold mb-2">Hardware + Software</div>
                    <div class="text-sm text-emerald-700">Starting at $600 with tokens included</div>
                  </div>
                  <button class="w-full bg-emerald-600 text-white py-3 rounded-md hover:bg-emerald-700 transition-colors">
                    Order Package
                  </button>
                </div>
  
                <!-- Enterprise Solution -->
                <div class="bg-white p-8 rounded-lg shadow-sm border border-emerald-200 ring-1 ring-emerald-500">
                  <div class="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                    Full-Service Solution
                  </div>
                  <h3 class="text-2xl font-semibold mb-2 text-gray-900">Enterprise</h3>
                  <p class="text-gray-600 mb-6">Complete drone & software solution</p>
                  <ul class="space-y-3 mb-8">
                    <li class="flex items-start">
                      <span class="text-emerald-500 mr-2 mt-1">✓</span>
                      <div>
                        <span class="font-semibold text-gray-900">Professional Drone Service</span>
                        <p class="text-sm text-gray-600">Our team handles all drone operations</p>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <span class="text-emerald-500 mr-2 mt-1">✓</span>
                      <div>
                        <span class="font-semibold text-gray-900">Automated Waypoint Mapping</span>
                        <p class="text-sm text-gray-600">Optimized flight paths & coverage</p>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <span class="text-emerald-500 mr-2 mt-1">✓</span>
                      <div>
                        <span class="font-semibold text-gray-900">Unlimited Customization</span>
                        <p class="text-sm text-gray-600">Custom filters & detection models</p>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <span class="text-emerald-500 mr-2 mt-1">✓</span>
                      <div>
                        <span class="font-semibold text-gray-900">Full Data Management</span>
                        <p class="text-sm text-gray-600">Automated uploads & organization</p>
                      </div>
                    </li>
                  </ul>
                  <div class="bg-emerald-50 p-4 rounded-lg mb-6">
                    <div class="text-gray-900 font-semibold mb-2">Custom Enterprise Pricing</div>
                    <div class="text-sm text-emerald-700">Contact us for a tailored solution</div>
                  </div>
                  <div class="space-y-3">
                    <button class="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 rounded-md hover:from-emerald-700 hover:to-emerald-800 transition-colors">
                      Contact Sales
                    </button>
                    <button class="w-full border border-emerald-600 text-emerald-600 py-3 rounded-md hover:bg-emerald-50 transition-colors">
                      View Case Studies
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <!-- Testimonials -->
          <section class="py-20 bg-white relative overflow-hidden">
            <!-- Background Elements -->
            <div class="absolute inset-0 bg-emerald-50/50"></div>

            <div class="max-w-7xl mx-auto px-4 relative z-10">
              <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4 text-gray-900">Trusted by Leading Farms</h2>
                <p class="text-gray-600 text-lg max-w-3xl mx-auto font-medium">
                  Real stories from farms transforming their operations
                </p>
              </div>

              <div class="grid md:grid-cols-3 gap-8">
                <!-- Large Scale Farm -->
                <div class="group relative">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                  <div class="relative bg-white p-8 rounded-lg border border-emerald-200 shadow-lg hover:border-emerald-300 transition-all duration-300">
                    <div class="flex items-center gap-4 mb-6">
                      <div class="h-14 w-14 bg-emerald-50 rounded-xl flex items-center justify-center">
                        <span class="text-3xl">🌾</span>
                      </div>
                      <div>
                        <div class="text-yellow-400 text-lg mb-1">★★★★★</div>
                        <div class="text-gray-900 font-medium">Large Scale Farm</div>
                      </div>
                    </div>
                    <blockquote class="text-gray-700 mb-6 font-medium">
                      "The AI analysis has transformed how we monitor our 15,000 acres. We can now detect issues early and optimize our resource usage across the entire operation."
                    </blockquote>
                    <div class="flex items-center justify-between">
                      <div class="text-sm text-gray-600 font-medium">Midwest Grain Cooperative</div>
                      <div class="text-sm text-emerald-700 font-semibold">Efficiency: +45%</div>
                    </div>
                  </div>
                </div>

                <!-- Medium Farm -->
                <div class="group relative">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                  <div class="relative bg-white p-8 rounded-lg border border-emerald-200 shadow-lg hover:border-emerald-300 transition-all duration-300">
                    <div class="flex items-center gap-4 mb-6">
                      <div class="h-14 w-14 bg-emerald-50 rounded-xl flex items-center justify-center">
                        <span class="text-3xl">🚜</span>
                      </div>
                      <div>
                        <div class="text-yellow-400 text-lg mb-1">★★★★★</div>
                        <div class="text-gray-900 font-medium">Family Farm</div>
                      </div>
                    </div>
                    <blockquote class="text-gray-700 mb-6 font-medium">
                      "The precision irrigation insights alone saved us 35% on water usage. The ROI was clear within the first growing season."
                    </blockquote>
                    <div class="flex items-center justify-between">
                      <div class="text-sm text-gray-600 font-medium">Thompson Family Farms</div>
                      <div class="text-sm text-emerald-700 font-semibold">Water Savings: 35%</div>
                    </div>
                  </div>
                </div>

                <!-- Organic Farm -->
                <div class="group relative">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                  <div class="relative bg-white p-8 rounded-lg border border-emerald-200 shadow-lg hover:border-emerald-300 transition-all duration-300">
                    <div class="flex items-center gap-4 mb-6">
                      <div class="h-14 w-14 bg-emerald-50 rounded-xl flex items-center justify-center">
                        <span class="text-3xl">🥬</span>
                      </div>
                      <div>
                        <div class="text-yellow-400 text-lg mb-1">★★★★★</div>
                        <div class="text-gray-900 font-medium">Organic Farm</div>
                      </div>
                    </div>
                    <blockquote class="text-gray-700 mb-6 font-medium">
                      "Early pest detection and precise treatment targeting helped us maintain organic certification while improving yields."
                    </blockquote>
                    <div class="flex items-center justify-between">
                      <div class="text-sm text-gray-600 font-medium">Green Valley Organics</div>
                      <div class="text-sm text-emerald-700 font-semibold">Yield Increase: 40%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <!-- CTA Section -->
          <section class="py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-gray-900 relative overflow-hidden">
            <!-- Background Elements -->
            <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div class="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div class="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
  
            <div class="max-w-7xl mx-auto px-4 relative z-10">
              <div class="text-center mb-12">
                <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Ready to Transform Your<br />Agricultural Operations?
                </h2>
                <p class="text-emerald-100 text-lg md:text-xl mb-12 max-w-3xl mx-auto font-medium">
                  Join over 500 farms already using our platform to optimize their operations
                </p>
                
                <div class="flex flex-col md:flex-row gap-6 justify-center max-w-lg mx-auto">
                  <button class="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                    <span class="relative text-lg font-semibold">Start Free Trial</span>
                  </button>
                  
                  <button class="px-8 py-4 bg-gray-900/50 backdrop-blur border border-emerald-400/30 text-emerald-100 rounded-lg hover:bg-gray-900/70 hover:border-emerald-400/50 transition-all duration-300 text-lg font-semibold">
                    Schedule Demo
                  </button>
                </div>
              </div>
  
              <!-- Quick Stats -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
                {#each [
                  { label: "Resource Savings", value: "30%", desc: "Average reduction" },
                  { label: "Processing Speed", value: "10K+", desc: "Images per hour" },
                  { label: "Setup Time", value: "<24h", desc: "Ready to analyze" },
                  { label: "Detection Rate", value: "99.9%", desc: "Object accuracy" }
                ] as stat}
                  <div class="text-center p-4 rounded-lg bg-gray-900/80 border border-emerald-400/50 hover:border-emerald-300 transition-all duration-300">
                    <div class="text-2xl font-bold text-emerald-300 mb-1 drop-shadow-lg">{stat.value}</div>
                    <div class="font-semibold text-emerald-200 mb-1">{stat.label}</div>
                    <div class="text-sm text-emerald-100/90 font-medium">{stat.desc}</div>
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
  
  
  