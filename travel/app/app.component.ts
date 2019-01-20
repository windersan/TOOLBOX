import { Component } from "@angular/core";
import { filter, map } from "rxjs/operators";
import { of, pipe } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "travel";
  count: number = 0;
  blue: boolean = true;
  lang: string = "English";

  changeColor() {
    this.blue = !this.blue;
  }
  set() {
    this.count++;
  }

  ngOnInit() {
    const nums = of(1, 2, 3, 4, 5);

    // Create a function that accepts an Observable.
    const squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );

    // Create an Observable that will run the filter and map functions
    const squareOdd = squareOddVals(nums);

    // Suscribe to run the combined functions
    squareOdd.subscribe(x => console.log(x));
  }
}
