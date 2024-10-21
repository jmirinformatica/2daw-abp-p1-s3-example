import logger from '../../lib/logger'
// Nunjucks template engine
import { renderString } from 'nunjucks'
import layout from './base.html?raw'
import template from './_user.html?raw'

export default {
  renderHTML() {
    logger.debug("Render layout...")
    const data = { "developer": "Profes DAW" }
    document.querySelector("#app").innerHTML = renderString(layout, data)
  },
  refreshUser() {
    logger.debug("Refresh layout using Nunjucks...")
    const userDiv = document.querySelector('#user')
    // TODO Get session data
    const data = { "username": "FAKE" }
    userDiv.innerHTML = renderString(template, data)    
  },
  refreshUserUsingDOM() {
    logger.debug("Refresh layout using DOM...")
    const userDiv = document.querySelector('#user')
    // TODO Get session data
    const data = { "username": "FAKE" }  
    // Reset
    userDiv.innerHTML = '';

    if (data.username) {
      // Hello <span>username</span>
      const helloText = document.createElement('span');
      helloText.textContent = 'Hello';        
      const usernameSpan = document.createElement('span');
      usernameSpan.textContent = ` ${data.username}`;
      usernameSpan.classList.add('text-decoration-underline', 'ms-2');
      // Logout button
      const logoutBtn = document.createElement('a');
      logoutBtn.href = '/logout';
      logoutBtn.classList.add('btn', 'btn-secondary', 'ms-4');
      logoutBtn.textContent = 'Logout';
      // Insert elements
      userDiv.appendChild(helloText);
      userDiv.appendChild(usernameSpan);
      userDiv.appendChild(logoutBtn);
    } else {
      // Login button
      const loginBtn = document.createElement('a');
      loginBtn.href = '/login';
      loginBtn.classList.add('btn', 'btn-primary');
      loginBtn.textContent = 'Login';
      // Insert elements
      userDiv.appendChild(loginBtn);
    }
  }
}