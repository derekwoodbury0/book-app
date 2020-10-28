import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'ctac-personal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private readonly router: Router) { }

  homePage: boolean = true;

  ngOnInit() {}

  onActivate(){
    let currentRoute = this.router.url.toString()
    if (currentRoute === '/books') {
      this.homePage = true;
    } else {
      this.homePage = false;
    }
  }
}
