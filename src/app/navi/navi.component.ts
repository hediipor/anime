import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'navi',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css'
})
export class NaviComponent implements OnInit{
  searchedAnime : string = '';

  constructor(private event : EventsService ){}
  ngOnInit(): void {}
  search(searchedAnime : any){
    this.event.emit('searched',searchedAnime);
    this.searchedAnime = '';
  }
}
