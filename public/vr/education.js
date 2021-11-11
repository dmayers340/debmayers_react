/* global AFRAME */
AFRAME.registerComponent('education-message', {
    schema: {
      htmlSrc: {type: 'selector'},
      startOpened: {default: false}
    },
    init: function () {
      var sceneEl = this.el.sceneEl;
      var messageEl = this.messageEl = document.createElement('div');
      var startOpened = this.data.startOpened;
      this.toggleEducationMessage = this.toggleEducationMessage.bind(this);
  
      messageEl.classList.add('a-education-message');
      messageEl.setAttribute('aframe-injected', '');
  
      var closeButtonEl = this.closeButtonEl = document.createElement('button');
      closeButtonEl.innerHTML = 'X';
      closeButtonEl.classList.add('a-close-button-education');
      closeButtonEl.onclick = this.toggleEducationMessage;
  
      this.createInfoButton(this.toggleEducationMessage);
  
      this.addStyles();
      sceneEl.appendChild(messageEl);
  
      this.messageEl.style.display = startOpened ? '' : 'none';
      this.eduButton.style.display = startOpened ? 'none' : '';
    },
  
    update: function () {
      var messageEl = this.messageEl;
      messageEl.innerHTML = this.data.htmlSrc.data;
      messageEl.appendChild(this.closeButtonEl);
    },
  
    addStyles: function () {
      var css =
      '.a-education-message{border-radius: 10px; position: absolute; width: 400px;' +
      'height: 350px; background-color: white; border: 3px solid rgba(0,0,0,.75);' +
      'top: 62px; left: 150px; color: rgb(51, 51, 51); padding: 20px 15px 0 15px;' +
      'font-size: 11pt; line-height: 20pt;}' +

      '.a-education-message a{border-bottom: 1px solid rgba(53,196,232,.15); color: #1497b8;' +
      'position: relative; text-decoration: none; transition: .05s ease;}' +
        
      '@media only screen and (min-width: 1200px) {' +
      '.a-education-message {font-size: 12pt}}' +

      '@media only screen and (max-width: 600px) {' +
      '.a-education-message {left: 20px; right: 20px; bottom: 60px; width: auto}}' +
        
      '@media only screen and (max-height: 600px) {' +
      '.a-education-message {left: 20px; bottom: 20px; height: 250px}}' +

      '.a-close-button-education{width: 25px; height: 25px; padding: 0;' +
      'top: 10px; right: 10px; position: absolute; color: white;' +
      'font-size: 12px; line-height: 12px; border: none; background-color: #ef2d5e;' +
      'border-radius: 5px; font-weight: medium}' +

      '.a-close-button-education:hover{background-color: #b32146; color: white}' +
      '.a-education-message-container {position: absolute; left: 150px; top: 60px;}' +
      '.a-education-message-button {background: rgba(0, 0, 0, 0.20) ' + ' 50% 50% no-repeat;}' +
      '.a-education-message-button {background-size: 90% 90%; border: 0; bottom: 0; cursor: pointer; min-width: 58px; min-height: 34px; padding-right: 0; padding-top: 0; position: absolute; right: 0; transition: background-color .05s ease; -webkit-transition: background-color .05s ease; z-index: 9999; border-radius: 8px; touch-action: manipulation;}' +
      '.a-education-message-button:active, .a-education-message-button:hover {background-color: #ef2d5e;}';
   
      var style = document.createElement('style');
  
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
  
      document.getElementsByTagName('head')[0].appendChild(style);
    },
  
    toggleEducationMessage: function () {
      var display = this.messageEl.style.display;
      this.eduButton.style.display = display;
      display = display === 'none' ? '' : 'none';
      this.messageEl.style.display = display;
    },
  
    createInfoButton: function (onClick) {
      var eduButton;
      var wrapper;
  
      // Create elements.
      wrapper = document.createElement('div');
      wrapper.classList.add('a-education-message-container');
      this.eduButton = eduButton = document.createElement('button');
      this.eduButton.textContent='Education';
      eduButton.className = 'a-education-message-button';
      eduButton.setAttribute('title', 'Information about this experience');
      // Insert elements.
      wrapper.appendChild(eduButton);
      eduButton.addEventListener('click', function (evt) {
        onClick();
        evt.stopPropagation();
      });
      this.el.sceneEl.appendChild(wrapper);
    }  
  });
  