import { Component } from '@angular/core';
 
@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {
  imageWidth:number=40;
  imageMargin:number=2;
  muestraImage:boolean=true;
  listFilter:string='';
 

 showImage(): void {
    this.muestraImage = !this.muestraImage;
}

  heroes: any[] = [
    {
      imagen: "https://dragonball-api.com/characters/goku_normal.webp",
      nombre: "Goku",
      descripcion: "Kame Hame",
      raza: "Saiyayin",
      ki: "1000"
    },
    {
      imagen: "https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre: "Vegeta",
      descripcion: "Insecto",
      raza: "Saiyayin",
      ki: "2000"
    },
    {
      imagen: "https://dragonball-api.com/characters/picolo_normal.webp",
      nombre: "Piccolo",
      descripcion: "Kame Hame",
      raza: "Namekain",
      ki: "800"
    },
    {
      imagen: "https://dragonball-api.com/characters/BuuGordo_Universo7.webp",
      nombre: "Majin Buu",
      descripcion: "si",
      raza: "Majin",
      ki: "1000"
    }
  ];
 
}
 