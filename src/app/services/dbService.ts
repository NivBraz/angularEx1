import { EventEmitter,Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Movie } from '../models/movie';
import { Actor } from '../models/actor';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class dbService {
  itemAdded = new EventEmitter<Movie[]>();
  // actorAdded = new EventEmitter<Actor[]>();

  private base_url: String = 'https://express1vod.herokuapp.com';
  private movies: Movie[];
  private actors: Actor[];

  constructor(private http: Http) { }

   private getDataFromDB() {
      return this.http.get(this.base_url + '/getAllMoviesData');
    }

   private getMovieFromDB(date:string) {
      return this.http.post(this.base_url + '/getDataByDate',{date});
    }


   private getActorFromDB(genres:string,type :string) {
      return this.http.get(this.base_url + '/getActorData/' + genres + '/' + type);
    }

  getAllMoviesData(){
      this.getDataFromDB()
            .subscribe(
        (response:Response)=>{
          this.movies = response.json();
          this.itemAdded.next(this.movies);
          console.log(this.movies);
        });
      return this.movies;
  }

  getActor(genres:string,type :string){
      this.getActorFromDB(genres,type)
            .subscribe(
        (response:Response)=>{
          this.movies = response.json();
          this.itemAdded.next(this.movies);
          console.log(this.movies);
        });
      return this.movies;
  }

  getMovie(date:string){
      this.getMovieFromDB(date)
            .subscribe(
        (response:Response)=>{
          this.movies = response.json();
          this.itemAdded.next(this.movies);
          console.log(this.movies);
        });
      return this.movies;
  }
  // getAllMoviesData(): Promise<Movie[]> { 
  //   return this.http.get(this.base_url + '/getAllMoviesData').toPromise().then((res) => res.json() as Movie[]);
  // }

  // getAllMoviesData(id:string, options?: RequestOptionsArgs): Promise<Track[]> { 
  //   return this.http.post(this.base_url + '/getAllMoviesData',{id}, this.addJwt(options)).toPromise().then((res) => res.json() as Track[]);
  // }
}
