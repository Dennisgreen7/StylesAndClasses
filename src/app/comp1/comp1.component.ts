import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  color: string = "red";
  isSpecial: boolean = true;
  canSave: boolean = true;
  myClasses: any;
  calculatedStyle = {};
  calculatedClasses = {};
  constructor() {
    this.setCalculatedStyles();
    this.setClasses();
  }
  setCalculatedStyles() {
    this.calculatedStyle = {
      'font-style': this.isSpecial ? 'italic' : 'normal',
      'color': this.canSave ? 'pink' : 'blue',
    }
  }
  setClasses() {
    this.calculatedClasses={
      'specialPerson': this.isSpecial,
      'notspecialPerson': this.canSave,
    }
  }
  ngOnInit(): void {
  }

}
