import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  products = [
    { name: 'Product 1', image: 'assets/image/p-1.png', description: 'Description of Product 1', price: 19.99 },
    { name: 'Product 2', image: 'assets/image/p-2.png', description: 'Description of Product 2', price: 29.99 },
    // Add more products as needed
  ];
}
