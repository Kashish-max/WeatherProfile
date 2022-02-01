import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component'
import { SearchService } from "../../services/search/search.service";

@Component({
  selector: 'startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }
}
