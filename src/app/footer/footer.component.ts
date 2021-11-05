import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public shopDepartments = [
    { name: "Sneakers & Athletic"},
    { name: "Athletic Apparelc"},
    { name: "Sandals"},
    { name: "Jeans"},
    { name: "Shirts & Tops"},
    { name: "Shorts"},
    { name: "T-Shirts"},
    { name: "Swimwear"},
    { name: "Clogs & Mules"},
    { name: "Bags & Wallets"},
    { name: "Accessories"},
    { name: "Sunglasses & Eyewear"},
    { name: "Watches"},
  ];

  public shippingTabs = [
    { name: "Your account"},
    { name: "Shipping rates & policies"},
    { name: "Refunds & replacements"},
    { name: "Order tracking"},
    { name: "Delivery info"},
    { name: "Taxes & fees"},
  ];

  public aboutKart = [
    { name: "About company"},
    { name: "Our team"},
    { name: "Careers"},
    { name: "News"},
  ];

  public footerLabels = [
    { name: "Fast and free delivery", content: "Free delivery for all orders over ₹200", className: "bi bi-cart-check-fill text-primary"},
    { name: "Money back guarantee", content: "We return money within 30 days", className: "bi bi-currency-exchange text-primary"},
    { name: "24/7 customer support", content: "Friendly 24/7 customer support", className: "bi bi-headset text-primary"},
    { name: "Secure online payment", content: "We possess SSL / Secure сertificate", className: "bi bi-key-fill text-primary"},
  ];

  trackByShopDeptName(shopDepartment: any): string {
      return shopDepartment.name;
  }

  trackByshipTabName(shipInfo: any): string {
    return shipInfo.name;
  }

  trackByaboutKartName(about: any): string {
    return about.name;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
