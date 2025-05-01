<script lang="ts">
	export let data;
</script>

<section class="grid grid-cols-1 gap-8 items-center mx-auto max-w-screen-xl">
	<div class="col-span-1 my-8">
		<h1 class="my-4 text-3xl font-extrabold md:text-4xl lg:text-6xl">
			Uncovering Hidden Savings in an Underserved Market: Home Health and Personal Care Case Study
		</h1>
		<h2 class="italic text-gray-400">{data.date}</h2>
	</div>
</section>
<section class="mx-auto max-w-screen-xl">
	<div class="mx-auto prose prose-slate prose-xl">
		{@html data.blog}
	</div>
</section>

<!-- <style> -->
<!-- h1 -->
<!-- </style> -->
