# angularRouting
Angular Routing Hello world 

### 1, step 1 
  ### Import the AppRoutingModule into AppModule and add it to the imports array.
  import {AppRoutingModule} from './app-routing.module';
  
#### 2, app-routing.module.ts  will be created automatically as par of new application contains below code 

```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```
### 3 Add your routes to Routes array 
```
const routes: Routes = [
  {path:"user-details.component", component:UserDetailsComponent}
];
```
