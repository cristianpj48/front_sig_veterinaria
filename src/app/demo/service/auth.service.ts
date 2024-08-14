import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { URL_API } from '../api/config';
import { HttpClient } from '@angular/common/http';
import * as sha512 from 'js-sha512';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private router: Router, private http: HttpClient) {}

    isLogend(): boolean {
        let token = localStorage.getItem('token_sigvet');
        if (token == null) {
            return false;
        }
        return true;
    }
    logout(): void {
        localStorage.removeItem('token_sigvet');
        localStorage.removeItem('user_vet');
        this.router.navigate(['/auth/login'])
    }

    // En auth.service.ts
    login(data) {
        const payload = {
            username: data.username,
            password: sha512.sha512(data.password).toString().toUpperCase(),
        };
        console.log('Sending payload:', payload); // Para depuración
        return this.http
            .post(`${URL_API}/login`, payload)
            .toPromise()
            .then((res) => res);
    }
}
