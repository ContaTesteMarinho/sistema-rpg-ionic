import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RaceService } from '../services/race/race.service';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptors';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user/user.service';
import { AuthInterceptorProvider } from '../interceptors/auth-interceptors';
import { ClasseService } from '../services/classe/classe.service';
import { SkillService } from '../services/skill/skill.service';
import { StoreService } from '../services/store/store.service';
import { PurchaseService } from '../services/store/purchase.service';
import { CharacterSheetService } from '../services/character-sheet/character-sheet.service';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RaceService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    AuthService,
    StorageService,
    UserService,
    ClasseService,
    SkillService,
    StoreService,
    PurchaseService,
    CharacterSheetService
  ]
})
export class AppModule {}
