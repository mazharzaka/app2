import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LogService } from '../log.service';

export const dashGuard: CanActivateFn = (route, state) => {
  const auth= inject(LogService);
  const router= inject(Router);
  if(auth.isAuth()&&auth.decode().userType==='admin' ){
    return true;
  }
  else{
    router.navigate(['login']);
  return false;}
};
