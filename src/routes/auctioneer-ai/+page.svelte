<script lang="ts">
// import InitialItemTable from './InitialItemTable.svelte';
import ValuationTable from './ValuationTable.svelte';
import { format } from 'date-fns';
import ItemTable from './ItemTable.svelte';

export let data;

// Define types directly
interface Item {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    quantity: number;
    lotNumber: string;
    condition: string;
    customPercent: number | undefined;
    starred: boolean;
    retailValue: number | undefined;
    marketValue: number | undefined;
    lastSoldFor: number | undefined;
    partNumber?: string;
    manufacturer?: string;
    keyDetails?: string;
}

// Job interface is already defined here, ensure it matches if needed
interface Job {
  id: string;
  created: Date;
  images: number;
  status: 'completed' | 'failed' | 'processing';
  items: Item[];
}

// Convert string dates to Date objects when receiving from server
let jobs: Job[] = (data?.initialJobs || []).map(job => ({
  ...job,
  created: new Date(job.created)
}));

let selectedJobId: string | null = null;

// Restore page-level items array declaration (needed for selected job view)
let items: Item[] = []; 

// Option states
// let autoGroup = false; // This seems unused now, consider removing if not needed elsewhere
let getRetailValue = false;
let getMarketValue = false;
let getLastSoldFor = false;

// Update state for grouping method
let groupingMethod: 'ai' | 'manual' = 'ai'; // Default to AI

// State for Manual Grouping UI
let ungroupedImages: { id: string, imageUrl: string, title: string, file: File, selected: boolean }[] = [];
let manualGroups: { id: string, name: string, imageIds: string[] }[] = [];
let nextManualGroupId = 1;

// Calculate extra tokens
$: extraTokens = [getRetailValue, getMarketValue, getLastSoldFor].filter(Boolean).length;

// Function to trigger the hidden file input
function triggerFileInput() {
  document.getElementById('fileUploadInput')?.click();
}

function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const uploadedFiles = Array.from(input.files);
    
    // Clear previous manual state if new files are uploaded
    ungroupedImages = [];
    manualGroups = [];
    nextManualGroupId = 1;

    if (groupingMethod === 'ai') {
      let newItems: Item[] = [];
      // Simulate AI Auto-Grouping (chunk size of 3 for example)
      const chunkSize = 3;
      for (let i = 0; i < uploadedFiles.length; i += chunkSize) {
        const chunk = uploadedFiles.slice(i, i + chunkSize);
        if (chunk.length > 0) {
          const id = `ai-group-${Date.now()}-${i}`;
          const firstFile = chunk[0];
          newItems.push({
            id,
            imageUrl: URL.createObjectURL(firstFile),
            title: `AI Grouped Item ${newItems.length + 1}`,
            description: `Automatically grouped cluster of ${chunk.length} image(s).`,
            quantity: chunk.length, // Quantity is number of files in chunk
            lotNumber: `LOT${Math.floor(Math.random() * 10000)}`,
            condition: '',
            customPercent: undefined,
            starred: false,
            retailValue: undefined,
            marketValue: undefined,
            lastSoldFor: undefined,
            partNumber: `PN-AIGRP-${Date.now()}-${i}`,
            manufacturer: 'Unknown',
            keyDetails: 'Auto-grouped'
          });
        }
      }
       // Inform user about token usage (UI only)
       console.log(`AI Auto-Grouping used: ${uploadedFiles.length * 2} tokens (simulated)`);
       // Create job immediately for AI
       if (newItems.length > 0) {
          createNewJob(newItems);
       }
    } else { 
      // Manual Assignment Flow: Populate ungroupedImages for UI interaction
      ungroupedImages = uploadedFiles.map((file, idx) => {
        const id = `manual-image-${Date.now()}-${idx}`;
        return {
          id,
          imageUrl: URL.createObjectURL(file),
          title: file.name,
          file: file, // Keep original file ref if needed later
          selected: false 
        };
      });
      // Do NOT create items or job yet for manual mode
    }
    
    input.value = ''; // Clear the file input
  }
}

function createNewJob(itemsForJob: Item[]) { 
  const jobId = `${Date.now().toString(36)}-${Math.random().toString(36).substr(2, 5)}`;
  const newJob: Job = {
    id: jobId,
    created: new Date(),
    images: itemsForJob.reduce((sum, item) => sum + item.quantity, 0), 
    status: 'processing',
    items: [...itemsForJob]
  };
  jobs = [newJob, ...jobs];
  selectedJobId = jobId; // Immediately select the new job
  items = []; // Clear page-level items after job creation
}

