import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonarDetailsComponent } from './donar-details/donar-details.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { BloodReqComponent } from './blood-req/blood-req.component';

const routes: Routes = [{path:'',redirectTo:'details',pathMatch:'full'},
{path:'details', component: DonarDetailsComponent},
{path:'dashboard', component: DashBoardComponent},
{path:'review', component: ReviewsComponent},
{path:'request', component: BloodReqComponent},
{path:'**',redirectTo:'details'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
