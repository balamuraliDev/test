import { Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { SearchResultsComponent } from './component/searchResults/searchResults.component';


export const rootRouterConfig: Routes = [
//{ path: "**", redirectTo: "error", pathMatch: 'full' },
{ path:'',component:HomeComponent},
{ path:'searchResults',component:SearchResultsComponent},

];