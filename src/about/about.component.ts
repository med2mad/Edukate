import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private router: Router, private service: Service) {
    this.cours = service.cours;
    this.categories = service.categories;
  }
  cours: { id:number, title: string; category: string; }[]
  categories: string[];

  selectedCategory: string = "";
  chooseCategory(category: string) {
    this.selectedCategory = category;
  }
  oninput(e: Event) {
    this.service.searchText = (e.target as HTMLInputElement).value;
  }
  
  goToCourses(category: string = "") {
    if (category != "") { this.selectedCategory = category }
    this.router.navigate(['courses'], { queryParams: { selectedCategory: this.selectedCategory, searchText: this.service.searchText } })
  }


}
