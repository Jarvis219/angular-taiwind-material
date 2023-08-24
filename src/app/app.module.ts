import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { OrderComponent } from './screen/components/order/order.component';
import { TransformDatePipe } from './pipe/transform-date.pipe';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { TransformPaymentPipe } from './pipe/transform-payment.pipe';
import { DialogComponent } from './screen/components/dialog/dialog.component';
import { BoxChatComponent } from './screen/components/box-chat/box-chat.component';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    TransformDatePipe,
    TransformPaymentPipe,
    DialogComponent,
    BoxChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
