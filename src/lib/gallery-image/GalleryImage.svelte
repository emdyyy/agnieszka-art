<script lang="ts">
  export let imgSrc: string;
  export let imgAlt: string;

  $: isVisible = false;

  function whenInViewport(e: Element) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        isVisible = true;
      }
    });

    observer.observe(e);
  }
</script>

<div use:whenInViewport class="pb-5">
  <div
    class={`relative w-full w-96 transition-all duration-300 transition-all duration-500 ${
      isVisible ? "opacity-1 blur-none" : "opacity-0 blur-md"
    }`}
  >
    <img src={imgSrc} alt={imgAlt} class="w-full" loading="lazy" />
  </div>
</div>
