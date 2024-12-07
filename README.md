**#iChatApp - Real-Time Chat Application**

**Description:** A real-time chat application built with Socket.IO, Node.js, and vanilla JavaScript that allows multiple users to communicate in a shared chat room.

**What I Gained:** This was my first time using Socket.io and was exposed to using it in Javascript. Understanding its implementation was confusing at first, but I messed around with the functions and methods throughout this project and came to a better understanding using Socket.io. I look to expand my knowledge into Socket.io applications because many of the technologies in the current era involve multiple users in one network. This project also developed my front-end and back-end Javascript skills focusing around user behaviorial events. 

**Future Insights:** Some expansions I could do on this Chat-App, after gaining a better understanding of Socket.io, is to create chat rooms for users to join that are independent from one another so that multiple users can be used and chat with each other without other active users in other chat rooms know what's happening. Also, I could look to implement an AI chat bot to simulate a helper bot on a company's website for the users to ask any questions.

**Features**
- Real-time messaging
- User join/leave notifications
- Sound notifications for new messages
- Custom usernames
- Responsive design
- Message positioning (left/right/center) for different types of messages

**Technical Requirements**
- Node.js
- Socket.IO
- Modern web browser
- Internet connection


**Installation Steps**
1. Clone the repository:
  - git clone github.com/therealrichardthomas/Chat-App
  - cd Chat-App

2. Install Dependencies
  - npm install socket.io

3. Start the server:
  - node index.js

4. Open index.html in your web browser or serve it using a local server.

**Project Structure**
- index.html - Main application interface
- style.css - Application styling and layout
- index.js - Socket.IO server configuration
- client.js - Client-side Socket.IO implementation

**Usage**
1. Start the server on port 8000
2. Open the application in your browser
3. Enter your username when prompted3
4. Start chatting with other connected users

**Features Implementation**
- Message Types
  - Right-aligned: Your own messages
  - Left-aligned: Messages from other users
  - Center-aligned: System notifications (user joined/left)

- Styling
  - Gradient background chat container (Instagram inspiration)
  - Scrollable message container
  - Responsive design
  - Custom message bubbles with different colors for sent/received messages (iMessage inspiration)

- Socket Events
  - 'new-user-joined': Handles new user connections
  - 'send': Manages message sending
  - 'receive': Handles incoming messages
  - 'left': Processes user disconnection

**Development**
The application uses:
  - Socket.IO for real-time bidirectional communication
  - Custom CSS for styling and layout
  - Vanilla JavaScript for DOM manipulation
  - Event-driven architecture for message handling
