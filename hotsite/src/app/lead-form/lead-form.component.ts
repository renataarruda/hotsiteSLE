import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormularioService, Lead } from '../../service/formulario.service';

@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.component.html',
  styleUrls: ['./lead-form.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LeadFormComponent {
  leadForm: FormGroup;

  constructor(private fb: FormBuilder,  private leadService: FormularioService) {
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

    if (this.leadForm.valid) {
      const lead: Lead = this.leadForm.value;

      this.leadService.enviarLead(lead).subscribe({
        next: () => alert('Lead enviado com sucesso!'),
        error: () => alert('Erro ao enviar o lead. Verifique o servidor.')
      });
    } else {
      alert('Por favor, corrija os erros antes de enviar.');
    }
  }

  hasError(field: string, error: string) {
    return this.leadForm.get(field)?.hasError(error) && this.leadForm.get(field)?.touched;
  }
}
