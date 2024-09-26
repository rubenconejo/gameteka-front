import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsersComponent } from './components/users/users.component';
import { GamesComponent } from './components/games/games.component';

export const routes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'games', component: GamesComponent }, 
    { path: '', pathMatch: 'full', redirectTo:'users'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}