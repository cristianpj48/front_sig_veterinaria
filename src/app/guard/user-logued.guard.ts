import { AuthService } from 'src/app/demo/service/auth.service';
import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class UserLoguedGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (this.authService.isLogend()) {
            return true;
        }
        this.router.navigate(['auth/login']);
        return false;
    }
}
