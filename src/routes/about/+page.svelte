<script lang="ts">
	import IconBrandLinkedin from '$lib/components/icons/IconBrandLinkedin.svelte';
	import * as Dialog from '$lib/components/ui/dialog';

	let names = [
		{
			name: 'Anesu A. Machoko',
			title: 'CEO/Founder',
			link: 'https://www.linkedin.com/in/anesu-machoko/',
			image: '/profiles/anesu_machoko.png',
			description:
				' Anesu oversees investor management, product vision, and corporate development for MetaDigital. He has 8 years’ experience working in venture capital and financial services for the Export Development Canada (EDC) , MCAN Mortgage Corporation and Outlier Ventures respectively. Anesu has helped advise and develop architecture for the crypto economics and successful 2 nd ever Initial Exchange Offering (IEO)on Binance for Fetch AI raising $15MM. He holds a bachelor’s degree in Actuarial Mathematics from the University of Manitoba (2012). He also holds an MBA and Graduate Diploma in Financial Engineering from Schulich School of Business. Anesu has won the Enterprise Blockchain Award for best research paper Token Economics Creation in 2019'
		},
		{
			name: 'Alex Tam',
			title: 'CTO',
			link: 'https://linkedin.com/in/alexander-tam-75395144',
			image: '/profiles/alex_tam.png',
			description:
				'Alex runs the data and infrastructure team. This includes working with our clinicians to development new rules and models, keeping systems up to date on CMS policies, and maintaining data pipeline for clean healthcare data. He previously worked in venture capital and software consulting. He has an educational background in math and computer science with a masters in Applied Statistics.'
		},
		{
			name: 'Kim Glenn',
			title: 'Interim Chief Strategy Leader & Medicaid Advisor',
			link: 'https://www.linkedin.com/in/kim-glenn',
			image: '/profiles/kim_glenn.png',
			description:
				'Kim Glenn is a strategic advisor for MetaDigital focused on helping enter the Medicaid Managed and FFS complex Marketplace. She brings over 35 years of focused Medicaid market and government sponsored health plan experience. Kim deeply understands all aspects of this market and how a company can best position its offering to meet the needs of the program they are looking to serve.  Most recently Kim served as the Senior Vice President of Government Health Plans at HHAeXchange for 6.5 years. In this role, she led business development, growth, client success and government relations strategy within the Medicaid Managed Care and Medicaid Fee-For-Service markets. Under her leadership, the company contracted with several large Medicaid payers in 12 new states.  Prior experience includes serving for 12 years as the Senior Vice President of Growth and Client Success over HMS, a publicly traded company’s National Medicaid and State Government Business Line. Prior to HMS, she served as a Principal, Shareholder and Manager at Public Consulting Group, Inc where she oversaw the Benefits Solution Practice Area across the Southern US Government sponsored healthcare line of business for 9 years.  Earlier in her career, she served as Senior Manager at Deloitte and Touche, working directly with the Partner who managed the Medicaid line of business for over 7 years.'
		}
	];
	let advisors = [
		{
			name: 'William K. Fleming, PharmD',
			title: 'Advisor & Board Member',
			link: 'https://www.linkedin.com/in/flemingwilliam',
			image: '/profiles/william_fleming.png',
			description:
				'Dr. William K. Fleming is a seasoned healthcare executive with more than 30 years of leadership experience at Humana, where he held key roles across both the insurance and care delivery sides of the enterprise. Known for his strategic vision and operational depth, he led transformative initiatives across core healthcare services—including primary care, home health, and pharmacy—as well as across a wide range of insurance offerings, including Medicare, Medicaid, TRICARE, and commercial plans. His leadership delivered measurable improvements in clinical quality, member experience, and cost management. Over the course of his career, Dr. Fleming held multiple C-suite positions and played a pivotal role in aligning Humana’s insurance products with its expanding care delivery assets to create integrated, value-based care models. He also helped establish Humana as a national leader in pharmacy services, overseeing the growth of a high-performing pharmacy benefit manager and advancing pharmacy’s role in driving better health outcomes. Dr. Fleming has been deeply engaged in healthcare innovation, private equity partnerships, and board governance. He is a trusted advisor on business growth, healthcare policy, and the evolving payer-provider landscape. He is widely recognized as a policy expert, particularly in areas impacting Medicare, value-based care, and consumer access. He holds a PharmD and BS in Pharmacy from the University of Kentucky and a BS from Transylvania University. He is a Fellow of the Academy of Managed Care Pharmacy and currently serves on the boards of Petauri Health, MetaDigital, and LifeGuides.'
		},
		{
			name: 'Kevin Munkholm',
			title: 'Board member & Advisor',
			link: 'https://www.linkedin.com/in/kevinmunkholm/',
			image: '/profiles/kevin_munkholm.png',
			description:
				'Kevin joined Marsh McLennan Agency in 2002. He is a Principal in the Technology and Life Sciences Practice Group. Kevin focuses his attention on building sustainable benefits programs, incorporating unique funding methods with consumer driven health plans. He is a tireless advocate for his clients, anticipating and responding to their unique business challenges while customizing benefits that concentrate on the long-term needs of their businesses. Kevin developed and executed the Marsh McLennan Agency’s Consumer Driven Healthcare strategy, as well as an educational campaign to prepare companies and their employees for the new ways in which healthcare is delivered. Additionally, he has advised carriers on developing programs to support the evolving needs of the unique industries he serves. Kevin currently serves on the board of Access Youth Academy and is a member of BIOCOM’s Human Resources Planning Committee. He earned his Bachelor of Arts degrees from the University of Colorado, Boulder.'
		},
		{
			name: 'Dr. Darren Wethers',
			title: 'Advisor',
			link: 'https://www.linkedin.com/in/darrenwethersmd',
			image: '/profiles/darren_wethers.png',
			description:
				'Darren Wethers is a board-certified internal medicine physician, born and raised in Chicago, Illinois. He graduated from Morehouse College, Northwestern University Medical School and completed internal medicine training at Emory University School of Medicine before establishing himself in internal medicine practice in the St. Louis, Missouri area, becoming a “Top Doctor” honoree several years running. In 2011, Dr. Wethers began a career in administrative medicine, servings as a medical director with Coventry Health Care and Aetna, vice president of clinical operations at Blue Cross Blue Shield of Arizona and now at Atrio Health Plans, where he serves as chief medical officer. Dr. Wethers is a member of the American Association for Physician Leadership, Fellow of the American College of Physicians, member of Alpha Phi Alpha and Sigma Pi Phi fraternities; he is a board member and immediate past chairman for Gamma Mu Educational Services (GMES) and is a board member of Northwestern University Medical School Alumni Association, for which he serves as co-chair of the Inclusion and Allyship committee and president-elect. '
		},
		{
			name: "Beth T. O'Rorke",
			title: 'Advisor',
			link: 'https://www.linkedin.com/in/beth-o-rorke-b369281',
			image: '/profiles/beth_ororke.png',
			description:
				'Beth T. O’Rorke is strategic, results-driven, and energetic leader with over twenty-five years of broad business and technology expertise across healthcare, retail, and financial services insurance. She is an effective advisor to senior management on technology investment levels, industry trends, and emerging technologies. She has led significant improvements in key performance objectives to achieve the corporate strategy. She was recognized as Boston CIO of the Year, ORBIE Awards, 2018 (nominated in top 25 overall / top 5 in healthcare) and as Top 20 CIOs Shaping the Future of Technologies by Warner Communications in 2020. Beth has extensive experience in leading transformation initiatives across various industries with more than 25 years of experience building best-in-class business solutions and operations in the retail, insurance, and consumer industries at companies including SVP and CIO at BCBSMA (2015-2020) and executive positions at Allmerica Financials (currently Hanover Insurance), Staples, Inc., and Ahold Delhaize in the Netherlands. Beth has her MBA from the Bentley University Graduate School of Business and holds a bachelor’s degree in Business Administration from Providence College.'
		}
	];
