import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { IonicGestureConfig } from '../app/utils/IonicGestureConfig';
import { HammerGestureConfig } from '@angular/platform-browser';
import { CapoComponent } from "../app/capo/capo.component";
import { CapoModule } from "./capo/capo.module";







@NgModule({
  declarations: [AppComponent,
    CapoComponent
    ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FilePath,
    Camera,
    File,
    HammerGestureConfig
  ],
  bootstrap: [AppComponent],
  exports: [CapoComponent]
})
export class AppModule {}
