import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LandingComponent } from './landing/landing.component';
import { ExamplesComponent } from './examples.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        LandingComponent,
        ExamplesComponent
           ]
})
export class ExamplesModule { }
