import { SITE_URL } from '@/lib/site-url';

export { SITE_URL };
export const SITE_NAME = 'The Sugar Rush';
export const SITE_SHORT_NAME = 'Sugar Rush';
export const SITE_TAGLINE = 'Dessert atelier';
export const SITE_EMAIL = 'feedme@thesugarrushh.com';

export const STUDIO_ADDRESS = '9 Glassworks Lane, Riverhead';
export const STUDIO_ADDRESS_LINE = 'Glassworks Lane · Riverhead';

export const VISIT_QUICK_FACTS = [
  { label: 'Open', value: 'Wed–Sun' },
  { label: 'Service', value: 'Counter pickup' },
  { label: 'Neighbourhood', value: 'Glassworks Lane' },
];

export const VISIT_ETIQUETTE = [
  {
    title: 'At the door',
    body: 'We keep a short queue so the cold chain stays honest — grab a number if the pass is full.',
  },
  {
    title: 'Outside',
    body: 'Dogs get water by the planter; humans get napkins inside. No tables held without pastries.',
  },
  {
    title: 'Large orders',
    body: 'Sheet trays and office boxes need a Thursday noon note — we only book two big pulls per weekend.',
  },
];

export const NAV_LINKS = [
  { href: '/', label: 'Atelier' },
  { href: '/menu', label: 'Menu' },
  { href: '/visit', label: 'Visit' },
];

export const FOOTER_EXPLORE_LINKS = [
  { href: '/', label: 'Atelier' },
  { href: '/menu', label: 'Menu' },
  { href: '/visit', label: 'Visit' },
];

export const FOOTER_SERVICE_LINKS = [
  { href: '/menu', label: 'Signatures' },
  { href: '/menu', label: 'Bakery counter' },
  { href: '/menu', label: 'Savoury lunch' },
  { href: '/#hours', label: 'Pickup hours' },
];

export const FOOTER_LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

export const FOOTER_COPYRIGHT = `© ${new Date().getFullYear()} The Sugar Rush. All rights reserved.`;

export const GALLERY_ITEMS = [
  { src: '/images/lumen-01.webp', width: 1536, height: 1024, alt: 'Round savoury pastry with pesto swirl, poppy seeds, and parmesan on natural parchment', caption: 'Pesto crown' },
  { src: '/images/lumen-02.webp', width: 1536, height: 1024, alt: 'Round pastry topped with cured charcuterie and finely grated cheese on natural parchment', caption: 'Cheese & charcuterie' },
  { src: '/images/lumen-03.webp', width: 990, height: 659, alt: "Stack of gourmet s'mores with berry and chocolate ripples in marshmallow", caption: "Stacked s'mores" },
  { src: '/images/lumen-04.webp', width: 1536, height: 1024, alt: 'Raspberry mille-feuille with pistachio quenelle on a white plate over marble', caption: 'Mille-feuille' },
  { src: '/images/lumen-05.webp', width: 1536, height: 1024, alt: 'Chef\'s savoury plate with sliced protein, roasted vegetables, and jus on a dark blue plate', caption: "Chef's savoury" },
  { src: '/images/lumen-06.webp', width: 1024, height: 819, alt: 'Overhead view of a fine-dining plate with protein and garnish', caption: 'Midnight plate' },
  { src: '/images/lumen-07.webp', width: 1536, height: 1024, alt: 'Purple and maple-glazed cruller duo on parchment', caption: 'Cruller duo' },
  { src: '/images/lumen-08.webp', width: 1000, height: 666, alt: 'Pumpkin pie with whipped cream and one slice removed', caption: 'Pumpkin custard' },
  { src: '/images/lumen-09.webp', width: 1536, height: 1024, alt: 'Nordic coconut bun with custard filling on a teal plate', caption: 'Nordic bun' },
  { src: '/images/lumen-10.webp', width: 540, height: 810, alt: 'Stack of chocolate biscuit bars with white drizzle', caption: 'Chocolate slab' },
  { src: '/images/lumen-11.webp', width: 1024, height: 1024, alt: 'Close-up of pale cream dollops with candied fruit and herbs', caption: 'Lemon silk' },
  { src: '/images/lumen-13.webp', width: 1024, height: 522, alt: 'Round tart topped with dried fruit, nuts, and rosemary', caption: 'Winter tart' },
  { src: '/images/lumen-14.webp', width: 1024, height: 681, alt: 'Fudgy brownies on a cooling rack with baking tin behind', caption: 'Brownie rack' },
];

export const PILLAR_ITEMS = [
  {
    number: '01',
    title: 'Scale by hand',
    description: 'Digital scales for dough, spoons for curd. If a recipe only works when a machine mediates every gram, it does not live here.',
  },
  {
    number: '02',
    title: 'Rest is an ingredient',
    description: 'Laminated dough sleeps overnight. Custards set under cloth. We publish fewer names so the ones on the board have actually rested.',
  },
  {
    number: '03',
    title: 'Pass the window first',
    description: "Staff taste before you do. If the cut isn't clean or the shine is dull, it returns to the bench — not to your plate.",
  },
];

export const TIMELINE_ITEMS = [
  { time: '04:30', title: 'Sponge & preferment', description: 'Steam in the air, first coffee for the baker on duty, ovens whispering up to temperature.' },
  { time: '08:00', title: 'Glaze & set', description: 'Fruit macerates, ganaches satin, crullers dip while the glaze is still willing to run.' },
  { time: '11:30', title: 'Vitrine dress', description: 'Cards rewritten in ink, heights adjusted so the light hits mousse, not foil.' },
  { time: '14:00', title: 'Second wave', description: 'Brownies cut, savouries tucked beside sweet for the lunch crowd that pretends it is only here for coffee.' },
];

