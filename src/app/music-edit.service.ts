import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Music } from './music-data/music-data.component';

@Injectable({
  providedIn: 'root'
})
export class MusicEditService {

  public musicToEdit!: Music;
  private searchMusicString: any; 

  constructor(private http: HttpClient) {  }

   public updateMusic(musicId: string, body: any): Observable<Music>{
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.patch<Music>(environment.BASE_URL + "/music/" + musicId, body, config);
  }
  
   public addArtist(musicId: string, body: any): Observable<any>{
     return this.http.post<any>(environment.BASE_URL + "/music/" + musicId + "/artist", body);
   }
   public deleteArtist(musicId: string, artistId: string): Observable<any>{
     return this.http.delete<any>(environment.BASE_URL + "/music/" + musicId + "/artist/" + artistId);
   }

   public musicToEditSetter(music: Music){
     this.musicToEdit = music;
   }
   public getMusicToEdit(): Music{
     return this.musicToEdit;
   }
   public setSearchMusicString(searchString: any){
    this.searchMusicString = searchString;
   }
   public getMusicToSearch(): any{
     return this.searchMusicString;
   }
}