</script>

<section class="grid grid-cols-1 gap-8 items-center mx-auto max-w-screen-xl sm:grid-cols-2">
	<div class="col-span-1 my-8">
		<h1 class="my-4 text-3xl font-extrabold md:text-4xl lg:text-6xl">About Us</h1>
		<p class="pb-4 text-gray-700 sm:text-xl">
			At MetaDigital, we're on a mission to protect the healthcare system by empowering payers and
			providers with cutting-edge payment integrity solutions. Our specialized expertise and
			innovative technology enable us to tackle the complex challenge of fraud, waste, and abuse
			(FWA) across a wide range of low-dollar, high-volume healthcare claims.
		</p>
	</div>
	<div class="relative col-span-1">
		<img src="/group.svg" alt="Dashboard" />
	</div>
</section>
<section class="grid grid-cols-1 gap-8 items-center mx-auto max-w-screen-xl sm:grid-cols-2">
	<div class="col-span-1 my-8">
		<h1 class="my-4 text-3xl font-extrabold md:text-4xl lg:text-6xl">Our Approach</h1>
		<p class="pb-4 text-gray-700 sm:text-xl">
			Our solution is a powerful combination of advanced analytics, machine learning, and domain
			expertise. We've built proprietary edits and algorithms using claims data and medical
			expertise to identify behavioral patterns and anomalies that would otherwise go undetected.
			Our platform is available for white-labeling, allowing our partners to seamlessly integrate
			our powerful payment integrity capabilities into their own branded solutions.
		</p>
	</div>
	<div class="relative col-span-1 md:order-first">
		<img src="/team.svg" alt="Dashboard" />
	</div>
