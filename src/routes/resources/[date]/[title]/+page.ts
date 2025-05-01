import type { PageLoad } from './$types';
import { marked } from 'marked';

export const load: PageLoad = ({ params }) => {
	const blog = `
## Challenge

The home health and personal care market is experiencing substantial growth, a trend accelerated by factors like the COVID-19 pandemic. Having a dedicated solution to accurately and efficiently identify FWA in this specific area is becoming increasingly crucial for protecting financial integrity and ensuring resources are used appropriately.

Recognizing this gap, we recently conducted a pilot project to specifically investigate the potential for identifying FWA within home health and personal care claims using a sophisticated, data-driven approach. Our goal was to understand the extent of undetected FWA in this sector using real-world data and demonstrate our ability to uncover savings that existing systems might be missing.

We analyzed a large, real-world dataset of home health and personal care claims from across all 50 U.S. states, covering a period from 2022 to 2024. This dataset included claims from major payers and healthcare organizations (HCOs), representing approximately 2.5 million patients and a significant total spend of $2 billion within this market segment.

## Findings
- **$80 million** identified as potential FWA by prepay solutions
- **3%** of total healthcare spend

## Solution
Our approach utilized analytical techniques designed to scrutinize claims for irregularities and patterns indicative of FWA. This included applying comprehensive logic, leveraging insights from public policies (such as CMS, and other institutions), internal research on home health and personal care provider behavior, and identifying logistical impossible scenarios.

Our pilot demonstrates the significant potential to identify FWA that current systems are missing. If you're someone looking to strengthen your FWA defences for your organization in this growing market, reach out to us.
`;

	return {
		title: params.title,
		date: params.date,
		blog: marked(blog)
	};
};
