import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'moment/locale/ko';
import { AppComponent } from './component/app/app.component';
import { ConfigComponent } from './component/config/config.component';
import { FooterComponent } from './component/footer/footer.component';
import { GameHistoryComponent } from './component/game-history/game-history.component';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { AddMemberComponent } from './component/main/memberList/add-member/add-member.component';
import { MemberListComponent } from './component/main/memberList/memberList.component';
import { MakeTeamComponent } from './component/make-team/make-team.component';
import { MenuComponent } from './component/menu/menu.component';
import { RecordComponent } from './component/record/record.component';
import { RegularGameHistory } from './component/regular-game-history/regular-game-history.component';
import { SummaryComponent } from './component/summary/summary.component';
import { RouteConfig } from './config/router.config';
import { AccountService } from './service/account.service';
import { MenuService } from './service/menu.service';

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
    HttpClientModule,
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
    AccountService,
    {provide: MAT_DATE_LOCALE, useValue: 'ko-KR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
