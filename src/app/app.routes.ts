import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LinksComponent } from './links/links.component';

export const routes: Routes = [
    {path: "", component: DashboardComponent},
    {path: "links", component: LinksComponent}

];
