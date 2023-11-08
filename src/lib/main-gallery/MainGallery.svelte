<script lang="ts">
  import GalleryImage from "$lib/gallery-image/GalleryImage.svelte";
  import SectionHeading from "$lib/section-heading/SectionHeading.svelte";
  import { createClient } from "@sanity/client";
  import imageUrlBuilder from "@sanity/image-url";
  import type { SanityImageSource } from "@sanity/image-url/lib/types/types.js";
  import { onMount } from "svelte";

  export let data:
    | {
        imageTitle: string;
        imageUrl: string;
      }[]
    | undefined;

  const client = createClient({
    projectId: "ln2b6gii",
    dataset: "production",
    apiVersion: "2023-11-08",
    useCdn: false,
  });

  const builder = imageUrlBuilder(client);

  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }

  const pageSize = 12;
  $: images = data;
  $: currentPage = 0;
  $: maxPage = 0;
  $: isLoading = false;

  onMount(async () => {
    isLoading = true;
    const amountOfEntries = await client.fetch(
      `count(*[_type == "main-gallery"])`
    );
    maxPage = Math.ceil(amountOfEntries / pageSize) - 1;
    isLoading = false;
  });

  const load = async (amount: number) => {
    isLoading = true;
    const result: Array<{
      imageTitle: string;
      mainGalleryImage: SanityImageSource;
    }> =
      await client.fetch(`*[_type == "main-gallery"] | order(_createdAt desc) [${
        currentPage * amount
      }...${currentPage * amount + pageSize}]{
    imageTitle,
    mainGalleryImage
  }`);

    images = result.map((entry) => ({
      imageTitle: entry.imageTitle,
      imageUrl: urlFor(entry.mainGalleryImage).url(),
    }));
    isLoading = false;
  };
</script>

<section class="mb-10 flex flex-col justify-center w-full" id="galeria">
  <SectionHeading>Galeria</SectionHeading>
  {#if images}
    <div class="columns-3xs gap-5">
      {#each images as image}
        <GalleryImage imgSrc={image.imageUrl} imgAlt={image.imageTitle} />
      {/each}
    </div>
    <div class="flex justify-center">
      <a href="#galeria"
        ><button
          disabled={currentPage <= 0 || isLoading}
          on:click={() => {
            currentPage--;
            load(-pageSize);
          }}
          class="transition-all duration-300 uppercase p-3 px-10 bg-primary-100 hover:bg-primary-300 text-black active:bg-primary-300 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
        >
          {"<"}
        </button>
      </a>
      <a href="#galeria">
        <button
          on:click={() => {
            currentPage++;
            load(pageSize);
          }}
          disabled={currentPage >= maxPage || isLoading}
          class="transition-all duration-300 uppercase p-3 px-10 bg-primary-100 hover:bg-primary-300 text-black active:bg-primary-300 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
        >
          {">"}
        </button>
      </a>
    </div>
  {:else}
    <p>Wystąpił błąd podczas ładowania galerii</p>
  {/if}
</section>
