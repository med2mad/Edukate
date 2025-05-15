import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { CourseComponent } from '../course/course.component';
import { DetailComponent } from '../detail/detail.component';
import { PolicyComponent } from '../policy/policy.component';
import { CoursesComponent } from '../courses/courses.component';
import { ThanksComponent } from '../thanks/thanks.component';
import { InscriptionComponent } from '../inscription/inscription.component';

export const routes: Routes = [
    {path:"" , component:HomeComponent},
    {path:"about" , component:AboutComponent},
    {path:"course" , component:CourseComponent},
    {path:"detail" , component:DetailComponent},
    {path:"policy" , component:PolicyComponent},
    {path:"courses" , component:CoursesComponent},
    {path:"thanks" , component:ThanksComponent},
    {path:"inscription", component:InscriptionComponent}
];
