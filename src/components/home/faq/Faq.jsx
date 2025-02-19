import { useState } from 'react';

const Faq = () => {
	const [open, setOpen] = useState(false);

	//faq data
	const faqList = [
		{
			id: 1,
			category: 'Getting Started',
			questions: [
				{
					id: 1,
					question: 'How does AkashML & Akash Network work?',
					answer:
						"Akash Network is an open-source Supercloud network that makes it easy to rapidly scale and access cloud resources around the world. It uses a 'reverse auction' system, where customers submit their desired price and providers compete for the business. This often results in prices up to 85% lower than other cloud systems.",
				},
				{
					id: 2,
					question: 'How long does it take for instances to launch?',
					answer:
						'The Akash deployment process can take as little as a few minutes with our user-friendly deployment tools. The network allows users of all technical levels to create instances based on ready-to-use and customizable templates',
				},
				{
					id: 3,
					question: 'How do I initiate an instance?',
					answer:
						'The Cloudmos Deploy and the Akash Console web apps provide an intuitive interface to create and start an application on Akash Network. These platforms were purpose-built to allow users at any technical skill level to deploy instances on Akash.',
				},
				{
					id: 4,
					question: 'How do I shut down an instance?',
					answer:
						'Both Cloudmos Deploy and Akash Console make it easy to manage and close your existing deployments.',
				},
				{
					id: 5,
					question:
						'Are instances created with AkashML spot, on-demand, or reserved?',
					answer:
						'Currently, all instances on Akash are spot instances. We are working on support for on-demand and ultimately reserved instances, which you can see in our public roadmap.',
				},
				{
					id: 6,
					question: 'What is AkashML?',
					answer:
						'AkashML is powered by Akash Network’s open-source infrastructure. It is meant for experienced AI developers looking to access GPUs ranging from H100s to consumer-grade 3090s, for inference, fine-tuning, or training. 8x clusters of H100s or A100s are limited, but available upon request.',
				},
				{
					id: 7,
					question:
						'Where do I go if I run into issues? Where is technical support?',
					answer:
						'Please visit our documentation site for self-served answers. Connect with us on our Discord where the Akash community and core team can provide live help. If you are an enterprise looking for dedicated help, please reach out to us to set up a time and we can create dedicated channels to provide you with white-glove assistance.',
				},
				{
					id: 8,
					question: 'Which libraries come preinstalled?',
					answer:
						'If you’re a tenant, this depends on the provider you choose. Since Akash Network is an open network of providers, there isn’t a standard suite of libraries that come preinstalled. However, if you’re running a high-demand AI/ML workload that requires H100s and A100s, please reach out to us directly and we’ll match you to a provider that best suits your needs.',
				},
				{
					id: 9,
					question: 'Can I install my own libraries?',
					answer: 'This is available upon request in special circumstances.',
				},
				{
					id: 10,
					question:
						'Where do I find documentation for AkashML and Akash Network?',
					answer: 'Please refer to the Akash Network documentation site.',
				},
				{
					id: 11,
					question:
						"Can the data be recovered once I've terminated an instance?",
					answer:
						'Akash Network offers persistent storage to allow data to remain available through instance restarts/reboots. The data will be lost if the instance is closed.  Instances that require increased levels of backup typically integrate with an S3 service or other backup solution.',
				},
				{
					id: 12,
					question: 'Is there a status page in case of outages?',
					answer:
						'Outages are often isolated to single provider on the network, as Akash Network is completely decentralized with no single point of failure. To check if the status of your chosen provider, type in the provider name (which can be located in the deployment SDL file) into the search bar here.',
				},
			],
		},
		{
			id: 2,
			category: 'Security',
			questions: [
				{
					id: 1,
					question: 'How long does it take for instances to launch?',
					answer:
						'The Akash deployment process can take as little as a few minutes with our user-friendly deployment tools. The network allows users of all technical levels to create instances based on ready-to-use and customizable templates',
				},
			],
		},
		{
			id: 3,
			category: 'General',
			questions: [
				{
					id: 1,
					question: 'Can I mine Bitcoin or other cryptocurrencies?',
					answer:
						'Absolutely. Mining operations are a very prominent and frequent instance type on the Akash Network.',
				},
				{
					id: 2,
					question: 'How do I close my account?',
					answer:
						'There is no need to close an Akash account. Rather, when an account is no longer needed, remaining funds may be removed and transferred to another account, or into fiat.',
				},
				{
					id: 3,
					question: 'Do you have any credits or special offers?',
					answer:
						'Users and developers getting started with Akash may request AKT for initial experimentation. Please visit our Discord server and request funds for initial Akash use and our team will be happy to accommodate. Additionally, Akash Network hosts many programs and events throughout the year with associated funding.',
				},
				{
					id: 4,
					question: 'How does billing work?',
					answer:
						'When an application is deployed onto Akash Network, a lease agreement is created between the deployer and the provider. This includes a pricing agreement that remains valid through the life of the lease. As the deployment consumes compute resources the Akash provider periodically withdraws from an escrow account that holds a deposit of funds for payment of services.',
				},
				{
					id: 5,
					question: 'How do I pay?',
					answer:
						'Payment for Akash instances is facilitated by the establishment of a pricing agreement between the tenant and provider. When the lease agreement is created, an initial deposit is placed into an escrow account. As compute resources are consumed the Akash provider deducts funds from the escrow account.',
				},
			],
		},
		{
			id: 4,
			category: 'Instance information',
			questions: [
				{
					id: 1,
					question: 'Where are AkashML providers/data centers located?',
					answer:
						'Akash providers are located across the globe to allow tenants to deploy in a geolocale of their choosing. A current high-level representation of available provider locations may be seen in a map here. On the same page, precise provider location may be obtained by review per provider attributes and their associated ‘region’ specification.',
				},
				{
					id: 2,
					question: 'What configurations are available?',
					answer:
						'Based on Akash architecture, a wide variety of configurations are available. The deployer stipulates the amount of CPU, memory, and storage necessary for their instance at the time of deployment creation. Only providers capable of meeting specified requirements will bid on the deployment. Along with base compute specifications, the tenant may also specify requirements for static public IP addresses, persistent storage, and GPU resources.',
				},
				{
					id: 3,
					question: 'Can I create multiple accounts and instances?',
					answer:
						'Yes. There are no limits on the number of accounts that one can create on Akash Network. There are also no limitations on the number of instances one can deploy onto Akash Network.',
				},
				{
					id: 4,
					question: 'What are currently available network speeds?',
					answer:
						'As Akash Network consists of individual provider entities, a wide range of network speeds are made available by such hosts. Many Akash providers are large data centers that offer very fast network speeds. Providers often advertise their network speeds and capabilities with attributes that are visible here and by drilling into individual provider listings on this page.',
				},
				{
					id: 5,
					question:
						'For 1x to 8x GPUs, what specific instance types are avialable?',
					answer:
						"Given that we're an open marketplace where a single entity (like Overclock Labs) does not own the infrastructure, the types of instances is entirely up to the providers. Ultimately this will be driven by user needs, but we anticipate clusters of 1, 2, 4, 8 and 16 GPUs with vCPU counts ranging from 4 to 96.",
				},
			],
		},
	];
	return (
		<div
			id="faqs"
			className="md:flex w-11/12 lg:container mx-auto text-white py-[30px] md:py-[50px]">
			<div className="w-11/12 mx-auto md:w-3/6  mb-5 md:mb-auto">
				<p className="text-[30px] lg:text-[40px] font-semibold">FAQs</p>
			</div>
			<div className="p-2 lg:p-0 md:w-3/6">
				<div className="flow-root md:w-full mx-auto">
					{/* category  */}
					{faqList.map((item, index) => (
						<div
							key={index}
							className="my-4 lg:my-8 p-4 lg:p-8 border border-[#353535] rounded-md">
							<details
								className="group [&_summary::-webkit-details-marker]:hidden"
								open="">
								<summary className="flex cursor-pointer items-center justify-between text-white">
									<h2 className="text-sm md:text-[18px] font-semibold">
										{item.category}{' '}
										<span className="text-[#8A8A8A]">
											(
											{item.questions.length > 0 && item.questions.length < 10
												? '0' + item.questions.length
												: item.questions.length}
											)
										</span>
									</h2>
									<svg
										className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</summary>
								{/* category questions  */}
								<p className="text-[12px] md:text-[14px] mt-4 leading-relaxed">
									{item.questions.map((question, index) => (
										<details
											key={index}
											className="border-y border-[#474747] py-[30px] group [&_summary::-webkit-details-marker]:hidden"
											open="">
											<summary
												onClick={() => setOpen(!open)}
												className="flex cursor-pointer items-center justify-between text-[#909090]">
												<h2 className="text-sm md:text-[18px] font-semibold">
													{question.question}
												</h2>
												{open ? (
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="24"
														height="24"
														viewBox="0 0 24 24"
														fill="none">
														<path
															d="M6.75735 17.2426L12 12M17.2426 6.75736L12 12M12 12L6.75735 6.75736M12 12L17.2426 17.2426"
															stroke="white"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												) : (
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="24"
														height="24"
														viewBox="0 0 24 24"
														fill="none">
														<path
															d="M6 9L12 15L18 9"
															stroke="#909090"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												)}
											</summary>
											<p className="text-[12px] md:text-[14px] mt-4 leading-relaxed text-[#8A8A8A]">
												{question.answer}
											</p>
										</details>
									))}
								</p>
							</details>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Faq;
