import { Component, OnInit } from '@angular/core';
import {  
  faStickyNote, 
  faBell, 
  faArchive, 
  faTrashAlt,
  faPlay,
  faLightbulb
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent implements OnInit {
  
  faStickyNote = faStickyNote 
  faBell = faBell
  faArchive = faArchive
  faTrashAlt = faTrashAlt
  faPlay = faPlay
  faLightbulb = faLightbulb
  
  noteList = ["apps", "strings", "birthday parties", "meeting"];

  constructor() { }

  ngOnInit(): void {
  }

}
