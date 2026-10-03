import { Component } from '@angular/core';
 
@Component({
  selector: 'app-figuras',
  standalone: false,
  templateUrl: './figuras.html',
})
export class Figuras {
  num1: string = '';
  num2: string = '';
  resultado: number =0;
  figura: string = 'triangulo';
 
  calcular(): void {
    let n1 = parseFloat(this.num1);
    let n2 = parseFloat(this.num2);
 
    if (this.figura === 'triangulo') {
      this.resultado = (n1 * n2) / 2;
    }
   
    if (this.figura === 'rectangulo') {
      this.resultado = n1 * n2;
    }
   
    if (this.figura === 'circulo') {
      this.resultado = 3.1416 * (n1 * n1);
    }
   
    if (this.figura === 'pentagono') {
      let perimetro = n1 * 5;
      this.resultado = (perimetro * n2) / 2;
    }
  }
}