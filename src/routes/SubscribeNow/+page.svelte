<script>
  import { fade } from 'svelte/transition';
  import { fly } from 'svelte/transition';

  // Pricing tiers
  const plans = [
    {
      name: "Standard",
      price: "$10",
      unit: "per 100 tokens",
      description: "Perfect for small yards starting with AI detection",
      features: [
        "Simple upload system",
        "Basic object detection",
        "GPS location mapping",
        "24-hour support",
        "Value estimation"
      ],
      highlight: false
    },
    {
      name: "Professional",
      price: "$600",
      unit: "hardware + tokens",
      description: "Automated solution with pre-configured hardware",
      features: [
        "Pre-configured Raspberry Pi",
        "Automatic image processing",
        "Custom detection filters",
        "Priority support",
        "Real-time notifications",
        "Advanced reporting"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      unit: "contact sales",
      description: "Full-service solution with drone operations",
      features: [
        "Professional drone service",
        "Automated waypoint mapping",
        "Unlimited customization",
        "Full data management",
        "Dedicated account manager",
        "Custom integration support"
      ],
      highlight: false
    }
  ];

  let selectedPlan = "Professional";
  let formData = {
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  };

  function handleSubmit() {
    // Handle form submission
    console.log("Form submitted:", formData);
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
  <!-- Hero Section -->
  <section class="py-20 px-4">
    <div class="max-w-7xl mx-auto text-center">
      <h1 class="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
        Choose Your Plan
      </h1>
      <p class="text-gray-600 text-xl mb-12 max-w-3xl mx-auto">
        Select the perfect solution for your scrap yard operations
      </p>
    </div>
  </section>

  <!-- Pricing Section -->
  <section class="py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-3 gap-8">
        {#each plans as plan}
          <div class="group relative">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <div class="relative p-8 bg-white rounded-lg shadow-lg border {plan.highlight ? 'border-purple-400' : 'border-gray-200'} hover:border-purple-400 transition-all duration-300">
              {#if plan.highlight}
                <div class="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-sm font-semibold rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </div>
              {/if}
              <h3 class="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
              <div class="flex items-baseline mb-6">
                <span class="text-4xl font-bold text-purple-600">{plan.price}</span>
                <span class="text-gray-500 ml-2">{plan.unit}</span>
              </div>
              <p class="text-gray-600 mb-6">{plan.description}</p>
              <ul class="space-y-3 mb-8">
                {#each plan.features as feature}
                  <li class="flex items-center text-gray-600">
                    <span class="text-purple-500 mr-2">✓</span>
                    {feature}
                  </li>
                {/each}
              </ul>
              <button 
                class="w-full py-3 px-4 rounded-lg {plan.highlight ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'border border-purple-600 text-purple-600 hover:bg-purple-50'} transition-colors"
                on:click={() => selectedPlan = plan.name}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="py-20 px-4 bg-white mt-12">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4 text-gray-900">Get Started Today</h2>
        <p class="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
      </div>

      <form on:submit|preventDefault={handleSubmit} class="space-y-6">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              bind:value={formData.name}
              class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              bind:value={formData.email}
              class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label for="company" class="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
            <input
              type="text"
              id="company"
              bind:value={formData.company}
              class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              bind:value={formData.phone}
              class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
          <textarea
            id="message"
            bind:value={formData.message}
            rows="4"
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          ></textarea>
        </div>

        <div>
          <label class="flex items-center">
            <input type="checkbox" class="rounded border-gray-300 text-purple-600 focus:ring-purple-500" required />
            <span class="ml-2 text-sm text-gray-600">
              I agree to the <a href="#" class="text-purple-600 hover:underline">Terms of Service</a> and 
              <a href="#" class="text-purple-600 hover:underline">Privacy Policy</a>
            </span>
          </label>
        </div>

        <div>
          <button
            type="submit"
            class="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="py-20 px-4 bg-gray-50">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
      
      <div class="space-y-6">
        {#each [
          {
            q: "How quickly can I get started?",
            a: "You can start using our platform immediately after signing up. For hardware solutions, setup typically takes less than 24 hours."
          },
          {
            q: "What kind of support do you provide?",
            a: "We offer 24/7 technical support for all plans, with priority support for Professional and Enterprise customers."
          },
          {
            q: "Can I upgrade my plan later?",
            a: "Yes, you can upgrade your plan at any time. We'll help you transition smoothly to your new plan."
          },
          {
            q: "Is there a long-term contract?",
            a: "No, our Standard and Professional plans are flexible with no long-term commitment. Enterprise plans can be customized to your needs."
          }
        ] as { q, a }}
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{q}</h3>
            <p class="text-gray-600">{a}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>
