export interface CircuitComponent {
  id: string;
  name: string;
  manufacturer: string;
  description: string;
  categories: string[];
  package: string;
  stock: number;
  specifications: {
    [key: string]: string | number;
  };
  datasheet_url?: string;
  price?: number;
  alternatives?: string[];
}
