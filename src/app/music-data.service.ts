import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Music } from './music-data/music-data.component';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusicDataService {

  constructor(private http: HttpClient) { }

  public getMusic(): Observable<Music[]> {
    return this.http.get<Music[]>(environment.BASE_URL + '/music');
  }
  public getArtistList(musicId: string): Observable<any>{
    return this.http.get<any>(environment.BASE_URL + "/music/" + musicId + "/artist");
  }

  public getOneMusic(musicId: string): Observable<Music>{
    return this.http.get<Music>(environment.BASE_URL + '/music/' + musicId);
  }

  public addMusic(body: FormGroup): Observable<Music>{
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post<any>(environment.BASE_URL + "/music", body.value, config);
  }

  public deleteMusic(musicId: string): Observable<Music>{
    return this.http.delete<any>(environment.BASE_URL +"/music/" + musicId);
  }


}
