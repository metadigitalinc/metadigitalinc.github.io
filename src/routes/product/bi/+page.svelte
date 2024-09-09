<script lang="ts">
	import dashboardImage from '$lib/images/dashboard.png';
</script>

<section class="grid grid-cols-1 gap-8 items-center mx-auto max-w-screen-xl sm:grid-cols-2">
	<div class="col-span-1 my-8">
		<h1 class="my-4 text-3xl font-bold md:text-4xl lg:text-6xl">
			Analytics and Medical Intelligence
		</h1>
		<p class="pb-4 text-lg lg:text-xl">
			Turn healthcare claims data into actionable insights and make more data informed decisions
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
			src="/activity.png"
			alt="Dashboard"
			class="absolute -top-8 right-2 md:-right-12 scale-90 rounded-lg border-2 border-gray-800 shadow-[color:hsl(216,_65%,_33%)] shadow-xl"
		/>
		<img
			src="/peer.png"
			alt="Dashboard"
			class="absolute -bottom-8 left-2 md:-left-12 scale-90 rounded-lg border-2 border-gray-800 shadow-[color:hsl(216,_65%,_33%)] shadow-xl"
		/>
		<img
			src="/map.png"
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
				<img class="w-full" src="/outlier.svg" alt="dashboard" />
			</div>
			<div class="mx-6 mt-8 md:mt-0">
				<h2 class="mb-4 text-4xl font-extrabold tracking-tight">Optimize Network Performance</h2>
				<p class="mb-6 md:text-lg">
					Pinpoint high utilization areas and providers for educational opportunities and identify
					out-of-network utilization drivers.
				</p>
			</div>
		</div>
		<div
			class="gap-8 items-center py-8 mx-auto max-w-screen-xl sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16"
		>
			<div
				class="pt-6 pr-12 pb-0 pl-12 ml-4 rounded-l-full md:pl-24 border-2 border-[color:hsl(216,_65%,_33%)] overflow-clip"
			>
				<img class="w-full" src="/utilization.svg" alt="dashboard" />
			</div>
			<div class="mx-6 mt-8 md:order-first md:mt-0">
				<h2 class="mb-4 text-4xl font-extrabold tracking-tight">Improve Utilization Management</h2>
				<p class="mb-6 md:text-lg">
					Improve health outcomes and lower member cost of care by tracking service usage to prevent
					over or underutilization and identify high-risk members for intervention programs to lower
					member cost of care.
				</p>
			</div>
		</div>
	</div>
</section>
