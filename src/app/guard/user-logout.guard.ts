
import { AuthService } from 'src/app/demo/service/auth.service';
import { Injectable, inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateFn,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
class GuardService{
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (!this.authService.isLogend()) {
          return true;
        }
        this.router.navigate(["/"]);
        return false;
    }
}
export const UserLogoutgGuard:CanActivateFn=(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
):boolean => {
    return inject(GuardService).canActivate(next,state);
}

// export class UserLogoutgGuard implements CanActivate {
//     constructor(private authService: AuthService, private router: Router) {}

//     canActivate(
//         route: ActivatedRouteSnapshot,
//         state: RouterStateSnapshot
//     ): boolean {
//         if (!this.authService.isLogend()) {
//           return true;
//         }
//         this.router.navigate(["/"]);
//         return false;
//     }
// }