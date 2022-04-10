import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MusicEditService } from '../music-edit.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private musicEditService: MusicEditService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  selectedSearchBy: string = '';

  
  selectChangeHandler (event: any) {
    
    this.selectedSearchBy = event.target.value;
  }

  search(value: any){
    let musicEditString = {
      searchBy: this.selectedSearchBy || "music_name",
      searchString: value || ""
    }
    this.musicEditService.setSearchMusicString(musicEditString);
    
    this.router.navigate(['search']);
  }

}
