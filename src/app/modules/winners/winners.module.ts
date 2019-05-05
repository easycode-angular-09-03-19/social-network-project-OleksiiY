import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinnerPageComponent } from './pages/winner-page/winner-page.component';
import { WinnerInnerComponent } from './components/winner-inner/winner-inner.component';
import { WinnersRoutingModule } from './winners-routing.module';

@NgModule({
  declarations: [
    WinnerPageComponent,
    WinnerInnerComponent
  ],
  imports: [
    CommonModule,
    WinnersRoutingModule
  ]
})
export class WinnersModule { }
