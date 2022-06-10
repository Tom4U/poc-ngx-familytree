import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './layout/content/content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TreeComponent } from './components/tree/tree.component';
import { PersonComponent } from './components/tree/person/person.component';
import { ParentsComponent } from './components/tree/parents/parents.component';
import { ParentLinkComponent } from './components/tree/parents/parent-link/parent-link.component';
import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    TreeComponent,
    PersonComponent,
    ParentsComponent,
    ParentLinkComponent,
    MasterLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
