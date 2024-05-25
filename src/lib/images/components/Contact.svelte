<script lang="ts">
  import IconBrandLinkedin from "$lib/components/icons/IconBrandLinkedin.svelte";

  let submitStatus: boolean;
  async function handleSubmit(e: SubmitEvent) {
    const formData = new FormData(e.target as HTMLFormElement);
    const res = await fetch((e.target as HTMLFormElement).action, {
      method: (e.target as HTMLFormElement).method,
      body: formData,
      headers: { Accept: "application/json" },
    });

    try {
      if ((await res.json()).ok == true) {
        submitStatus = true;
      } else {
        submitStatus = false;
      }
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      submitStatus = false;
      return;
    }
  }
</script>

<section>
  <div class="block relative -top-20" id="contact"></div>
  <div class="mx-auto max-w-screen-xl">
    <div class="grid gap-2 md:grid-cols-2">
      <div class="p-5 space-y-2">
        <h2 class="text-3xl font-bold">
          Contact our team to explore your saving opportunities
        </h2>
        <p>
          Have your questions answered and get acquainted with our products.
        </p>
        <ul class="p-2 space-y-2 checklist">
          <li>
            Learn how to increase payment accuracy and lower healthcare
            expenditure
          </li>
          <li>Explore use cases for your payment integrity team</li>
          <li>Get any questions answered about our products</li>
        </ul>
        <p>
          Email us at <a
            href="mailto:sales@metadigital.tech"
            class="font-semibold text-blue-600 hover:underline"
            >sales@metadigital.tech</a
          >
          or reach out on
          <a
            href="https://www.linkedin.com/company/metadigital-inc"
            class="font-semibold text-blue-600 hover:underline">LinkedIn</a
          >
        </p>
        <hr class="p-2" />
        <div class="text-lg italic">
          Payers have identified <span class="font-bold">$1.8 billion </span>in
          fraud, waste and abuse using MetaDigital.
        </div>
      </div>
      <form
        on:submit|preventDefault={handleSubmit}
        action="https://formspree.io/f/xkndapvl"
        method="POST"
        class=" bg-white shadow-xl shadow-[color:hsl(216,_65%,_33%)] border-gray-800 space-y-4 px-5 py-7 border-2 rounded-lg"
      >
        {#if submitStatus == true}
          <div>
            Successfully submitted form. Thank you. We will respond to you via
            email.
          </div>
        {:else if submitStatus == false}
          <div class="text-red-400">
            Error submitting form. Please try again.
          </div>
        {/if}
        <fieldset>
          <label for="name">Full Name<span class="text-red-600">*</span></label>
          <input
            id="name"
            class="p-2 w-full rounded-lg border-2 border-gray-800"
            placeholder="Your name"
            required
            name="name"
          />
        </fieldset>
        <fieldset>
          <label for="email"
            >Work Email<span class="text-red-600">*</span></label
          >
          <input
            id="email"
            class="p-2 w-full rounded-lg border-2 border-gray-800"
            placeholder="user@example.com"
            type="email"
            name="email"
            required
          />
        </fieldset>
        <div class="grid grid-cols-2 gap-4">
          <fieldset>
            <label for="company"
              >Company<span class="text-red-600">*</span></label
            >
            <input
              id="company"
              class="p-2 w-full rounded-lg border-2 border-gray-800"
              name="company"
              placeholder=""
              required
            />
          </fieldset>
          <fieldset>
            <label for="role">Role<span class="text-red-600">*</span></label>
            <input
              id="role"
              class="p-2 w-full rounded-lg border-2 border-gray-800"
              name="role"
              placeholder=""
              required
            />
          </fieldset>
        </div>
        <fieldset>
          <label for="comments">Comments (optional)</label>
          <textarea
            id="comments"
            class="p-2 w-full h-24 rounded-lg border-2 border-gray-800"
            placeholder=""
            name="comments"
            maxlength="500"
          />
        </fieldset>
        <button
          class="uppercase font-semibold py-4 px-14 bg-[color:hsl(216,_65%,_33%)] hover:bg-[color:hsl(216,_65%,_50%)] text-white rounded-md"
          >Submit</button
        >
      </form>
    </div>
  </div>
</section>

<style>
  ul.checklist li::before {
    content: "✓";
    padding: 1rem;
    font-weight: 700;
  }
</style>