function selectJob(jobId: string) {
  selectedJobId = jobId;
  // Keep the original items array for displaying selected job items
  const job = jobs.find(j => j.id === jobId);
  if (job) {
    items = [...job.items]; // Assign job items to page-level items array
  } else {
    items = []; // Clear if job not found
  }
}

function handleConditionChange(e: CustomEvent<{ id: string; value: string }>) {
  if (!selectedJobId) return; // Only act if a job is selected
  jobs = jobs.map(job => {
    if (job.id === selectedJobId) {
      return {
        ...job,
        items: job.items.map(item => item.id === e.detail.id ? { ...item, condition: e.detail.value } : item)
      };
    }
    return job;
  });
}

function handleCustomPercentChange(e: CustomEvent<{ id: string; value: number }>) {
  if (!selectedJobId) return;
   jobs = jobs.map(job => {
    if (job.id === selectedJobId) {
      return {
        ...job,
        items: job.items.map(item => item.id === e.detail.id ? { ...item, customPercent: e.detail.value } : item)
      };
    }
    return job;
  });
}

function handleStarChange(e: CustomEvent<{ id: string }>) {
  if (!selectedJobId) return;
   jobs = jobs.map(job => {
    if (job.id === selectedJobId) {
      return {
        ...job,
        items: job.items.map(item => item.id === e.detail.id ? { ...item, starred: !item.starred } : item)
      };
    }
    return job;
  });
}

function handleSendToAI() {
  const currentJob = jobs.find(j => j.id === selectedJobId);
  if (currentJob) {
     console.warn('Triggering AI Valuation for Job:', selectedJobId); 
     // Placeholder: In real app, send currentJob.items to backend
     // Maybe update job status?
  } else {
     console.error('Cannot send to AI, no job selected or found');
  }
 
}

// Format date to match the example (e.g., "Wed, Apr 16, 2025, 10:30 PM CDT")
function formatDate(date: Date): string {
  return format(date, "EEE, MMM d, yyyy, h:mm a 'CDT'");
}

// Add functions for manual grouping UI
function createNewItemGroup() {
  manualGroups = [
    ...manualGroups,
    { 
      id: `group-${Date.now()}-${nextManualGroupId}`,
      name: `Item ${nextManualGroupId++}`,
      imageIds: []
    }
  ];
}

function assignSelectedToGroup(targetGroupId: string) {
  const selectedImageIds = ungroupedImages.filter(img => img.selected).map(img => img.id);
  if (selectedImageIds.length === 0) return; // Nothing selected

  // Add selected IDs to the target group
  manualGroups = manualGroups.map(group => {
    if (group.id === targetGroupId) {
      // Avoid duplicates if user clicks multiple times
      const newImageIds = selectedImageIds.filter(id => !group.imageIds.includes(id));
      return { ...group, imageIds: [...group.imageIds, ...newImageIds] };
    }
    return group;
  });

  // Remove assigned images from ungrouped list and reset selection
  ungroupedImages = ungroupedImages
    .filter(img => !selectedImageIds.includes(img.id))
    .map(img => ({ ...img, selected: false })); // Reset selection on remaining
}

// Function to create final items and deploy job from manual groups
function deployManualJob() {
  if (manualGroups.length === 0) return; // No groups to deploy

  const finalItems: Item[] = manualGroups.map(group => {
    const firstImageId = group.imageIds[0];
    // Find the original ungroupedImage object to get its details (like URL)
    // This assumes ungroupedImages was populated correctly earlier.
    // NOTE: A robust solution might store more image details directly in manualGroups.
    const previewImage = ungroupedImages.find(img => img.id === firstImageId) || 
                         // Fallback needed if image somehow missing (shouldn't happen here)
                         { imageUrl: '', title: 'Group' }; 
    
    return {
      id: `final-${group.id}`,
      imageUrl: previewImage.imageUrl, // Use first image as preview
      title: group.name, // Use the group name as title
      description: `Manually created group containing ${group.imageIds.length} image(s).`, // Auto-description
      quantity: group.imageIds.length, // Quantity based on images in group
      lotNumber: `LOT${Math.floor(Math.random() * 10000)}`,
      condition: '',
      customPercent: undefined,
      starred: false,
      retailValue: undefined,
      marketValue: undefined,
      lastSoldFor: undefined,
      partNumber: `PN-MANGRP-${group.id}`,
      manufacturer: 'Unknown',
      keyDetails: 'Manually grouped'
    };
  });

  if (finalItems.length > 0) {
    createNewJob(finalItems);
    // Clear manual state after deploying
    ungroupedImages = [];
    manualGroups = [];
    nextManualGroupId = 1;
  }
}
</script>

