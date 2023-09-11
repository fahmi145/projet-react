import React, { useState } from 'react';

// Styles CSS
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '20px',
  },
  button: {
    margin: '5px',
    padding: '8px 12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  message: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    marginBottom: '10px',
  },
};

// Composant représentant un message
const Message = ({ id, content, validated, onDelete, onValidate, onModify }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  const handleValidate = () => {
    onValidate(id);
  };

  const handleModify = () => {
    const newContent = prompt('Entrez le nouveau contenu :');
    if (newContent) {
      onModify(id, newContent);
    }
  };

  return (
    <div style={styles.message}>
      <p>Message ID: {id}</p>
      <p>Contenu: {content}</p>
      <p>Validé: {validated ? 'Oui' : 'Non'}</p>
      <button style={styles.button} onClick={handleDelete}>
        Supprimer
      </button>
      <button style={styles.button} onClick={handleValidate}>
        Valider
      </button>
      <button style={styles.button} onClick={handleModify}>
        Modifier
      </button>
    </div>
  );
};

// Composant principal représentant l'interaction entre l'apprenant et le formateur
const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [messageId, setMessageId] = useState(1);

  const addMessage = (content) => {
    const newMessage = {
      id: messageId,
      content: content,
      validated: false,
    };
    setMessages([...messages, newMessage]);
    setMessageId(messageId + 1);
  };

  const deleteMessage = (id) => {
    const updatedMessages = messages.filter((message) => message.id !== id);
    setMessages(updatedMessages);
  };

  const validateMessage = (id) => {
    const updatedMessages = messages.map((message) =>
      message.id === id ? { ...message, validated: true } : message
    );
    setMessages(updatedMessages);
  };

  const modifyMessage = (id, newContent) => {
    const updatedMessages = messages.map((message) =>
      message.id === id ? { ...message, content: newContent } : message
    );
    setMessages(updatedMessages);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Poser Vos questions</h1>
      <div style={styles.section}>
        <h2>Apprenant</h2>
        <button  style={styles.button} onClick={() => addMessage(prompt('Entrez votre question :'))}>
          Envoyer une question
        </button>
      </div>
      <div style={styles.section}>
      
        {messages.map((
message) => (
<Message
         key={message.id}
         id={message.id}
         content={message.content}
         validated={message.validated}
         onDelete={deleteMessage}
         onValidate={validateMessage}
         onModify={modifyMessage}
       />
))}
</div>
</div>
);
};

export default Messages;
