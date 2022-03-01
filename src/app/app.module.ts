import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './component/app/app.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { MakeTeamComponent } from './component/make-team/make-team.component';
import { AddMemberComponent } from './component/memberList/add-member/add-member.component';
import { MemberListComponent } from './component/memberList/memberList.component';
import { MenuComponent } from './component/menu/menu.component';
import { SummaryComponent } from './component/summary/summary.component';
import { RouteConfig } from './config/router.config';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MenuComponent,
    MemberListComponent,
    AddMemberComponent,
    MakeTeamComponent,
    SummaryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouteConfig
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
