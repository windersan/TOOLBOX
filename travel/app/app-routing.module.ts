import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { CrearEmpleadoComponent } from "./empleado/crear-empleado.component";

const routes: Routes = [
  {
    path: "empleado",
    component: CrearEmpleadoComponent
  },
  {
    path: "",
    redirectTo: "/empleado",
    pathMatch: "full"
  },
  {
    path: "schedule",
    loadChildren: "./schedule/schedule.module#ScheduleModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
