import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { PasswordModule } from 'primeng/password';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { OrderListModule } from 'primeng/orderlist';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    AccordionModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    ColorPickerModule,
    DragDropModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    PasswordModule,
    SliderModule,
    OrderListModule,
    OverlayPanelModule,
    RadioButtonModule,
    ToastModule,
  ],
  exports: [
    FormsModule,
    AccordionModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    ColorPickerModule,
    DragDropModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    PasswordModule,
    SliderModule,
    OrderListModule,
    OverlayPanelModule,
    RadioButtonModule,
    ToastModule,
  ],
  providers: [],
})
export class PrimengModule {}
