// Central catalogue — single source of truth for products, categories, brands.
// Add new products/brands/categories here without touching any UI code.

import automotiveBattery from "@/assets/products/automotive-battery.jpg";
import inverterBattery from "@/assets/products/inverter-battery.jpg";
import inverter from "@/assets/products/inverter.jpg";
import solar from "@/assets/products/solar.jpg";
import ceilingFan from "@/assets/products/ceiling-fan.jpg";
import exhaustFan from "@/assets/products/exhaust-fan.jpg";
import cooler from "@/assets/products/cooler.jpg";
import pump from "@/assets/products/pump.jpg";
import wires from "@/assets/products/wires.jpg";
import switches from "@/assets/products/switches.jpg";
import led from "@/assets/products/led.jpg";
import mcb from "@/assets/products/mcb.jpg";
import dbBox from "@/assets/products/db-box.jpg";
import pvcPipes from "@/assets/products/pvc-pipes.jpg";
import extension from "@/assets/products/extension.jpg";
import stabilizer from "@/assets/products/stabilizer.jpg";

export type Availability = "in-stock" | "limited" | "on-request" | "new";

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string; // category slug
  image: string;
  short: string;
  features: string[];
  specs?: Record<string, string>;
  applications?: string[];
  availability: Availability;
  popular?: boolean;
  newest?: boolean;
};

export type Category = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  brands: string[];
};

export type Brand = {
  name: string;
  slug: string;
  since?: number;
  description: string;
  offers: string[];
  warranty?: string;
  applications?: string[];
  why?: string;
};

export const categories: Category[] = [
  {
    slug: "batteries-power-backup",
    title: "Battery & Power Backup",
    short: "Automotive, inverter & tubular batteries plus complete home UPS solutions.",
    description:
      "Genuine automotive, inverter, tubular batteries and complete home UPS systems from India's most trusted names — engineered for long life and uninterrupted power backup at home, in offices and for commercial vehicles.",
    image: inverterBattery,
    brands: ["Exide", "Amaron", "Luminous", "Livguard", "Microtek", "Okaya", "Eastman", "SF Sonic"],
  },
  {
    slug: "inverters-solar",
    title: "Inverters & Solar",
    short: "Home inverters, sine-wave UPS and complete solar power kits.",
    description:
      "Pure sine-wave home inverters, UPS units and end-to-end solar solutions — panels, PCUs, controllers and inverter batteries — perfect for homes, shops and small industries in Gurgaon and NCR.",
    image: inverter,
    brands: ["Luminous", "Microtek", "V-Guard", "Havells", "Eastman", "Okaya"],
  },
  {
    slug: "fans",
    title: "Fans",
    short: "Ceiling, BLDC, exhaust & pedestal fans from premium brands.",
    description:
      "Energy-efficient ceiling fans, BLDC smart fans, exhaust and pedestal fans from India's leading manufacturers — decorative, industrial and residential ranges in stock throughout the year.",
    image: ceilingFan,
    brands: ["Havells", "Crompton", "Orient", "Usha", "Bajaj", "Atomberg"],
  },
  {
    slug: "air-coolers",
    title: "Air Coolers",
    short: "Desert, tower & personal coolers for every room size.",
    description:
      "High-airflow desert coolers, room coolers and personal coolers with honeycomb cooling pads and durable ABS bodies — ready-stock in bulk quantities every summer.",
    image: cooler,
    brands: ["Symphony", "Bajaj", "Crompton", "Havells", "Kenstar"],
  },
  {
    slug: "wiring-cables",
    title: "Wires, Cables & Conduits",
    short: "ISI-marked house wires, industrial cables and PVC conduits.",
    description:
      "Complete wiring solutions — FR/FRLS house wires, submersible cables, aluminium & copper industrial cables and PVC conduit systems from brands trusted by electricians across NCR.",
    image: wires,
    brands: ["Polycab", "Finolex", "KEI", "Havells", "RR Kabel"],
  },
  {
    slug: "switches-sockets",
    title: "Switches, Sockets & DBs",
    short: "Modular switches, sockets, MCBs and distribution boards.",
    description:
      "Premium modular switches, sockets, plates, MCBs, RCCBs and distribution boards for homes and industries — from budget to designer ranges with matching accessories.",
    image: switches,
    brands: ["Anchor", "Legrand", "Havells", "GM Modular", "Schneider", "ABB"],
  },
  {
    slug: "lighting",
    title: "Lighting",
    short: "LED bulbs, panels, flood lights and decorative lighting.",
    description:
      "Complete LED lighting range — bulbs, downlights, panels, batons, flood lights, street lights and decorative fixtures — designed for lower energy bills and long service life.",
    image: led,
    brands: ["Philips", "Havells", "Bajaj", "Crompton", "Wipro", "Syska", "Opple"],
  },
  {
    slug: "water-pumps",
    title: "Water Pumps",
    short: "Monoblock, submersible and domestic water pumps.",
    description:
      "Reliable domestic and agricultural water pumps — monoblock, submersible, self-priming and pressure booster pumps for bore-wells, overhead tanks and irrigation.",
    image: pump,
    brands: ["Kirloskar", "Crompton", "Texmo", "V-Guard", "Havells"],
  },
  {
    slug: "accessories",
    title: "Electrical Accessories",
    short: "Extension boards, chargers, stabilizers and solar accessories.",
    description:
      "Everyday essentials — spike-protected extension boards, battery chargers, voltage stabilizers for AC/TV/fridge, solar batteries, charge controllers and installation consumables.",
    image: stabilizer,
    brands: ["V-Guard", "Microtek", "Goldmedal", "Anchor", "Havells", "Luminous"],
  },
];

