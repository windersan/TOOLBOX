import { Component, HostBinding } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { RouterOutlet } from "@angular/router";
import { slideInAnimation } from "./animations";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ViewChild } from "@angular/core";
import { ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [slideInAnimation]
})
export class AppComponent {
  @ViewChild("picker") picker: ElementRef;

  ngAfterViewInit() {
    this.picker.nativeElement.open();
  }

  title = "ArcTrade";
  favoriteSeason: string;
  seasons: string[] = ["Winter", "Spring", "Summer", "Autumn"];

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}
