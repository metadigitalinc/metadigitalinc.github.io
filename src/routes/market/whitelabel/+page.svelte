<script lang="ts">
	import dashboardImage from '$lib/images/dashboard.png';
</script>

<section class="grid grid-cols-1 gap-8 items-center mx-auto max-w-screen-xl sm:grid-cols-2">
	<div class="col-span-1 my-8">
		<h1 class="my-4 text-3xl font-extrabold capitalize md:text-4xl lg:text-6xl">White Label</h1>
		<p class="pb-4 text-lg lg:text-xl">
			Customize CareShield AI's branding and style to bring the trust your client's expect
		</p>
		<div class="flex gap-4">
			<a
				class="py-4 px-14 uppercase font-semibold bg-[color:hsl(216,_65%,_33%)] hover:bg-[color:hsl(216,_65%,_50%)] text-white rounded-md"
				href="#contact">Contact us</a
			>
		</div>
	</div>
	<div class="relative col-span-1">
		<img src="/white-label.svg" alt="White Label Your Solution" />
	</div>
</section>

<style>
	ul li::before {
		content: '✓';
		color: hsl(216, 65%, 33%);
		padding: 1rem;
		font-weight: 700;
	}
</style>
