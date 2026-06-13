export const FIRM_NAME = "Shafi Law Associates";
export const FIRM_DISPLAY = { primary: "Shafi Law", secondary: "Associates" };
export const FIRM_TAGLINE = "Trusted Legal Counsel. Proven Results.";
export const FIRM_PHONE = "0334-9133334";
export const FIRM_EMAIL = "info@shafilaw.com";
export const FIRM_ADDRESS = "House No 500, Street 8\nF-10/2, Islamabad\nPakistan";
export const FIRM_FOUNDED = "1999";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Team", href: "/#team" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const PRACTICE_AREAS = [
  {
    id: "corporate",
    slug: "corporate-commercial-law",
    icon: "Briefcase",
    title: "Corporate & Commercial Law",
    shortDesc:
      "Strategic legal counsel for corporations and commercial ventures — from formation through complex transactions and exits.",
    features: [
      "Company Formation & Restructuring",
      "M&A Transactions",
      "Joint Ventures",
      "Contract Drafting & Negotiation",
      "Corporate Governance",
      "Securities & Capital Markets",
    ],
  },
  {
    id: "litigation",
    slug: "civil-litigation",
    icon: "Scale",
    title: "Civil Litigation",
    shortDesc:
      "Skilled representation in civil disputes before all levels of Pakistan's courts, with a focus on strategic resolution.",
    features: [
      "High Court & Supreme Court",
      "Commercial Disputes",
      "Injunctions & Interim Relief",
      "Contract Claims",
      "Damages Recovery",
      "Enforcement of Decrees",
    ],
  },
  {
    id: "criminal",
    slug: "criminal-defense",
    icon: "Shield",
    title: "Criminal Defense",
    shortDesc:
      "Vigorous defense at every stage — from FIR registration through trial and appeal — protecting your rights and freedom.",
    features: [
      "Bail & Interim Applications",
      "Trial Defense",
      "Appellate Defense",
      "Cybercrime Cases",
      "White-Collar Crime",
      "Anticipatory Bail",
    ],
  },
  {
    id: "family",
    slug: "family-law",
    icon: "Heart",
    title: "Family Law",
    shortDesc:
      "Compassionate guidance through divorce, child custody, inheritance, and all personal status matters under Pakistani law.",
    features: [
      "Divorce & Khula",
      "Child Custody & Guardianship",
      "Maintenance & Alimony",
      "Inheritance & Succession",
      "Nikah & Marriage Registration",
      "Domestic Violence Protection",
    ],
  },
  {
    id: "tax",
    slug: "tax-revenue-law",
    icon: "DollarSign",
    title: "Tax & Revenue Law",
    shortDesc:
      "Expert representation before FBR, tax tribunals, and appellate courts to safeguard your financial and business interests.",
    features: [
      "FBR Audit Defense",
      "Income & Sales Tax Disputes",
      "Customs & Excise Appeals",
      "Tax Planning & Advisory",
      "Appellate Tribunal Matters",
      "Tax Compliance & Structuring",
    ],
  },
  {
    id: "property",
    slug: "property-real-estate",
    icon: "Building2",
    title: "Property & Real Estate",
    shortDesc:
      "Comprehensive legal services for property transactions, title disputes, and real estate development projects across Pakistan.",
    features: [
      "Title Verification & Due Diligence",
      "Property Dispute Litigation",
      "Sale, Purchase & Transfer Deeds",
      "Lease Agreements",
      "Development & Zoning",
      "Housing Society Disputes",
    ],
  },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Babar Manzoor",
    title: "Founding Partner",
    role: "Advocate Supreme Court",
    specialization: "Civil Litigation & Constitutional Law",
    bio: "A founding partner with over two decades of expertise in constitutional matters and high-stakes civil litigation. Renowned for navigating complex disputes at the highest judicial levels with precision and authority.",
    image: "/images/team-1.jpg",
    linkedin: "#",
    email: "babar@shafilaw.com",
  },
  {
    id: 2,
    name: "Gufraan Manzoor",
    title: "Senior Partner",
    role: "Advocate High Court",
    specialization: "Corporate & Property Law",
    bio: "Specialises in corporate transactions and property law, delivering practical, results-driven counsel to businesses and investors. Known for meticulous due diligence and seamless deal execution across commercial matters.",
    image: "/images/team-2.jpg",
    linkedin: "#",
    email: "gufraan@shafilaw.com",
  },
  {
    id: 3,
    name: "Farhan Manzoor",
    title: "Partner",
    role: "Advocate High Court",
    specialization: "Criminal Defense & Tax Law",
    bio: "A tenacious advocate with a strong track record in criminal defense and FBR tax proceedings. Combines sharp courtroom instincts with deep regulatory knowledge to protect clients' rights and financial interests.",
    image: "/images/team-3.jpg",
    linkedin: "#",
    email: "farhan@shafilaw.com",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Shafi Law handled our corporate merger with exceptional precision. Their team understood every nuance of the transaction and delivered results that exceeded our expectations.",
    name: "Tariq Farouk",
    designation: "CEO, Farouk Industries Ltd.",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "When I was wrongfully charged, I didn't know where to turn. Muhammad Shafi's team fought relentlessly and secured my acquittal. I cannot thank them enough.",
    name: "Asim Nawaz",
    designation: "Business Owner, Lahore",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Their family law team handled a painful situation with professionalism and genuine care. My children's welfare was always the priority, and the outcome was fair.",
    name: "Nadia Hussain",
    designation: "Architect, Islamabad",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "The tax advisory we received saved our company millions in a dispute with FBR. Shafi Law's expertise in revenue law is simply unmatched in Islamabad.",
    name: "Farhan Qureshi",
    designation: "Director, Q-Tech Solutions",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "They resolved a decade-long property dispute that two previous firms couldn't settle. Professional, strategic, and relentless — exactly what we needed.",
    name: "Khalid Mehmood",
    designation: "Property Developer, Rawalpindi",
    rating: 5,
  },
  {
    id: 6,
    quote:
      "From contract drafting to dispute resolution, Shafi Law has been our trusted legal partner for six years. Their corporate team is simply outstanding.",
    name: "Zara Shah",
    designation: "Founder, ZS Ventures",
    rating: 5,
  },
];

export const STATS = [
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Cases Won" },
  { value: 1200, suffix: "+", label: "Clients Served" },
  { value: 3, suffix: "", label: "Expert Lawyers" },
];

export const ABOUT_PARAGRAPHS = [
  "Founded in 1999, Shafi Law Associates began as a boutique practice with a single conviction: that clients in Pakistan's courts deserved the same calibre of representation available in the world's leading legal markets. Over two decades, that conviction has built one of Islamabad's most respected full-service practices.",
  "Today our team appears before the Islamabad High Court, Pakistan's superior courts, and the country's principal regulatory bodies. We take on only the matters we can handle with full commitment — which means every client receives the focused attention their case demands, not the fragmented service of an overstretched firm.",
];
