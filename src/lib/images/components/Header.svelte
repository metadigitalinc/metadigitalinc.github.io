<script lang="ts">
	import svelteLogo from '$lib/images/logo.svg';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import IconMenu from '$lib/components/icons/IconMenu.svelte';
	import IconDown from '$lib/components/icons/IconDown.svelte';
</script>

<header class="fixed w-screen top-0 shadow-sm bg-white z-50 shadow-[color:hsl(216,_65%,_66%)]">
	<nav class="container flex items-center my-4 mx-auto">
		<a href="/" class="flex items-center">
			<img src={svelteLogo} class="w-12 h-12" alt="MetaDigital" />
			<h1 class="text-3xl font-[750]">MetaDigital</h1>
		</a>

		<div class="hidden gap-x-8 ml-12 md:flex">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<div class="relative text-xl font-semibold">
						Solutions <IconDown class="absolute left-1/2 w-4 h-4 -translate-x-1/2" />
					</div>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="mx-4 mt-8">
					<div class="grid grid-cols-2 gap-x-8 p-4">
						<DropdownMenu.Group class="">
							<DropdownMenu.Label>Products</DropdownMenu.Label>
							<DropdownMenu.Separator />
							<DropdownMenu.Item class="cursor-pointer" href="/product/analytics">
								<div>
									<div class="text-xl font-semibold">Pre Pay Payment Accuracy</div>
									<div>
										Capture more savings with FWA edits, algorithms and analytics configured for
										your needs.
									</div>
								</div>
							</DropdownMenu.Item>
							<DropdownMenu.Item class="cursor-pointer" href="/product/scoring">
								<div>
									<div class="text-xl font-semibold">Provider ScoreCarding</div>
									<div>Keep track of risk scores for each provider in your network</div>
								</div>
							</DropdownMenu.Item>
							<DropdownMenu.Item class="cursor-pointer" href="/product/bi">
								<div>
									<div class="text-xl font-semibold">Analytics and Medical Intelligence</div>
									<div>Track metrics and spot insights using our dashboard</div>
								</div>
							</DropdownMenu.Item>
							<DropdownMenu.Item class="cursor-pointer" href="/product/audit">
								<div>
									<div class="text-xl font-semibold">Audit</div>
									<div>
										Use the auditing case manager to review and verify medical documentation, track
										cases and create reports.
									</div>
								</div>
							</DropdownMenu.Item>
						</DropdownMenu.Group>
						<DropdownMenu.Group>
							<DropdownMenu.Label>Serving Clients in US and Canada</DropdownMenu.Label>
							<DropdownMenu.Separator />
							<DropdownMenu.Item class="cursor-pointer" href="/market#medicaid">
								<div>
									<div class="text-xl font-semibold">Medicaid Agencies & Managed Care Plans</div>
									<div></div>
								</div>
							</DropdownMenu.Item>
							<DropdownMenu.Item class="cursor-pointer" href="/market#wc">
								<div>
									<div class="text-xl font-semibold">Workers Compensation</div>
								</div>
							</DropdownMenu.Item>
							<DropdownMenu.Item class="cursor-pointer" href="/market#tpa">
								<div>
									<div class="text-xl font-semibold">Third Party Administrators</div>
								</div>
							</DropdownMenu.Item>
						</DropdownMenu.Group>
					</div>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
			<a href="/about" class="relative text-xl font-semibold">About</a>
		</div>

		<a
			class="hidden md:block ml-auto uppercase font-semibold py-4 px-14 bg-[color:hsl(216,_65%,_33%)] hover:bg-[color:hsl(216,_65%,_50%)] text-white rounded-md"
			href="#contact">Contact us</a
		>
		<Sheet.Root>
			<Sheet.Trigger asChild let:builder>
				<Button
					variant="outline"
					size="icon"
					class="ml-auto md:hidden shrink-0"
					builders={[builder]}
				>
					<IconMenu class="w-6 h-6" />
					<span class="sr-only">Toggle navigation menu</span>
				</Button>
			</Sheet.Trigger>
			<Sheet.Content side="left">
				<nav class="grid gap-6 text-lg font-medium">
					<Sheet.Close class="text-left">
						<a href="/" class="flex gap-2 items-center text-lg font-semibold">
							<img src={svelteLogo} class="w-12 h-12" alt="MetaDigital" />
							<span class="sr-only">MetaDigital</span>
						</a>
					</Sheet.Close>
					<div class="text-sm">Products</div>
					<hr />
					<Sheet.Close class="text-left">
						<a href="/product/analytics" class="text-muted-foreground hover:text-foreground">
							Pre Pay Payment Accuracy
						</a>
					</Sheet.Close>
					<Sheet.Close class="text-left">
						<a href="/product/scoring" class="text-muted-foreground hover:text-foreground"
							>Provider ScoreCarding</a
						>
					</Sheet.Close>
					<Sheet.Close class="text-left">
						<a href="/product/bi" class="text-muted-foreground hover:text-foreground">
							Analytics and Medical Intelligence
						</a>
					</Sheet.Close>
					<Sheet.Close class="text-left">
						<a href="/product/audit" class="text-muted-foreground hover:text-foreground"> Audit </a>
					</Sheet.Close>
					<div class="mt-8 text-sm">Markets</div>
					<hr />
					<Sheet.Close class="text-left">
						<a href="/market#medicaid" class="text-muted-foreground hover:text-foreground"
							>Medicaid Agencies & Managed Care Plans</a
						>
					</Sheet.Close>
					<Sheet.Close class="text-left">
						<a href="/market#wc" class="text-muted-foreground hover:text-foreground"
							>Workers Compensation</a
						>
					</Sheet.Close>
					<Sheet.Close class="text-left">
						<a href="/market#tpa" class="text-muted-foreground hover:text-foreground"
							>Third Party Administrators</a
						>
					</Sheet.Close>
					<div class="mt-8 text-sm">About us</div>
					<hr />
					<Sheet.Close class="text-left">
						<a href="/about" class="text-muted-foreground hover:text-foreground">Team</a>
					</Sheet.Close>
					<Sheet.Close class="absolute bottom-9 mt-auto text-left">
						<a
							class="uppercase font-semibold py-4 px-14 bg-[color:hsl(216,_65%,_33%)] hover:bg-[color:hsl(216,_65%,_50%)] text-white rounded-md"
							href="#contact">Contact us</a
						>
					</Sheet.Close>
				</nav>
			</Sheet.Content>
		</Sheet.Root>
	</nav>
</header>
