import { Routes } from '@angular/router';
import { Belgie } from './belgie/belgie';
import { Duitsland } from './duitsland/duitsland';

import { Boverie } from './belgie/boverie/boverie';
import { Durbuy } from './belgie/durbuy/durbuy';
import { Irrland } from './duitsland/irrland/irrland';
import { Winterberg } from './duitsland/winterberg/winterberg'; 


export const routes: Routes = [
  {
    path: 'belgie',
    component: Belgie
  },
    {
    path: 'duitsland',
    component: Duitsland
  },
  {
    path: 'belgie/boverie',
    component: Boverie
  },
  {
    path: 'belgie/durbuy',
    component: Durbuy
  },
  {
    path: 'duitsland/irrland',
    component: Irrland
  },
  {
    path: 'duitsland/winterberg',
    component: Winterberg
  }
];
