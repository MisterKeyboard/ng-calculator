import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplier',
  templateUrl: './multiplier.component.html',
  styleUrls: ['./multiplier.component.scss'],
})
export class MultiplierComponent {
  public res!: number;
  public a!: number;
  public b!: number;

  multiplier() {
    this.res = this.a * this.b;
  }
}
