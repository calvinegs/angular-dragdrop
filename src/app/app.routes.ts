import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DragableComponent } from './pages/dragable/dragable.component';
import { ReorderingListComponent } from './pages/reordering-list/reordering-list.component';
import { TransferDataListsComponent } from './pages/transfer-data-lists/transfer-data-lists.component';
import { CustomPlaceholderComponent } from './pages/custom-placeholder/custom-placeholder.component';
import { PredicateComponent } from './pages/predicate/predicate.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dragable', component: DragableComponent },
  { path: 'reordable', component: ReorderingListComponent },
  { path: 'transferData', component: TransferDataListsComponent },
  { path: 'customPlaceholder', component: CustomPlaceholderComponent },
  { path: 'predicate', component: PredicateComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
