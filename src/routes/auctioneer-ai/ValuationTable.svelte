<script lang="ts">
  // Remove type import
  // import type { Item } from './types';
  import { createEventDispatcher } from 'svelte';

  // Define Item type directly
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
  
  export let items: Item[];
  
  const dispatch = createEventDispatcher();
  
  let selectedDescription: string | null = null;
  let showDescriptionModal = false;
  let selectedItem: Item | null = null;
  let showTitleModal = false;

  function handleDescriptionClick(item: Item) {
    selectedItem = item;
    selectedDescription = item.description;
    showDescriptionModal = true;
  }

  function handleTitleClick(item: Item) {
    selectedItem = item;
    showTitleModal = true;
  }

  function closeModal() {
    showDescriptionModal = false;
    showTitleModal = false;
    selectedDescription = null;
    selectedItem = null;
  }

  function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  }

  function handleCustomPercentChange(id: string, event: Event) {
    const value = +(event.target as HTMLInputElement).value;
    dispatch('customPercentChange', { id, value });
  }
  
  function handleStarChange(id: string) {
    dispatch('starChange', { id });
  }

  // Add keydown handler function
  function handleModalKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }
</script>

<div role="table" aria-label="Valuation Table">
  <table class="min-w-full text-xs border mb-6 rounded-lg overflow-hidden">
    <thead class="bg-gray-50">
      <tr class="text-left text-gray-700 border-b font-semibold">
        <th class="py-3 px-4 hover:bg-gray-100 cursor-help" title="Preview image(s) uploaded for this item.">Images</th>
        <th class="py-3 px-4 hover:bg-gray-100 cursor-help" title="Item's listing title. Click the eye icon to view the full detailed title.">Title</th>
        <th class="py-3 px-4 hover:bg-gray-100 cursor-help" title="Item's description. Click the eye icon to view the full description.">Description</th>
        <th class="py-3 px-4 hover:bg-gray-100 cursor-help" title="Number of units available for this item.">Quantity</th>
        <th class="py-3 px-4 hover:bg-gray-100 cursor-help" title="Assigned auction lot number for this item.">Lot Number</th>
        <th class="py-3 px-4 hover:bg-gray-100 cursor-help" title="Select the condition of the item (e.g., New, Good, Fair).">Condition</th>
        <th class="py-3 px-4 hover:bg-gray-100 cursor-help" title="Estimated retail price for a single unit of this item.">Retail Value (per item)</th>
        <th class="py-3 px-4 hover:bg-gray-100 cursor-help" title="Estimated current market value for a single unit of this item.">Market Value (per item)</th>
        <th class="py-3 px-4 hover:bg-gray-100 cursor-help" title="The price a similar item last sold for (per single unit).">Last Sold For (per item)</th>
        <th class="py-3 px-4 hover:bg-gray-100 cursor-help" title="Enter a custom percentage to calculate a value based on the Market Value.">Custom %</th>
        <th class="py-3 px-4 hover:bg-gray-100 cursor-help" title="Mark this item as starred/important.">Star</th>
      </tr>
    </thead>
    <tbody>
      {#each items as item, i}
        <tr class="{i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors">
          <td class="py-2 px-4">
            <div class="flex items-center gap-2">
              <img src={item.imageUrl} alt="preview" class="w-12 h-12 object-cover rounded" />
              <span class="text-xs text-gray-500">({item.quantity} {item.quantity === 1 ? 'image' : 'images'})</span>
            </div>
          </td>
          <td class="py-2 px-4">
            <button
              class="text-left w-full hover:text-blue-600 focus:outline-none flex items-center gap-2 group"
              on:click={() => handleTitleClick(item)}
              aria-label="View title details"
            >
              <span class="flex-1">{truncateText(item.title, 50)}</span>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </td>
          <td class="py-2 px-4">
            <button
              class="text-left w-full hover:text-blue-600 focus:outline-none flex items-center gap-2 group"
              on:click={() => handleDescriptionClick(item)}
              aria-label="View description details"
            >
              <span class="flex-1">{truncateText(item.description, 50)}</span>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </td>
          <td class="py-2 px-4">{item.quantity}</td>
          <td class="py-2 px-4">{item.lotNumber}</td>
          <td class="py-2 px-4">{item.condition || 'Not set'}</td>
          <td class="py-2 px-4">{item.retailValue !== undefined ? `$${item.retailValue}` : ''}</td>
          <td class="py-2 px-4">{item.marketValue !== undefined ? `$${item.marketValue}` : ''}</td>
          <td class="py-2 px-4">
            {item.lastSoldFor !== undefined ? item.lastSoldFor.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : '-'}
          </td>
          <td class="py-2 px-4">
            <div class="flex items-center gap-2">
              <input
                type="number"
                class="w-16 border rounded px-1"
                aria-label={`Custom percent for item ${item.id}`}
                value={item.customPercent ?? ''}
                on:input={e => handleCustomPercentChange(item.id, e)}
                placeholder="%"
              />
              <span class="text-gray-600">
                {#if item.customPercent !== undefined && item.marketValue !== undefined}
                  {((item.customPercent / 100) * item.marketValue).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                {:else}
                  -
                {/if}
              </span>
            </div>
          </td>
          <td class="py-2 px-4">
            <button
              aria-label={item.starred ? 'Unstar item' : 'Star item'}
              class="text-lg focus:outline-none cursor-pointer hover:text-yellow-500"
              on:click={() => handleStarChange(item.id)}
              type="button"
            >
              {item.starred ? '★' : '☆'}
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

{#if showDescriptionModal}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
       role="dialog" 
       aria-modal="true" 
       aria-labelledby="valDescModalTitle" 
       on:click={closeModal}>
    <div class="bg-white rounded-lg p-6 max-w-2xl max-h-[90vh] overflow-auto" 
         role="document" 
         tabindex="-1" 
         on:click|stopPropagation 
         on:keydown={handleModalKeydown}>
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-lg font-medium" id="valDescModalTitle">Item Description</h3>
        <button
          class="text-gray-500 hover:text-gray-700 focus:outline-none"
          on:click={closeModal}
          aria-label="Close modal"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="prose max-w-none">
        <p class="text-gray-700 leading-relaxed whitespace-pre-wrap">
          {#if selectedItem?.id === 'vintage-camera-001'}
            A beautifully preserved Kodak Retina IIIC 35mm film camera from the 1970s. This classic piece features manual focus, aperture priority mode, and a Schneider-Kreuznach Retina-Xenon 50mm f/2.0 lens. The camera comes with its original leather case, which shows minimal wear. The viewfinder is clear, and all mechanical functions are working perfectly. This is a collector's item that would make a great addition to any vintage camera collection or for those interested in film photography.
          {:else if selectedItem?.id === 'antique-vase-002'}
            An exquisite 19th-century Royal Porcelain vase featuring the classic Blue Willow pattern. This piece stands 12 inches tall and is in excellent condition with no chips or cracks. The intricate blue and white design depicts a traditional Chinese landscape scene with pagodas, bridges, and willow trees. The vase has a flared rim and a slightly tapered base, typical of the period. The glaze is intact and shows the characteristic depth of color that Royal Porcelain is known for. A perfect centerpiece for any antique collection.
          {:else if selectedItem?.id === 'rare-book-003'}
            The historic first appearance of Spider-Man in Amazing Fantasy #15, published by Marvel Comics in 1962. This issue features the iconic cover by Jack Kirby and Steve Ditko, showing Spider-Man swinging through the city. The comic has been professionally graded by CGC at 9.4 (Near Mint), with white pages and minimal wear. The story, written by Stan Lee and illustrated by Steve Ditko, introduces Peter Parker and his transformation into Spider-Man. This is one of the most sought-after comics in the hobby, with only a few hundred copies known to exist in this high grade.
          {:else}
            Detailed description information not available for this item.
          {/if}
        </p>
      </div>
    </div>
  </div>
{/if}

{#if showTitleModal}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
       role="dialog" 
       aria-modal="true" 
       aria-labelledby="valTitleModalTitle" 
       on:click={closeModal}>
    <div class="bg-white rounded-lg p-6 max-w-2xl w-full mx-4" 
         role="document" 
         tabindex="-1" 
         on:click|stopPropagation 
         on:keydown={handleModalKeydown}>
      <div class="flex justify-between items-start mb-4">
        <h3 class="text-lg font-semibold" id="valTitleModalTitle">Item Title</h3>
        <button class="text-gray-500 hover:text-gray-700" on:click={closeModal} aria-label="Close modal">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <p class="text-gray-800">
          {#if selectedItem?.id === 'vintage-camera-001'}
            Kodak CAM-1970-001 Kodak Retina IIIC 35mm Film Camera - Vintage Classic | 35mm film, manual focus, includes original leather case
          {:else if selectedItem?.id === 'antique-vase-002'}
            Royal Porcelain VAS-1890-002 Royal Porcelain Blue Willow Pattern Vase - Antique | Blue and white pattern, 12 inches tall, no chips or cracks
          {:else if selectedItem?.id === 'rare-book-003'}
            Marvel Comics COM-1962-001 Amazing Fantasy #15 - First Appearance of Spider-Man | First appearance of Spider-Man, graded 9.4 by CGC
          {:else}
            Detailed title information not available for this item.
          {/if}
        </p>
      </div>
    </div>
  </div>
{/if} 