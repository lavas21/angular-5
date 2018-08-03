import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DonarDetailsComponent } from './donar-details/donar-details.component';
import { ShowRequestComponent } from './show-request/show-request.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { BannerComponent } from './banner/banner.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HighLightDirective } from './high-light.directive';
import { MagnifyDirective } from './magnify.directive';
import { PastComponent } from './past/past.component';
import { FutureComponent } from './future/future.component';
import { FilterPipe } from './filter.pipe';
import { BloodReqComponent } from './blood-req/blood-req.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DonarDetailsComponent,
    ShowRequestComponent,
    RequestDetailsComponent,
    DashBoardComponent,
    BannerComponent,
    ReviewsComponent,
    HighLightDirective,
    MagnifyDirective,
    PastComponent,
    FutureComponent,
    FilterPipe,
    BloodReqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  entryComponents:[PastComponent, FutureComponent],
  bootstrap: [/*DashBoardComponent*/AppComponent]
})
export class AppModule { }
