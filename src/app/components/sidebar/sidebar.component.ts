import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() selectedOptionChange = new EventEmitter<string>(); 
  @Output() selectedstChange = new EventEmitter<boolean>(); 
  @Output() currentValueChange = new EventEmitter<number>(); 
  isSidebarOpen = false;
  selectedOption = 'All';
  selectedst: boolean | undefined = undefined; 
  minValue = 0;
  maxValue = 5000;
  midValue = 2500;
  currentValue = 2500;
  processedOption: any;
  radioOptions = [
    { value: 'All', label: 'All' },
    { value: 'Men', label: 'Men' },
    { value: 'Women', label: 'Women' },
    { value: 'Kids', label: 'Kids' },
  ];
  Stock = [
    { value: undefined, label: 'All' },
    { value: false, label: 'In Stock' },
    { value: true, label: 'Out of Stock' },
   
  ];

  updateselectedst(option: boolean|undefined) {
    this.selectedst = option;
    this.selectedstChange.emit(this.selectedst);
  }
  updateSelectedOption(option: string) {
    this.selectedOption = option;
    this.selectedOptionChange.emit(this.selectedOption);
  }
  updatecurrentValueChange(option:number) {
    console.log(option);
    
    this.currentValue = option;
    this.currentValueChange.emit(this.currentValue);
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log(this.processedOption);
    
  }
}
