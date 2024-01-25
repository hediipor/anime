import { Routes } from '@angular/router';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { AnimesComponent } from './animes/animes.component';

export const routes: Routes = [
    {path:'',redirectTo:'/anime',pathMatch:"full"},
    { path: 'anime', component: AnimesComponent }, 
    { path: 'anime/:id', component: AnimeDetailComponent },
];
