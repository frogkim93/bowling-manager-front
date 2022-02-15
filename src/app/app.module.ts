import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './component/app/app.component';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { MenuComponent } from './component/menu/menu.component';
import { RouteConfig } from './config/router.config';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouteConfig
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
