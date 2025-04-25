<script>
  import "../app.css";
  
  let currentPath;
  if (typeof window !== 'undefined') {
    currentPath = window.location.pathname;
  }
</script>

<!-- Global Navigation -->
<nav class="bg-white shadow-sm">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <a href="/" class="text-xl font-bold text-gray-800">ObjectFinder</a>
      </div>
      <div class="flex space-x-8">
        <a 
          href="/agriculture" 
          class="inline-flex items-center px-1 pt-1 {currentPath === '/agriculture' ? 'border-b-2 border-blue-500 text-gray-900' : 'text-gray-500 hover:text-gray-700'}"
        >
          Agriculture
        </a>
        <a 
          href="/rescue-finder" 
          class="inline-flex items-center px-1 pt-1 {currentPath === '/rescue-finder' ? 'border-b-2 border-blue-500 text-gray-900' : 'text-gray-500 hover:text-gray-700'}"
        >
          Rescue
        </a>
        <a 
          href="/scrap-finder" 
          class="inline-flex items-center px-1 pt-1 {currentPath === '/scrap-finder' ? 'border-b-2 border-blue-500 text-gray-900' : 'text-gray-500 hover:text-gray-700'}"
        >
          Scrap
        </a>
        <a 
          href="/opti-finder" 
          class="inline-flex items-center px-1 pt-1 {currentPath === '/opti-finder' ? 'border-b-2 border-blue-500 text-gray-900' : 'text-gray-500 hover:text-gray-700'}"
        >
          Optimization
        </a>
        <a 
          href="/auctioneer-ai" 
          class="inline-flex items-center px-1 pt-1 {currentPath === '/auctioneer-ai' ? 'border-b-2 border-blue-500 text-gray-900' : 'text-gray-500 hover:text-gray-700'}"
        >
          AuctioneerAI
        </a>
      </div>
    </div>
  </div>
</nav>

<slot /> 