import { Component, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';
import { Music } from '../music-data/music-data.component';
import { MusicEditService } from '../music-edit.service';

@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrls: ['./search-music.component.css']
})
export class SearchMusicComponent implements OnInit {

  public searchQuery: any;
  result: Music[] = [];

  constructor(private musicDataService: MusicDataService, private musicEditService: MusicEditService) { }

  ngOnInit(): void {
    
    this.searchQuery = this.musicEditService.getMusicToSearch();

    this.musicDataService.searchMusic(this.searchQuery).subscribe({
      next: (data)=>{
        this.result = data;
      },
      error: (err)=>{
        alert("Error")
      },
      complete: ()=>{
        console.log("Complete search");
      }
    });
  }

}