export const brands: Brand[] = [
  { name: "Exide", slug: "exide", since: 1947, description: "India's largest battery manufacturer for automotive and inverter applications.", offers: ["Automotive Batteries", "Inverter Batteries", "Tubular Batteries"], warranty: "Up to 60 months", applications: ["Cars", "Two-wheelers", "Home UPS"], why: "Industry benchmark for long-life batteries." },
  { name: "Amaron", slug: "amaron", since: 1985, description: "Zero-maintenance batteries with high cranking power.", offers: ["Automotive Batteries", "Inverter Batteries"], warranty: "Up to 55 months", applications: ["Cars", "SUVs", "Commercial Vehicles"], why: "Sealed maintenance-free technology." },
  { name: "Luminous", slug: "luminous", since: 1988, description: "India's leading brand for inverters, batteries and solar solutions.", offers: ["Home Inverters", "Inverter Batteries", "Solar PCU", "UPS"], warranty: "24–48 months", applications: ["Homes", "Shops", "Offices"], why: "Widest home-power backup range." },
  { name: "Livguard", slug: "livguard", description: "Advanced power storage backed by SAR Group.", offers: ["Inverter Batteries", "Home Inverters", "Solar"], warranty: "36–60 months", applications: ["Residential", "Solar Homes"], why: "Rugged tubular technology." },
  { name: "Microtek", slug: "microtek", description: "Sine-wave inverters and UPS engineered for Indian power conditions.", offers: ["Sine-Wave Inverters", "UPS", "Stabilizers"], warranty: "24 months", applications: ["Homes", "Offices"], why: "Great performance-to-price ratio." },
  { name: "Okaya", slug: "okaya", description: "Premium tubular inverter batteries with deep-cycle performance.", offers: ["Tubular Batteries", "Inverters"], warranty: "36–60 months", applications: ["Homes", "Long backup"], why: "Deep discharge protection." },
  { name: "Eastman", slug: "eastman", description: "Fast-growing power backup brand — inverters and PCU solutions.", offers: ["Home UPS", "Solar PCU", "Batteries"], warranty: "24–36 months", applications: ["Homes", "Solar"], why: "Excellent solar hybrid range." },
  { name: "V-Guard", slug: "v-guard", description: "Voltage stabilizers, pumps, wires and consumer electricals.", offers: ["Stabilizers", "Pumps", "Wires", "Inverters"], warranty: "24–60 months", applications: ["Homes", "Appliance protection"], why: "Reliable protection devices." },
  { name: "Havells", slug: "havells", description: "Complete electrical range — from switchgear to lighting.", offers: ["Fans", "Wires", "MCBs", "LED", "DB Boxes"], warranty: "24–60 months", applications: ["Homes", "Industries"], why: "One-stop premium brand." },
  { name: "Crompton", slug: "crompton", since: 1878, description: "Iconic Indian brand for fans, pumps and lighting.", offers: ["Ceiling Fans", "Pumps", "LED", "Coolers"], warranty: "24 months", applications: ["Residential"], why: "Trusted for over 100 years." },
  { name: "Orient", slug: "orient", description: "Innovative fans and lighting with modern designs.", offers: ["Ceiling Fans", "BLDC Fans", "Lighting"], warranty: "24 months", applications: ["Homes", "Offices"], why: "BLDC energy-saving technology." },
  { name: "Usha", slug: "usha", description: "Household appliances and premium fan ranges.", offers: ["Ceiling Fans", "Table Fans", "Exhaust"], warranty: "24 months", applications: ["Residential"], why: "Elegant, durable designs." },
  { name: "Bajaj", slug: "bajaj", description: "Trusted maker of fans, coolers and lighting.", offers: ["Fans", "Coolers", "Lighting"], warranty: "24 months", applications: ["Residential", "Commercial"], why: "Wide product breadth." },
  { name: "Symphony", slug: "symphony", description: "World's largest air cooler company.", offers: ["Desert Coolers", "Tower Coolers"], warranty: "12 months", applications: ["Homes", "Halls"], why: "Innovative honeycomb cooling." },
  { name: "Finolex", slug: "finolex", description: "Premium ISI-marked wires and cables.", offers: ["House Wires", "Industrial Cables"], warranty: "Lifetime insulation", applications: ["Homes", "Industries"], why: "Trusted electrician choice." },
  { name: "Polycab", slug: "polycab", description: "India's #1 wires & cables maker.", offers: ["Wires", "Cables", "Fans", "Switches"], warranty: "As applicable", applications: ["Homes", "Industries"], why: "Complete wiring solutions." },
  { name: "KEI", slug: "kei", description: "Industrial cables and premium house wires.", offers: ["House Wires", "Power Cables"], warranty: "Standard", applications: ["Industries", "Residential"], why: "Robust industrial cables." },
  { name: "Anchor", slug: "anchor", description: "Modular switches from Panasonic.", offers: ["Switches", "Sockets", "Plates"], warranty: "24 months", applications: ["Homes", "Hotels"], why: "Iconic modular ranges." },
  { name: "GM Modular", slug: "gm-modular", description: "Designer modular switches and home automation.", offers: ["Switches", "Automation", "Fans"], warranty: "24 months", applications: ["Modern homes"], why: "Premium finish." },
  { name: "Legrand", slug: "legrand", description: "Global specialist in electrical infrastructures.", offers: ["Switches", "MCBs", "DB"], warranty: "36 months", applications: ["Premium homes", "Offices"], why: "International designs." },
  { name: "Schneider", slug: "schneider", description: "Global leader in switchgear and safety.", offers: ["MCB", "RCCB", "DB"], warranty: "36 months", applications: ["Industries", "Homes"], why: "Superior safety." },
  { name: "Philips", slug: "philips", description: "Trusted lighting since generations.", offers: ["LED Bulbs", "Panels", "Fixtures"], warranty: "24 months", applications: ["Homes", "Offices"], why: "Premium lighting quality." },
  { name: "Wipro", slug: "wipro", description: "Smart LED lighting for homes and offices.", offers: ["LED", "Panels"], warranty: "24 months", applications: ["Residential"], why: "Modern designs." },
  { name: "Syska", slug: "syska", description: "Value-for-money LED products.", offers: ["LED Bulbs", "Battens"], warranty: "24 months", applications: ["Homes", "Shops"], why: "Great price-performance." },
  { name: "Opple", slug: "opple", description: "Chinese-Italian premium architectural lighting.", offers: ["Downlights", "Panels"], warranty: "36 months", applications: ["Retail", "Offices"], why: "Design-led lighting." },
  { name: "Kirloskar", slug: "kirloskar", description: "Legendary pumps engineered since 1888.", offers: ["Monoblock", "Submersible"], warranty: "24 months", applications: ["Agriculture", "Homes"], why: "Rugged reliability." },
  { name: "Atomberg", slug: "atomberg", description: "Energy-saving BLDC fans.", offers: ["BLDC Fans"], warranty: "24 months + 3yr motor", applications: ["Homes"], why: "Lowest energy consumption." },
  { name: "Kenstar", slug: "kenstar", description: "Trusted appliance and cooler brand.", offers: ["Coolers"], warranty: "12 months", applications: ["Homes"], why: "Powerful desert coolers." },
  { name: "SF Sonic", slug: "sf-sonic", description: "Automotive battery brand by Exide.", offers: ["Automotive Batteries"], warranty: "Up to 48 months", applications: ["Cars", "Two-wheelers"], why: "Great for high-heat conditions." },
  { name: "Goldmedal", slug: "goldmedal", description: "Modular switches and home automation.", offers: ["Switches", "Automation", "Extension"], warranty: "24 months", applications: ["Homes"], why: "Contemporary designs." },
  { name: "RR Kabel", slug: "rr-kabel", description: "Premium wires with FR-LSH insulation.", offers: ["House Wires", "Cables"], warranty: "Standard", applications: ["Homes", "Commercial"], why: "Fire-safe insulation." },
];

