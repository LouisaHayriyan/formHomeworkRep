import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  showSubmissionMessage = false;
  @Input()
  name;
  @Input()
  mail;
  @Input()
  age;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.showSubmissionMessage = true;
  }

}
