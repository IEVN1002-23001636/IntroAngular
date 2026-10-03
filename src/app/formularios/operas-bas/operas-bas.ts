import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.html',
})
export class OperasBas {

  num1: string = '';
  num2: string = '';
  resultados: number = 0;

  sumar(): void {
    this.resultados = parseInt(this.num1) + parseInt(this.num2);
  }

  resta(): void {
    this.resultados = parseInt(this.num1) + parseInt(this.num2);
  }

  multiplicar(): void {
    this.resultados = parseInt(this.num1) + parseInt(this.num2);
  }

  dividir(): void {
    this.resultados = parseInt(this.num1) + parseInt(this.num2);
  }

}