import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'am-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    title = 'Menu';

    @Output() onSelectMenu = new EventEmitter<boolean>();
    
    closeSidenav() {
        this.onSelectMenu.emit();
    }
}
