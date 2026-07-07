// Auto-collected warehouse/store photos from src/assets/stock/*.asset.json
const modules = import.meta.glob("../assets/stock/*.asset.json", { eager: true }) as Record<string, { default: { url: string; original_filename: string } }>;

export type StockImage = { url: string; name: string; category: StockCategory };

export type StockCategory =
  | "Warehouse"
  | "Batteries"
  | "Fans"
  | "Coolers"
  | "Lighting"
  | "Inverters"
  | "Solar"
  | "Accessories";

// Manual tagging by filename index so filters work correctly.
// Every image defaults to "Warehouse". Add more mappings as new photos are uploaded.
const tags: Record<number, StockCategory> = {
  1: "Inverters", 2: "Inverters", 3: "Batteries", 4: "Batteries",
  5: "Fans", 6: "Fans", 7: "Lighting", 8: "Fans",
  9: "Batteries", 10: "Coolers", 11: "Coolers", 12: "Batteries",
  13: "Inverters", 14: "Coolers", 15: "Coolers", 16: "Coolers",
  17: "Coolers", 18: "Coolers", 19: "Inverters", 20: "Inverters",
  21: "Batteries", 22: "Batteries", 23: "Solar", 24: "Inverters",
  25: "Solar", 26: "Batteries", 27: "Inverters", 28: "Batteries",
  29: "Inverters", 30: "Inverters", 31: "Batteries", 32: "Lighting",
  33: "Lighting", 34: "Batteries", 35: "Inverters", 36: "Batteries",
  37: "Inverters", 38: "Inverters",
};

export const stockImages: StockImage[] = Object.entries(modules)
  .map(([path, mod]) => {
    const m = path.match(/stock-(\d+)/);
    const idx = m ? parseInt(m[1], 10) : 0;
    return {
      url: mod.default.url,
      name: mod.default.original_filename,
      category: tags[idx] ?? "Warehouse",
      _idx: idx,
    };
  })
  .sort((a, b) => (a as any)._idx - (b as any)._idx)
  .map(({ url, name, category }) => ({ url, name, category }));

export const stockFilters: (StockCategory | "All")[] = [
  "All",
  "Warehouse",
  "Batteries",
  "Inverters",
  "Fans",
  "Coolers",
  "Lighting",
  "Solar",
  "Accessories",
];