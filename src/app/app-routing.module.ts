import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Asegúrate de importar el componente Home correctamente

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige la URL raíz a /homess
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

