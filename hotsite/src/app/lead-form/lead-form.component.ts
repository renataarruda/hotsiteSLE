import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.component.html',
  styleUrls: ['./lead-form.component.css']
})
export class LeadFormComponent {
  leadForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.leadForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,11}$/)]],
      mensagem: ['', [Validators.maxLength(500)]]
    });
  }

  onSubmit() {
    if (this.leadForm.valid) {
      console.log("Dados enviados: ", this.leadForm.value);
      alert("Lead cadastrado com sucesso!");
    } else {
      alert("Por favor, corrija os erros antes de enviar.");
    }
  }

  hasError(field: string, error: string) {
    return this.leadForm.get(field)?.hasError(error) && this.leadForm.get(field)?.touched;
  }
}
