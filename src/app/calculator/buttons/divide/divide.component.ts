import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.scss'],
})
export class DivideComponent {
  public res!: number;
  public a!: number;
  public b!: number;

  divide() {
    this.res = this.a / this.b;
  }
}
