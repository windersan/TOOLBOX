import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray
} from "@angular/forms";

@Component({
  selector: "app-crear-empleado",
  templateUrl: "./crear-empleado.component.html",
  styleUrls: ["./crear-empleado.component.css"]
})
export class CrearEmpleadoComponent implements OnInit, OnChanges {
  a1: string = "Create employee";
  a2: string = "Name";
  a3: string = "E-mail";
  a4: string = "Skill name";
  a5: string = "Skill level";
  b1: string = "Add skill";
  N1: string = "Beginner";
  N2: string = "Intermediate";
  N3: string = "Advanced";
  err1: string = "Name required";

  @Input() lang: string = "English";

  empleadoFormGroup = this.fb.group({
    apellido: ["", Validators.required],
    email: [""],
    habilidades: this.fb.array([this.newSkillFormGroup()]),
    floatLabel: "auto"
  });

  get habilidades() {
    return this.empleadoFormGroup.get("habilidades") as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  addSkill(): void {
    this.habilidades.push(this.newSkillFormGroup());
    console.log(this.empleadoFormGroup);
    console.log(this.lang);
  }

  newSkillFormGroup(): FormGroup {
    return this.fb.group({
      habilidad: [""],
      nivel: [""]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.lang == "English") {
      this.a1 = "Create Employee";
      this.a2 = "Name";
      this.a3 = "E-mail";
      this.a4 = "Skill name";
      this.a5 = "Skill level";
      this.b1 = "Add skill";
      this.N1 = "Beginner";
      this.N2 = "Intermediate";
      this.N3 = "Advanced";
      this.err1 = "Name required";
    } else if (this.lang == "Español") {
      this.a1 = "Crear Empleado";
      this.a2 = "Apellido";
      this.a3 = "Correo electrónico ";
      this.a4 = "Habilidad";
      this.a5 = "Nivel";
      this.b1 = "Más una habilidad";
      this.N1 = "Principiante";
      this.N2 = "Medio";
      this.N3 = "Avanzado";
      this.err1 = "Name required";
    } else if (this.lang == "Русский") {
      this.a1 = "Создать Сотрудника";
      this.a2 = "фамилия";
      this.a3 = "Электронная почта";
      this.a4 = "Навык";
      this.a5 = "Уровень";
      this.b1 = "Еще навык";
      this.N1 = "Начинающий";
      this.N2 = "Средний";
      this.N3 = "Экспертный";
      this.err1 = "Надо написать вашу фамилию";
    }
  }
}
