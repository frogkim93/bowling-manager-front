import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './component/app/app.component';
import { FooterComponent } from './component/footer/footer.component';
import { GameHistoryComponent } from './component/game-history/game-history.component';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { MakeTeamComponent } from './component/make-team/make-team.component';
import { AddMemberComponent } from './component/memberList/add-member/add-member.component';
import { MemberListComponent } from './component/memberList/memberList.component';
import { MenuComponent } from './component/menu/menu.component';
import { RecordComponent } from './component/record/record.component';
import { SummaryComponent } from './component/summary/summary.component';
import { RouteConfig } from './config/router.config';
import { MenuService } from './service/menu.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import 'moment/locale/ko';
import { RegularGameHistory } from './component/regular-game-history/regular-game-history.component';
import { ConfigComponent } from './component/config/config.component';

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
    RecordComponent,
    GameHistoryComponent,
    RegularGameHistory,
    ConfigComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouteConfig,
    FormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule
  ],
  providers: [
    MenuService,
    {provide: MAT_DATE_LOCALE, useValue: 'ko-KR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
