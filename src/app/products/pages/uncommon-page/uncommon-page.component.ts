import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Alejandro';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male : 'invitarlo',
    female : 'invitarla'
  }

  // i18n Plural
  public clients: string[] = ['Maria','Fernando', 'Alejandro', 'Alberto', 'Laura', 'Pedro'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  // KeyValue Pipe
  public person = {
    name: 'Alejandro',
    age: 30,
    address: 'Madrid, España'
  }

  // Async Pipe
  public myObservableTimer : Observable<number> = interval(1000)
  .pipe(
    tap( value => console.log('tap:', value ) )
  );

  public promiseValue : Promise<string> = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve( 'Tenemos data en la promesa.' );
      console.log('Tenemos data en la promesa.');
    }, 3500 )
  });

  public changeClient():void {
    if ( this.gender === 'male' )
    {
      this.name = 'Laura';
      this.gender = 'female';
    } else {
      this.name = 'Alejandro';
      this.gender = 'male';
    }
  }

  public deleteClient(): void {
    this.clients.shift();
  }

}
