<script>
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  const sections = [
    {
      title: "Agriculture",
      description: "AI-powered crop analysis and agricultural monitoring",
      icon: "🌾",
      link: "/agriculture",
      color: "emerald"
    },
    {
      title: "Rescue Finder",
      description: "Advanced search and rescue operations platform",
      icon: "🚁",
      link: "/rescue-finder",
      color: "red"
    },
    {
      title: "Scrap Finder",
      description: "Intelligent scrap material detection and analysis",
      icon: "♻️",
      link: "/scrap-finder",
      color: "blue"
    }
  ];

  const features = [
    {
      icon: "🎯",
      title: "Precision Detection",
      description: "99.9% accuracy in object detection and classification across all environments"
    },
    {
      icon: "⚡",
      title: "Real-time Processing",
      description: "Process thousands of images in seconds with our advanced AI algorithms"
    },
    {
      icon: "📊",
      title: "Smart Analytics",
      description: "Comprehensive data analysis and reporting for informed decision making"
    },
    {
      icon: "🔄",
      title: "Automated Workflow",
      description: "Streamline your operations with automated detection and processing"
    }
  ];

  const testimonials = [
    {
      quote: "ObjectFinder has revolutionized how we manage our agricultural operations. The AI detection is incredibly accurate.",
      author: "Agricultural Corp",
      role: "Enterprise Client"
    },
    {
      quote: "The rescue operations platform has helped us save countless lives. It's an invaluable tool for our team.",
      author: "Search & Rescue Team",
      role: "Government Partner"
    },
    {
      quote: "We've increased our scrapyard efficiency by 300% using the detection system. Outstanding ROI.",
      author: "Recycling Industries",
      role: "Business Client"
    }
  ];

  // Add floating tech terms for background animation
  const techTerms = [
    "Object Detection", "Neural Networks", "Deep Learning", "Computer Vision",
    "Real-time Analysis", "Machine Learning", "AI Processing", "Cloud Computing",
    "Edge Detection", "Pattern Recognition", "Data Analytics", "Precision Mapping"
  ];

  let currentStats = {
    accuracy: 0,
    processed: 0,
    savings: 0,
    clients: 0
  };

  let targetStats = {
    accuracy: 90,
    processed: 1000000,
    savings: 5000000,
    clients: 500
  };

  let counter = 0;
  let isVisible = false;
  let activeTab = 'enterprise';
  let scrollY;

  const mainFeatures = [
    {
      icon: "🔍",
      title: "AI Models & Prompts",
      description: [
        "Choose from multiple specialized AI models optimized for different use cases",
        "Fine-tune model selection based on accuracy needs and processing speed",
        "Leverage industry-specific custom prompts for targeted detection",
        "Adapt models to your specific scenarios and requirements"
      ]
    },
    {
      icon: "🎯",
      title: "Detection & Analysis",
      description: [
        "Get precise bounding boxes with detailed confidence scores",
        "Receive comprehensive AI-generated image descriptions",
        "Benefit from detailed object classification and analysis",
        "Monitor object conditions and environmental factors"
      ]
    },
    {
      icon: "🗺️",
      title: "Interactive Mapping",
      description: [
        "Visualize data with GPS-based image plotting",
        "Access instant image previews from map markers",
        "Utilize smart location-based clustering",
        "Navigate large datasets efficiently"
      ]
    },
    {
      icon: "🔍",
      title: "Advanced Search",
      description: [
        "Search by job dates, status, and image content",
        "Filter by detection types and confidence levels",
        "Use natural language search queries",
        "Find exactly what you need instantly"
      ]
    },
    {
      icon: "📊",
      title: "Data Export",
      description: [
        "Generate comprehensive CSV exports with all data",
        "Access detailed job-level and project-level reporting",
        "Create custom export formats for your needs",
        "Integrate with your existing systems"
      ]
    },
    {
      icon: "📝",
      title: "Metadata & Analysis",
      description: [
        "Extract comprehensive metadata automatically",
        "Get detailed AI-generated scene descriptions",
        "Receive environmental condition analysis",
        "Track capture time, location, and device info"
      ]
    },
    {
      icon: "💾",
      title: "Bulk Processing",
      description: [
        "Upload and process thousands of images at once",
        "Monitor progress in real-time",
        "Receive instant completion notifications",
        "Scale processing capacity as needed"
      ]
    },
    {
      icon: "⚡",
      title: "Processing Speed",
      description: [
        "Process thousands of images efficiently",
        "Utilize advanced AI algorithms",
        "Benefit from distributed infrastructure",
        "Optimize workload automatically"
      ]
    },
    {
      icon: "🔄",
      title: "Automated Workflow",
      description: [
        "Streamline operations with end-to-end automation",
        "Set up custom workflow rules and triggers",
        "Integrate with existing systems via API",
        "Automate result generation and reporting"
      ]
    },
    {
      icon: "📈",
      title: "Performance Analytics",
      description: [
        "Track system performance in real-time",
        "Monitor processing times and accuracy",
        "Identify optimization opportunities",
        "Generate comprehensive performance reports"
      ]
    },
    {
      icon: "🔐",
      title: "Enterprise Security",
      description: [
        "Ensure data protection with end-to-end encryption",
        "Implement role-based access control",
        "Maintain comprehensive audit logs",
        "Comply with security standards"
      ]
    },
    {
      icon: "💰",
      title: "Affordable Solutions",
      description: [
        "Plans starting from $10",
        "Solutions for every budget",
        "Flexible token-based pricing",
        "No hidden costs or fees"
      ]
    }
  ];

  // Add scroll tracking for animations
  const handleScroll = () => {
    scrollY = window.scrollY;
  };

  onMount(() => {
    // Animate stats on load
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const incrementStats = () => {
      currentStats.accuracy += (targetStats.accuracy / steps);
      currentStats.processed += (targetStats.processed / steps);
      currentStats.savings += (targetStats.savings / steps);
      currentStats.clients += (targetStats.clients / steps);
      currentStats = currentStats; // Trigger reactivity
    };

    const statsInterval = setInterval(incrementStats, interval);
    setTimeout(() => clearInterval(statsInterval), duration);

    // Simulate live counter
    const liveInterval = setInterval(() => {
      counter = Math.floor(Math.random() * 1000) + 9000;
    }, 3000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(liveInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // Calculator state
  let imagesPerMonth = 1000;
  let processingTime = 10;
  let hourlyRate = 20;

  // Reactive calculations
  $: traditionalCost = calculateTraditionalCost(imagesPerMonth, processingTime, hourlyRate);
  $: objectFinderCost = calculateObjectFinderCost(imagesPerMonth);
  $: savings = traditionalCost - objectFinderCost;
  $: savingsPercentage = Math.round((savings / traditionalCost) * 100);

  function calculateTraditionalCost(images, timePerImage, rate) {
    const totalMinutes = images * timePerImage;
    const totalHours = totalMinutes / 60;
    return totalHours * rate;
  }

  function calculateObjectFinderCost(images) {
    // Flat rate of $0.10 per image
    const ratePerImage = 0.10;
    return images * ratePerImage;
  }
</script>

<div class="min-h-screen">
  <!-- Removed inlined navigation bar, global nav will be used -->
  <main>
    <!-- 1. Hero Section -->
    <section class="relative py-32 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        
        <!-- Enhanced Floating Tech Terms -->
        <div class="absolute inset-0 overflow-hidden opacity-20">
          {#each techTerms as term, i}
            <div 
              class="absolute text-blue-200 whitespace-nowrap font-mono text-sm"
              style="
                left: {Math.random() * 100}%;
                top: {Math.random() * 100}%;
                animation: float {5 + Math.random() * 5}s infinite linear;
                animation-delay: -{Math.random() * 5}s;
              "
            >
              {term}
            </div>
          {/each}
        </div>
      </div>
      
      <div class="relative z-10 text-center">
        <!-- Enhanced Enterprise Badge -->
        <div class="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-blue-900/50 backdrop-blur-sm border border-blue-700/50">
          <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          <span class="text-blue-200 text-sm font-medium">Trusted by Fortune 500 Companies</span>
          <div class="flex items-center ml-3 pl-3 border-l border-blue-700/50">
            <span class="text-green-400 font-semibold">99.99%</span>
            <span class="text-blue-200 text-xs ml-1">Uptime</span>
          </div>
        </div>
        
        <!-- Enhanced Headline -->
        <h1 class="text-7xl font-bold mb-8 text-white leading-tight max-w-5xl mx-auto">
          Enterprise-Grade
          <span class="bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text">
            Object Detection Platform
          </span>
      </h1>
        
        <!-- Enhanced Value Proposition -->
        <div class="max-w-3xl mx-auto mb-12">
          <p class="text-xl text-blue-200 leading-relaxed">
            Harness the power of advanced AI for precise object detection and analysis. 
            Built for scale, security, and performance.
          </p>
          <div class="mt-6 flex flex-wrap justify-center gap-4 text-sm font-medium">
            <div class="flex items-center text-green-400">
              <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              90%+ Detection Accuracy
            </div>
            <div class="flex items-center text-green-400">
              <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              Enterprise-grade Security
            </div>
            <div class="flex items-center text-green-400">
              <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
              24/7 Expert Support
            </div>
          </div>
          <div class="mt-6 text-blue-300 font-semibold px-4 py-2 bg-blue-900/30 rounded-lg inline-block">
            🎁 New Users: 10 FREE tokens (Worth $1000) to start!
          </div>
        </div>

        <!-- Enhanced CTA Buttons -->
        <div class="flex flex-col md:flex-row gap-6 justify-center mb-16">
          <button class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
            <div class="absolute inset-0 bg-blue-600 transition-transform duration-300 group-hover:scale-95"></div>
            <span class="relative text-lg font-semibold text-white flex items-center justify-center">
              Start Enterprise Trial
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </span>
          </button>
          <button class="group relative px-8 py-4 rounded-lg overflow-hidden border border-blue-400 hover:border-blue-300 transition-all duration-300">
            <div class="absolute inset-0 bg-blue-600/0 transition-opacity duration-300 group-hover:bg-blue-600/10"></div>
            <span class="relative text-lg font-semibold text-blue-200 flex items-center justify-center">
              Schedule Demo
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
            </span>
          </button>
        </div>

        <!-- Enhanced Live Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div class="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
            <div class="text-3xl font-bold text-white mb-2">
              {currentStats.accuracy.toFixed(1)}%
            </div>
            <div class="text-blue-200 text-sm font-medium">Detection Accuracy</div>
            <div class="mt-2 text-xs text-blue-300/70">Industry Leading</div>
          </div>
          <div class="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
            <div class="text-3xl font-bold text-white mb-2">
              {Math.floor(currentStats.processed).toLocaleString()}+
            </div>
            <div class="text-blue-200 text-sm font-medium">Images Processed</div>
            <div class="mt-2 text-xs text-blue-300/70">Daily Volume</div>
          </div>
          <div class="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
            <div class="text-3xl font-bold text-white mb-2">
              ${Math.floor(currentStats.savings).toLocaleString()}
            </div>
            <div class="text-blue-200 text-sm font-medium">Client Savings</div>
            <div class="mt-2 text-xs text-blue-300/70">Average Annual</div>
          </div>
          <div class="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
            <div class="text-3xl font-bold text-white mb-2">
              {Math.floor(currentStats.clients)}+
            </div>
            <div class="text-blue-200 text-sm font-medium">Active Clients</div>
            <div class="mt-2 text-xs text-blue-300/70">Globally Active</div>
          </div>
        </div>
    </div>
  </section>

    <!-- What is ObjectFinder Section -->
    <section class="relative py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 text-transparent bg-clip-text leading-[1.2] pb-2">
            What is ObjectFinder?
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed">
            A revolutionary AI-powered platform that transforms how organizations detect, analyze, and process objects in images with industry-leading accuracy and speed.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Left Column: Process Steps -->
          <div class="relative">
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-10"></div>
            <div class="relative bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div class="space-y-8">
                <div class="flex items-start gap-6">
                  <div class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span class="text-2xl text-white">1</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Upload Your Images</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Seamlessly upload images through our intuitive interface. Support for bulk uploads, various formats, and direct camera integration.
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-6">
                  <div class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span class="text-2xl text-white">2</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Advanced AI Processing</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Our state-of-the-art AI models analyze your images in seconds, delivering above 90% accuracy in object detection and classification.
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-6">
                  <div class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span class="text-2xl text-white">3</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Comprehensive Results</h3>
                    <p class="text-gray-600 leading-relaxed">
                      Get detailed analysis including precise object locations, classifications, confidence scores, and actionable insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Key Benefits -->
          <div class="grid sm:grid-cols-2 gap-6">
            <div class="group relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-500"></div>
              <div class="relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-blue-100 transition duration-300">
                <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                  <span class="text-2xl">⚡</span>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">Lightning Fast</h4>
                <p class="text-gray-600">Process thousands of images in minutes with results and instant analysis.</p>
              </div>
            </div>

            <div class="group relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-500"></div>
              <div class="relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-blue-100 transition duration-300">
                <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                  <span class="text-2xl">🎯</span>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">Highly Accurate</h4>
                <p class="text-gray-600">Above 90% detection accuracy across various environments and conditions.</p>
              </div>
            </div>

            <div class="group relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-500"></div>
              <div class="relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-blue-100 transition duration-300">
                <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                  <span class="text-2xl">🔄</span>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">Fully Automated</h4>
                <p class="text-gray-600">End-to-end automation from image upload to result generation and reporting.</p>
              </div>
            </div>

            <div class="group relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-500"></div>
              <div class="relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-blue-100 transition duration-300">
                <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                  <span class="text-2xl">💰</span>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">Cost-Effective</h4>
                <p class="text-gray-600">Flexible pricing with pay-per-use model, starting at just cents per image.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Stats -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {#each [
            { value: "10x", label: "Faster Processing", icon: "⚡" },
            { value: "30%", label: "Higher Accuracy", icon: "🎯" },
            { value: "24/7", label: "Automated Analysis", icon: "🤖" },
            { value: "90%", label: "Cost Reduction", icon: "💰" }
          ] as { value, label, icon }}
            <div class="group relative transform hover:scale-105 transition-all duration-300">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
              <div class="relative bg-gray-900/60 p-6 rounded-lg border border-blue-500/20 text-center hover:border-blue-400/50 transition duration-300">
                <div class="text-2xl mb-2">{icon}</div>
                <div class="text-3xl font-bold text-blue-100 mb-1">{value}</div>
                <div class="text-sm text-blue-200/70">{label}</div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- 2. Main Features Section -->
    <section class="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white text-transparent bg-clip-text">
            Platform Features
          </h2>
          <p class="text-xl text-blue-200 leading-relaxed">
            Comprehensive capabilities designed to transform your operations with cutting-edge AI technology
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          {#each mainFeatures as feature}
            <div class="group relative transform hover:scale-105 transition-all duration-300">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
              <div class="relative bg-gray-900/90 p-8 rounded-lg border border-blue-500/20 h-full hover:border-blue-400/50 transition-all duration-300">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span class="text-3xl">{feature.icon}</span>
                  </div>
                  <h3 class="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <div class="space-y-4">
                  {#each feature.description as item}
                    <div class="flex items-start gap-3 group/item hover:translate-x-2 transition-all duration-300">
                      <span class="text-cyan-400 font-bold text-lg mt-0.5 group-hover/item:scale-110 transition-transform duration-300">→</span>
                      <span class="text-blue-100 group-hover/item:text-blue-50 transition-colors duration-300">{item}</span>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- 3. Solution Workflows Section -->
    <section class="py-16 px-4 bg-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 text-transparent bg-clip-text">
            Solution Workflows
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed">
            Choose the perfect solution tailored to your operational needs
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-12">
          <!-- Standard Solution Flow -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-white p-8 rounded-lg border border-blue-200 h-full hover:border-blue-300 transition-all duration-300 shadow-lg">
              <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div class="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                  Standard Solution
                </div>
              </div>
              <div class="space-y-6 mt-6">
                {#each [
                  { step: 1, title: "Purchase Tokens", desc: "Buy processing credits", icon: "💳" },
                  { step: 2, title: "Upload Images", desc: "Use our intuitive interface", icon: "📤" },
                  { step: 3, title: "Process Images", desc: "AI detection runs instantly", icon: "⚙️" },
                  { step: 4, title: "View Results", desc: "Access interactive dashboard", icon: "🗺️" }
                ] as { step, title, desc, icon }}
                  <div class="flex items-start gap-4 relative group/item hover:translate-x-2 transition-all duration-300">
                    {#if step !== 4}
                      <div class="absolute h-full w-0.5 bg-blue-100 left-6 top-8"></div>
                    {/if}
                    <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300">
                      {icon}
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">{title}</div>
                      <div class="text-sm text-gray-600">{desc}</div>
                    </div>
                  </div>
                {/each}
              </div>
              <div class="mt-8 pt-6 border-t border-blue-100">
                <div class="text-gray-900 font-semibold mb-2">Perfect For</div>
                <p class="text-sm text-gray-600">Teams with existing equipment who want AI processing capabilities</p>
              </div>
            </div>
          </div>

          <!-- Raspberry Pi Solution Flow -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-white p-8 rounded-lg border border-green-200 h-full hover:border-green-300 transition-all duration-300 shadow-lg">
              <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div class="bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                  Pi Solution
                </div>
              </div>
              <div class="space-y-6 mt-6">
                {#each [
                  { step: 1, title: "Receive Pi Kit", desc: "Pre-configured hardware", icon: "📦" },
                  { step: 2, title: "Insert SD Card", desc: "Plug & play setup", icon: "💾" },
                  { step: 3, title: "Connect Camera", desc: "Auto-configuration", icon: "📸" },
                  { step: 4, title: "Auto-Upload", desc: "Real-time processing", icon: "🔄" },
                  { step: 5, title: "Monitor Results", desc: "Live dashboard access", icon: "📊" }
                ] as { step, title, desc, icon }}
                  <div class="flex items-start gap-4 relative group/item hover:translate-x-2 transition-all duration-300">
                    {#if step !== 5}
                      <div class="absolute h-full w-0.5 bg-green-100 left-6 top-8"></div>
                    {/if}
                    <div class="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300">
                      {icon}
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">{title}</div>
                      <div class="text-sm text-gray-600">{desc}</div>
                    </div>
                  </div>
                {/each}
              </div>
              <div class="mt-8 pt-6 border-t border-green-100">
                <div class="text-gray-900 font-semibold mb-2">Perfect For</div>
                <p class="text-sm text-gray-600">Continuous monitoring applications requiring minimal setup</p>
              </div>
            </div>
          </div>

          <!-- Enterprise Solution Flow -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-white p-8 rounded-lg border border-purple-200 h-full hover:border-purple-300 transition-all duration-300 shadow-lg">
              <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div class="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                  Enterprise Solution
                </div>
              </div>
              <div class="space-y-6 mt-6">
                {#each [
                  { step: 1, title: "Custom Setup", desc: "Tailored consultation", icon: "📋" },
                  { step: 2, title: "Drone Fleet", desc: "Professional deployment", icon: "🚁" },
                  { step: 3, title: "Auto Paths", desc: "Smart waypoint mapping", icon: "🎯" },
                  { step: 4, title: "Live Analysis", desc: "Real-time AI processing", icon: "⚡" },
                  { step: 5, title: "Full Service", desc: "End-to-end management", icon: "✨" }
                ] as { step, title, desc, icon }}
                  <div class="flex items-start gap-4 relative group/item hover:translate-x-2 transition-all duration-300">
                    {#if step !== 5}
                      <div class="absolute h-full w-0.5 bg-purple-100 left-6 top-8"></div>
                    {/if}
                    <div class="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300">
                      {icon}
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">{title}</div>
                      <div class="text-sm text-gray-600">{desc}</div>
                    </div>
                  </div>
                {/each}
              </div>
              <div class="mt-8 pt-6 border-t border-purple-100">
                <div class="text-gray-900 font-semibold mb-2">Perfect For</div>
                <p class="text-sm text-gray-600">Organizations needing complete management of search operations</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="mt-20 text-center">
          <div class="inline-flex items-center mb-8 px-4 py-2 rounded-full bg-gray-50 backdrop-blur-sm border border-gray-200">
            <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span class="text-gray-600 text-sm">Not sure which solution fits best?</span>
          </div>
          <div class="flex flex-col md:flex-row gap-6 justify-center">
            <button class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              <div class="absolute inset-0 bg-blue-600 transition-transform duration-300 group-hover:scale-95"></div>
              <span class="relative text-lg font-semibold text-white flex items-center justify-center">
                Schedule Consultation
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Integration Showcase -->
    <section class="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white text-transparent bg-clip-text">
            Seamless Integration
          </h2>
          <p class="text-xl text-blue-200 leading-relaxed">
            ObjectFinder works with your existing tools and workflows
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Hardware Integration -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-gray-900/90 p-8 rounded-lg border border-blue-500/20 h-full hover:border-blue-400/50 transition-all duration-300">
              <div class="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <span class="text-3xl">📱</span>
              </div>
              <h3 class="text-xl font-bold mb-6 text-white">Hardware Support</h3>
              <div class="space-y-4">
                {#each ["Drones", "Mobile Devices", "Security Cameras", "Raspberry Pi", "Custom Hardware"] as item}
                  <div class="flex items-center gap-3 group/item hover:translate-x-2 transition-all duration-300">
                    <div class="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span class="text-green-400 text-sm">✓</span>
                    </div>
                    <span class="text-blue-100 group-hover/item:text-blue-50 transition-colors duration-300">{item}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>

          <!-- File Format Support -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-teal-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 h-full hover:border-cyan-400/50 transition-all duration-300">
              <div class="w-14 h-14 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <span class="text-3xl">🗂️</span>
              </div>
              <h3 class="text-xl font-bold mb-6 text-white">File Formats</h3>
              <div class="space-y-4">
                {#each ["JPEG/PNG/WebP", "TIFF/RAW", "Video Streams", "Live Feeds", "Batch Processing"] as item}
                  <div class="flex items-center gap-3 group/item hover:translate-x-2 transition-all duration-300">
                    <div class="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span class="text-green-400 text-sm">✓</span>
                    </div>
                    <span class="text-cyan-100 group-hover/item:text-cyan-50 transition-colors duration-300">{item}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>

          <!-- API & Export -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-gray-900/90 p-8 rounded-lg border border-teal-500/20 h-full hover:border-teal-400/50 transition-all duration-300">
              <div class="w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <span class="text-3xl">🔌</span>
              </div>
              <h3 class="text-xl font-bold mb-6 text-white">API & Export</h3>
              <div class="space-y-4">
                {#each ["REST API", "WebSocket Support", "CSV Export", "JSON Format", "Custom Integration"] as item}
                  <div class="flex items-center gap-3 group/item hover:translate-x-2 transition-all duration-300">
                    <div class="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span class="text-green-400 text-sm">✓</span>
                    </div>
                    <span class="text-teal-100 group-hover/item:text-teal-50 transition-colors duration-300">{item}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="mt-20 text-center">
          <div class="inline-flex items-center mb-8 px-4 py-2 rounded-full bg-blue-900/50 backdrop-blur-sm border border-blue-700/50">
            <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span class="text-blue-200 text-sm">Need custom integration support?</span>
          </div>
          <div class="flex flex-col md:flex-row gap-6 justify-center">
            <button class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              <div class="absolute inset-0 bg-blue-600 transition-transform duration-300 group-hover:scale-95"></div>
              <span class="relative text-lg font-semibold text-white flex items-center justify-center">
                Contact Our Team
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. AI Models Comparison Section -->
    <section class="py-16 px-4 bg-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 text-transparent bg-clip-text">
            Our AI Models
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed">
            Choose the perfect model for your specific needs
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Gemini 2.0 Flash Exp -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-white p-8 rounded-lg border border-blue-200 h-full hover:border-blue-300 transition-all duration-300 shadow-lg">
              <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div class="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              </div>
              <div class="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <span class="text-3xl">⚡</span>
              </div>
              <h3 class="text-2xl font-bold mb-6 text-gray-900">Gemini 2.0 Flash Exp</h3>
              
              <div class="space-y-4 mb-6">
                {#each [
                  { label: "Processing Speed", stars: 5, text: "Fastest" },
                  { label: "Accuracy", stars: 3, text: "Good" },
                  { label: "Cost Efficiency", stars: 5, text: "Most Efficient" },
                  { label: "Detail Recognition", stars: 3, text: "Basic" }
                ] as { label, stars, text }}
                  <div>
                    <div class="text-sm text-gray-600 mb-1">{label}</div>
                    <div class="flex items-center">
                      <div class="flex text-blue-600">
                        {#each Array(5) as _, i}
                          <span class={i < stars ? "text-blue-600" : "text-gray-300"}>★</span>
                        {/each}
                      </div>
                      <span class="ml-2 text-sm text-gray-900">{text}</span>
                    </div>
                  </div>
                {/each}
              </div>

              <div class="text-sm text-gray-600 mb-6">
                Perfect for high-volume processing where speed is crucial
              </div>

              <button class="w-full group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                <div class="absolute inset-0 bg-blue-600 transition-transform duration-300 group-hover:scale-95"></div>
                <span class="relative text-white font-semibold">Try Gemini 2.0</span>
              </button>
            </div>
          </div>

          <!-- Claude 3.5 Sonnet -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-white p-8 rounded-lg border border-purple-200 h-full hover:border-purple-300 transition-all duration-300 shadow-lg">
              <div class="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <span class="text-3xl">🔍</span>
              </div>
              <h3 class="text-2xl font-bold mb-6 text-gray-900">Claude 3.5 Sonnet</h3>
              
              <div class="space-y-4 mb-6">
                {#each [
                  { label: "Processing Speed", stars: 3, text: "Moderate" },
                  { label: "Accuracy", stars: 4, text: "Very Good" },
                  { label: "Cost Efficiency", stars: 3, text: "Moderate" },
                  { label: "Detail Recognition", stars: 4, text: "Detailed" }
                ] as { label, stars, text }}
                  <div>
                    <div class="text-sm text-gray-600 mb-1">{label}</div>
                    <div class="flex items-center">
                      <div class="flex text-purple-600">
                        {#each Array(5) as _, i}
                          <span class={i < stars ? "text-purple-600" : "text-gray-300"}>★</span>
                        {/each}
                      </div>
                      <span class="ml-2 text-sm text-gray-900">{text}</span>
                    </div>
                  </div>
                {/each}
              </div>

              <div class="text-sm text-gray-600 mb-6">
                Balanced performance for general-purpose detection needs
              </div>

              <button class="w-full group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                <div class="absolute inset-0 bg-purple-600 transition-transform duration-300 group-hover:scale-95"></div>
                <span class="relative text-white font-semibold">Try Claude 3.5</span>
              </button>
            </div>
          </div>

          <!-- GPT-4o -->
          <div class="group relative transform hover:scale-105 transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-white p-8 rounded-lg border border-gray-200 h-full hover:border-gray-300 transition-all duration-300 shadow-lg">
              <div class="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <span class="text-3xl">💡</span>
              </div>
              <h3 class="text-2xl font-bold mb-6 text-gray-900">GPT-4o</h3>
              
              <div class="space-y-4 mb-6">
                {#each [
                  { label: "Processing Speed", stars: 2, text: "Slowest" },
                  { label: "Accuracy", stars: 5, text: "Excellent" },
                  { label: "Cost Efficiency", stars: 2, text: "Least Efficient" },
                  { label: "Detail Recognition", stars: 5, text: "Most Detailed" }
                ] as { label, stars, text }}
                  <div>
                    <div class="text-sm text-gray-600 mb-1">{label}</div>
                    <div class="flex items-center">
                      <div class="flex text-gray-800">
                        {#each Array(5) as _, i}
                          <span class={i < stars ? "text-gray-800" : "text-gray-300"}>★</span>
                        {/each}
                      </div>
                      <span class="ml-2 text-sm text-gray-900">{text}</span>
                    </div>
                  </div>
                {/each}
              </div>

              <div class="text-sm text-gray-600 mb-6">
                Ideal for tasks requiring highest accuracy and detail recognition
              </div>

              <button class="w-full group relative px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-gray-500/25 transition-all duration-300">
                <div class="absolute inset-0 bg-gray-800 transition-transform duration-300 group-hover:scale-95"></div>
                <span class="relative text-white font-semibold">Try GPT-4o</span>
              </button>
            </div>
          </div>
        </div>

        <div class="mt-16 max-w-2xl mx-auto">
          <div class="group relative transform hover:scale-[1.01] transition-all duration-300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-white p-6 rounded-lg border border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-lg">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-2xl">💡</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Not sure which model to choose?</h4>
                  <p class="text-gray-600 text-sm">
                    Our AI will automatically recommend the best model based on your specific use case during the trial period.
                    You can also switch between models at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Comparison Table -->
    <section class="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-8">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white text-transparent bg-clip-text leading-[1.2] pb-2">
            Why Choose ObjectFinder
          </h2>
          <p class="text-xl text-blue-200 leading-relaxed">
            Experience the future of object detection with our cutting-edge solution
          </p>
        </div>

        <div class="relative">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25"></div>
          <div class="relative overflow-hidden rounded-lg">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="[&>*]:p-4 border-b border-blue-500/20">
                    <th class="text-left bg-gray-900/80">
                      <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                          <span class="text-2xl">🔄</span>
                        </div>
                        <div>
                          <div class="text-blue-100 font-bold text-lg">Features</div>
                          <div class="text-blue-300 text-sm font-normal">Compare solutions</div>
                        </div>
                      </div>
                    </th>
                    <th class="bg-blue-900/80">
                      <div class="flex flex-col items-center gap-2">
                        <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                          <span class="text-2xl">⚡</span>
                        </div>
                        <div class="text-center">
                          <div class="text-blue-100 font-bold text-lg">ObjectFinder</div>
                          <div class="text-blue-300 text-sm font-normal">AI-Powered Solution</div>
                        </div>
                      </div>
                    </th>
                    <th class="bg-gray-900/80">
                      <div class="flex flex-col items-center gap-2">
                        <div class="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center">
                          <span class="text-2xl">🔨</span>
                        </div>
                        <div class="text-center">
                          <div class="text-gray-400 font-bold text-lg">Traditional</div>
                          <div class="text-gray-500 text-sm font-normal">Manual Solutions</div>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {#each [
                    { 
                      feature: "Processing Speed",
                      desc: "Time to analyze images",
                      us: { value: "Real-time", icon: "⚡", color: "text-green-400", bg: "bg-green-500/10" },
                      them: { value: "Hours to Days", icon: "⏳", color: "text-red-400", bg: "bg-red-500/10" }
                    },
                    { 
                      feature: "Detection Accuracy",
                      desc: "Precision in object detection",
                      us: { value: "90%+", icon: "🎯", color: "text-green-400", bg: "bg-green-500/10" },
                      them: { value: "60-80%", icon: "📊", color: "text-red-400", bg: "bg-red-500/10" }
                    },
                    { 
                      feature: "Automation Level",
                      desc: "Human intervention needed",
                      us: { value: "Fully Automated", icon: "🤖", color: "text-green-400", bg: "bg-green-500/10" },
                      them: { value: "Manual Processing", icon: "👤", color: "text-red-400", bg: "bg-red-500/10" }
                    },
                    { 
                      feature: "Scalability",
                      desc: "Handling increased workload",
                      us: { value: "Unlimited", icon: "🚀", color: "text-green-400", bg: "bg-green-500/10" },
                      them: { value: "Limited by Staff", icon: "🔒", color: "text-red-400", bg: "bg-red-500/10" }
                    },
                    { 
                      feature: "Cost per Analysis",
                      desc: "Price per image processed",
                      us: { value: "Cents", icon: "💰", color: "text-green-400", bg: "bg-green-500/10" },
                      them: { value: "Dollars", icon: "💵", color: "text-red-400", bg: "bg-red-500/10" }
                    }
                  ] as { feature, desc, us, them }}
                    <tr class="group hover:bg-blue-900/30 transition-colors duration-300 border-b border-blue-500/20 [&>*]:p-4">
                      <td class="bg-gray-900/60 group-hover:bg-transparent transition-colors duration-300">
                        <div class="space-y-1">
                          <div class="font-semibold text-blue-100">{feature}</div>
                          <div class="text-sm text-blue-300">{desc}</div>
                        </div>
                      </td>
                      <td class="bg-blue-900/60 group-hover:bg-transparent transition-colors duration-300">
                        <div class="flex items-center justify-center gap-3">
                          <div class="w-10 h-10 {us.bg} rounded-lg flex items-center justify-center">
                            <span class="text-xl">{us.icon}</span>
                          </div>
                          <span class="{us.color} font-semibold">{us.value}</span>
                        </div>
                      </td>
                      <td class="bg-gray-900/60 group-hover:bg-transparent transition-colors duration-300">
                        <div class="flex items-center justify-center gap-3">
                          <div class="w-10 h-10 {them.bg} rounded-lg flex items-center justify-center">
                            <span class="text-xl">{them.icon}</span>
                          </div>
                          <span class="{them.color} font-semibold">{them.value}</span>
                        </div>
                      </td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Bottom Stats -->
        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {#each [
            { value: "10x", label: "Faster Processing", icon: "⚡" },
            { value: "30%", label: "Higher Accuracy", icon: "🎯" },
            { value: "24/7", label: "Automated Analysis", icon: "🤖" },
            { value: "90%", label: "Cost Reduction", icon: "💰" }
          ] as { value, label, icon }}
            <div class="group relative transform hover:scale-105 transition-all duration-300">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
              <div class="relative bg-gray-900/60 p-6 rounded-lg border border-blue-500/20 text-center hover:border-blue-400/50 transition duration-300">
                <div class="text-2xl mb-2">{icon}</div>
                <div class="text-3xl font-bold text-blue-100 mb-1">{value}</div>
                <div class="text-sm text-blue-200/70">{label}</div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- 7. Pricing Calculator -->
    <section class="py-16 px-4 bg-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      </div>

      <div class="max-w-4xl mx-auto relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 text-transparent bg-clip-text leading-[1.2] pb-2">
            Calculate Your Savings
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed">
            Input your numbers below to see how much you could save with ObjectFinder
          </p>
          <div class="mt-4 text-sm text-gray-500 bg-blue-50 px-4 py-2 rounded-lg inline-block">
            👉 Try adjusting the values to calculate your potential savings
          </div>
        </div>

        <div class="relative">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25"></div>
          <div class="relative bg-white p-8 rounded-lg border border-blue-200 shadow-lg">
            <div class="grid md:grid-cols-2 gap-12">
              <!-- Traditional Solution -->
              <div>
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                    <span class="text-2xl text-white">🔨</span>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">Traditional Solution</h3>
                    <p class="text-sm text-gray-600">Manual processing costs</p>
                  </div>
                </div>

                <div class="space-y-6">
                  <div class="group">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Current Monthly Image Volume</label>
                    <div class="relative">
                      <input 
                        type="number" 
                        bind:value={imagesPerMonth}
                        min="1"
                        class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                      >
                      <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                        <span class="text-sm">images/month</span>
                      </div>
                    </div>
                  </div>

                  <div class="group">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Time to Process Image (Get, Create Bounding Boxes, Map, Make Searchable)</label>
                    <div class="relative">
                      <input 
                        type="number" 
                        bind:value={processingTime}
                        min="1"
                        class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                      >
                      <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                        <span class="text-sm">mins/image</span>
                      </div>
                    </div>
                  </div>

                  <div class="group">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Employee Hourly Cost</label>
                    <div class="relative">
                      <input 
                        type="number" 
                        bind:value={hourlyRate}
                        min="1"
                        class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                      >
                      <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                        <span class="text-sm">$/hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Results -->
              <div class="flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-3 mb-6">
                    <div class="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center">
                      <span class="text-2xl text-white">💰</span>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-900">Your Savings</h3>
                      <p class="text-sm text-gray-600">Monthly comparison</p>
                    </div>
                  </div>

                  <div class="space-y-6">
                    <div class="p-6 bg-gray-50 rounded-lg border border-gray-100">
                      <div class="text-sm text-gray-600 mb-1">Traditional Cost</div>
                      <div class="text-3xl font-bold text-red-600">${traditionalCost.toFixed(2)}</div>
                      <div class="text-sm text-gray-500 mt-1">per month</div>
                    </div>

                    <div class="p-6 bg-green-50 rounded-lg border border-green-100">
                      <div class="text-sm text-gray-600 mb-1">ObjectFinder Cost</div>
                      <div class="text-3xl font-bold text-green-600">${objectFinderCost.toFixed(2)}</div>
                      <div class="text-sm text-gray-500 mt-1">per month</div>
                    </div>

                    <div class="p-6 bg-blue-50 rounded-lg border border-blue-100">
                      <div class="text-sm text-blue-600 mb-1">Your Savings</div>
                      <div class="text-3xl font-bold text-blue-600">${savings.toFixed(2)}</div>
                      <div class="text-sm text-blue-600 mt-1">{savingsPercentage}% cost reduction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Note -->
        <div class="mt-8 text-center">
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 border border-gray-200">
            <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span class="text-gray-600 text-sm">Prices are estimates and may vary based on specific requirements</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 11. Industries Section -->
    <section class="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white text-transparent bg-clip-text">
            Industries We Serve
          </h2>
          <p class="text-xl text-blue-200 leading-relaxed">
            ObjectFinder's AI technology is transforming operations across diverse industries
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          {#each [
            { icon: "🌾", name: "Agriculture", desc: "Crop monitoring & yield optimization" },
            { icon: "🏗️", name: "Construction", desc: "Site safety & progress tracking" },
            { icon: "🏭", name: "Manufacturing", desc: "Quality control & defect detection" },
            { icon: "♻️", name: "Recycling", desc: "Material sorting & classification" },
            { icon: "🚁", name: "Search & Rescue", desc: "Emergency response & coordination" },
            { icon: "🏥", name: "Healthcare", desc: "Medical imaging & diagnostics" },
            { icon: "🚗", name: "Automotive", desc: "Vehicle inspection & maintenance" },
            { icon: "📦", name: "Logistics", desc: "Inventory & warehouse management" },
            { icon: "🛡️", name: "Security", desc: "Surveillance & threat detection" },
            { icon: "🌳", name: "Forestry", desc: "Forest health & fire prevention" },
            { icon: "🏢", name: "Real Estate", desc: "Property inspection & valuation" },
            { icon: "⚡", name: "Energy", desc: "Infrastructure monitoring & maintenance" }
          ] as { icon, name, desc }}
            <div class="group relative transform hover:scale-105 transition-all duration-300">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
              <div class="relative bg-gray-900/60 p-6 rounded-lg border border-blue-500/20 hover:border-blue-400/50 transition duration-300">
                <div class="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <span class="text-3xl">{icon}</span>
                </div>
                <h3 class="text-lg font-bold text-blue-100 mb-2">{name}</h3>
                <p class="text-sm text-blue-200/70">{desc}</p>
              </div>
            </div>
          {/each}
        </div>

        <!-- Bottom Note -->
        <div class="mt-16 text-center">
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/50 backdrop-blur-sm border border-blue-700/50">
            <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span class="text-blue-200 text-sm">Don't see your industry? Contact us for custom solutions</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. Performance Metrics -->
    <section class="py-16 px-4 bg-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 text-transparent bg-clip-text leading-[1.2] pb-2">
            Industry-Leading Performance
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed">
            Setting new standards in speed, reliability, and scalability
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          {#each [
            { value: "<1s", label: "Average Response Time", desc: "Lightning-fast processing", icon: "⚡" },
            { value: "99.99%", label: "System Uptime", desc: "Enterprise reliability", icon: "🎯" },
            { value: "1M+", label: "Daily API Calls", desc: "Scalable infrastructure", icon: "📈" },
            { value: "<5ms", label: "Latency", desc: "Global edge network", icon: "🌐" }
          ] as { value, label, desc, icon }}
            <div class="group relative transform hover:scale-105 transition-all duration-300">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
              <div class="relative bg-white p-6 rounded-lg border border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-lg h-[250px] flex flex-col">
                <div class="flex-1">
                  <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span class="text-2xl">{icon}</span>
                  </div>
                  <div class="text-3xl font-bold text-gray-900 mb-2">{value}</div>
                </div>
                <div>
                  <div class="text-lg font-medium text-gray-900 mb-1">{label}</div>
                  <div class="text-sm text-gray-600">{desc}</div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>
    <!-- 12. Success Stories -->
    <section class="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white text-transparent bg-clip-text">
            Success Stories
          </h2>
          <p class="text-xl text-blue-200 leading-relaxed">
            See how organizations are transforming their operations with ObjectFinder
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          {#each [
            {
              icon: "🌾",
              title: "Agricultural Innovation",
              company: "Midwest Farms Co.",
              result: "40% increase in crop yield",
              desc: "Automated crop health monitoring and precision farming"
            },
            {
              icon: "🚁",
              title: "Emergency Response",
              company: "Mountain Rescue Team",
              result: "Response time cut by 65%",
              desc: "Real-time search area analysis and resource optimization"
            },
            {
              icon: "♻️",
              title: "Recycling Revolution",
              company: "EcoSort Industries",
              result: "300% sorting efficiency",
              desc: "Automated material classification and sorting"
            }
          ] as { icon, title, company, result, desc }}
            <div class="group relative transform hover:scale-105 transition-all duration-300">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
              <div class="relative bg-gray-900/60 p-8 rounded-lg border border-blue-500/20 hover:border-blue-400/50 transition duration-300">
                <div class="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <span class="text-3xl">{icon}</span>
                </div>
                <h3 class="text-xl font-bold text-blue-100 mb-2">{title}</h3>
                <div class="text-cyan-400 font-semibold mb-4">{result}</div>
                <p class="text-blue-200/70 mb-4">{desc}</p>
                <div class="text-sm text-blue-300/50">{company}</div>
              </div>
            </div>
          {/each}
        </div>

        <!-- Bottom Note -->
        <div class="mt-16 text-center">
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/50 backdrop-blur-sm border border-blue-700/50">
            <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span class="text-blue-200 text-sm">Join these success stories - Start your transformation today</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 13. Testimonials -->
    <section class="py-16 px-4 bg-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 text-transparent bg-clip-text">
            What Our Users Say
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed">
            Trusted by leading organizations worldwide
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          {#each testimonials as testimonial}
            <div class="group relative transform hover:scale-105 transition-all duration-300">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
              <div class="relative bg-white p-8 rounded-lg border border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-lg">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                    <span class="text-2xl">⭐</span>
                  </div>
                  <div class="flex flex-col">
                    <div class="text-blue-600 font-semibold">{testimonial.author}</div>
                    <div class="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <div class="mb-4">
                  {#each Array(5) as _}
                    <span class="text-yellow-400">★</span>
                  {/each}
                </div>
                <blockquote class="text-gray-700 italic leading-relaxed mb-4">"{testimonial.quote}"</blockquote>
                <div class="pt-4 border-t border-gray-100">
                  <div class="flex items-center text-sm text-gray-600">
                    <svg class="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    Verified Customer
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>

        <!-- Bottom Note -->
        <div class="mt-12 text-center">
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 border border-gray-200">
            <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span class="text-gray-600 text-sm">Join hundreds of satisfied customers worldwide</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 14. Security & Compliance -->
    <section class="py-16 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-16">Enterprise-Grade Security</h2>
        <div class="grid md:grid-cols-4 gap-8">
          {#each [
            { icon: "🔒", title: "End-to-End Encryption", desc: "Your data is encrypted in transit and at rest" },
            { icon: "✓", title: "SOC 2 Compliant", desc: "Independently audited security controls" },
            { icon: "🛡️", title: "GDPR Ready", desc: "Full compliance with data protection regulations" },
            { icon: "🔐", title: "Access Control", desc: "Role-based permissions and audit logs" }
          ] as { icon, title, desc }}
            <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/10">
              <div class="text-3xl mb-4">{icon}</div>
              <h3 class="text-lg font-bold mb-2">{title}</h3>
              <p class="text-blue-200 text-sm">{desc}</p>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- 15. Latest Updates -->
    <section class="py-16 px-4 bg-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 text-transparent bg-clip-text">
            Latest Updates
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed">
            Stay informed about our newest features and improvements
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          {#each [
            {
              date: "June 2023",
              tag: "New Feature",
              title: "Multi-Object Tracking",
              desc: "Track multiple objects across video frames with 99.9% accuracy",
              icon: "🎯"
            },
            {
              date: "May 2023",
              tag: "Performance",
              title: "2x Faster Processing",
              desc: "Upgraded our AI models for twice the processing speed",
              icon: "⚡"
            },
            {
              date: "April 2023",
              tag: "Integration",
              title: "New API Endpoints",
              desc: "Added support for batch processing and real-time webhooks",
              icon: "🔌"
            }
          ] as { date, tag, title, desc, icon }}
            <div class="group relative transform hover:scale-105 transition-all duration-300">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
              <div class="relative bg-white p-8 rounded-lg border border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-lg">
                <div class="flex items-center justify-between mb-6">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span class="text-2xl">{icon}</span>
                    </div>
                    <span class="text-sm text-gray-500">{date}</span>
                  </div>
                  <span class="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                    {tag}
                  </span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p class="text-gray-600">{desc}</p>
              </div>
            </div>
          {/each}
        </div>

        <div class="mt-12 text-center">
          <button class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
            <div class="absolute inset-0 bg-blue-600 transition-transform duration-300 group-hover:scale-95"></div>
            <span class="relative text-lg font-semibold text-white flex items-center justify-center">
              View All Updates
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- 16. FAQ Section -->
    <section class="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      </div>

      <div class="max-w-4xl mx-auto px-4 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white text-transparent bg-clip-text">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-blue-200 leading-relaxed">
            Get answers to common questions about ObjectFinder
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          {#each [
            {
              q: "How accurate is the object detection?",
              a: "Our AI models achieve above 90% accuracy across various environments and conditions.",
              icon: "🎯"
            },
            {
              q: "What types of objects can it detect?",
              a: "ObjectFinder can detect and classify a wide range of objects specific to your industry, from agricultural crops to industrial equipment.",
              icon: "🔍"
            },
            {
              q: "How quickly can it process images?",
              a: "Our system processes images in real-time, with an average response time of 0.1 seconds per image.",
              icon: "⚡"
            },
            {
              q: "Is my data secure?",
              a: "Yes, we implement enterprise-grade security measures including end-to-end encryption and SOC 2 compliance.",
              icon: "🔒"
            },
            {
              q: "What integration options are available?",
              a: "We offer REST API, WebSocket support, and custom integrations that work seamlessly with existing workflows.",
              icon: "🔌"
            },
            {
              q: "How do I get started?",
              a: "Sign up for our free trial to receive 10 tokens (worth $1000) and full platform access. No credit card required.",
              icon: "🚀"
            }
          ] as { q, a, icon }}
            <div class="group relative transform hover:scale-[1.02] transition-all duration-300">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
              <div class="relative bg-gray-900/60 p-6 rounded-lg border border-blue-500/20 hover:border-blue-400/50 transition duration-300 h-[180px] flex items-center">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                    <span class="text-xl">{icon}</span>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-lg font-bold text-blue-100 mb-2">{q}</h3>
                    <p class="text-sm text-blue-200/70 leading-relaxed line-clamp-3">{a}</p>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>

        <!-- Bottom Note -->
        <div class="mt-12 text-center">
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/50 backdrop-blur-sm border border-blue-700/50">
            <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span class="text-blue-200 text-sm">Have more questions? Our team is here to help</span>
          </div>
          <div class="mt-6">
            <button class="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              <div class="absolute inset-0 bg-blue-600 transition-transform duration-300 group-hover:scale-95"></div>
              <span class="relative text-base font-semibold text-white flex items-center justify-center">
                Contact Support
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

<!-- Combined Newsletter & Enhanced CTA Section -->
<section class="py-12 px-4 bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 text-white relative overflow-hidden">
  <div class="absolute inset-0">
    <div class="absolute top-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
    <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
  </div>
  <div class="max-w-4xl mx-auto text-center relative z-10">
    <h2 class="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-100 to-white text-transparent bg-clip-text">Stay Connected & Transform Your Operations</h2>
    <p class="text-lg text-purple-200 mb-6">
      Get the latest ObjectFinder updates and start transforming your object detection today.
    </p>
    
    <form class="flex flex-col md:flex-row gap-4 justify-center mb-6">
      <input 
        type="email" 
        placeholder="Enter your email" 
        class="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
      <button class="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors whitespace-nowrap">
        Subscribe Now
      </button>
    </form>
    <div class="text-sm text-purple-200 mb-8">
      Join 10,000+ subscribers. No spam, unsubscribe anytime.
    </div>
    
    <div class="flex flex-col md:flex-row gap-4 justify-center">
      <button class="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold">
        Start Free Trial
      </button>
      <button class="border border-purple-400 text-purple-200 px-8 py-3 rounded-lg hover:bg-purple-900/50 transition-colors text-lg font-semibold">
        Schedule Demo
      </button>
    </div>
    <div class="mt-4 text-purple-200 text-sm">
      No credit card required • Full platform access
      <span class="block mt-1">🎁 Plus 10 FREE tokens for all new users!</span>
    </div>
  </div>
</section>
</main> 
</div>

<style>
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
    50% { transform: translate(100px, 100px) rotate(180deg); }
    100% { transform: translate(0, 0) rotate(360deg); }
  }

  .slide-in {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-out;
  }

  .slide-in.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-in {
    opacity: 0;
    transition: opacity 0.6s ease-out;
  }

  .fade-in.visible {
    opacity: 1;
  }

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
    100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
  }

  .pulse {
    animation: pulse 2s infinite;
  }

  @keyframes glow {
    0% { opacity: 0.25; }
    50% { opacity: 0.5; }
    100% { opacity: 0.25; }
  }

  .feature-glow {
    animation: glow 3s ease-in-out infinite;
  }
</style> 