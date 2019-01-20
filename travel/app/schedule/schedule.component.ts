import {
  Component,
  OnInit,
  SimpleChanges,
  Inject,
  ChangeDetectionStrategy
} from "@angular/core";
import { Appt } from "./appt.model";
import { Day } from "./day.model";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray
} from "@angular/forms";

// export interface DialogData {
//   animal: string;
//   name: string;
// }

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent implements OnInit {
  // animal: string;
  name: string;
  nameFormGroup = this.fb.group({
    name: [""]
  });
  calendar: boolean = true;
  selectedAppt: any;
  selectedDate: any;
  selectedDayinit: Day = {
    date: new Date(2019, 0, 17),
    appts1: [
      { time: "9:00", name: "" },
      { time: "9:15", name: "" },
      { time: "9:30", name: "" },
      { time: "9:45", name: "" },
      { time: "10:00", name: "" },
      { time: "10:15", name: "" },
      { time: "10:30", name: "" },
      { time: "10:45", name: "" }
    ],
    appts2: [
      { time: "11:00", name: "" },
      { time: "11:15", name: "" },
      { time: "11:30", name: "" },
      { time: "11:45", name: "" },
      { time: "12:00", name: "" },
      { time: "12:15", name: "" },
      { time: "12:30", name: "" },
      { time: "12:45", name: "" }
    ],
    appts3: [
      { time: "2:00", name: "" },
      { time: "2:15", name: "" },
      { time: "2:30", name: "" },
      { time: "2:45", name: "" },
      { time: "3:00", name: "" },
      { time: "3:15", name: "" },
      { time: "3:30", name: "" },
      { time: "3:45", name: "" }
    ],
    appts4: [
      { time: "4:00", name: "" },
      { time: "4:15", name: "" },
      { time: "4:30", name: "" },
      { time: "4:45", name: "" },
      { time: "5:00", name: "" },
      { time: "5:15", name: "" },
      { time: "5:30", name: "" },
      { time: "5:45", name: "" }
    ]
  };

  selectedDay: Day = this.selectedDayinit;
  days: Day[] = [
    {
      date: new Date(2019, 0, 17),
      appts1: [
        { time: "9:00", name: "John Smith" },
        { time: "9:15", name: "Gabriel Marquez" },
        { time: "9:30", name: "Ela Salemi" },
        { time: "9:45", name: "" },
        { time: "10:00", name: "" },
        { time: "10:15", name: "" },
        { time: "10:30", name: "" },
        { time: "10:45", name: "Matthew Salemi" }
      ],
      appts2: [
        { time: "11:00", name: "Jane Smith" },
        { time: "11:15", name: "Diane Rutz" },
        { time: "11:30", name: "" },
        { time: "11:45", name: "" },
        { time: "12:00", name: "Andres Salemi" },
        { time: "12:15", name: "" },
        { time: "12:30", name: "Devin Salemi" },
        { time: "12:45", name: "" }
      ],
      appts3: [
        { time: "2:00", name: "Olga Kurylenko" },
        { time: "2:15", name: "" },
        { time: "2:30", name: "" },
        { time: "2:45", name: "" },
        { time: "3:00", name: "Yulia Makievska" },
        { time: "3:15", name: "" },
        { time: "3:30", name: "" },
        { time: "3:45", name: "" }
      ],
      appts4: [
        { time: "4:00", name: "" },
        { time: "4:15", name: "" },
        { time: "4:30", name: "" },
        { time: "4:45", name: "Alessandra Ambrosio" },
        { time: "5:00", name: "" },
        { time: "5:15", name: "" },
        { time: "5:30", name: "" },
        { time: "5:45", name: "" }
      ]
    },
    {
      date: new Date(2019, 0, 18),
      appts1: [
        { time: "9:00", name: "Adam Smith" },
        { time: "9:15", name: "" },
        { time: "9:30", name: "" },
        { time: "9:45", name: "" },
        { time: "10:00", name: "" },
        { time: "10:15", name: "" },
        { time: "10:30", name: "" },
        { time: "10:45", name: "" }
      ],
      appts2: [
        { time: "11:00", name: "" },
        { time: "11:15", name: "" },
        { time: "11:30", name: "" },
        { time: "11:45", name: "" },
        { time: "12:00", name: "Andres Salemi" },
        { time: "12:15", name: "" },
        { time: "12:30", name: "" },
        { time: "12:45", name: "" }
      ],
      appts3: [
        { time: "2:00", name: "" },
        { time: "2:15", name: "Alessandra Ambrosio" },
        { time: "2:30", name: "" },
        { time: "2:45", name: "" },
        { time: "3:00", name: "" },
        { time: "3:15", name: "" },
        { time: "3:30", name: "" },
        { time: "3:45", name: "" }
      ],
      appts4: [
        { time: "4:00", name: "" },
        { time: "4:15", name: "" },
        { time: "4:30", name: "Devin Salemi" },
        { time: "4:45", name: "" },
        { time: "5:00", name: "Yulia Makievska" },
        { time: "5:15", name: "" },
        { time: "5:30", name: "" },
        { time: "5:45", name: "" }
      ]
    }
  ];

  appts1: Appt[] = [
    { time: "9:00", name: "John Smith" },
    { time: "9:15", name: "Gabriel Marquez" },
    { time: "9:30", name: "Ela Salemi" },
    { time: "9:45", name: "" },
    { time: "10:00", name: "" },
    { time: "10:15", name: "" },
    { time: "10:30", name: "" },
    { time: "10:45", name: "Matthew Salemi" }
  ];

  appts2: Appt[] = [
    { time: "11:00", name: "Jane Smith" },
    { time: "11:15", name: "Diane Rutz" },
    { time: "11:30", name: "" },
    { time: "11:45", name: "" },
    { time: "12:00", name: "Andres Salemi" },
    { time: "12:15", name: "" },
    { time: "12:30", name: "Devin Salemi" },
    { time: "12:45", name: "" }
  ];

  appts3: Appt[] = [
    { time: "2:00", name: "Olga Kolmakova" },
    { time: "2:15", name: "" },
    { time: "2:30", name: "" },
    { time: "2:45", name: "" },
    { time: "3:00", name: "" },
    { time: "3:15", name: "" },
    { time: "3:30", name: "Alessandra Ambrosio" },
    { time: "3:45", name: "" }
  ];

  appts4: Appt[] = [
    { time: "4:00", name: "" },
    { time: "4:15", name: "" },
    { time: "4:30", name: "" },
    { time: "4:45", name: "" },
    { time: "5:00", name: "" },
    { time: "5:15", name: "" },
    { time: "5:30", name: "" },
    { time: "5:45", name: "Yulia Makievska" }
  ];

  constructor(public dialog: MatDialog, private fb: FormBuilder) {}

  ngOnInit() {
    // console.log("INIT");

    for (let i = 1; i < 500; i++) {
      let newday: Day = {
        date: new Date(2019, 0, 18),
        appts1: [
          { time: "9:00", name: "" },
          { time: "9:15", name: "" },
          { time: "9:30", name: "" },
          { time: "9:45", name: "" },
          { time: "10:00", name: "" },
          { time: "10:15", name: "" },
          { time: "10:30", name: "" },
          { time: "10:45", name: "" }
        ],
        appts2: [
          { time: "11:00", name: "" },
          { time: "11:15", name: "" },
          { time: "11:30", name: "" },
          { time: "11:45", name: "" },
          { time: "12:00", name: "" },
          { time: "12:15", name: "" },
          { time: "12:30", name: "" },
          { time: "12:45", name: "" }
        ],
        appts3: [
          { time: "2:00", name: "" },
          { time: "2:15", name: "" },
          { time: "2:30", name: "" },
          { time: "2:45", name: "" },
          { time: "3:00", name: "" },
          { time: "3:15", name: "" },
          { time: "3:30", name: "" },
          { time: "3:45", name: "" }
        ],
        appts4: [
          { time: "4:00", name: "" },
          { time: "4:15", name: "" },
          { time: "4:30", name: "" },
          { time: "4:45", name: "" },
          { time: "5:00", name: "" },
          { time: "5:15", name: "" },
          { time: "5:30", name: "" },
          { time: "5:45", name: "" }
        ]
      };
      console.log("selectedddayinit");
      console.log(this.selectedDayinit);
      // let newday: Day; //= this.selectedDayinit;
      console.log("newday");
      console.log(newday);
      newday.date.setDate(newday.date.getDate() + i);
      this.days.push(newday);
      console.log("ADDED:");
      console.log(newday);
      console.log(this.days.length);
    }
  }

  ngDoCheck() {
    // let f: boolean = false;
    for (let day of this.days) {
      /// console.log(this.days);
      ///console.log("this.selectedDate" + this.selectedDate);
      /// console.log("day.date" + day.date);
      /// console.log("onChange(i) " + this.selectedDay);
      if (+this.selectedDate == +day.date) {
        this.selectedDay = day;
        /// console.log("onChange(f) " + this.selectedDay);
        // f = true;
      }
    }
    // if (f == false) {
    //   console.log("not found");
    //   this.selectedDay = this.selectedDayinit;
    //   let newday: Day = this.selectedDayinit;
    //   newday.date = this.selectedDate;
    //   this.days.push(newday);
    // }
    /// console.log("days " + this.days.length);
  }

  edit(appt: Appt): void {
    this.selectedAppt = appt;
    this.name = this.selectedAppt.name;
    console.log(this.name);
    this.calendar = !this.calendar;
    this.nameFormGroup.controls["name"].setValue(this.name);
    console.log("TIME : " + this.selectedAppt.time);
  }

  onSubmit(): void {
    console.log("onsubmit()");

    for (let day of this.days) {
      if (+this.selectedDate == +day.date) {
        console.log("hike!");
        for (let appt of day.appts1) {
          console.log("appt");
          if (appt.time == this.selectedAppt.time) {
            appt.name = this.nameFormGroup.value.name;
            console.log("hike!!");
          }
        }
        for (let appt of day.appts2) {
          console.log("appt");
          if (appt.time == this.selectedAppt.time) {
            appt.name = this.nameFormGroup.value.name;
            console.log("hike!!");
          }
        }
        for (let appt of day.appts3) {
          console.log("appt");
          if (appt.time == this.selectedAppt.time) {
            appt.name = this.nameFormGroup.value.name;
            console.log("hike!!");
          }
        }
        for (let appt of day.appts4) {
          console.log("appt");
          if (appt.time == this.selectedAppt.time) {
            appt.name = this.nameFormGroup.value.name;
            console.log("hike!!");
          }
        }
      }
    }
    console.log("print " + this.days.toString);
    this.calendar = !this.calendar;
  }

  delete(): void {
    this.calendar = !this.calendar;
  }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(Dialog, {
  //     width: "250px",
  //     data: { name: this.name, animal: this.animal }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log("The dialog was closed");
  //     this.animal = result;
  //   });
  // }
}

// @Component({
//   selector: "dialog",
//   templateUrl: "dialog.html"
// })
// export class Dialog {
//   constructor(
//     public dialogRef: MatDialogRef<Dialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData
//   ) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
//}
