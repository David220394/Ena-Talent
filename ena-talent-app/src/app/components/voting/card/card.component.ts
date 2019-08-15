import { Component, OnInit, Input } from '@angular/core';
import { Candidate } from 'src/app/dto/candidate';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() candidate: Candidate;
  constructor() { }

  ngOnInit() {
  }

}
