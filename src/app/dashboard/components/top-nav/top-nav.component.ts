import { Component, OnInit } from '@angular/core';
import { faBars, faSearch, faHome, faScrewdriver, faArchive } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})

export class TopNavComponent implements OnInit {
  faBars = faBars;
  faSearch = faSearch
  faHome = faHome
  faScrewdriver = faScrewdriver
  faArchive = faArchive

  constructor() { }

  ngOnInit(): void {
    
  }

}
