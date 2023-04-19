import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
  public formGroup: FormGroup

  constructor(
    private fb: FormBuilder
  ) {
    this.buildForm();
  }

  public send() {
    console.log(this.formGroup);
    if(this.formGroup.invalid) {
      return;
    }

    console.log(this.formGroup.value);
  }

  private buildForm() {
    this.formGroup = this.fb.group({
      "name": ['', Validators.required],
      "email": ['', Validators.email],
      "phoneNumber": [''],
      "subject": ['']
    })
  }
}
