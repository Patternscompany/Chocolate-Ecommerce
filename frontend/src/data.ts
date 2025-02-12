export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Dark Chocolate Truffles",
    description: "Handcrafted dark chocolate truffles with a smooth ganache center",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Milk Chocolate Collection",
    description: "Assorted milk chocolate pralines with various fillings",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Artisan Chocolate Bar",
    description: "Single-origin dark chocolate bar with sea salt",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Chocolate-Covered Nuts",
    description: "Premium nuts enrobed in dark and milk chocolate",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Luxury Gift Box",
    description: "Curated selection of our finest chocolates in an elegant box",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    name: "Chocolate-Covered Strawberries",
    description: "Fresh strawberries dipped in premium Belgian chocolate",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1582760548598-0bccdf815aa2?auto=format&fit=crop&q=80"
  }
];