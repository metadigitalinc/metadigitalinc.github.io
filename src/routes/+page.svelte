<script lang="ts">
  import analyticsImage from "$lib/images/analytics.png";
  import auditImage from "$lib/images/audit.png";
  import dashboardImage from "$lib/images/dashboard.png";
  import IconCheck from "$lib/components/icons/IconCheck.svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
</script>

<svelte:head><title>MetaDigital - Payment accuracy</title></svelte:head>

<section
  class="grid grid-cols-1 gap-8 items-center mx-auto max-w-screen-xl sm:grid-cols-2"
>
  <div class="col-span-1 my-8">
    <h1 class="my-4 text-3xl font-bold md:text-4xl lg:text-6xl">
      Paramedical Prepayment Integrity
    </h1>
    <p class="pb-4 text-lg">
      Integrity and accuracy before paying for paramedical claims in the US and
      in Canada.
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
      src={dashboardImage}
      alt="Dashboard"
      class="rounded-lg border-2 border-gray-800 shadow-[color:hsl(216,_65%,_33%)] shadow-xl"
    />
  </div>
</section>

<section>
  <div
    class="grid grid-cols-1 gap-8 items-center mx-auto max-w-screen-xl text-center sm:grid-cols-2"
  >
    <div class="text-2xl font-semibold">
      Total fraud, waste and abuse identified for our clients
    </div>

    <div>
      <Carousel.Root class="mx-auto w-48 sm:w-56 lg:w-80">
        <Carousel.Content>
          <Carousel.Item>
            <div class="text-3xl font-bold">$1.8 Billion</div>
            <div>Total</div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="text-3xl font-bold">$600 Million</div>
            <div>Homecare</div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="text-3xl font-bold">$330 Million</div>
            <div>Pharmacy</div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="text-3xl font-bold">$55 Million</div>
            <div>Therapy</div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="text-3xl font-bold">$16 Million</div>
            <div>Dental</div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="text-3xl font-bold">$12 Million</div>
            <div>Ambulance</div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="text-3xl font-bold">$6 Million</div>
            <div>Vision</div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="text-3xl font-bold">$4 Million</div>
            <div>Workers' Compensation</div>
          </Carousel.Item>
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </Carousel.Root>
    </div>
    <div class="flex overflow-x-auto snap-x snap-mandatory hide-scroll"></div>
  </div>
</section>