export const products: Product[] = [
  { slug: "exide-automotive-battery", name: "Exide Mileage Automotive Battery", brand: "Exide", category: "batteries-power-backup", image: automotiveBattery, short: "Zero-maintenance car battery with heavy cranking power.", features: ["Zero maintenance", "Heavy cranking power", "48-month warranty", "Long service life"], specs: { Type: "Automotive", Capacity: "35Ah – 100Ah", Warranty: "48 Months", Voltage: "12V" }, applications: ["Cars", "SUVs", "Commercial vehicles"], availability: "in-stock", popular: true },
  { slug: "amaron-hi-life-battery", name: "Amaron Hi-Life Automotive Battery", brand: "Amaron", category: "batteries-power-backup", image: automotiveBattery, short: "Sealed maintenance-free car battery.", features: ["Sealed maintenance-free", "Fast recharge", "60-month warranty"], specs: { Type: "SMF Automotive", Warranty: "60 Months", Voltage: "12V" }, applications: ["Cars", "SUVs"], availability: "in-stock" },
  { slug: "luminous-inverlast-battery", name: "Luminous Inverlast Tubular", brand: "Luminous", category: "batteries-power-backup", image: inverterBattery, short: "Tall tubular inverter battery for long backup.", features: ["Deep discharge", "150Ah capacity", "36-month warranty"], specs: { Type: "Tall Tubular", Capacity: "150Ah", Warranty: "36 Months" }, applications: ["Home UPS", "Long backup"], availability: "in-stock", popular: true },
  { slug: "exide-inverter-battery", name: "Exide Inva Tubular", brand: "Exide", category: "batteries-power-backup", image: inverterBattery, short: "Reliable tubular battery for home inverters.", features: ["Tall tubular plates", "Low maintenance", "48-month warranty"], specs: { Type: "Tubular", Capacity: "100–200Ah" }, availability: "in-stock" },
  { slug: "okaya-tubular-battery", name: "Okaya XL Tubular Battery", brand: "Okaya", category: "batteries-power-backup", image: inverterBattery, short: "Extra-long backup tubular battery.", features: ["150–220Ah", "Extra plates", "60-month warranty"], availability: "limited", newest: true },
  { slug: "livguard-inverter-battery", name: "Livguard IT Series Tubular", brand: "Livguard", category: "batteries-power-backup", image: inverterBattery, short: "Advanced tubular battery for long-hour backup.", features: ["Robotic manufacturing", "48-month warranty"], availability: "in-stock" },

  { slug: "luminous-zelio-inverter", name: "Luminous Zelio+ 1100 Inverter", brand: "Luminous", category: "inverters-solar", image: inverter, short: "Pure sine-wave home inverter with smart display.", features: ["Sine wave", "LCD display", "Smart charging"], specs: { Capacity: "900VA", Type: "Pure Sine Wave", Warranty: "24 Months" }, applications: ["Homes", "Small shops"], availability: "in-stock", popular: true },
  { slug: "microtek-ups-inverter", name: "Microtek UPS SEBz 1100", brand: "Microtek", category: "inverters-solar", image: inverter, short: "Sine-wave UPS engineered for Indian conditions.", features: ["Fast charging", "Overload protection", "24-month warranty"], availability: "in-stock" },
  { slug: "luminous-solar-panel", name: "Luminous Solar Panel 335W", brand: "Luminous", category: "inverters-solar", image: solar, short: "Poly-crystalline solar panel for rooftop installs.", features: ["335W output", "25-year performance warranty"], availability: "on-request", newest: true },
  { slug: "eastman-solar-pcu", name: "Eastman Solar Smart PCU", brand: "Eastman", category: "inverters-solar", image: inverter, short: "Solar hybrid PCU for home solar systems.", features: ["MPPT charging", "Grid + Solar priority"], availability: "in-stock" },

  { slug: "havells-ceiling-fan", name: "Havells Enticer Ceiling Fan", brand: "Havells", category: "fans", image: ceilingFan, short: "1200mm decorative ceiling fan with premium finish.", features: ["1200mm sweep", "High air delivery", "24-month warranty"], specs: { Sweep: "1200mm", Speed: "370 RPM" }, availability: "in-stock", popular: true },
  { slug: "crompton-hs-plus-fan", name: "Crompton Hi-Speed Plus Fan", brand: "Crompton", category: "fans", image: ceilingFan, short: "High-speed ceiling fan for large rooms.", features: ["High RPM", "Copper motor"], availability: "in-stock" },
  { slug: "orient-bldc-fan", name: "Orient Aeroquiet BLDC Fan", brand: "Orient", category: "fans", image: ceilingFan, short: "BLDC energy-saving fan with remote.", features: ["BLDC motor", "28W", "Remote", "5-star rated"], availability: "in-stock", newest: true },
  { slug: "atomberg-renesa-fan", name: "Atomberg Renesa BLDC Fan", brand: "Atomberg", category: "fans", image: ceilingFan, short: "Energy-saving BLDC fan with remote.", features: ["28W", "6-speed remote", "3yr motor warranty"], availability: "limited", popular: true },
  { slug: "usha-exhaust-fan", name: "Usha Crisp Air Exhaust Fan", brand: "Usha", category: "fans", image: exhaustFan, short: "High-airflow exhaust fan for kitchens & bathrooms.", features: ["150–250mm sizes", "High suction"], availability: "in-stock" },
  { slug: "bajaj-exhaust-fan", name: "Bajaj Bahar Exhaust Fan", brand: "Bajaj", category: "fans", image: exhaustFan, short: "Durable metal-body exhaust fan.", features: ["Metal blades", "24-month warranty"], availability: "in-stock" },

  { slug: "symphony-desert-cooler", name: "Symphony Sumo Desert Cooler", brand: "Symphony", category: "air-coolers", image: cooler, short: "70L desert cooler with honeycomb cooling.", features: ["Honeycomb pads", "70L tank", "Remote"], availability: "in-stock", popular: true },
  { slug: "bajaj-dc-2050-cooler", name: "Bajaj DC 2050 Desert Cooler", brand: "Bajaj", category: "air-coolers", image: cooler, short: "70L desert cooler for large rooms.", features: ["Wood wool pads", "3-side cooling"], availability: "in-stock" },
  { slug: "crompton-personal-cooler", name: "Crompton Ozone Personal Cooler", brand: "Crompton", category: "air-coolers", image: cooler, short: "Personal cooler for bedrooms.", features: ["27L tank", "Compact design"], availability: "limited" },

  { slug: "polycab-house-wire", name: "Polycab FR House Wire", brand: "Polycab", category: "wiring-cables", image: wires, short: "ISI-marked flame-retardant house wire.", features: ["FR insulation", "ISI-marked", "90m coil"], specs: { Sizes: "1 – 6 sq.mm", Colours: "Red/Yellow/Blue/Green/Black" }, availability: "in-stock", popular: true },
  { slug: "finolex-house-wire", name: "Finolex FRLSH House Wire", brand: "Finolex", category: "wiring-cables", image: wires, short: "Flame retardant low smoke wire.", features: ["FRLSH", "ISI marked"], availability: "in-stock" },
  { slug: "kei-house-wire", name: "KEI HRFR House Wire", brand: "KEI", category: "wiring-cables", image: wires, short: "Heat-resistant flame-retardant wire.", features: ["HRFR", "ISI marked"], availability: "in-stock" },
  { slug: "polycab-pvc-conduit", name: "Polycab PVC Conduit Pipe", brand: "Polycab", category: "wiring-cables", image: pvcPipes, short: "ISI-marked PVC conduit for wiring installs.", features: ["20mm/25mm/32mm", "ISI-marked"], availability: "in-stock" },

  { slug: "anchor-roma-switches", name: "Anchor Roma Modular Switches", brand: "Anchor", category: "switches-sockets", image: switches, short: "Popular modular switch range with wide accessory list.", features: ["Wide range", "Snap-fit plates"], availability: "in-stock", popular: true },
  { slug: "legrand-myrius-switches", name: "Legrand Myrius Switches", brand: "Legrand", category: "switches-sockets", image: switches, short: "Premium French-designed modular range.", features: ["Silver + white finish", "36-month warranty"], availability: "in-stock" },
  { slug: "gm-modular-switches", name: "GM Modular G-Pro Switches", brand: "GM Modular", category: "switches-sockets", image: switches, short: "Designer modular switches and plates.", features: ["Elegant matte finish"], availability: "in-stock" },
  { slug: "schneider-mcb", name: "Schneider Acti9 MCB", brand: "Schneider", category: "switches-sockets", image: mcb, short: "10 kA industrial-grade miniature circuit breaker.", features: ["10 kA breaking", "Single/Double pole"], availability: "in-stock" },
  { slug: "havells-db-box", name: "Havells Distribution Board", brand: "Havells", category: "switches-sockets", image: dbBox, short: "SPN & TPN distribution boards.", features: ["4/8/12 way", "Metal enclosure"], availability: "in-stock" },

  { slug: "philips-led-bulb", name: "Philips 9W LED Bulb", brand: "Philips", category: "lighting", image: led, short: "Premium 9W LED bulb — cool daylight.", features: ["9W", "806 lumens", "20,000hr life"], availability: "in-stock", popular: true },
  { slug: "havells-led-panel", name: "Havells Endura LED Panel", brand: "Havells", category: "lighting", image: led, short: "Recessed round/square LED panel for false ceilings.", features: ["12W–22W", "Recessed", "24-month warranty"], availability: "in-stock" },
  { slug: "wipro-led-batten", name: "Wipro LED Batten 20W", brand: "Wipro", category: "lighting", image: led, short: "4ft LED batten replacement for tube lights.", features: ["20W", "2000 lumens"], availability: "in-stock" },
  { slug: "syska-led-bulb", name: "Syska LED Bulb 9W", brand: "Syska", category: "lighting", image: led, short: "Value LED bulb with 2-year replacement.", features: ["9W", "24-month warranty"], availability: "in-stock" },

  { slug: "kirloskar-monoblock", name: "Kirloskar Chhotu Monoblock Pump", brand: "Kirloskar", category: "water-pumps", image: pump, short: "Compact monoblock pump for domestic use.", features: ["0.5 HP", "Copper winding"], availability: "in-stock" },
  { slug: "crompton-mini-champ", name: "Crompton Mini Champ Pump", brand: "Crompton", category: "water-pumps", image: pump, short: "Reliable domestic water pump.", features: ["0.5 HP", "12-month warranty"], availability: "in-stock" },
  { slug: "vguard-submersible", name: "V-Guard Submersible Pump", brand: "V-Guard", category: "water-pumps", image: pump, short: "V4 submersible pump for bore-wells.", features: ["1HP – 2HP", "Copper winding"], availability: "on-request" },

  { slug: "goldmedal-extension", name: "Goldmedal Premium Extension Board", brand: "Goldmedal", category: "accessories", image: extension, short: "Heavy-duty 6-socket extension with spike protection.", features: ["Spike protection", "3m cord", "Master switch"], availability: "in-stock", popular: true },
  { slug: "anchor-extension", name: "Anchor Penta 6A Extension", brand: "Anchor", category: "accessories", image: extension, short: "Compact ISI-marked extension board.", features: ["ISI marked", "6A sockets"], availability: "in-stock" },
  { slug: "vguard-stabilizer", name: "V-Guard Digi 400 Stabilizer", brand: "V-Guard", category: "accessories", image: stabilizer, short: "AC stabilizer for 1.5-ton split ACs.", features: ["Wide input range", "Digital display", "36-month warranty"], availability: "in-stock", popular: true },
  { slug: "microtek-stabilizer", name: "Microtek EM 4160 Stabilizer", brand: "Microtek", category: "accessories", image: stabilizer, short: "For refrigerators and TVs.", features: ["Auto cutoff", "Digital display"], availability: "in-stock" },
  { slug: "luminous-battery-charger", name: "Luminous Battery Charger", brand: "Luminous", category: "accessories", image: extension, short: "Standalone charger for inverter batteries.", features: ["Auto cut-off", "Fast charge"], availability: "on-request", newest: true },
];

// Helpers
export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getBrand(name: string): Brand | undefined {
  return brands.find((b) => b.name.toLowerCase() === name.toLowerCase());
}

export function productsInCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

export function productsByBrand(brand: string): Product[] {
  return products.filter((p) => p.brand.toLowerCase() === brand.toLowerCase());
}

export const availabilityMeta: Record<Availability, { label: string; className: string; dot: string }> = {
  "in-stock": { label: "In Stock", className: "bg-emerald-50 text-emerald-700 border-emerald-200", dot: "bg-emerald-500" },
  limited: { label: "Limited Stock", className: "bg-amber-50 text-amber-700 border-amber-200", dot: "bg-amber-500" },
  "on-request": { label: "On Request", className: "bg-rose-50 text-rose-700 border-rose-200", dot: "bg-rose-500" },
  new: { label: "New Arrival", className: "bg-sky-50 text-sky-700 border-sky-200", dot: "bg-sky-500" },
};