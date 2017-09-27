import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TreeTableModule,TreeNode,SharedModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import {TreeTableDemoComponent} from './TreeTableDemoComponent';
import {NodeService} from './NodeService';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './data/InMemoryDataService';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,TreeTableDemoComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,HttpModule, TreeTableModule, SharedModule, InMemoryWebApiModule,InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