<section class="blue-glow">
  <div class="grid grid-cols-1 gap-4 mx-auto max-w-screen-xl md:grid-cols-12">
    <div class="p-5 bg-white rounded-lg border-2 border-gray-800 md:col-span-4">
      <h2 class="text-xl font-semibold">Ready To Deploy Customizable Edits</h2>
      <p>
        List of customizable edits to satisfy in-house policies, regulatory
        changes and unique contracts
      </p>
      <div class="relative w-full h-36 mask-fade">
        <ul
          class="absolute top-1/2 left-1/2 w-64 -translate-x-1/2 -translate-y-1/2"
        >
          <li
            class="p-4 font-semibold text-gray-600 border-2 border-gray-300 border-t-transparent"
          >
            <span>Provider exclusion list</span><span class="float-end">
              <IconCheck class="w-6 h-6 text-green-500" />
            </span>
          </li>
          <li
            class="p-4 font-semibold text-gray-600 border-2 border-gray-300 border-t-transparent"
          >
            <span>24 hour rule</span><span class="float-end">
              <IconCheck class="w-6 h-6 text-green-500" />
            </span>
          </li>
          <li
            class="p-4 font-semibold text-gray-600 border-2 border-gray-300 border-t-transparent"
          >
            <span>Impossible day</span><span class="float-end">
              <IconCheck class="w-6 h-6 text-green-500" />
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="p-5 bg-white rounded-lg border-2 border-gray-800 md:col-span-8">
      <h2 class="text-xl font-semibold">Real Time Dashboard For Analytics</h2>
      <p>
        Precise pre-pay claim flagging using our AI models and analytics visible
        on a dashboard
      </p>

      <img
        src={analyticsImage}
        alt="Analytics dashboard"
        class="object-cover object-left-top mx-auto w-11/12 h-48 mask-fade"
      />
    </div>
    <div class="p-5 bg-white rounded-lg border-2 border-gray-800 md:col-span-6">
      <h2 class="text-xl font-semibold">AI Enhanced Expert Claim Audit</h2>
      <p>
        Results up to 70% faster with claim review by expert clinicians, coders
        and subject matter experts using AI to deliver results
      </p>
      <img
        src={auditImage}
        alt="Analytics dashboard"
        class="object-cover object-left-top mx-auto w-11/12 h-48 mask-fade"
      />
    </div>
    <div class="p-5 bg-white rounded-lg border-2 border-gray-800 md:col-span-6">
      <h2 class="text-xl font-semibold">Secure by default</h2>
      <p>
        <span class="font-bold">HIPAA</span> and
        <span class="font-bold"> PIPEDA </span> compliant
      </p>
      <div class="grid overflow-hidden relative justify-center h-48 mask-fade">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="0.1"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-96 h-96 absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 text-[color:hsl(216,_65%,_33%)]"
          ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
            d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"
          /></svg
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="0.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-72 h-72 absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 text-[color:hsl(216,_65%,_33%)]"
          ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
            d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"
          /></svg
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          class="w-48 h-48 absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 text-[color:hsl(216,_65%,_33%)]"
          ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
            d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"
          /></svg
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#1d498a"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          class="w-24 h-24 absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 text-[color:hsl(216,_65%,_33%)]"
          ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
            d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"
          /></svg
        >
      </div>
    </div>
    <div class="p-5 bg-white rounded-lg border-2 border-gray-800 md:col-span-5">
      <h2 class="text-xl font-semibold">
        Paramedical And Supplemental Health Focus
      </h2>
      <p>Handle many types of paramedical and supplemental health claims</p>
      <div class="text-3xl text-gray-400 infinite-scroll">
        <div class="infinite-scroll-item">
          - Pharmacy - Dental - Optical - Homecare - Therapy - Ambulance -
          Workers' Compensation - DME - Chiropractic
        </div>
        <div class="infinite-scroll-item">
          - Pharmacy - Dental - Optical - Homecare - Therapy - Ambulance -
          Workers' Compensation - DME - Chiropractic
        </div>
      </div>
    </div>
    <div class="p-5 bg-white rounded-lg border-2 border-gray-800 md:col-span-7">
      <h2 class="text-xl font-semibold">US and Canada Claims Supported</h2>
      <p>
        Analyze claims with codes (such as <span class="italic"
          >DIN, NDC, CPT, OHIP, etc</span
        >) from both Canada and US
      </p>
      <div class=""></div>
    </div>
  </div>
</section>

<style>
  .blue-glow {
    background: radial-gradient(
      hsl(216, 65%, 66%),
      hsl(216, 65%, 88%) 50%,
      #fff 70%
    );
  }

  .hide-scroll {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scroll::-webkit-scrollbar {
    width: 0;
    display: none;
  }

  .infinite-scroll {
    width: 90%;
    margin-inline: auto;
    position: relative;
    height: 2rem;
    overflow: hidden;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0)
    );
  }
  @keyframes scrollLeft {
    to {
      left: -100rem;
    }
  }
  .infinite-scroll-item {
    height: 2rem;
    border-radius: 6px;
    width: 100rem;
    position: absolute;
    left: max(calc(87rem), 100%);
    animation-name: scrollLeft;
    animation-duration: 25s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  .infinite-scroll-item:nth-child(1) {
    animation-delay: calc(25s / 2 * (2 - 1) * -1);
  }
  .infinite-scroll-item:nth-child(2) {
    animation-delay: calc(25s / 2 * (2 - 2) * -1);
  }
  .mask-fade {
    mask-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0)
    );
    mask-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 30%,
      rgba(0, 0, 0, 1) 70%,
      rgba(0, 0, 0, 0)
    );
  }
</style>
