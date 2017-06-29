import { Component, OnInit } from '@angular/core';
import { dbService } from "../services/dbService";
import {NgForm} from '@angular/forms';
import { Movie } from "../models/movie";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    movies: Movie[]=[];

  constructor(private dbservice: dbService) { }

  ngOnInit() {
    this.movies = this.dbservice.getAllMoviesData();
    this.dbservice.itemAdded
    .subscribe(
      (mve:Movie[])=> {
        this.movies = mve;
        console.log(this.movies);
      });

      // this.dbservice.getAllMoviesData().then((mve) => {
      // this.movie = mve; 
    };
  }

