import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LogService } from '../services/log.service';

export const gardGuard: CanActivateFn = (route, state) => {
  const auth= inject(LogService);
  const router= inject(Router);
  if(auth.isAuth()&&auth.decode().userType==='user' ){
    return true;
  }
  else{
    router.navigate(['login']);
  return false;}
};
