<script lang="ts">
  export let images: Array<{
    imageTitle: string;
    imageUrl: string;
  }>;

  let imageContainer: HTMLElement;
  let imageWidth: number;

  const handleNext = () => {
    if (imageContainer.scrollLeft === imageWidth * (images.length - 1)) {
      imageContainer.scrollLeft = 0;
    } else {
      imageContainer.scrollLeft += imageWidth;
    }
  };

  const handlePrevious = () => {
    imageContainer.scrollLeft -= imageWidth;
  };
</script>

<div class="w-96">
  <div
    bind:this={imageContainer}
    class="flex flex-shrink-0 flex-row overflow-x-scroll no-scrollbar snap-x snap-mandatory scroll-smooth"
  >
    {#each images as image}
      <div
        bind:clientWidth={imageWidth}
        class="relative h-128 w-full flex-shrink-0 snap-start"
      >
        <img
          src={image.imageUrl}
          alt={image.imageTitle}
          class="w-full h-full object-cover"
          loading="eager"
        />
      </div>
    {/each}
  </div>
</div>
<div class="flex text-xl mx-auto">
  <button
    class="p-3 px-10 bg-primary-100 hover:bg-primary-300 transition-all duration-300 active:bg-primary-300"
    on:click={handlePrevious}
  >
    {"<"}
  </button>
  <button
    class="p-3 px-10 bg-white hover:bg-gray-300 active:bg-gray-300 transition-all duration-300"
    on:click={handleNext}
  >
    {">"}
  </button>
</div>
