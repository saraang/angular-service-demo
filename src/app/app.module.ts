import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoComponent } from './demo/demo.component';
import { ArithmeticService } from './service/arithmetic.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DemoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ArithmeticService]
})
export class AppModule { }
