<script lang="ts">
	import dashboardImage from '$lib/images/dashboard.png';
</script>

<section class="grid grid-cols-1 gap-8 items-center mx-auto max-w-screen-xl sm:grid-cols-2">
	<div class="col-span-1 my-8">
		<h1 class="my-4 text-3xl font-extrabold md:text-4xl lg:text-6xl">
			CareShield AI for Pharmacy and Dental
		</h1>
		<p class="pb-4 text-lg lg:text-xl">
			Capture more savings before and after you pay. Strengthen your payment integrity with edits,
			models and algorithms specifically built for pharmacy and dental claims.
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
			src="/analysis.png"
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
				class="pt-6 pr-12 pb-0 pl-12 mr-4 rounded-r-full md:pr-24 border-2 border-[color:hsl(216,_65%,_33%)] overflow-clip h-72 flex content-center"
			>
				<img class="w-full max-h-64" src="/customize.svg" alt="dashboard" />
			</div>
			<div class="mx-6 mt-8 md:mt-0">
				<h2 class="mb-4 text-4xl font-extrabold tracking-tight">
					Configurable Claim Edits Ready for Deployment
				</h2>
				<p class="mb-6 md:text-lg">
					Take advantage of our ever growing list of edits to capture FWA in both prepayment and
					postpayment environments. We work with you to configure our edits, rules and algorithms to
					match your specific policies and provider contracts.
				</p>
			</div>
		</div>
		<div
			class="gap-8 items-center py-8 mx-auto max-w-screen-xl sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16"
		>
			<div
				class="pt-6 pr-12 pb-0 pl-12 ml-4 rounded-l-full md:pl-24 border-2 border-[color:hsl(216,_65%,_33%)] overflow-clip h-72 flex content-center"
			>
				<img class="w-full max-h-64" src="/track.svg" alt="dashboard" />
			</div>
			<div class="mx-6 mt-8 md:order-first md:mt-0">
				<h2 class="mb-4 text-4xl font-extrabold tracking-tight">Transparent Claim Flagging</h2>
				<p class="mb-6 md:text-lg">
					View every flagged claim in our dashboard to see all details, including why it was
					flagged, which edit, algorithm, or model flagged the claim, which providers were involved,
					and which members were affected.
				</p>
			</div>
		</div>
	</div>
	<div
		class="gap-8 items-center py-8 mx-auto max-w-screen-xl sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16"
	>
		<div
			class="pt-6 pr-12 pb-0 pl-12 mr-4 rounded-r-full md:pr-24 border-2 border-[color:hsl(216,_65%,_33%)] overflow-clip h-72 flex content-center"
		>
			<img class="w-full max-h-64" src="/filter.svg" alt="dashboard" />
		</div>
		<div class="mx-6 mt-8 md:mt-0">
			<h2 class="mb-4 text-4xl font-extrabold tracking-tight">
				Find the most at risk providers with Provider ScoreCarding
			</h2>
			<p class="mb-6 md:text-lg">
				Filter for the highest risk providers to target your education and audit resources. Our
				system continously updates provider scores allowing you to monitor the impact of educational
				interventions.
			</p>
		</div>
	</div>
</section>
