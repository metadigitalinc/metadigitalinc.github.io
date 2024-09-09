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
				'Alex runs the data and infrastructure team. He previously worked in venture capital and software consulting. He has an educational background in math and computer science with a masters in Applied Statistics.'
		},
		{
			name: 'Kim Glenn',
			title: 'Advisor',
			link: 'https://www.linkedin.com/in/kim-glenn',
			image: '/profiles/kim_glenn.png',
			description:
				'Kim Glenn is a strategic advisor for MetaDigital focused on helping enter the Medicaid Managed and FFS complex Marketplace. She brings over 35 years of focused Medicaid market and government sponsored health plan experience. Kim deeply understands all aspects of this market and how a company can best position its offering to meet the needs of the program they are looking to serve.  Most recently Kim served as the Senior Vice President of Government Health Plans at HHAeXchange for 6.5 years. In this role, she led business development, growth, client success and government relations strategy within the Medicaid Managed Care and Medicaid Fee-For-Service markets. Under her leadership, the company contracted with several large Medicaid payers in 12 new states.  Prior experience includes serving for 12 years as the Senior Vice President of Growth and Client Success over HMS, a publicly traded company’s National Medicaid and State Government Business Line. Prior to HMS, she served as a Principal, Shareholder and Manager at Public Consulting Group, Inc where she oversaw the Benefits Solution Practice Area across the Southern US Government sponsored healthcare line of business for 9 years.  Earlier in her career, she served as Senior Manager at Deloitte and Touche, working directly with the Partner who managed the Medicaid line of business for over 7 years.'
		},
		{
			name: 'Major General Elder Granger MD',
			title: 'Board Director & Advisor',
			link: 'https://www.linkedin.com/in/elder-granger-md-mg-usa-retired-9a944416',
			image: '/profiles/elder_granger.png',
			description:
				'Dr. Elder Granger serves as a member of our board of directors and advisor to MetaDigital. He is a U.S. Army Major General (Retired) and has served as the President and Chief Executive Officer of THE 5Ps, LLC, a healthcare, education, and leadership consulting firm, since August 2009. He served in the U.S. Army for over 35 years before retiring in June 2009 and was the Deputy Director and Program Executive Officer of TRICARE Management Activity, Office of the Assistant Secretary of Defense (Health Affairs) in Washington, D.C. from December 2005 to June 2009. He is board certified by the American College of Physician Executives, American College of Healthcare Executives, American Board of Medical Quality, and American Board of Internal Medicine, National Association of Corporate Directors, and holds numerous medical certifications. Dr. Granger currently serves on the board of directors of Cigna Corporation (NYSE: CI) (since 2018), Cerner Corporation (Nasdaq: CERN) (since 2020) and DLH Holdings Corp. (Nasdaq: DLHC)  (since 2014), and he previously served on the board of directors of Express Scripts Holding Company (from 2015 to 2018). He received his Bachelor of Science Degree from Arkansas State University in 1976 and earned his medical degree from University of Arkansas School of Medicine in 1980. We believe Dr. Granger is well-equipped to serve as a director of the Company due to hishas extensive experience in health care management and operations, including health policy, planning, budgeting, compliance, and execution related to the health program for uniformed service members around the globe. Dr. Granger has unique leadership and policy experience through his career with the U.S. Army and the commercial sector.'
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
			name: 'Dr Darren Wethers',
			title: 'Board Member & Advisor',
			link: 'https://www.linkedin.com/in/darrenwethersmd',
			image: '/profiles/darren_wethers.png',
			description:
				'Darren Wethers is a board-certified internal medicine physician, born and raised in Chicago, Illinois. He graduated from Morehouse College, Northwestern University Medical School and completed internal medicine training at Emory University School of Medicine before establishing himself in internal medicine practice in the St. Louis, Missouri area, becoming a “Top Doctor” honoree several years running. In 2011, Dr. Wethers began a career in administrative medicine, servings as a medical director with Coventry Health Care and Aetna, vice president of clinical operations at Blue Cross Blue Shield of Arizona and now at Atrio Health Plans, where he serves as chief medical officer. Dr. Wethers is a member of the American Association for Physician Leadership, Fellow of the American College of Physicians, member of Alpha Phi Alpha and Sigma Pi Phi fraternities; he is a board member and immediate past chairman for Gamma Mu Educational Services (GMES) and is a board member of Northwestern University Medical School Alumni Association, for which he serves as co-chair of the Inclusion and Allyship committee and president-elect. '
		},
		{
			name: 'Marc Mintz',
			title: 'Board member & Advisor',
			link: 'https://www.linkedin.com/in/marc-mintz-1ba428214/',
			image: '/profiles/marc_mintz.png',
			description:
				'Marc is a board member and advisor to MetaDigital. In my current role and for the last 5 years I have been involved in the strategy, strategic planning, marketing, capital raise and growth at VivoSense. Worked diligently and brought initial seed investor to CEO and Chief Business Advisor to secure and complete investment. Working with the finest group of people I have ever known who communicate from N, W, E and S to authentically to find the best way forward. I have over 20 years of International and domestic business experience. Strategic planning, business development, Start-ups, advisor to C-Suite from start-ups to $30 billion plus in revenue. Capital raise, reorganizations, resets and taking an idea, breathing life into it and having the will, endurance and belief to see it through to success. With the right people you can truly accomplish anything. Created and built a large international business for patient care across the U.S. which managed patients coming to the U.S especially from the MENA region and providing for their needs in and outside the hospital which involved intricate planning, cooperation and partnerships with hospitals in every state. In many cases continued care as they returned back to their countries. Also provided assistance to the governments directly for service and advisory. Had agreements in place with embassies where we were responsible for all their citizens visiting the U.S from the Middle East. My clients are located in every country from Switzerland, Greece, Nigeria, London, UAE, Qatar, Saudi, every continent. Love writing, reading and recording poetry, all forms of music and the outdoors. Life to me is like the woods. Sometimes there is a path, sometimes its blocked and you have to make new ones, sometimes you get spun around and have no idea where you are at. However, A turtle never gets anywhere unless it sticks its neck out.'
		},
		{
			name: 'Hal Pedersen',
			title: 'Advisor',
			link: 'https://www.linkedin.com/in/hal-pedersen-bb0065a/',
			image: '/profiles/hal_pedersen.png',
			description:
				'Hal W. Pedersen is one of the world’s leading experts on economic scenario generation. His interest in this area began in the late 1980s with research on interest rate models. Dr. Pedersen was a Managing Director with Conning where he lead the Quantitative Finance team and was one of the principal architects of GEMS, Conning’s award winning economic and capital market scenario generator. He is an Associate of the Society of Actuaries and has more than 20 years academic and industry experience in the application of financial economics to insurance. He was L.A.H. Warren professor of actuarial science at the University of Manitoba from 2003 through 2011 and served on the actuarial faculty at Georgia State University from 1996 through 2001. He is Vice-Chair of the Society of Actuaries Investment Section council.'
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
		<h1 class="my-4 text-3xl font-bold md:text-4xl lg:text-6xl">About Us</h1>
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
		<h1 class="my-4 text-3xl font-bold md:text-4xl lg:text-6xl">Our Approach</h1>
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
		<div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-16">
			{#each names as person}
				<Dialog.Root>
					<div
						class="p-4 text-center text-gray-700 rounded-lg transition duration-300 hover:scale-110 group hover:shadow-[color:hsl(216,_65%,_33%)] hover:shadow-lg hover:border"
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
