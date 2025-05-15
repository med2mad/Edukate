import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  cour?: { id: number, title: string, category: string, description: string, image:string, Instructor:string, prix:number, sessions:number, langue:string, niveau:string, duree:number };

  constructor(ar: ActivatedRoute, private router: Router, private service: Service) {
    if (ar.snapshot.queryParams['id']) {
      for (let index = 0; index < service.cours.length; index++) {
        if(service.cours[index].id == ar.snapshot.queryParams['id']){
          this.cour = service.cours[index];
        }
      }
    }

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
