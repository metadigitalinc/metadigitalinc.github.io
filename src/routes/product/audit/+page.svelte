<script lang="ts">
  import dashboardImage from "$lib/images/dashboard.png";
</script>

<section
  class="grid grid-cols-1 gap-8 items-center mx-auto max-w-screen-xl sm:grid-cols-2"
>
  <div class="col-span-1 my-8">
    <h1 class="my-4 text-3xl font-bold md:text-4xl lg:text-6xl">
      Stay on top of every case
    </h1>
    <p class="pb-4 text-lg lg:text-xl">
      Use the auditing case manager to review and verify medical documentation,
      track cases and create reports.
    </p>
    <div class="flex gap-4">
      <a
        class="py-4 px-14 uppercase font-semibold bg-[color:hsl(216,_65%,_33%)] hover:bg-[color:hsl(216,_65%,_50%)] text-white rounded-md"
        href="#contact">Contact us</a
      >
    </div>
  </div>
  <div class="relative col-span-1">
    <img
      src="/audit.png"
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
        class="pt-6 pr-12 pb-0 pl-12 mr-4 rounded-r-full md:pr-24 border-[color:hsl(216,_65%,_33%)] border-2 overflow-clip"
      >
        <img class="w-full" src="/identify.svg" alt="dashboard" />
      </div>
      <div class="mx-6 mt-8 md:mt-0">
        <h2 class="mb-4 text-4xl font-extrabold tracking-tight">
          Make your auditors superhuman
        </h2>
        <p class="mb-6 md:text-lg">
          Use our AI medical record summarization to extract all the relevant
          information needed for an audit instantly. Receive recommendations
          about inconsistencies between claim data and submitted medical
          records.
        </p>
      </div>
    </div>
    <div
      class="gap-8 items-center py-8 mx-auto max-w-screen-xl sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16"
    >
      <div
        class="pt-6 pr-12 pb-0 pl-12 ml-4 rounded-l-full md:pl-24 border-[color:hsl(216,_65%,_33%)] border-2 overflow-clip"
      >
        <img class="w-full" src="/analysis.svg" alt="dashboard" />
      </div>
      <div class="mx-6 mt-8 md:order-first md:mt-0">
        <h2 class="mb-4 text-4xl font-extrabold tracking-tight">
          Reports On Demand
        </h2>
        <p class="mb-6 md:text-lg">
          Generate reports instantly using our export feature to get a
          moment-in-time snapshot of ongoing and completed cases, including case
          summaries, dates, providers involved, and more.
        </p>
      </div>
    </div>
  </div>
</section>
