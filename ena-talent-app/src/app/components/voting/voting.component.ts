import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/dto/candidate';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.sass']
})
export class VotingComponent implements OnInit {

  candidates: Candidate[];
  constructor() { }

  ngOnInit() {
  }

}
