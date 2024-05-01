import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { gridReducer } from './shared/store/grid/grid.reducer';
import { GridEffects } from './shared/store/grid/grid.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ grid: gridReducer }),
    provideEffects([GridEffects]),
    provideHttpClient(),
  ],
};
