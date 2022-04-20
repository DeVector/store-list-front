import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/shared/home/home.component";
import { HardwareListComponent } from "./components/store/hardware-list/hardware-list.component";
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'hardwares',
        component: HardwareListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}