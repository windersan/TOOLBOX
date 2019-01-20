import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { coerceNumberProperty } from "@angular/cdk/coercion";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  selectedDate: any;

  constructor() {}

  ngOnInit() {}

  color = false;
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  get tickInterval(): number | "auto" {
    return this.showTicks ? (this.autoTicks ? "auto" : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;

  toggleColor() {
    this.color = !this.color;
  }

  prntdt() {
    console.log(this.selectedDate);
  }
}
