export interface Product {
    id?: string; 
    name: string;
    desc: string;
    price: number;
    imgeURL: string;
    category: string;
    Isdeleted?: boolean; 
    isStock?: boolean; 
    createdAt?: string; 
    updatedAt?: string;
  }
  