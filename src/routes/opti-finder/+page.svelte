<script>
  import { fade } from 'svelte/transition';
  import { fly } from 'svelte/transition';
  
  // Navbar component inlined
  let currentPage = "opti-finder";
  let brandName = "OptiFinder";

  const features = [
    {
      icon: "🔍",
      title: "Smart Shelf Analysis",
      description: "AI-powered detection of product placement, gaps, and optimization opportunities in real-time"
    },
    {
      icon: "📊",
      title: "Space Utilization",
      description: "Maximize shelf space efficiency with intelligent product placement recommendations"
    },
    {
      icon: "⚡",
      title: "Real-time Monitoring",
      description: "Instant alerts for out-of-stock items, misplaced products, and planogram compliance issues"
    },
    {
      icon: "📱",
      title: "Mobile Integration",
      description: "Capture and analyze shelf images directly from your smartphone for immediate insights"
    },
    {
      icon: "🎯",
      title: "Planogram Compliance",
      description: "Automated verification of product placement against planned layouts with deviation reporting"
    },
    {
      icon: "📈",
      title: "Performance Analytics",
      description: "Track shelf performance metrics and identify optimization opportunities over time"
    },
    {
      icon: "🤖",
      title: "Automated Recommendations",
      description: "Get AI-powered suggestions for optimal product placement and inventory management"
    },
    {
      icon: "💡",
      title: "Visual Insights",
      description: "Clear visual representations of shelf analysis with highlighted areas for improvement"
    }
  ];

  const stats = [
    { value: "95%", label: "Space Optimization" },
    { value: "99.9%", label: "Detection Accuracy" },
    { value: "-60%", label: "Manual Audits" },
    { value: "24/7", label: "Monitoring" }
  ];

  const testimonials = [
    {
      quote: "We optimized our entire store in one afternoon during regular inventory. The ROI was immediate.",
      author: "Sarah Chen",
      role: "Store Manager",
      company: "QuickMart Groceries"
    },
    {
      quote: "50 cents per shelf? It's almost too good to be true. We saw a 15% increase in sales after implementing the suggestions.",
      author: "Mike Johnson",
      role: "Owner",
      company: "Downtown Liquors"
    },
    {
      quote: "The AI recommendations are spot-on. It's like having a retail expert on staff 24/7.",
      author: "Lisa Rodriguez",
      role: "Operations Director",
      company: "SuperPharm"
    }
  ];

  const demoExamples = {
    grocery: {
      title: "Grocery Store",
      image: "/demos/grocery-before.jpg",
      resultImage: "/demos/grocery-after.jpg"
    },
    liquor: {
      title: "Liquor Store",
      image: "/demos/liquor-before.jpg",
      resultImage: "/demos/liquor-after.jpg"
    },
    convenience: {
      title: "Convenience Store",
      image: "/demos/convenience-before.jpg",
      resultImage: "/demos/convenience-after.jpg"
    },
    electronics: {
      title: "Electronics Store",
      image: "/demos/electronics-before.jpg",
      resultImage: "/demos/electronics-after.jpg"
    }
  };

  let isProcessing = false;
  let showResults = false;
  let enlargedImage = null;
  let selectedIndustry = "grocery";

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
  <main>
    <!-- 1. Hero Section -->
    <section class="py-20 px-4 text-center bg-gradient-to-br from-blue-100 via-blue-50 to-white relative overflow-hidden">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      <div class="relative z-10">
        <h1 class="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 leading-tight py-2">
          Revolutionize Your Shelf Management with AI
        </h1>
        <p class="text-gray-700 text-xl mb-10 max-w-3xl mx-auto">
          Transform your retail spaces with AI-powered shelf optimization. Maximize space utilization, ensure planogram compliance, and boost sales with real-time insights and automated recommendations.
        </p>
        <div class="flex gap-4 justify-center">
          <button class="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Start Free Trial
          </button>
          <button class="border border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>

    <!-- 2. Why We're Different -->
    <section class="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            Why We're Different
          </h2>
          <p class="text-xl text-blue-100">
            The smart choice for modern retail optimization
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Cost Advantage -->
          <div class="bg-white/10 p-8 rounded-lg border border-blue-400/30">
            <div class="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl">💰</span>
            </div>
            <h3 class="text-2xl font-bold text-blue-100 mb-4">Less Than 50¢ Per Shelf</h3>
            <p class="text-blue-200 mb-6">
              Traditional consultants charge thousands and send multiple employees for weeks. We deliver instant results for pennies.
            </p>
            <ul class="space-y-3 text-blue-200">
              <li class="flex items-start gap-2">
                <span class="text-blue-300">✓</span>
                <span>No impact on store operations</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-300">✓</span>
                <span>Zero consultant overhead</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-300">✓</span>
                <span>Protect your profit margins</span>
              </li>
            </ul>
          </div>

          <!-- Speed & Convenience -->
          <div class="bg-white/10 p-8 rounded-lg border border-blue-400/30">
            <div class="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl">⚡</span>
            </div>
            <h3 class="text-2xl font-bold text-blue-100 mb-4">Instant Results</h3>
            <p class="text-blue-200 mb-6">
              No waiting for consultants or complex setup. Get optimization recommendations in seconds, any time you need them.
            </p>
            <ul class="space-y-3 text-blue-200">
              <li class="flex items-start gap-2">
                <span class="text-blue-300">✓</span>
                <span>Immediate analysis</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-300">✓</span>
                <span>24/7 availability</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-300">✓</span>
                <span>Self-service platform</span>
              </li>
            </ul>
          </div>

          <!-- Data-Backed Decisions -->
          <div class="bg-white/10 p-8 rounded-lg border border-blue-400/30">
            <div class="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl">🎯</span>
            </div>
            <h3 class="text-2xl font-bold text-blue-100 mb-4">Superior Accuracy</h3>
            <p class="text-blue-200 mb-6">
              Our AI analyzes millions of data points to provide recommendations backed by real-world retail performance.
            </p>
            <ul class="space-y-3 text-blue-200">
              <li class="flex items-start gap-2">
                <span class="text-blue-300">✓</span>
                <span>Millions of analyzed data points</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-300">✓</span>
                <span>Industry-proven strategies</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-300">✓</span>
                <span>No sales tracking needed</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Comparison Banner -->
        <div class="mt-12 bg-white/10 p-8 rounded-lg border border-blue-400/30">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-blue-100">Traditional Solutions vs OptiFinder</h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-4">
              <h4 class="text-xl font-semibold text-blue-200 mb-4">Traditional Consultants</h4>
              <ul class="space-y-3">
                <li class="flex items-center gap-2 text-blue-200">
                  <span class="text-red-400">✕</span>
                  <span>$1000s per consultant per day</span>
                </li>
                <li class="flex items-center gap-2 text-blue-200">
                  <span class="text-red-400">✕</span>
                  <span>Multiple consultants disrupting store</span>
                </li>
                <li class="flex items-center gap-2 text-blue-200">
                  <span class="text-red-400">✕</span>
                  <span>Weeks or months to complete</span>
                </li>
                <li class="flex items-center gap-2 text-blue-200">
                  <span class="text-red-400">✕</span>
                  <span>Interferes with customer experience</span>
                </li>
              </ul>
            </div>
            <div class="space-y-4">
              <h4 class="text-xl font-semibold text-blue-200 mb-4">OptiFinder</h4>
              <ul class="space-y-3">
                <li class="flex items-center gap-2 text-blue-200">
                  <span class="text-green-400">✓</span>
                  <span>Less than 50¢ per shelf</span>
                </li>
                <li class="flex items-center gap-2 text-blue-200">
                  <span class="text-green-400">✓</span>
                  <span>Zero disruption to operations</span>
                </li>
                <li class="flex items-center gap-2 text-blue-200">
                  <span class="text-green-400">✓</span>
                  <span>Results in seconds</span>
                </li>
                <li class="flex items-center gap-2 text-blue-200">
                  <span class="text-green-400">✓</span>
                  <span>Optimize anytime, anywhere</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Zero Extra Work Required -->
    <section class="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Zero Extra Work Required
          </h2>
          <p class="text-xl text-gray-600 mb-2">
            Optimize during regular inventory checks - no disruption to your workflow
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="bg-white p-8 rounded-xl border border-blue-100 mb-12">
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <span class="text-2xl">📸</span>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">Snap Photos During Inventory</h4>
                  <p class="text-gray-600">Your team simply takes pictures while doing their regular inventory checks - no extra steps needed.</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <span class="text-2xl">⚡</span>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">Get Instant AI Analysis</h4>
                  <p class="text-gray-600">Receive optimization recommendations before inventory count is even complete.</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <span class="text-2xl">📈</span>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">Implement at Your Pace</h4>
                  <p class="text-gray-600">Apply improvements during regular restocking - no special arrangements needed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Interactive Demo -->
    <section class="py-20 bg-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            See It In Action
          </h2>
          <p class="text-xl text-gray-600">
            Select an industry to see real optimization examples
          </p>
        </div>

        <!-- Industry Selection -->
        <div class="max-w-4xl mx-auto mb-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            {#each Object.entries(demoExamples) as [key, value]}
              <button
                class="p-4 rounded-lg border transition-all duration-300 {selectedIndustry === key ? 
                  'bg-blue-600 text-white border-blue-700' : 
                  'bg-white text-gray-700 border-gray-200 hover:border-blue-300'}"
                on:click={() => {
                  selectedIndustry = key;
                  showResults = false;
                  isProcessing = false;
                }}
              >
                <div class="text-center">
                  <div class="text-2xl mb-2">
                    {key === 'grocery' ? '🛒' :
                     key === 'liquor' ? '🍷' :
                     key === 'convenience' ? '⛽' : '📱'}
                  </div>
                  <div class="font-semibold">{demoExamples[key].title}</div>
                </div>
              </button>
            {/each}
          </div>
        </div>

        <div class="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl border border-gray-200">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Before Image -->
            <div>
              <h3 class="text-xl font-bold mb-4">Current Layout</h3>
              <div 
                class="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden cursor-pointer"
                on:click={() => enlargeImage(demoExamples[selectedIndustry].image)}
                on:keydown={(e) => e.key === 'Enter' && enlargeImage(demoExamples[selectedIndustry].image)}
                role="button"
                tabindex="0"
              >
                {#if demoExamples[selectedIndustry].image}
                  <img
                    src={demoExamples[selectedIndustry].image}
                    alt={`${demoExamples[selectedIndustry].title} current shelf layout`}
                    class="w-full h-full object-cover"
                  />
                {:else}
                  <div class="w-full h-full flex items-center justify-center text-gray-400">
                    Current Layout Image
                  </div>
                {/if}
              </div>
              <button 
                class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                on:click={handleProcess}
              >
                {#if isProcessing}
                  Analyzing {demoExamples[selectedIndustry].title} Shelf...
                {:else if showResults}
                  Try Another Layout
                {:else}
                  Analyze This Layout
                {/if}
              </button>
            </div>

            <!-- After Image -->
            <div>
              <h3 class="text-xl font-bold mb-4">Optimized Layout</h3>
              {#if isProcessing}
                <div class="aspect-video bg-gray-200 rounded-lg mb-4">
                  <div class="w-full h-full flex items-center justify-center">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                  </div>
                </div>
              {:else if showResults}
                <div 
                  class="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden cursor-pointer"
                  on:click={() => enlargeImage(demoExamples[selectedIndustry].resultImage)}
                  on:keydown={(e) => e.key === 'Enter' && enlargeImage(demoExamples[selectedIndustry].resultImage)}
                  role="button"
                  tabindex="0"
                >
                  {#if demoExamples[selectedIndustry].resultImage}
                    <img
                      src={demoExamples[selectedIndustry].resultImage}
                      alt={`${demoExamples[selectedIndustry].title} optimized shelf layout`}
                      class="w-full h-full object-cover"
                    />
                  {:else}
                    <div class="w-full h-full flex items-center justify-center text-gray-400">
                      Optimized Layout Image
                    </div>
                  {/if}
                </div>
              {:else}
                <div class="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                  Click "Analyze" to see the optimized layout
                </div>
              {/if}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Sample Analysis -->
    <section class="py-20 bg-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Sample Shelf Analysis
          </h2>
          <p class="text-xl text-gray-600 mb-2">
            See how we transform shelf photos into detailed optimization recommendations
          </p>
          <p class="text-gray-500">
            Real example from a cereal aisle analysis
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Before/After Visualization -->
          <div class="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Visual Analysis</h3>
            <div class="space-y-6">
              <div class="bg-white p-6 rounded-lg border border-gray-100">
                <h4 class="font-semibold text-blue-600 mb-2">Current Layout Issues</h4>
                <ul class="space-y-2 text-gray-600">
                  <li>• Inconsistent brand grouping</li>
                  <li>• Inefficient use of vertical space</li>
                  <li>• Gaps between products</li>
                  <li>• Mixed product categories</li>
                </ul>
              </div>
              <div class="bg-white p-6 rounded-lg border border-gray-100">
                <h4 class="font-semibold text-green-600 mb-2">Optimization Goals</h4>
                <ul class="space-y-2 text-gray-600">
                  <li>• Logical product flow</li>
                  <li>• Brand family grouping</li>
                  <li>• Eye-level premium placement</li>
                  <li>• Maximum space utilization</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Detailed Recommendations -->
          <div class="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Shelf-by-Shelf Recommendations</h3>
            <div class="space-y-6">
              <div class="bg-white p-6 rounded-lg border border-gray-100">
                <h4 class="font-semibold text-gray-900 mb-2">Top Shelf Optimization</h4>
                <ul class="space-y-3 text-gray-600">
                  <li class="flex items-start gap-2">
                    <span class="text-blue-500">→</span>
                    <span>Consolidate Crispix left, Wheaties center for visual appeal</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-blue-500">→</span>
                    <span>Remove gaps between Cracklin' Oat Bran and adjacent products</span>
                  </li>
                </ul>
              </div>

              <div class="bg-white p-6 rounded-lg border border-gray-100">
                <h4 class="font-semibold text-gray-900 mb-2">Eye-Level Optimization</h4>
                <ul class="space-y-3 text-gray-600">
                  <li class="flex items-start gap-2">
                    <span class="text-blue-500">→</span>
                    <span>Arrange Chex flavors in visual gradient: Blueberry → Chocolate → Cinnamon → Honey Nut → Wheat → Corn</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-blue-500">→</span>
                    <span>Position popular Honey Nut Chex at center-left for maximum visibility</span>
                  </li>
                </ul>
              </div>

              <div class="bg-white p-6 rounded-lg border border-gray-100">
                <h4 class="font-semibold text-gray-900 mb-2">Additional Recommendations</h4>
                <ul class="space-y-3 text-gray-600">
                  <li class="flex items-start gap-2">
                    <span class="text-green-500">✓</span>
                    <span>Update price labels for perfect alignment with products</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-500">✓</span>
                    <span>Add "New" tags to premium Cheerios Oat Crunch products</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-500">✓</span>
                    <span>Maintain backup stock for continuous shelf presence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Expected Results -->
        <div class="mt-12 bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">AI-Powered Optimization</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">Millions</div>
              <div class="text-gray-600">Data Points</div>
              <div class="text-sm text-gray-500 mt-1">Analyzed for recommendations</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">Instant</div>
              <div class="text-gray-600">Analysis</div>
              <div class="text-sm text-gray-500 mt-1">Real-time shelf optimization</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">Proven</div>
              <div class="text-gray-600">Strategies</div>
              <div class="text-sm text-gray-500 mt-1">Based on market research</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Industries We Serve -->
    <section class="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            Industries We Serve
          </h2>
          <p class="text-xl text-blue-100">
            Optimizing shelf space across diverse retail environments
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Liquor Stores -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-gray-900/50 p-6 rounded-lg border border-blue-400/30">
              <div class="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-4">
                <span class="text-2xl">🍷</span>
              </div>
              <h3 class="text-xl font-bold text-blue-100 mb-2">Liquor Stores</h3>
              <ul class="text-blue-200 space-y-2">
                <li>• Optimize premium product placement</li>
                <li>• Track seasonal inventory layouts</li>
                <li>• Maximize display space for promotions</li>
              </ul>
            </div>
          </div>

          <!-- Grocery Stores -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-gray-900/50 p-6 rounded-lg border border-blue-400/30">
              <div class="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-4">
                <span class="text-2xl">🛒</span>
              </div>
              <h3 class="text-xl font-bold text-blue-100 mb-2">Grocery Stores</h3>
              <ul class="text-blue-200 space-y-2">
                <li>• Efficient category management</li>
                <li>• Fresh produce display optimization</li>
                <li>• Cross-merchandising insights</li>
              </ul>
            </div>
          </div>

          <!-- Gas Stations -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-gray-900/50 p-6 rounded-lg border border-blue-400/30">
              <div class="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-4">
                <span class="text-2xl">⛽</span>
              </div>
              <h3 class="text-xl font-bold text-blue-100 mb-2">Convenience Stores</h3>
              <ul class="text-blue-200 space-y-2">
                <li>• Maximize limited space usage</li>
                <li>• Impulse purchase optimization</li>
                <li>• Quick-service item placement</li>
              </ul>
            </div>
          </div>

          <!-- Pharmacies -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-gray-900/50 p-6 rounded-lg border border-blue-400/30">
              <div class="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-4">
                <span class="text-2xl">💊</span>
              </div>
              <h3 class="text-xl font-bold text-blue-100 mb-2">Pharmacies</h3>
              <ul class="text-blue-200 space-y-2">
                <li>• OTC medication organization</li>
                <li>• Health product categorization</li>
                <li>• Seasonal display management</li>
              </ul>
            </div>
          </div>

          <!-- Electronics Stores -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-gray-900/50 p-6 rounded-lg border border-blue-400/30">
              <div class="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-4">
                <span class="text-2xl">📱</span>
              </div>
              <h3 class="text-xl font-bold text-blue-100 mb-2">Electronics Stores</h3>
              <ul class="text-blue-200 space-y-2">
                <li>• High-value item placement</li>
                <li>• Accessory cross-selling</li>
                <li>• Demo unit optimization</li>
              </ul>
            </div>
          </div>

          <!-- Hardware Stores -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-gray-900/50 p-6 rounded-lg border border-blue-400/30">
              <div class="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-4">
                <span class="text-2xl">🔧</span>
              </div>
              <h3 class="text-xl font-bold text-blue-100 mb-2">Hardware Stores</h3>
              <ul class="text-blue-200 space-y-2">
                <li>• Tool organization efficiency</li>
                <li>• Material storage optimization</li>
                <li>• Project-based layouts</li>
              </ul>
            </div>
          </div>

          <!-- Clothing Stores -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-gray-900/50 p-6 rounded-lg border border-blue-400/30">
              <div class="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-4">
                <span class="text-2xl">👕</span>
              </div>
              <h3 class="text-xl font-bold text-blue-100 mb-2">Clothing Stores</h3>
              <ul class="text-blue-200 space-y-2">
                <li>• Size-based organization</li>
                <li>• Seasonal collection layouts</li>
                <li>• Accessory placement strategy</li>
              </ul>
            </div>
          </div>

          <!-- Sporting Goods -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-gray-900/50 p-6 rounded-lg border border-blue-400/30">
              <div class="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-4">
                <span class="text-2xl">⚽</span>
              </div>
              <h3 class="text-xl font-bold text-blue-100 mb-2">Sporting Goods</h3>
              <ul class="text-blue-200 space-y-2">
                <li>• Equipment display optimization</li>
                <li>• Sport-specific sections</li>
                <li>• Gear compatibility grouping</li>
              </ul>
            </div>
          </div>

          <!-- Auto Parts -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-gray-900/50 p-6 rounded-lg border border-blue-400/30">
              <div class="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-4">
                <span class="text-2xl">🚗</span>
              </div>
              <h3 class="text-xl font-bold text-blue-100 mb-2">Auto Parts</h3>
              <ul class="text-blue-200 space-y-2">
                <li>• Part compatibility organization</li>
                <li>• Quick-access inventory</li>
                <li>• Brand-based categorization</li>
              </ul>
            </div>
          </div>

          <!-- Pet Stores -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-gray-900/50 p-6 rounded-lg border border-blue-400/30">
              <div class="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-4">
                <span class="text-2xl">🐾</span>
              </div>
              <h3 class="text-xl font-bold text-blue-100 mb-2">Pet Stores</h3>
              <ul class="text-blue-200 space-y-2">
                <li>• Pet food organization</li>
                <li>• Species-specific layouts</li>
                <li>• Accessory cross-selling</li>
              </ul>
            </div>
          </div>

          <!-- Office Supplies -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-gray-900/50 p-6 rounded-lg border border-blue-400/30">
              <div class="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-4">
                <span class="text-2xl">📎</span>
              </div>
              <h3 class="text-xl font-bold text-blue-100 mb-2">Office Supplies</h3>
              <ul class="text-blue-200 space-y-2">
                <li>• School season layouts</li>
                <li>• Business supply organization</li>
                <li>• Bulk item optimization</li>
              </ul>
            </div>
          </div>

          <!-- Beauty & Cosmetics -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-gray-900/50 p-6 rounded-lg border border-blue-400/30">
              <div class="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-4">
                <span class="text-2xl">💄</span>
              </div>
              <h3 class="text-xl font-bold text-blue-100 mb-2">Beauty & Cosmetics</h3>
              <ul class="text-blue-200 space-y-2">
                <li>• Brand-specific displays</li>
                <li>• Color palette organization</li>
                <li>• New product showcasing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Features -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-gray-900">
            Powerful Features for Retail Excellence
          </h2>
          <p class="text-xl text-gray-600">
            Everything you need to optimize your shelf space and boost sales
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {#each features as feature}
            <div class="group relative transform hover:scale-105 transition-all duration-300">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
              <div class="relative bg-white p-6 rounded-lg border border-blue-100 hover:border-blue-300 transition-all duration-300 shadow-lg h-[250px] flex flex-col">
                <div>
                  <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span class="text-2xl">{feature.icon}</span>
                  </div>
                  <div class="text-xl font-bold text-gray-900 mb-2">{feature.title}</div>
                </div>
                <div class="text-gray-600">{feature.description}</div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- 8. Social Proof -->
    <section class="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            What Our Users Say
          </h2>
          <p class="text-xl text-blue-100">
            Join thousands of satisfied retailers
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {#each testimonials as testimonial}
            <div class="bg-white/10 p-8 rounded-lg border border-blue-400/30">
              <div class="mb-6">
                <div class="flex gap-1 text-yellow-400 mb-4">
                  {"★".repeat(5)}
                </div>
                <p class="text-blue-100 italic">"{testimonial.quote}"</p>
              </div>
              <div>
                <p class="font-semibold text-blue-200">{testimonial.author}</p>
                <p class="text-sm text-blue-300">{testimonial.role}</p>
                <p class="text-sm text-blue-300">{testimonial.company}</p>
              </div>
            </div>
          {/each}
        </div>

        <div class="mt-12 text-center">
          <div class="inline-flex items-center gap-8 bg-white/10 px-8 py-4 rounded-full border border-blue-400/30">
            <div class="flex gap-4 items-center">
              <span class="text-blue-200">Used by</span>
              <span class="text-2xl font-bold text-white">1000+</span>
              <span class="text-blue-200">stores</span>
            </div>
            <div class="h-8 w-px bg-blue-400/30"></div>
            <div class="flex gap-4 items-center">
              <span class="text-blue-200">Over</span>
              <span class="text-2xl font-bold text-white">50,000</span>
              <span class="text-blue-200">shelves optimized</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. Call to Action -->
    <section class="py-16 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center">
          <div class="inline-block bg-white p-8 rounded-xl border border-blue-100 hover:border-blue-300 transition-colors shadow-lg">
            <div class="flex items-center justify-center gap-6 mb-6">
              <div class="text-center">
                <div class="text-4xl font-bold text-blue-600">50¢</div>
                <div class="text-sm text-gray-600">Per Shelf</div>
              </div>
              <div class="text-4xl text-gray-300">|</div>
              <div class="text-center">
                <div class="text-4xl font-bold text-blue-600">10</div>
                <div class="text-sm text-gray-600">Free Tokens</div>
              </div>
              <div class="text-4xl text-gray-300">|</div>
              <div class="text-center">
                <div class="text-4xl font-bold text-blue-600">0</div>
                <div class="text-sm text-gray-600">Setup Time</div>
              </div>
            </div>
            
            <button class="bg-blue-600 text-white px-12 py-4 rounded-lg hover:bg-blue-700 transition-colors text-xl font-semibold">
              Get Your Free Tokens
            </button>
            
            <p class="text-sm text-gray-500 mt-4">
              No credit card required • Start optimizing in seconds
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. Stats -->
    <section class="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {#each stats as stat}
            <div class="text-center">
              <div class="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                {stat.value}
              </div>
              <div class="text-blue-200">{stat.label}</div>
            </div>
          {/each}
        </div>
      </div>
    </section>
  </main>
</div>

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
      class="absolute top-4 right-4 text-white hover:text-blue-300 transition-colors"
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
        class="max-w-full max-h-[90vh] object-contain"
      />
    </div>
  </div>
{/if} 