export const ROTATION_ITEMS = [
  'Basque cheesecake by the slice',
  'Pumpkin custard tart (until sold)',
  'Chocolate slab to go',
  "Chef's savoury plate · eve only",
];

export const SOURCING_TAGS = [
  'Creamline dairy',
  'Riverhead fruit',
  'Single-origin cocoa',
  'Cold-milled flour',
  'Unwaxed citrus',
  'Local honey',
];

export const MENU_SECTIONS = [
  {
    title: 'Signatures',
    items: [
      {
        name: 'Raspberry Basque slice',
        price: '£8',
        image: '/images/menu/menu-basque.webp',
        alt: 'Slice of raspberry Basque cheesecake on a white plate',
      },
      {
        name: 'Mille-feuille & pistachio quenelle',
        price: '£9',
        image: '/images/menu/menu-mille-feuille.webp',
        alt: 'Raspberry mille-feuille with pistachio quenelle on a white plate',
      },
      {
        name: "Stacked s'mores (sharing)",
        price: '£11',
        image: '/images/menu/menu-smores.webp',
        alt: "Stack of gourmet s'mores with berry and chocolate ripples",
      },
      {
        name: 'Pumpkin custard tart',
        price: '£7',
        image: '/images/menu/menu-pumpkin-tart.webp',
        alt: 'Pumpkin pie with whipped cream and one slice removed',
      },
      {
        name: 'Lemon silk & candied citrus',
        price: '£6',
        image: '/images/menu/menu-lemon-silk.webp',
        alt: 'Lemon silk cream with candied citrus on a white plate',
      },
      {
        name: 'Pistachio éclair',
        price: '£5',
        image: '/images/menu/menu-eclair.webp',
        alt: 'Pistachio éclair with chocolate glaze on a white plate',
      },
      {
        name: 'Seasonal fruit galette',
        price: '£8',
        image: '/images/menu/menu-galette.webp',
        alt: 'Slice of rustic seasonal fruit galette on a white plate',
      },
    ],
  },
  {
    title: 'Bakery counter',
    items: [
      {
        name: 'Maple & berry crullers (pair)',
        price: '£6',
        image: '/images/menu/menu-crullers.webp',
        alt: 'Purple and maple-glazed cruller duo on parchment',
      },
      {
        name: 'Chocolate slab to go',
        price: '£5',
        image: '/images/menu/menu-chocolate-slab.webp',
        alt: 'Stack of chocolate biscuit bars with white drizzle',
      },
      {
        name: 'Fudge brownie',
        price: '£4',
        image: '/images/menu/menu-brownie.webp',
        alt: 'Fudgy brownies on a cooling rack',
      },
      {
        name: 'Nordic coconut bun',
        price: '£5',
        image: '/images/menu/menu-nordic-bun.webp',
        alt: 'Nordic coconut bun with custard filling on a teal plate',
      },
      {
        name: 'Almond croissant',
        price: '£4',
        image: '/images/menu/menu-croissant.webp',
        alt: 'Golden almond croissant on parchment',
      },
      {
        name: 'Cinnamon knot roll',
        price: '£5',
        image: '/images/menu/menu-cinnamon-roll.webp',
        alt: 'Glazed cinnamon knot roll on a white plate',
      },
      {
        name: 'Vanilla custard pot',
        price: '£6',
        image: '/images/menu/menu-custard-pot.webp',
        alt: 'Vanilla bean custard in a small glass pot',
      },
      {
        name: 'Lavender honey madeleine (pair)',
        price: '£5',
        image: '/images/menu/menu-madeleine.webp',
        alt: 'Pair of lavender honey madeleines on a white plate',
      },
    ],
  },
  {
    title: 'Savoury (lunch)',
    items: [
      {
        name: 'Pesto & poppy seed bun',
        price: '£7',
        image: '/images/menu/menu-pesto-bun.webp',
        alt: 'Round savoury pastry with pesto swirl and parmesan',
      },
      {
        name: 'Cheese & charcuterie round',
        price: '£8',
        image: '/images/menu/menu-charcuterie.webp',
        alt: 'Round pastry topped with cured charcuterie and grated cheese',
      },
      {
        name: "Chef's plate (rotating)",
        price: '£16',
        image: '/images/menu/menu-chefs-plate.webp',
        alt: "Chef's savoury plate with sliced protein and roasted vegetables",
      },
      {
        name: 'Roasted tomato focaccia',
        price: '£7',
        image: '/images/menu/menu-focaccia.webp',
        alt: 'Slice of roasted tomato and olive focaccia',
      },
      {
        name: 'Heritage sourdough toast',
        price: '£5',
        image: '/images/menu/menu-sourdough.webp',
        alt: 'Thick slice of sourdough toast with butter',
      },
      {
        name: 'Winter herb tart slice',
        price: '£8',
        image: '/images/menu/menu-winter-tart.webp',
        alt: 'Slice of winter herb tart with dried fruit and nuts',
      },
    ],
  },
];

/** Eight menu items highlighted as on the pass (stable list for SSR / Vercel builds). */
export const ON_PASS_MENU_ITEMS = MENU_SECTIONS.flatMap((section) =>
  section.items.map((item) => item.name)
).slice(0, 8);

export const HOURS_ROWS = [
  { day: 'Wednesday–Friday', hours: '11:00 — 19:00' },
  { day: 'Saturday', hours: '10:00 — 20:00' },
  { day: 'Sunday', hours: '10:00 — 16:00' },
  { day: 'Monday–Tuesday', hours: 'Closed' },
];
