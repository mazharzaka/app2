export interface Order {
    produect: string; // ObjectId string
    userid: string;   // ObjectId string
    qty: number;
    status: boolean;
    received: boolean;
    Isdeleted?: boolean; // optional
  }
  