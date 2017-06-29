import { Component, OnInit } from '@angular/core';
import { dbService } from "../services/dbService";
import {NgForm} from '@angular/forms';
import { Movie } from "../models/movie";

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {
 movies: Movie[]=[];

  constructor(private dbservice: dbService) { }

  ngOnInit() {
   }

  searchMovie(form:NgForm) {
    var date = form.value.date;
    this.movies = this.dbservice.getMovie(date);
    this.dbservice.itemAdded
    .subscribe(
      (act:Movie[])=> {
        this.movies = act;
        console.log(this.movies);
      });
  }


}
