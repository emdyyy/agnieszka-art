<script lang="ts">
  import Footer from "$lib/footer/Footer.svelte";
  import ImageGallery from "$lib/image-gallery/ImageGallery.svelte";
  import Navbar from "$lib/navbar/Navbar.svelte";
  import SectionHeading from "$lib/section-heading/SectionHeading.svelte";
  import type { PageData } from "./$types";
  import MainGallery from "$lib/main-gallery/MainGallery.svelte";

  export let data: PageData;
</script>

<svelte:head>
  <title>Agnieszka Pracownia Artystyczna</title>
  <meta
    name="description"
    content="Magiczne obrazy tworzone kredkami pastelowymi na zamówienie. Odkryj moje wyjątkowe dzieła, które ożywią Twoje marzenia kolorami!"
  />

  <meta property="og:site_name" content="Agnieszka Pracownia Artystyczna" />
  <meta property="og:locale" content="pl_PL" />
  <meta property="og:url" content="https://agnieszka-art.pl" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Agnieszka Pracownia Artystyczna" />
  <meta
    property="og:description"
    content="Magiczne obrazy tworzone kredkami pastelowymi na zamówienie. Odkryj moje wyjątkowe dzieła, które ożywią Twoje marzenia kolorami!"
  />
  <meta
    property="og:image"
    content="https://agnieszka-art.pl/opengraph-image.jpg"
  />

  <link rel="canonical" href="https://agnieszka-art.pl" />
</svelte:head>

<Navbar />
<div class="px-5">
  <header
    class="flex justify-around h-[calc(100vh-64px)] items-center max-w-screen-xl mx-auto"
  >
    <div class="flex flex-col justify-end items-center gap-5">
      <div class="relative lg:w-128 md:w-96 w-64">
        <img
          class="w-full h-auto object-contain"
          src="/images/logo.png"
          alt="Pracownia Artystyczna Agnieszka"
        />
      </div>
      <div class="flex flex-col md:flex-row gap-5 m-5 md:m-12">
        <a href="#kontakt">
          <button
            class="w-full transition-all duration-300 uppercase p-3 px-10 bg-primary-100 hover:bg-primary-300 text-black active:bg-primary-300"
          >
            Kontakt
          </button>
        </a>
        <a href="#galeria">
          <button
            class="w-full transition-all duration-300 uppercase p-3 px-10 border border-primary-100 border-solid hover:bg-primary-300 text-black hover:border-primary-300 active:bg-primary-300"
          >
            Więcej
          </button>
        </a>
      </div>
    </div>
    <div class="flex-col justify-center h-full hidden lg:flex">
      {#if data.headerGalleryImages}
        <ImageGallery images={data.headerGalleryImages} />
      {/if}
    </div>
  </header>
  <main class="max-w-screen-xl mx-auto">
    <MainGallery data={data.mainGalleryImages} />
    <section class="flex flex-col lg:h-screen" id="o-mnie">
      <SectionHeading>O mnie</SectionHeading>
      <div
        class="flex flex-col md:flex-row gap-5 justify-between grow items-center"
      >
        <div class="w-full md:w-128">
          <img
            src="/images/about.jpg"
            alt="Agnieszka Dettlaff-Przepióra"
            class="w-full h-auto"
            loading="lazy"
          />
        </div>
        <div class="flex flex-col gap-3 md:w-1/2">
          <h3 class="text-3xl">Agnieszka Dettlaff-Przepióra</h3>
          <p>
            Nazywam się Agnieszka Dettlaff-Przepióra, jestem doświadczoną
            artystką specjalizującą się w rysunkach kredkami pastelowymi.
          </p>
          <p>
            Moje prace są wyjątkowe dzięki użyciu papieru Clairefontaine o
            gramaturze 360 gsm oraz dostępności na formatach 24 cm x 32 cm i A3.
          </p>
          <p>
            Moje rysunki obejmują różnorodne tematy, w tym portrety, pejzaże,
            zwierzęta i karykatury, które oddają emocje i głębię każdego motywu.
          </p>
          <p>
            Moja pasja do sztuki przekłada się na wyjątkowe dzieła, które mogą
            urozmaicić twój dom lub stanowić oryginalny prezent dla bliskich.
            Jeśli jesteś zainteresowany moją twórczością, zachęcam do kontaktu i
            zapoznania się z moimi pracami.
          </p>
        </div>
      </div>
    </section>
    <section class="flex flex-col lg:h-screen py-10" id="kontakt">
      <div class="grid md:grid-cols-2 gap-10 md:gap-5 grow items-center">
        <div class="flex flex-col gap-3">
          <h2 class="uppercase font-bold md:tracking-widest text-3xl">
            WSPÓŁPRACUJ ZE MNĄ
          </h2>
          <p>
            Jeśli interesuje Cię współpraca ze mną, aby urozmaicić twoje wnętrze
            oryginalnym dziełem sztuki lub sprawić bliskiej osobie wyjątkowy
            prezent, serdecznie zachęcam do skontaktowania się ze mną. Chętnie
            rozmawiam o projektach, które mogą stać się rzeczywistością dzięki
            mojej sztuce.
          </p>
        </div>
        <div class="flex md:items-center md:justify-center">
          <div class="flex flex-col gap-5 items-start lowercase w-fit">
            <a
              href="tel:+48661562501"
              class="hover:text-primary-100 transition-all duration-300"
            >
              <p class="text-3xl">
                <span class="text-primary-100">tel.</span> +48 661 562 501
              </p>
            </a>
            <a
              href="https://www.instagram.com/deagnieszka/"
              class="hover:text-primary-100 transition-all duration-300"
            >
              <p class="text-3xl">instagram</p>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100071357160513"
              class="hover:text-primary-100 transition-all duration-300"
            >
              <p class="text-3xl">facebook</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</div>
