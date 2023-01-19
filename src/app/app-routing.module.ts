import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/featured/auth/auth.guard';

// const routes: Routes = [
//   {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
//   {path: 'dashboard', component: BoardsComponent, data: {title: 'Dashboard'}},
//   {path: 'board/:id', component: TasksComponent}
// ];

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./components/featured/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/featured/boards/boards.module').then(m => m.BoardsModule),
    data: { title: 'Dashboard' },
    canLoad: [AuthGuard]
  },
  {
    path: 'board/:id',
    loadChildren: () => import('./components/featured/tasks/tasks.module').then(m => m.TasksModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'guide',
    loadChildren: () => import('./components/featured/guide/guide.module').then(m => m.GuideModule),
    canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./components/featured/not-found/not-found.module').then(m=>m.NotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
