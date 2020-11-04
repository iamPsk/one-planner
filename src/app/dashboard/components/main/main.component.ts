import { Component, OnInit } from '@angular/core';
import { 
  faCheckSquare, 
  faPencilAlt, 
  faImage 
} from "@fortawesome/free-solid-svg-icons";





@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  faCheckSquare = faCheckSquare
  faPencilAlt = faPencilAlt
  faImage = faImage
  
  constructor() { }

  ngOnInit(): void {
  }

}
