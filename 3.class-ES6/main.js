'use strict';

class Button {
  constructor(selector, text, icon) {
    this.element = document.querySelector(selector);
    this.text = text;
    this.icon = `<span class = "glyphicon glyphicon-${icon}"></span>`;
    this.render();
  }

  render() {
    this.element.innerHTML = `${this.text} ${this.icon}`;
  }
}

class RedButton extends Button {
  constructor(selector, text, icon, color) {
    super(selector, text, icon);
    this.color = color;
    this.render();
  }
  render() {
    super.render();
    this.element.style.color = `${this.color}`;
  }
  set changeText(newText) {
    this.text = `${newText}`;
  }
}

const button = new RedButton('.hello-button', 'click', 'user', '#701665');
button.changeText = 'User';
