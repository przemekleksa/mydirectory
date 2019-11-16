import { Component, OnInit , Input, Output} from '@angular/core';
import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the homepage..."
  myString = "I love pizza";
  myBoolean = true;
  @Input() being;
  @Output() onYell = new EventEmitter();

  alertMe(val) {
    alert(val);
  }

  character = {
    name: "Przemek",
    belt: 'Black'
  };

  fireYellEvent(e) {
    this.onYell.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
