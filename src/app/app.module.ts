import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EntersComponent } from './calculator/enters/enters.component';
import { SignsComponent } from './calculator/signs/signs.component';
import { ResultComponent } from './calculator/result/result.component';
import { CalculatorComponent } from './calculator/calculator/calculator.component';
import { MultiplierComponent } from './calculator/buttons/multiplier/multiplier.component';
import { DivideComponent } from './calculator/buttons/divide/divide.component';
import { AddComponent } from './calculator/buttons/add/add.component';
import { SubstractComponent } from './calculator/buttons/substract/substract.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EntersComponent,
    SignsComponent,
    ResultComponent,
    CalculatorComponent,
    MultiplierComponent,
    DivideComponent,
    AddComponent,
    SubstractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
