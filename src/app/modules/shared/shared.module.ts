import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleloaderComponent } from './components/circleloader/circleloader.component';
import { DominoloaderComponent } from './components/dominoloader/dominoloader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [CircleloaderComponent, DominoloaderComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, FlexLayoutModule],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        CircleloaderComponent,
        DominoloaderComponent,
    ],
})
export class SharedModule {}
