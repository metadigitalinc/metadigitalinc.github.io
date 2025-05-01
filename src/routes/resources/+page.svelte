<script>
	const resources = [
		{
			link: 'resources/2025-04-30/national-pilot',
			title:
				'Uncovering Hidden Savings in an Underserved Market: Home Health and Personal Care Case Study',
			date: '2025-04-30'
		}
	];
</script>

<section class="grid grid-cols-1 gap-8 items-center mx-auto max-w-screen-xl sm:grid-cols-2">
	<div class="col-span-1 my-8">
		<h1 class="my-4 text-3xl font-extrabold md:text-4xl lg:text-6xl">Resources</h1>
		<p class="pb-4 text-lg">Our latest healthcare resources</p>
	</div>
</section>
<section class="grid gap-4 mx-auto max-w-screen-xl md:grid-cols-3">
	{#each resources as blog}
		<a
			href={blog.link}
			class="group hover:shadow-md hover:shadow-[color:hsl(216,_65%,_33%)] p-4 rounded-lg border-2 border-black"
		>
			<div class="text-xl font-semibold">{blog.title}</div>
			<p class="text-sm italic text-gray-400">{blog.date}</p>
			<span class="group-hover:text-blue-400 group-hover:underline">Read more</span>
		</a>
	{/each}
</section>
