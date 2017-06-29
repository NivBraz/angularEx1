import { Component, OnInit } from '@angular/core';
import { dbService } from "../services/dbService";
import {NgForm} from '@angular/forms';
import { Movie } from "../models/movie";

@Component({
  selector: 'app-show-actor',
  templateUrl: './show-actor.component.html',
  styleUrls: ['./show-actor.component.css']
})
export class ShowActorComponent implements OnInit {
      movies: Movie[]=[];

  constructor(private dbservice: dbService) { }

  ngOnInit() {
   }

  searchActor(form:NgForm) {
    var genres = form.value.genres;
    var type = form.value.type;
    this.movies = this.dbservice.getActor(genres,type);
    this.dbservice.itemAdded
    .subscribe(
      (act:Movie[])=> {
        this.movies = act;
        console.log(this.movies);
      });
  }

}
