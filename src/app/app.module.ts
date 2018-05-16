import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { DataComponent } from './data/data.component';
import { PanelComponent } from './panel/panel.component';
import { OverlayComponent } from './overlay/overlay.component';
import { FileComponent } from './file/file.component';
import { MenuComponent } from './menu/menu.component';
import { ChartsComponent } from './charts/charts.component';
import { MessagesComponent } from './messages/messages.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { MiscComponent } from './misc/misc.component';
import {CalendarModule,
         ButtonModule,
         SplitButtonModule,
         CarouselModule,
         OrganizationChartModule,
         PaginatorModule,
         AccordionModule,
         FieldsetModule,
         PanelModule,
         TabViewModule,
         OverlayPanelModule,
         SidebarModule,
         FileUploadModule,
         MenuModule,
         ContextMenuModule,
         BreadcrumbModule,
         ChartModule,
         MessagesModule,
         MessageModule,
         GalleriaModule,
         ProgressBarModule
        } from 'primeng/primeng';
import { FormStyle } from '@angular/common';
import {TreeNode} from 'primeng/api';
import {MenuItem} from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    InputComponent,
    ButtonComponent,
    DataComponent,
    PanelComponent,
    OverlayComponent,
    FileComponent,
    MenuComponent,
    ChartsComponent,
    MessagesComponent,
    MultimediaComponent,
    DragdropComponent,
    MiscComponent
  ],
  imports: [
    AppRoutingModule,
    CalendarModule,
    ButtonModule,
    FormsModule,
    SplitButtonModule,
    CarouselModule,
    OrganizationChartModule,
    PaginatorModule,
    AccordionModule,
    FieldsetModule,
    PanelModule,
    TabViewModule,
    OverlayPanelModule,
    SidebarModule,
    FileUploadModule,
    MenuModule,
    ContextMenuModule,
    BreadcrumbModule,
    ChartModule,
    MessagesModule,
    MessageModule,
    GalleriaModule,
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