</section>

<section class="container mx-auto">
	<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
		<div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
			<h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl lg:text-6xl">
				Our Leadership Team
			</h2>
			<p class="text-gray-700 sm:text-xl">
				Our team has a wide range of experience in healthcare and technology to provide the best
				product for our clients.
			</p>
		</div>
		<div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-16">
			{#each names as person}
				<Dialog.Root>
					<div
						class="p-4 text-center text-gray-700 rounded-lg transition duration-300 hover:scale-110 group hover:shadow-[color:hsl(216,_65%,_33%)] bg-white hover:shadow-lg hover:border"
					>
						<Dialog.Trigger>
							<img
								class="mx-auto mb-4 w-36 h-36 rounded-full"
								src={person.image}
								alt="{person.name} Avatar"
							/>
							<h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900">
								<div>{person.name}</div>
							</h3>
							<p>{person.title}</p>
							<div class="text-xs italic group-hover:text-blue-700">Read Bio</div>
						</Dialog.Trigger>
						<ul class="flex justify-center mt-4 space-x-4">
							<li>
								<a href={person.link} class="hover:text-blue-600">
									<IconBrandLinkedin class="w-8 h-8" />
								</a>
							</li>
						</ul>
					</div>

					<Dialog.Content class="scale-90">
						<Dialog.Header>
							<Dialog.DialogTitle>
								<img
									class="mx-auto mb-4 w-36 h-36 rounded-full"
									src={person.image}
									alt="{person.name} Avatar"
								/>
								<h3 class="mx-auto mb-1 text-2xl font-bold tracking-tight text-gray-900">
									<a href={person.link}>{person.name}</a>
								</h3>
								<p class="">{person.title}</p>
							</Dialog.DialogTitle>
							<Dialog.Description>
								<div class="overflow-auto text-left max-h-[65vh]">
									{person.description}
								</div>
							</Dialog.Description>
						</Dialog.Header>
					</Dialog.Content>
				</Dialog.Root>
			{/each}
		</div>
		<div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
			<h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl lg:text-6xl">
				Board &amp; Advisors
			</h2>
			<p class="text-gray-700 sm:text-xl">
				Our board and advisors have decades of experience working with medicare, medicaid, home
				health and personal care services.
			</p>
		</div>
		<div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-16">
			{#each advisors as person}
				<Dialog.Root>
					<div
						class="p-4 text-center text-gray-700 rounded-lg transition duration-300 hover:scale-110 group bg-white hover:shadow-[color:hsl(216,_65%,_33%)] hover:shadow-lg hover:border"
					>
						<Dialog.Trigger>
							<img
								class="mx-auto mb-4 w-36 h-36 rounded-full"
								src={person.image}
								alt="{person.name} Avatar"
							/>
							<h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900">
								<div>{person.name}</div>
							</h3>
							<p>{person.title}</p>
							<div class="text-xs italic group-hover:text-blue-700">Read Bio</div>
						</Dialog.Trigger>
						<ul class="flex justify-center mt-4 space-x-4">
							<li>
								<a href={person.link} class="hover:text-blue-600">
									<IconBrandLinkedin class="w-8 h-8" />
								</a>
							</li>
						</ul>
					</div>

					<Dialog.Content class="scale-90">
						<Dialog.Header>
							<Dialog.DialogTitle>
								<img
									class="mx-auto mb-4 w-36 h-36 rounded-full"
									src={person.image}
									alt="{person.name} Avatar"
								/>
								<h3 class="mx-auto mb-1 text-2xl font-bold tracking-tight text-gray-900">
									<a href={person.link}>{person.name}</a>
								</h3>
								<p class="">{person.title}</p>
							</Dialog.DialogTitle>
							<Dialog.Description>
								<div class="overflow-auto text-left max-h-[65vh]">
									{person.description}
								</div>
							</Dialog.Description>
						</Dialog.Header>
					</Dialog.Content>
				</Dialog.Root>
			{/each}
		</div>
	</div>
</section>
