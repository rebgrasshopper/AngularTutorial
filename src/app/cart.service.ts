import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface ShippingCosts {
  manufacturer: string;
  model: string;
}

@Injectable({
  providedIn: "root"
})
export class CartService {
  items: any = [];
  shippingCosts: any;

  constructor(private http: HttpClient) {}

  addToCart(product: any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeFromCart(product: any) {
    this.items.filter((item: any) => item !== product);
  }

  getShippingPrices() {
    this.shippingCosts = this.http.get<ShippingCosts[]>("/assets/shipping.json");
    return this.shippingCosts;
  }
}
