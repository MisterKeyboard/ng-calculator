import { Component } from '@angular/core';

@Component({
  selector: 'app-substract',
  templateUrl: './substract.component.html',
  styleUrls: ['./substract.component.scss'],
})
export class SubstractComponent {
  public res!: number;
  public a!: number;
  public b!: number;

  substract() {
    this.res = this.a - this.b;
  }
}
