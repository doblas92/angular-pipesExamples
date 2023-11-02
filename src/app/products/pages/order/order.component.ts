import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public sortBy: keyof Hero | null = null;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    }
  ]
  public toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }

  public setSortBy(value : keyof Hero)
  {
    this.sortBy = value;
  }

}
