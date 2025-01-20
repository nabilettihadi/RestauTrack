import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <header class="app-header">
        <h1>RestauTrack</h1>
        <nav>
          <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
          <a routerLink="/orders" routerLinkActive="active">Commandes</a>
          <a routerLink="/tables" routerLinkActive="active">Tables</a>
          <a routerLink="/inventory" routerLinkActive="active">Inventaire</a>
        </nav>
      </header>
      <main class="app-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .app-header {
      background-color: var(--primary-color);
      color: white;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);

      h1 {
        margin: 0;
        font-size: 1.5rem;
      }

      nav {
        margin-top: 1rem;
        
        a {
          color: white;
          text-decoration: none;
          padding: 0.5rem 1rem;
          margin-right: 1rem;
          border-radius: 4px;
          transition: background-color 0.3s;

          &:hover, &.active {
            background-color: rgba(255,255,255,0.1);
          }
        }
      }
    }

    .app-content {
      flex: 1;
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }
  `]
})
export class AppComponent {
  title = 'RestauTrack';
}
