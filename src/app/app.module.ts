import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.modules';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HardwareListComponent } from './components/store/hardware-list/hardware-list.component';
import { FilterComponent } from './components/store/filter/filter.component';
import { HomeComponent } from './components/shared/home/home.component';
import { HardwareStoreComponent } from './components/store/hardware-store/hardware-store.component';
import { HardwareItemComponent } from './components/store/hardware-item/hardware-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HardwareListComponent,
    FilterComponent,
    HomeComponent,
    HardwareStoreComponent,
    HardwareItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
