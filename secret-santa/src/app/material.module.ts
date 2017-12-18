import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatRadioModule,
    MatListModule,
    MatInputModule,
 } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatTabsModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatRadioModule,
        MatListModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatTabsModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatRadioModule,
        MatListModule,
        MatInputModule
    ],
})
export class MaterialModule { }