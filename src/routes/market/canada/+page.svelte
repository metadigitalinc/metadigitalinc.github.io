<script lang="ts">
  import dashboardImage from "$lib/images/dashboard.png";
</script>

<section
  class="grid grid-cols-1 gap-8 items-center mx-auto max-w-screen-xl sm:grid-cols-2"
>
  <div class="col-span-1 my-8">
    <h1 class="my-4 text-3xl font-bold capitalize md:text-4xl lg:text-6xl">
      Optimize Your payments for Supplemental Health Claims
    </h1>
    <p class="pb-4 text-lg lg:text-xl"></p>
    <div class="flex gap-4">
      <a
        class="py-4 px-14 uppercase font-semibold bg-[color:hsl(216,_65%,_33%)] hover:bg-[color:hsl(216,_65%,_50%)] text-white rounded-md"
        href="#contact">Contact us</a
      >
    </div>
  </div>
  <div class="relative col-span-1">
    <img
      src={dashboardImage}
      alt="Dashboard"
      class="rounded-lg border-2 border-gray-800 shadow-[color:hsl(216,_65%,_33%)] shadow-xl"
    />
  </div>
</section>

<section>
  <div class="mx-auto max-w-screen-xl">
    <div
      class="gap-8 items-center py-8 mx-auto max-w-screen-xl sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16"
    >
      <div
        class="pt-6 pr-12 pb-0 pl-12 mr-4 rounded-r-full md:pr-24 border-2 border-[color:hsl(216,_65%,_33%)] overflow-clip"
      >
        <img class="w-full" src="/scan.svg" alt="dashboard" />
      </div>
      <div class="mx-6 mt-8 md:mt-0">
        <h2 class="mb-4 text-4xl font-extrabold tracking-tight">
          Edits and algorithms beyond medical claims
        </h2>
        <p class="md:text-lg">
          Use edits, algorithms and models designed to work with non-standard
          codes
        </p>
        <ul class="grid grid-cols-2 gap-2 mt-2 mb-6 md:text-lg">
          <li>Pharmacy</li>
          <li>Dental</li>
          <li>Vision</li>
          <li>Physiotherapy</li>
          <li>Chiropractor</li>
          <li>Massage therapy</li>
          <li>Mental health</li>
          <li>Other</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<style>
  ul li::before {
    content: "✓";
    color: hsl(216, 65%, 33%);
    padding: 1rem;
    font-weight: 700;
  }
</style>
