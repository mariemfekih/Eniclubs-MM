import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  //{path: "login", component:LoginComponent },//lena bsh k nekteb/login tjini page login
 { path: "", component:HomeComponent },
 { path: 'add', component: AddComponent },
 { path: 'update/:id', component: UpdateComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
