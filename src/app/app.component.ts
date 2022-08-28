import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'netflix';

  top5 = {
    section: 'LOS 5 MÁS POPULARES HOY',
    films: [
    {
    title: 'Aqui no hay quien viva',
    image: '../assets/images/Top10/6-aquinohay.webp'
    },
    {
      title: 'La casa de papel',
      image: '../assets/images/Top10/1-papel.webp'
    },
    {
    title: 'Blacklist',
    image: '../assets/images/Top10/7-blacklist.webp'
    },
    {
    title: 'Ricos y Mimados',
    image: '../assets/images/Top10/8-ricos.webp'
    },
    {
      title: 'Titanes',
      image: '../assets/images/Top10/3-titanes.webp'
    }
    ]
    };

comedyFilms = {
section: 'COMEDIAS',
films: [
{
title: 'Ted 2',
image: '../assets/images/Comedia/images/Comedia/ted2.webp'
},
{
title: 'Los Padres de Ella',
image: '../assets/images/Comedia/images/Comedia/padresella.webp'
},
{
title: 'Regreso al Futuro',
image: '../assets/images/Comedia/images/Comedia/regresofuturo.webp'
},
{
title: 'Érase una vez... Hollywood',
image: '../assets/images/Comedia/images/Comedia/erasehollywood.webp'
},
{
title: 'Family Guy',
image: '../assets/images/Comedia/images/Comedia/family guy.webp'
}
]
};

comedyAccion = {
  section: 'ACCIÓN',
  films: [
  {
  title: 'El Protector',
  image: '../assets/images/images/Accion/elprotector.webp'
  },
  {
  title: 'Heat',
  image: '../assets/images/images/Accion/heat.webp'
  },
  {
  title: 'Kill Bill 2',
  image: '../assets/images/images/Accion/killbill2.webp'
  },
  {
  title: 'Terminator 2',
  image: '../assets/images/images/Accion/terminator2.webp'
  },
  {
  title: 'El Renacido',
  image: '../assets/images/images/Accion/renacido.webp'
  }
  ]
  };

  comedyDrama = {
    section: 'DRAMAS',
    films: [
    {
    title: 'El Club de la Lucha',
    image: '../assets/images/images/Drama/clublucha.webp'
    },
    {
    title: 'La Sombra del Diablo',
    image: '../assets/images/images/Drama/sombradiablo.webp'
    },
    {
    title: 'Naufrago',
    image: '../assets/images/images/Drama/naufrago.webp'
    },
    {
    title: 'Corazones de Acero',
    image: '../assets/images/images/Drama/corazones.webp'
    },
    {
    title: 'La Lista de Schindler',
    image: '../assets/images/images/Drama/schindler.webp'
    }
    ]
    };


}
