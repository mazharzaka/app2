export interface CartItem {
  productId: string;  // Assuming ObjectId is stored as a string in frontend
  qty: number;
  totalPrice: number;
  status: 'Pending' | 'Accepted' | 'Rejected' | 'Delivered';
  Isdeleted: boolean;
  CheckOut: boolean;
}

export interface Order {
  _id?: string;  // MongoDB-generated ID
  userid: string;  // Assuming ObjectId is stored as a string
  cartItem: CartItem[];
  totalPriceCart?: number;
  totalPriceOrder?: number;
}
