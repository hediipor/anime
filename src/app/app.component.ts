import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NaviComponent } from './navi/navi.component';
import { AnimesComponent } from './animes/animes.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Anime } from './Models/anime';
import { AnimeService } from './services/anime.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NaviComponent,AnimesComponent , CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent implements OnInit{
  title = 'anime';
  animeList : any = [];
  anime! : Anime ;
  searchedAnime! : any;
  searched : any;
  dataLoaded = false;

  constructor(private animeService : AnimeService ){}

  ngOnInit(): void {
    
    
  }

}
