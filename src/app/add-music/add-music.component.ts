import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent implements OnInit {


  registrationForm!: FormGroup;
  registrationResponse: any = {success: false};

  constructor(private formBuilder:FormBuilder, private musicDataService: MusicDataService) {
    this.formClear();
   }

   formClear(){
    this.registrationForm = this.formBuilder.group({
      music_name: "",
      music_type: "",
      music_rating: "",
      description: "",
      artist_name: "",
      age: ""
    });
   }

  ngOnInit(): void {
  }

  registration(registrationForm: FormGroup){
    this.musicDataService.addMusic(registrationForm).subscribe({
      next: (response)=>{
        this.registrationResponse = response;
        this.registrationResponse.success = true;
        alert("Successfulley added.");
        this.formClear();
      },
      error: (err)=>{
        console.log(err);
        alert("Music Validation Failed!!");
      },
      complete: ()=>{
        console.log("Done");
      }
    });
  }

  
}
