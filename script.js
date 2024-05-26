function sendMessage(option) {
    let messageContent = "";
    switch (option) {
      case '1':
        messageContent = "¿Bana cómo puedo ganar dinero?";
        break;
      case '2':
        messageContent = "Bana, quiero multiplicar mi dinero.";
        break;
      case '3':
        messageContent = "Bana, ¿Como lograste hacerte el tratamiento capilar?.";
        break;
      default:
        messageContent = "No se reconoce la opción seleccionada.";
    }
  
    displayMessage("sent", messageContent);
  
    // Simulate response after 3 seconds
    setTimeout(function() {
      let response = "";
      switch (option) {
        case '1':
          response = "¡Entra en <a href='http://banacash.github.io' target='_blank'>Banacash.github.io</a> para empezar a ganar!";
          break;
        case '2':
          response = "Es simple papu, Completa el quiz  en pagina.com para ganarte un multiplicador de tu dinero de mas de un 50%!";
          break;
        case '3':
          response = "Gracias a kick y a los colaboradores de banacash me pude hacer un tratamiento capilar, si vos queres hacerte uno entra a <a href='http://banacash.github.io' target='_blank'>Banacash.github.io</a>.";
          break;
        default:
          response = "No se reconoce la opción seleccionada.";
      }
      displayMessage("received", response);
    }, 3000);
  }
  
  function displayMessage(type, content) {
    const chatDisplay = document.getElementById("chat-display");
    const message = document.createElement("div");
    message.className = `message ${type}`;
    message.innerHTML = `<span class="message-content">${content}</span>`;
    
    // Clear previous typing indicator if present
    const typingIndicator = chatDisplay.querySelector('.typing-indicator');
    if (typingIndicator) {
      chatDisplay.removeChild(typingIndicator);
    }
    
    if (type === 'received' && content === '...') {
      const typingIndicator = document.createElement('div');
      typingIndicator.className = 'message typing-indicator';
      typingIndicator.innerHTML = `
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      `;
      chatDisplay.appendChild(typingIndicator);
    } else {
      chatDisplay.appendChild(message);
    }
  
    // Scroll to the bottom of the chat display
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
  }
  
  function changeFont(fontFamily) {
    const chatDisplay = document.getElementById("chat-display");
    chatDisplay.style.fontFamily = fontFamily;
  }
  