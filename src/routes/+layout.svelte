<script>
	import '../app.css';

	import Header from '$lib/images/components/Header.svelte';
	import Footer from '$lib/images/components/Footer.svelte';
	import Contact from '$lib/images/components/Contact.svelte';
</script>

<Header />

<main class="my-16 mx-4 space-y-32 md:my-40">
	<slot />
	<Contact />
</main>

<Footer />
