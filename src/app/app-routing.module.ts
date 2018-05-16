import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';
import { AppComponent } from './app.component';
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
import {CalendarModule,SplitButtonModule,ButtonModule,CarouselModule,
  OrganizationChartModule,FieldsetModule,PanelModule,TabViewModule,
  LightboxModule,OverlayPanelModule,SidebarModule,FileUploadModule,
  MenuModule,MenuItem,ContextMenuModule,BreadcrumbModule,ChartModule,
  MessagesModule,MessageModule,GalleriaModule,ProgressBarModule,} from 'primeng/primeng';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard',component: DashboardComponent,
  children: [
    { path: 'dashboard/data', component: DataComponent },
    { path: 'dashboard/misc', component: MiscComponent },
    { path: 'dashboard/input', component: InputComponent },
    {path:'dashboard/button',component:ButtonComponent},
    {path:'dashboard/panel',component:PanelComponent},
    {path:'dashboard/overlay',component:OverlayComponent},
    {path:'dashboard/file',component:FileComponent},
    {path:'dashboard/menu',component:MenuComponent},
    {path:'dashboard/charts',component:ChartsComponent},
    {path:'dashboard/messages',component:MessagesComponent},
    {path:'dashboard/multimedia',component:MultimediaComponent},
    {path:'dashboard/dragdrop',component:DragdropComponent},
    {path:'dashboard/misc',component:MiscComponent}
  ]
   }
]
@NgModule({
    imports: [
      BrowserModule,
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]

  })
  export class AppRoutingModule { }
  