<div class="min-h-screen bg-gray-50">
  <div class="max-w-[1400px] mx-auto px-4 py-8">
    {#if !selectedJobId}
      <main class="max-w-5xl mx-auto">
        <!-- User and Tokens Header -->
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">K</div>
            <div>
              <div class="font-medium">kunj9889</div>
              <div class="text-sm text-gray-500">Welcome back!</div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-600">424 tokens</span>
            <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <!-- New Job Creation -->
        <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 class="text-lg font-medium mb-6">Upload Images</h2>
          
          <!-- Hidden File Input -->
          <input type="file" multiple class="hidden" id="fileUploadInput" on:change={handleFileChange} aria-label="Choose files to upload" />

          <!-- Controls Row: Upload Button and Grouping Options -->
          <div class="flex flex-wrap items-center gap-x-8 gap-y-4 mb-8">
            <!-- Upload Button -->
            <button 
              type="button"
              class="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              on:click={triggerFileInput}
            >
              Upload Images
            </button>

            <!-- Grouping Options -->
            <div class="flex items-center gap-x-6 gap-y-2">
              <span class="text-sm font-medium text-gray-700 whitespace-nowrap">Grouping:</span>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="radio" bind:group={groupingMethod} value="ai" name="grouping" class="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                <span class="text-sm whitespace-nowrap">AI Auto <span class="text-xs text-gray-500">(2 tokens/image)</span></span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="radio" bind:group={groupingMethod} value="manual" name="grouping" class="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                <span class="text-sm whitespace-nowrap">Manual <span class="text-xs text-gray-500">(Free)</span></span>
              </label>
            </div>
          </div>
        </div>

        <!-- Manual Grouping Interface -->
        {#if groupingMethod === 'manual' && (ungroupedImages.length > 0 || manualGroups.length > 0)}
          <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 class="text-lg font-semibold mb-4">Manual Item Assignment</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <!-- Ungrouped Images Column -->
              <div>
                <h3 class="text-md font-medium mb-3">Ungrouped Images ({ungroupedImages.length})</h3>
                {#if ungroupedImages.length > 0}
                  <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-96 overflow-y-auto border p-3 rounded-md bg-gray-50">
                    {#each ungroupedImages as image (image.id)}
                      <label class="relative block cursor-pointer aspect-square group">
                        <input type="checkbox" bind:checked={image.selected} class="absolute top-1 left-1 z-10 h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                        <img 
                          src={image.imageUrl} 
                          alt={image.title}
                          class="w-full h-full object-cover rounded-md transition-opacity group-hover:opacity-80 {image.selected ? 'ring-2 ring-blue-500 ring-offset-1' : ''}"
                        />
                        <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs px-1 py-0.5 truncate rounded-b-md">
                           {image.title}
                        </div>
                      </label>
                    {/each}
                  </div>
                {:else}
                  <p class="text-sm text-gray-500 italic">No ungrouped images.</p>
                {/if}
              </div>

              <!-- Item Groups Column -->
              <div>
                <div class="flex justify-between items-center mb-3">
                  <h3 class="text-md font-medium">Item Groups ({manualGroups.length})</h3>
                  <button 
                    type="button" 
                    class="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                    on:click={createNewItemGroup}
                  >
                    + New Item Group
                  </button>
                </div>
                <div class="space-y-3 max-h-96 overflow-y-auto border p-3 rounded-md bg-gray-50 min-h-[100px]">
                  {#each manualGroups as group (group.id)}
                    <div class="bg-white p-3 rounded border border-gray-200 shadow-sm">
                      <div class="flex justify-between items-center mb-2">
                        <span class="font-medium text-sm">{group.name}</span>
                        <span class="text-xs text-gray-500">{group.imageIds.length} image(s)</span>
                      </div>
                       <!-- Simple indication of assigned images -->
                       {#if group.imageIds.length > 0}
                         <p class="text-xs text-gray-600">Contains images: {group.imageIds.map(id => id.substring(0,6)).join(', ')}...</p> 
                       {/if}
                       <button 
                         type="button" 
                         class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 mt-2 w-full focus:outline-none focus:ring-1 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                         on:click={() => assignSelectedToGroup(group.id)}
                         disabled={ungroupedImages.filter(img => img.selected).length === 0}
                       >
                         Add Selected Images Here
                       </button>
                    </div>
                  {:else}
                    <p class="text-sm text-gray-500 italic text-center py-4">Click '+ New Item Group' to start.</p>
                  {/each}
                </div>
              </div>
            </div>

            <!-- Deploy Button -->
            <div class="mt-6 text-right">
              <button 
                class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
                disabled={manualGroups.length === 0 || manualGroups.every(g => g.imageIds.length === 0)}
                on:click={deployManualJob}
              >
                Deploy Job
              </button>
            </div>
          </div>
        {/if}

        <!-- Jobs Table -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
          <div class="flex items-center justify-between p-4 border-b">
            <h2 class="text-lg font-medium">Processing Jobs</h2>
            <span class="text-sm text-gray-500">Last updated: {format(new Date(), 'h:mm a')}</span>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job ID</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Images</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                {#each jobs as job (job.id)} <!-- Add key for reactivity -->
                  <tr 
                    class="hover:bg-gray-50 cursor-pointer" 
                    on:click={() => selectJob(job.id)}
                    on:keydown={(e) => e.key === 'Enter' && selectJob(job.id)}
                    tabindex="0"
                    role="button"
                  >
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.id}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(job.created)}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.images}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${job.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
                        ${job.status === 'failed' ? 'bg-red-100 text-red-800' : ''}
                        ${job.status === 'processing' ? 'bg-yellow-100 text-yellow-800' : ''}`}>
                        {job.status}
                      </span>
                    </td>
                  </tr>
                {/each}
                {#if jobs.length === 0}
                  <tr>
                    <td colspan="4" class="px-6 py-4 text-center text-sm text-gray-500">No jobs yet. Upload some images to get started.</td>
                  </tr>
                {/if}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    {:else}
      <div class="space-y-8">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-4">
            <button
              class="text-gray-600 hover:text-gray-900 focus:outline-none"
              on:click={() => selectedJobId = null}
              aria-label="Go back to job list"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <h1 class="text-2xl font-bold text-gray-900">{selectedJobId}</h1>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm text-gray-500">Status: {jobs.find(j => j.id === selectedJobId)?.status}</span>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
          <div class="space-y-8">
            <div>
              <h2 class="text-lg font-semibold mb-4">Initial Items</h2>
              <ItemTable
                items={jobs.find(j => j.id === selectedJobId)?.items || []}
                showImage={true}
                showDescription={true}
                showQuantity={true}
                showLotNumber={true}
                showCondition={true}
                showRetailValue={true}
                showMarketValue={true}
                showLastSoldFor={true}
                showCustomPercent={true}
                showStar={true}
                grayOutValues={true}
                on:conditionChange={handleConditionChange}
                on:starChange={handleStarChange}
              />
            </div>

            <div class="flex items-center justify-between bg-gray-50 p-4 rounded-lg mb-6">
              <div class="flex items-center gap-6">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" bind:checked={getRetailValue} class="w-4 h-4 text-blue-600 rounded border-gray-300" />
                  <span class="text-sm font-medium">Retail Value</span>
                  <span class="text-xs text-gray-500">(+1 token)</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" bind:checked={getMarketValue} class="w-4 h-4 text-blue-600 rounded border-gray-300" />
                  <span class="text-sm font-medium">Market Value</span>
                  <span class="text-xs text-gray-500">(+1 token)</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" bind:checked={getLastSoldFor} class="w-4 h-4 text-blue-600 rounded border-gray-300" />
                  <span class="text-sm font-medium">Last Sold For</span>
                  <span class="text-xs text-gray-500">(+1 token)</span>
                </label>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-sm text-gray-600">Total extra tokens: {extraTokens}</span>
                <button
                  class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2"
                  on:click={handleSendToAI}
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Send to AI for Valuation
                </button>
              </div>
            </div>

            <div>
              <h2 class="text-lg font-semibold mb-4">Valuation Results</h2>
              <ValuationTable
                items={jobs.find(j => j.id === selectedJobId)?.items || []}
                on:customPercentChange={handleCustomPercentChange}
                on:starChange={handleStarChange}
              />
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div> 