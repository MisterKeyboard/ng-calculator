import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  public res!: number;
  public a!: number;
  public b!: number;

  add() {
    this.res = this.a + this.b;
  }
}
