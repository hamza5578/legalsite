export interface FaqItem {
  question: string;
  answer: string;
}

export interface PracticeAreaDetail {
  slug: string;
  title: string;
  overview: string;
  services: string[];
  approach: string;
  faqs: FaqItem[];
}

export const PRACTICE_AREA_DETAILS: PracticeAreaDetail[] = [
  {
    slug: "corporate-commercial-law",
    title: "Corporate & Commercial Law",
    overview:
      "Our Corporate & Commercial practice advises businesses at every stage of their lifecycle — from incorporation and structuring to complex cross-border transactions. We serve multinationals, listed companies, private enterprises, and startups operating in Pakistan's evolving regulatory environment.",
    services: [
      "Company incorporation and corporate structuring",
      "Mergers, acquisitions, and joint ventures",
      "Shareholder and partnership agreements",
      "Board governance and compliance advisory",
      "Commercial contracts and licensing",
      "Foreign investment and regulatory approvals (SECP, BOI)",
      "Due diligence and transaction support",
      "Corporate restructuring and winding up",
    ],
    approach:
      "We take a commercially pragmatic approach — understanding that legal advice must serve business objectives. Our team works closely with clients to identify risks early, structure transactions efficiently, and ensure compliance without disrupting operations. We pride ourselves on turnaround times that keep deals on track.",
    faqs: [
      {
        question: "How long does it take to incorporate a company in Pakistan?",
        answer:
          "A private limited company can typically be incorporated within 3-5 working days through the SECP's e-Services portal, provided all documentation is in order. We handle the entire process — name reservation, memorandum and articles of association, and registration — on your behalf.",
      },
      {
        question: "Do I need a local partner to set up a business in Pakistan?",
        answer:
          "Foreign nationals can own 100% of a company in most sectors. However, certain regulated sectors (media, defence, agriculture) require local partnership or have equity caps. We advise on sector-specific requirements and the most advantageous structure for your investment.",
      },
      {
        question: "What is the typical fee structure for M&A advisory?",
        answer:
          "Our fees for M&A work depend on deal complexity and value. We offer fixed-fee arrangements for straightforward transactions and time-and-material billing for complex deals. We are transparent about costs from the outset and provide written engagement letters.",
      },
      {
        question: "Can you assist with contracts governed by foreign law?",
        answer:
          "Yes. We regularly advise on contracts with English, UAE, and Singapore law governing clauses. Where specialist foreign counsel is required, we coordinate with our international network to ensure seamless cross-border advice.",
      },
    ],
  },
  {
    slug: "civil-litigation",
    title: "Civil Litigation",
    overview:
      "Our Litigation team represents clients before the district courts, High Courts, and the Supreme Court of Pakistan. We handle complex commercial disputes, property matters, contractual claims, and enforcement proceedings with strategic focus and courtroom excellence.",
    services: [
      "Commercial contract disputes",
      "Debt recovery and enforcement",
      "Injunctions and interim relief",
      "Property and title disputes",
      "Banking and financial litigation",
      "Arbitration and alternative dispute resolution",
      "Appellate advocacy before the High Courts and Supreme Court",
      "Execution of decrees",
    ],
    approach:
      "Litigation is expensive and uncertain. We begin every matter with an honest assessment of the merits and a clear strategy. Our goal is to resolve disputes at the earliest opportunity — through negotiation, mediation, or arbitration — and to litigate only when necessary. When we do go to court, we do so thoroughly prepared.",
    faqs: [
      {
        question: "How long does a civil suit typically take in Pakistan?",
        answer:
          "Timeframes vary significantly. A straightforward district court matter may resolve in 1-3 years; High Court matters can take 3-7 years. Obtaining interim relief (injunctions) can be achieved in days. We work to expedite proceedings wherever possible and keep clients updated at every stage.",
      },
      {
        question: "What is the difference between arbitration and litigation?",
        answer:
          "Arbitration is a private, contractual dispute resolution process that is generally faster and confidential. Litigation is public and takes place in state courts. If your contract has an arbitration clause, we will typically pursue that route first. We are experienced in both domestic arbitration under the Arbitration Act 1940 and international arbitration (ICC, LCIA, SIAC).",
      },
      {
        question: "Can I recover my legal costs if I win?",
        answer:
          "Pakistani courts have discretion to award costs to the winning party, but full cost recovery is not guaranteed. We discuss cost expectations frankly at the outset so clients can make informed decisions about whether to pursue or defend a claim.",
      },
      {
        question: "Do you handle cases outside Islamabad?",
        answer:
          "Our principal practice is in Islamabad and the Islamabad High Court, but we regularly appear in the Lahore High Court and the Supreme Court. For matters in other jurisdictions, we work with trusted correspondent counsel.",
      },
    ],
  },
  {
    slug: "criminal-defense",
    title: "Criminal Defense",
    overview:
      "Facing criminal charges is one of the most stressful situations an individual or corporate officer can encounter. Our Criminal Defense team provides robust representation at all stages — from arrest and bail to trial and appeal — ensuring your rights are protected at every turn.",
    services: [
      "Bail applications before sessions and High Courts",
      "Pre-arrest bail and anticipatory bail",
      "FIR registration and quashing",
      "Trial defense in sessions and anti-terrorism courts",
      "White-collar and financial crime defense",
      "NAB and accountability court proceedings",
      "Customs and tax offense defense",
      "Appeals to the High Courts and Supreme Court",
    ],
    approach:
      "We believe every accused person deserves the full benefit of a fair legal process. Our defense strategy starts with a meticulous review of the prosecution's evidence, identifying procedural irregularities, weaknesses in the case, and constitutional safeguards that apply. We communicate clearly with clients and their families throughout what is always a difficult time.",
    faqs: [
      {
        question: "What should I do if an FIR has been registered against me?",
        answer:
          "Contact a lawyer immediately. Do not speak to police without legal representation. We can advise whether to obtain pre-arrest bail, how to respond to any summons, and whether there are grounds to challenge the FIR. Early intervention often makes a decisive difference.",
      },
      {
        question: "What is the difference between bailable and non-bailable offences?",
        answer:
          "For bailable offences, bail is a right and must be granted by the police or court. For non-bailable offences, bail is at the court's discretion. We apply for bail in the sessions court, and if refused, we move the High Court. Our team has a strong track record in bail matters.",
      },
      {
        question: "Can a criminal case be settled out of court in Pakistan?",
        answer:
          "Some offences (classified as compoundable) can be settled between complainant and accused with court approval, which leads to acquittal. Non-compoundable offences (such as murder) cannot be settled this way, though other legal strategies may be available. We advise on all options candidly.",
      },
      {
        question: "Do you handle corporate criminal liability matters?",
        answer:
          "Yes. We represent companies and their directors in cases involving corporate fraud, tax evasion, SECP violations, and other white-collar offences. Corporate criminal liability is increasingly enforced in Pakistan, and early legal advice is essential.",
      },
    ],
  },
  {
    slug: "family-law",
    title: "Family Law",
    overview:
      "Family disputes require sensitivity, discretion, and legal expertise in equal measure. Our Family Law practice covers all aspects of personal status law in Pakistan — including divorce, custody, maintenance, guardianship, and inheritance — with compassion for all parties involved.",
    services: [
      "Divorce (Khula, Talaq, and judicial divorce)",
      "Child custody and visitation rights",
      "Child maintenance and alimony",
      "Guardianship proceedings",
      "Matrimonial property disputes",
      "Succession and inheritance claims",
      "Family settlement agreements",
      "International child abduction and Hague Convention matters",
    ],
    approach:
      "We understand that family matters carry deep emotional weight. Our approach is to pursue amicable resolution wherever possible through negotiation and mediation, while being fully prepared to litigate when the interests of our client or their children require it. We advise with empathy and without judgment.",
    faqs: [
      {
        question: "How does Khula work in Pakistan?",
        answer:
          "Khula is the right of a Muslim wife to seek dissolution of marriage through the Family Court by returning the dower (mehr) to the husband. The court can grant Khula even without the husband's consent. The process typically takes 3-6 months. We represent women through every step of this process.",
      },
      {
        question: "Who gets custody of children after divorce?",
        answer:
          "Under Pakistani law, the mother generally has the right of hizanat (physical custody) of young children (boys up to age 7, girls until puberty), after which courts consider the best interests of the child. Fathers usually retain guardianship rights. We help clients secure custody arrangements that prioritise the child's welfare.",
      },
      {
        question: "Can I enforce a foreign divorce or custody order in Pakistan?",
        answer:
          "Foreign judgments can be enforced in Pakistan if they are from a country with a reciprocal enforcement treaty, or if a Pakistani court accepts them as evidence. The process is complex, and we advise case-by-case. International child custody matters require particular urgency.",
      },
      {
        question: "How is inheritance distributed under Pakistani law?",
        answer:
          "For Muslims, inheritance is governed by Islamic law (Faraid). Shares are fixed for close relatives and cannot be altered by will beyond one-third of the estate for non-heirs. We advise on succession planning, prepare valid wills, and represent beneficiaries in inheritance disputes.",
      },
    ],
  },
  {
    slug: "tax-revenue-law",
    title: "Tax & Revenue Law",
    overview:
      "Pakistan's tax landscape is complex and frequently changing. Our Tax & Revenue practice advises corporations, high-net-worth individuals, and multinationals on income tax, sales tax, customs, and regulatory compliance — and provides robust advocacy before tax tribunals and courts.",
    services: [
      "Corporate and individual income tax advisory",
      "Sales tax and Federal Excise Duty compliance",
      "Transfer pricing and intercompany transactions",
      "Tax due diligence for M&A",
      "FBR audit representation and dispute resolution",
      "Tax appeals before Commissioner (Appeals) and Appellate Tribunal",
      "Constitutional petitions challenging unlawful tax demands",
      "Advance rulings and FBR interaction",
    ],
    approach:
      "Effective tax advice requires both technical mastery and strategic judgment. We work proactively with clients to structure transactions tax-efficiently and to maintain clean compliance records. When disputes arise, we pursue resolution at the lowest level possible — saving clients time and cost — and escalate to tribunal or court only when necessary.",
    faqs: [
      {
        question: "My company has received a show-cause notice from FBR. What should I do?",
        answer:
          "Do not ignore it. Show-cause notices have strict response deadlines, and a failure to respond can result in an ex parte assessment. We review the notice, gather supporting documentation, and prepare a comprehensive response. Early engagement with FBR often resolves matters without litigation.",
      },
      {
        question: "How long do tax appeals take in Pakistan?",
        answer:
          "Appeals to the Commissioner (Appeals) should be decided within 120 days under the law, though delays are common. The Appellate Tribunal Inland Revenue (ATIR) typically takes 1-3 years. Constitutional petitions before the High Court can fast-track urgent matters. We advise on the most appropriate forum.",
      },
      {
        question: "Can I negotiate a settlement with FBR?",
        answer:
          "Yes. FBR has an Alternate Dispute Resolution (ADR) mechanism for settling tax disputes without litigation. We represent clients through the ADR process and have successfully settled significant demands, reducing client liability and avoiding lengthy appeals.",
      },
      {
        question: "Do you advise on international tax matters?",
        answer:
          "Yes. We advise on Pakistan's double taxation treaties, transfer pricing regulations, and the tax treatment of cross-border payments. We coordinate with international tax advisors where specialist input is needed.",
      },
    ],
  },
  {
    slug: "property-real-estate",
    title: "Property & Real Estate",
    overview:
      "Property transactions in Pakistan require careful due diligence and legal expertise. Our Property & Real Estate practice handles all aspects of residential, commercial, and agricultural property law — from conveyancing to complex title disputes — with a particular strength in the Islamabad and Rawalpindi markets.",
    services: [
      "Property purchase and sale conveyancing",
      "Title verification and due diligence",
      "Commercial lease drafting and review",
      "Development and construction agreements",
      "Co-ownership and partition disputes",
      "Property fraud and recovery",
      "Housing society and DHA matters",
      "Mortgage and charge registration",
    ],
    approach:
      "Property is often a client's most significant asset. We approach every transaction with thoroughness — conducting detailed title searches, reviewing encumbrances, and identifying risks before any commitment is made. For disputes, we understand that speed matters and pursue resolution through negotiation, court, or revenue authorities as the situation demands.",
    faqs: [
      {
        question: "How do I verify the title of a property before buying?",
        answer:
          "Title verification involves checking the mutation (intiqal) record at the patwari office, the Fard (ownership record), any existing mortgages, court orders, and encumbrances. In CDA and DHA schemes, we check with the relevant authority. We conduct comprehensive title due diligence for all property purchases.",
      },
      {
        question: "What happens if I discover a property I bought has title defects?",
        answer:
          "Depending on the nature of the defect, you may have a claim against the seller for misrepresentation or breach of contract, or against the conveyancing lawyer. In cases of fraud, criminal remedies may also be available. We advise on your options and pursue recovery through the most appropriate channel.",
      },
      {
        question: "How long does property registration take in Islamabad?",
        answer:
          "In Islamabad, sub-registrar office registrations (for freehold property) are typically completed in 1-3 days once documents are in order. CDA transfers take longer and depend on the scheme. We manage the entire registration process, including stamp duty calculation, on behalf of clients.",
      },
      {
        question: "Can a foreign national own property in Pakistan?",
        answer:
          "Foreign nationals of Pakistani origin (PIOs) can purchase and own immovable property in Pakistan. Non-PIOs can also acquire property in some circumstances, particularly for business purposes, subject to State Bank regulations. We advise on the applicable rules and procedures for international clients.",
      },
    ],
  },
];
