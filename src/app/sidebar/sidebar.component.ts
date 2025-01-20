import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  isSidebarOpen = true;
  selectedOption = '';
  selectedst= '';
  minValue = 0;
  maxValue = 10000;
  midValue = 5000;
  currentValue = 5000;
  radioOptions = [
    { value: 'default1', label: 'All' },
    { value: 'default2', label: 'Men' },
    { value: 'default3', label: 'Women' },
    { value: 'default4', label: 'Kids' },
  ];
  Stock = [
    { value: 'default4', label: 'In Stock' },
    { value: 'default5', label: 'Out of Stock' },
   
  ];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
