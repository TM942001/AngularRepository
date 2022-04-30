import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  
movies: Movie[] =[new Movie('Zootopia','Byron Howard, Rich Moore','Idris Elba, Ginnifer Goodwin, Jason Bateman','March 4, 2016'),
                  new Movie ('Batman v Superman: Dawn of Justice','Zack Snyder','Ben Affleck, Henry Cavill, Amy Adams','March 25, 2016'),
                  new Movie ('Captain American: Civil War','Anthony Russo, Joe Russo','Scarlett Johansson, Elizabeth Olsen, Chris Evans','May 6, 2016')]


}


  export class Movie{
    title : string;
    director : string;
    cast : string;
    releaseDate : string;

    constructor(title:string,director:string,cast:string,releaseDate:string)
    {
      this.title=title;
      this.director=director;
      this.cast=cast;
      this.releaseDate=releaseDate;
    }
    

  
}
