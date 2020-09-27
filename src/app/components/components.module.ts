import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { ComponentsComponent } from './components.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule
      ],
    declarations: [
        ComponentsComponent,
        NavigationComponent
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
