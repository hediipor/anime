import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../services/anime.service';
import { EventsService } from '../services/events.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Anime } from '../Models/anime';
import { HttpClientModule } from '@angular/common/http';
import { NaviComponent } from '../navi/navi.component';

@Component({
    selector: 'animes',
    standalone: true,
    templateUrl: './animes.component.html',
    styleUrl: './animes.component.css',
    imports: [CommonModule, FormsModule, RouterModule ,NaviComponent, RouterOutlet , HttpClientModule ]
})
export class AnimesComponent implements OnInit {
  animeList : any = [];
  anime! : Anime ;
  dataLoaded = false;
  searched : any;
  searchedAnime! : any;
  
  constructor(private animeService : AnimeService ,  event : EventsService  ){
    event.listen('searched' , (s : any)=>{
        if (!s){
      this.getAnimes();
    }
    else{
      this.animeList=this.animeList.filter((anime: { title: string; }) => 
      anime.title.toLowerCase().includes(s.toLowerCase()))
    }
    })
  }
  ngOnInit(): void {
    this.getAnimes(); 
  }

  getAnimes() {
    this.animeService.getAnimes().subscribe((response) => {
        (this.animeList = response.data)
      });
    this.dataLoaded = true;

  }
}
