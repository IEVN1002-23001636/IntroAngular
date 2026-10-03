import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.html',
})

export class Distancia {

  num1: string = '';
  num2: string = '';
  num3: string = '';
  num4: string = '';
  resultado: number = 0;

  calcular(): void {

    let x1 = parseFloat(this.num1);
    let y1 = parseFloat(this.num2);
    let x2 = parseFloat(this.num3);
    let y2 = parseFloat(this.num4);

    this.resultado = Math.sqrt(
      (x2 - x1) ** 2 + (y2 - y1) ** 2
    );
  }
}