<script lang="ts">
  import IconBrandLinkedin from "$lib/components/icons/IconBrandLinkedin.svelte";

  const year = new Date().getFullYear();
</script>

<footer>
  <div class="container pt-16 mx-auto space-y-4 text-center">
    <a href="/" class="text-2xl font-bold">MetaDigital</a>
    <ul class="flex gap-12 justify-center">
      <li><a href="/product/analytics">Analytics</a></li>
      <li><a href="/product/audit">Audit</a></li>
      <li><a href="/about">About us</a></li>
    </ul>
    <div class="text-gray-300">
      <a
        href="https://www.linkedin.com/company/metadigital-inc"
        class="font-semibold text-gray-300 hover:text-white"
        ><IconBrandLinkedin class="inline mb-1 w-8 h-8" /></a
      >
    </div>
    <div class="pb-2 text-gray-300">
      © Copyright {year} MetaDigital Inc. All rights reserved.
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: #1d498a;
    color: white;
    clip-path: ellipse(90% 100% at bottom center);
  }

  @media (min-width: 768px) {
    footer {
      clip-path: ellipse(65% 100% at bottom center);
    }
  }
</style>
