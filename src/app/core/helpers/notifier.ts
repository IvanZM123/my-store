import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarRef } from "@angular/material/snack-bar";

import { NotificationComponent } from "../components/notification/notification.component";

export interface Notification {
    icon: string;
    message: string;
    color: string;
}

@Injectable({
    providedIn: "root"
})
export class Notifier {
    constructor(private snackbar: MatSnackBar) {}
    
    showNotification(data: Notification): MatSnackBarRef<NotificationComponent> {
        return this.snackbar.openFromComponent(NotificationComponent, {
            duration: 3000,
            data,
            panelClass: [`bg-${ data.color }`]
        });
    }
}