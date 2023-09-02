import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-footer',
  templateUrl: './candidate-footer.component.html',
  styleUrls: ['./candidate-footer.component.css']
})
export class CandidateFooterComponent implements OnInit {
  date = new Date().getFullYear();
  constructor() {}

  ngOnInit(): void {}
}
