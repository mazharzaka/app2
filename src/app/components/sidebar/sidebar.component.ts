import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AddproduectService } from '../../services/addproduect.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';

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
  constructor(private category: CategoryService) { }

  isSidebarOpen = false;
  selectedOption = 'All';
  selectedst: boolean | undefined = undefined;
  minValue = 0;
  maxValue = 5000;
  midValue = 2500;
  currentValue = 4000;
  processedOption: any;
  radioOptions:Category[] = [ ];
  Stock = [
    { value: undefined, label: 'All' },
    { value: false, label: 'In Stock' },
    { value: true, label: 'Out of Stock' },

  ];
  ngOnInit(): void {
    this.category.getCategories().subscribe({
      next: (data) => {
        this.radioOptions = data;
        // console.log('Categories:', data);

      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      }
    });
  }
  updateselectedst(option: boolean | undefined) {
    this.selectedst = option;
    this.selectedstChange.emit(this.selectedst);
  }
  updateSelectedOption(option: string) {
    this.selectedOption = option;
    this.selectedOptionChange.emit(this.selectedOption);
  }
  updatecurrentValueChange(option: number) {
    console.log(option);

    this.currentValue = option;
    this.currentValueChange.emit(this.currentValue);
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log(this.processedOption);

  }
}
