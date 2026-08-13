export const SITE_NAME = "Anandam Ashiyana";
export const SITE_TAGLINE = "Aapka Apna Ashiyana — Sector 36, Jhajjar";
export const SITE_DOMAIN = "anandamashiyana.in";
export const SITE_URL = "https://anandamashiyana.in";

export const WA_NUMBER = "919315421291";
export const PHONE_DISPLAY = "+91 9315421291";
export const PHONE_TEL = "tel:+919315421291";

export const PHONE_SECONDARY_DISPLAY = "+91 9538824125";
export const PHONE_SECONDARY_TEL = "tel:+919538824125";

export const CONSULTANT_PHONE = "+91 9315421291";
export const CONSULTANT_PHONE_SECONDARY = "+91 9538824125";
export const CONSULTANT_EMAIL = "hello@anandamashiyana.in";
export const SITE_ADDRESS = "Anandam Ashiyana Site, Sector 36, Chuchakwas / Talao Road, Jhajjar, Haryana - 124103";

export const EMAILS = {
  primary: "hello@anandamashiyana.in",
  secondary: "contact@anandamashiyana.in"
};

export const DEVELOPER_NAME = "Prish Realty Pvt. Ltd. (Prish Group)";
export const DEVELOPER_URL = "https://prishgroup.com/projects/anandam-ashiyana/";

export const RERA_NUMBER = "HRERA-PKL-JJR-776-2025";
export const RERA_DATE = "23.10.2025";
export const RERA_URL = "https://haryanarera.gov.in/";
export const LICENCE_NUMBER = "Licence 79 of 2025 (DTCP Haryana)";

export const PROJECT_LOCATION = "Sector-36, Jhajjar, Haryana (Chuchakwas / Talao Belt)";
export const SCHEME_NAME = "Deen Dayal Jan Awas Yojana (DDJAY)";
export const PROJECT_AREA = "12.4625 Acres";
export const TOTAL_PLOTS = "184 Freehold Plots";
export const PLOT_SIZES = "72 to 179 sq. yd. (Highlight sizes: 97–178 sq. yd.)";
export const STARTING_PRICE = "₹48.43 Lakh* onwards";
export const RATE_SILVER = "₹49,666";
export const RATE_GOLD = "₹51,666";
export const RATE_PLATINUM = "₹55,666";
export const COMMERCIAL_AREA = "1,515.77 sq. yd. daily-need retail";
export const ROAD_WIDTHS = "24m Main Approach & 9m Internal Sector Roads";
export const EXPECTED_POSSESSION = "Indicative September 2027 (confirm from RERA/developer)";

export const IDENTITY_DISCLAIMER = 
  "Anandam Ashiyana is developed by Prish Realty Pvt. Ltd. (Prish Group). This website is operated by a RERA-verified real-estate consultant to help genuine buyers with information, site visits and booking assistance. We are not the project owner.";

export const PRICE_DISCLAIMER = 
  "Prices are indicative, sourced from current market offerings, and subject to change without notice as per developer / inventory. Final quote shared after availability check. *T&C apply.";

export const DISCLAIMER_SHORT = 
  "Authorized RERA real estate consultant platform. Prices & plot availability subject to change. HRERA Registration: HRERA-PKL-JJR-776-2025.";

export const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiMxYjE4MTQiLz48cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI1IiBmaWxsPSIjYjA4ZDRmIiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==";

