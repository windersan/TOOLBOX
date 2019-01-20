import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Forex } from "./forex.model";
import { Rate } from "./rate.model";

@Component({
  selector: "app-fx",
  templateUrl: "./fx.component.html",
  styleUrls: ["./fx.component.css"]
})
export class FxComponent implements OnInit {
  forex: Forex;
  displayedColumns: string[] = ["currency", "rate"];
  rate: Rate = { currency: "", rate: 1 };
  dataSource: [Rate, Rate, Rate, Rate, Rate] = [
    { currency: "USD", rate: 1 },
    { currency: "UAH", rate: 1 },
    { currency: "RUB", rate: 1 },
    { currency: "PLN", rate: 1 },
    { currency: "GBP", rate: 1 }
  ];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getJSON().subscribe(
      x => {
        this.forex = x;
        console.log(this.forex);

        this.dataSource[0].rate = this.forex.rates.USD;
        this.dataSource[1].rate = this.forex.rates.UAH;
        this.dataSource[2].rate = this.forex.rates.RUB;
        this.dataSource[3].rate = this.forex.rates.PLN;
        this.dataSource[4].rate = this.forex.rates.GBP;
      },
      err => {
        console.error(err);
      }
    );
    console.log("this is actually called first!" + this.forex);
  }

  getJSON(): Observable<Forex> {
    console.log("call getjson");
    return this.httpClient.get<Forex>(
      "http://data.fixer.io/api/latest?access_key=8d546a2b6c4a53d5d2f8a9472b0cf047&symbols=USD,AUD,CAD,PLN,MXN,UAH,RUB,GBP&format=1"
    );
  }
}
