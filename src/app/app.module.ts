import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CovidGraphComponent } from './components/covid-graph/covid-graph.component';
import { NumberVaccComponent } from './components/number-vacc/number-vacc.component';



@NgModule({
  declarations: [
    AppComponent,
    CovidGraphComponent,
    NumberVaccComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
