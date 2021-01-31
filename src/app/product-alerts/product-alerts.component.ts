import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: any;
  constructor() {}

  ngOnInit() {}

  @Output() notify = new EventEmitter();

  notificationAlert() {
    window.alert(
      `You are now subscribed to notifications for sales on ${
        this.product.name
      }`
    );
  }
}
