import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { CourseComponent } from '../course/course.component';
import { DetailComponent } from '../detail/detail.component';
import { FeatureComponent } from '../feature/feature.component';
import { TeamComponent } from '../team/team.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';

export const routes: Routes = [
    {path:"" , component:HomeComponent},
    {path:"home" , component:HomeComponent},
    {path:"about" , component:AboutComponent},
    {path:"contact" , component:ContactComponent},
    {path:"course" , component:CourseComponent},
    {path:"detail" , component:DetailComponent},
    {path:"feature" , component:FeatureComponent},
    {path:"team" , component:TeamComponent},
    {path:"testimonial" , component:TestimonialComponent}
];
