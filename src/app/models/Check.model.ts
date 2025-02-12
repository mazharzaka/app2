export interface COrderItem {
    productId: {
      _id: string;
      name: string;
      price: number;
    };
    qty: number;
    totalPrice: number;
    status: "Pending" | "Accepted" | "Rejected" | "Delivered";
  }
  
  export interface COrder {
    _id?: string;
    userId: {
      _id: string;
      name: string;
      email: string;
    };
    cartItems: COrderItem[];
    totalPriceOrder: number;
    createdAt?: string;
  }
  