export type Merchant = {
  id: string;
  name: string;
  niche: 'sewing-embroidery';
  network: string;
  commission: string;
  cookie: string;
  accessibility: 'confirmed' | 'probable' | 'wait-until-traffic';
  applyUrl: string;
  notes: string;
};

export const merchants: Merchant[] = [
  {
    id: 'sewing-machines-plus',
    name: 'Sewing Machines Plus',
    niche: 'sewing-embroidery',
    network: 'ShareASale / Awin merchant profile observed',
    commission: '10% standard; coupon sites 4%',
    cookie: 'Not shown on public merchant page; verify inside network before final link placement',
    accessibility: 'confirmed',
    applyUrl: 'https://sewingmachinesplus.com/pages/smp-affiliate',
    notes: 'Official page states quick application, 10% commission, $441.67 AOV, hosted on ShareASale.'
  },
  {
    id: 'brother-usa',
    name: 'Brother USA',
    niche: 'sewing-embroidery',
    network: 'Impact, advertiser ID 10836',
    commission: '5% baseline CPA; negotiable case-by-case',
    cookie: 'Need to confirm inside Impact contract terms',
    accessibility: 'confirmed',
    applyUrl: 'https://www.brother-usa.com/become-an-affiliate',
    notes: 'Official Brother page explicitly invites websites/apps and says tracking/payment via Impact Radius.'
  },
  {
    id: 'quality-sewing',
    name: 'Quality Sewing & Vacuum',
    niche: 'sewing-embroidery',
    network: 'In-house affiliate dashboard/application',
    commission: 'Up to 8–12%',
    cookie: 'Not public',
    accessibility: 'probable',
    applyUrl: 'https://www.qualitysewing.com/pages/affiliate',
    notes: 'Official page says 5–7 business day review and asks for details/social presence; strong after 10–15 pages live.'
  },
  {
    id: 'singer-svp',
    name: 'SINGER / SVP Sewing Brands',
    niche: 'sewing-embroidery',
    network: 'FlexOffers path observed; official creator/affiliate pages exist',
    commission: 'Competitive/generous; exact rate not public on official page',
    cookie: '30 days via FlexOffers listing',
    accessibility: 'probable',
    applyUrl: 'https://www.singer.com/pages/affiliate-creators',
    notes: 'Covers SINGER, PFAFF, Husqvarna Viking; likely good brand-depth backup once site is credible.'
  },
  {
    id: 'baby-lock',
    name: 'Baby Lock',
    niche: 'sewing-embroidery',
    network: 'Awin/Sovrn paths observed',
    commission: '5% via Yazing/Sovrn-style references; verify in network',
    cookie: 'Not public in accessible page',
    accessibility: 'probable',
    applyUrl: 'https://babylock.com/affiliate',
    notes: 'Official affiliate URL exists but public page resolves like a category page; use network application when available.'
  }
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  merchantIds: string[];
  affiliateUrlByMerchant: Record<string, string>;
  status: 'placeholder' | 'approved' | 'active';
  facts: Record<string, string>;
};

export const products: Product[] = [
  {
    slug: 'brother-se700',
    name: 'Brother SE700',
    category: 'beginner embroidery combo',
    merchantIds: ['brother-usa', 'sewing-machines-plus'],
    affiliateUrlByMerchant: {},
    status: 'placeholder',
    facts: { hoop: '4 x 4 in', type: 'sewing and embroidery combo', audience: 'beginner embroidery' }
  },
  {
    slug: 'brother-se2000',
    name: 'Brother SE2000',
    category: 'large-screen embroidery combo',
    merchantIds: ['brother-usa', 'sewing-machines-plus'],
    affiliateUrlByMerchant: {},
    status: 'placeholder',
    facts: { hoop: '5 x 7 in', type: 'sewing and embroidery combo', audience: 'intermediate embroidery' }
  },
  {
    slug: 'singer-heavy-duty-4452',
    name: 'SINGER Heavy Duty 4452',
    category: 'mechanical heavy-duty sewing',
    merchantIds: ['singer-svp'],
    affiliateUrlByMerchant: {},
    status: 'placeholder',
    facts: { type: 'mechanical sewing', audience: 'denim, canvas, utility sewing' }
  }
];
