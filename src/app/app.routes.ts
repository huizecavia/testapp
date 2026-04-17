import { Routes } from '@angular/router';
import { Belgie } from './belgie/belgie';
import { Duitsland } from './duitsland/duitsland';
import { Home } from './home/home';

import { Boverie } from './belgie/boverie/boverie';
import { Durbuy } from './belgie/durbuy/durbuy';
import { Irrland } from './duitsland/irrland/irrland';
import { Winterberg } from './duitsland/winterberg/winterberg'; 

import { Verhaallijn } from './verhaallijn/verhaallijn';
import { Werkbelgie } from './verhaallijn/werkbelgie/werkbelgie';
import { Werkduitsland } from './verhaallijn/werkduitsland/werkduitsland';

export const routes: Routes = [
  {
    path: 'belgie',
    component: Belgie,
    children: [
      { path: 'boverie', component: Boverie },
      { path: 'durbuy', component: Durbuy },
    ]
  },
  {
    path: 'duitsland',
    component: Duitsland,
    children: [
      { path: 'irrland', component: Irrland },
      { path: 'winterberg', component: Winterberg },
    ]
  },
  {
    path: '',
    component: Home
  },
  {
    path: 'verhaallijn',
    component: Verhaallijn,
     children: [
      { path: 'duitsland', component: Werkduitsland },
      { path: 'belgie', component: Werkbelgie },
    ]   
  }
];