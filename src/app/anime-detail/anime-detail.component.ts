import { Component, OnInit } from '@angular/core';
import { ResponseModel } from '../Models/responseModel';
import { AnimeService } from '../services/anime.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NaviComponent } from '../navi/navi.component';

@Component({
  selector: 'anime-detail',
 standalone: true,
  imports: [CommonModule , FormsModule , NaviComponent], 
  templateUrl: './anime-detail.component.html',
  styleUrl: './anime-detail.component.css'
})
export class AnimeDetailComponent implements OnInit{
  anime!:ResponseModel;

  constructor(private animeService:AnimeService,private route:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    this.getAnime();
  }

  getAnime():void{
    const id = +this.route.snapshot.params['id'];
    this.animeService.getAnime(id).subscribe((anime) => (this.anime = anime));
  }

  goBack():void{
    console.log(this.location);
    this.location.back();
  }
}
