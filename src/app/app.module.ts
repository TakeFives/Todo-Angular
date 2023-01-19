import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './components/core/core.module';
import { FeaturedModule } from './components/featured/featured.module';
import { SharedModule } from './components/shared/shared.module';

import { BoardsEffects } from './state/effects/boards.effects';
import { TasksEffects } from './state/effects/tasks.effects';

import { boardsReducer } from './state/reducers/main.reducer';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    FeaturedModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ 
      boards: boardsReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([BoardsEffects, TasksEffects])
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
