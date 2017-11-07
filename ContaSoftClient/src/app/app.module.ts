import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }from '@angular/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import  { AuthModule } from './auth.module';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }

];


@NgModule({
declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent
    ],
    imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
    ),
    AuthModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { 
    private title = 'CharlioLogin'
}