export function getWhatsAppLink(customMessage?: string): string {
  const defaultMessage = `Hi, I came across your website ${SITE_DOMAIN} and I want to know about Anandam Ashiyana, Sector 36 Jhajjar (DDJAY plots by Prish Group). Please share latest price, available plot sizes, payment plan and site-visit details.`;
  const text = customMessage || defaultMessage;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const PAGE_WA_MESSAGES: Record<string, string> = {
  home: "Hi, I came across your website anandamashiyana.in and I want to know about Anandam Ashiyana plots in Sector 36 Jhajjar.",
  price: "Hi, I came across your website anandamashiyana.in and I want the latest price list and payment plan of Anandam Ashiyana.",
  location: "Hi, I came across your website anandamashiyana.in and I want location / connectivity details and a site visit for Anandam Ashiyana.",
  amenities: "Hi, I came across your website anandamashiyana.in and I want amenity and clubhouse details of Anandam Ashiyana.",
  masterPlan: "Hi, I came across your website anandamashiyana.in and I want the approved layout / available plot numbers of Anandam Ashiyana.",
  ddjayGuide: "Hi, I came across your website anandamashiyana.in and I want to understand DDJAY benefits for Anandam Ashiyana.",
  contact: "Hi, I came across your website anandamashiyana.in and I want to speak to a RERA-verified consultant about Anandam Ashiyana.",
  whyJhajjar: "Hi, I came across your website anandamashiyana.in and I want details on Jhajjar real estate growth and ROI.",
  gallery: "Hi, I came across your website anandamashiyana.in and I want on-site photos and layout videos of Anandam Ashiyana.",
  siteVisit: "Hi, I came across your website anandamashiyana.in and I want to book a free site visit to Anandam Ashiyana Jhajjar.",
  faq: "Hi, I came across your website anandamashiyana.in and I have some questions regarding Anandam Ashiyana.",
  blog: "Hi, I came across your website anandamashiyana.in and I want details regarding Anandam Ashiyana Jhajjar.",
  privacy: "Hi, I came across your website anandamashiyana.in and I want information about Anandam Ashiyana.",
  terms: "Hi, I came across your website anandamashiyana.in and I want information about Anandam Ashiyana.",
  disclaimer: "Hi, I came across your website anandamashiyana.in and I want information about Anandam Ashiyana.",
  thankYou: "Hi, I submitted an inquiry on anandamashiyana.in and want the cost sheet on WhatsApp."
};

export const FAQ_ITEMS = [
  {
    q: "Is Anandam Ashiyana approved by DTCP Haryana and HRERA?",
    a: `Yes, Anandam Ashiyana is 100% government approved. It holds DTCP Haryana Licence No. 79 of 2025 and is registered with Haryana Real Estate Regulatory Authority (HRERA) Panchkula under Registration No. ${RERA_NUMBER}.`
  },
  {
    q: "What is the total project area and how many plots are available?",
    a: `The project spans 12.4625 acres in Sector 36, Jhajjar, offering a total of 184 freehold residential plots under the Deen Dayal Jan Awas Yojana (DDJAY) scheme.`
  },
  {
    q: "What are the plot sizes and starting prices?",
    a: `Plot sizes range from 72 to 179 sq. yd., with key highlighted categories between 97 and 178 sq. yd. Prices start at ${STARTING_PRICE} for compact plots.`
  },
  {
    q: "Can I construct Stilt + 4 Independent Floors on my plot?",
    a: "Yes, DDJAY policy permits plot owners to construct up to Stilt + 4 Independent Floors (subject to DTCP floor policy approvals), with individual registry permissions per floor."
  },
  {
    q: "Are bank loans available for plot purchase and home construction?",
    a: "Yes, because the township is fully HRERA registered and DTCP licensed, plot purchase and construction loans are approved by leading nationalized and private banks (subject to individual credit eligibility)."
  },
  {
    q: "What amenities are provided in the township?",
    a: "The township features a multi-purpose clubhouse, swimming pool, gymnasium, lawn tennis court, cricket net, children play park, Vastu-compliant temple zone, gated perimeter security with CCTV, and 1,515.77 sq. yd. of commercial daily retail shops."
  },
  {
    q: "Who is the developer of Anandam Ashiyana?",
    a: "The project is developed by Prish Realty Pvt. Ltd. (Prish Group), a trusted real estate development firm in Haryana."
  },
  {
    q: "How can I visit the site?",
    a: "You can schedule a free guided site visit with pickup/drop assistance by filling out the booking form on this website or messaging our RERA consultant team directly on WhatsApp."
  }
];

