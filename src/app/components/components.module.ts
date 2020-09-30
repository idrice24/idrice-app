import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { ComponentsComponent } from './components.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
      ],
    declarations: [
        ComponentsComponent,
        NavigationComponent
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
