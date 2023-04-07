import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickListModule } from 'primeng/picklist';
import { ChipModule } from 'primeng/chip';
import {MatChipsModule} from '@angular/material/chips';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const material = [
  ChipModule,
  PickListModule,
  MatChipsModule,
  BadgeModule,
  InputTextModule,
  MatProgressBarModule

]

@NgModule({
  imports: [material],
  exports: [material]
})

export class MaterialModule { }
