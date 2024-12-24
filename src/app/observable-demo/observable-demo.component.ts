import { Component } from '@angular/core';
import { map, Observable, of , merge} from 'rxjs';
import { filter, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent {
 myObservable = of(1, 2, 3);

 ngOnInit() {

  // const myObservable = of(1, 2, 3, 4 ,5 ,7);
  // console .log(myObservable);

  // const number1 = of(1, 2, 3, 4, 5, 6, 7);
  // const number2 = of(2, 3, 4, 5, 6, 7, 8);
  // const merged = merge(number1, number2);
  // merged.subscribe(x => console.log(x));

  // const  number = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  // const evennumbers = number.pipe(filter(n => n % 2 === 0));
  // evennumbers.subscribe(x => console.log(x));


  // const number = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  // number.subscribe(
  //   value => console.log(value),
  //   error => console.log(error),
  //   () => console.log('Completed')
  // )


  const source = of(1, 2, 3, 4, 5);
  const reduced = source.pipe(reduce((acc, value) => acc + value));
  reduced.subscribe(
    value => console.log(value)
  );
}
}
