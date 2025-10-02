# 🎮 Tic-Tac-Toe Game

A modern, interactive Tic-Tac-Toe game built with vanilla JavaScript, featuring smooth animations, glassmorphism UI design, and an intuitive user experience.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://tic-tac-toe-sigma-one-56.vercel.app/)
[![HTML](https://img.shields.io/badge/HTML-5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🌟 Live Demo

**[Play Now →](https://tic-tac-toe-sigma-one-56.vercel.app/)**

## 📸 Preview

![Tic-Tac-Toe Game Preview](https://via.placeholder.com/800x400/2c5364/ffffff?text=Tic-Tac-Toe+Game)

## ✨ Features

- **🎯 Classic Gameplay**: Traditional 3x3 Tic-Tac-Toe with alternating turns between X and O
- **🎨 Modern UI Design**: Glassmorphism effects with gradient backgrounds and smooth transitions
- **✅ Win Detection**: Automatic winner detection for all 8 possible winning combinations
- **🤝 Draw Detection**: Identifies draw scenarios when all boxes are filled
- **🔄 Reset Functionality**: Quick reset button to start a new game instantly
- **📱 Responsive Design**: Fully responsive layout that works on all device sizes
- **🎭 Smooth Animations**: Hover effects, pulse animations, and 3D transforms
- **♿ Accessibility**: Disabled state management for played boxes

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure and semantic markup |
| **CSS3** | Styling, animations, and responsive design |
| **JavaScript (ES6)** | Game logic, DOM manipulation, and event handling |
| **Vercel** | Deployment and hosting |

## 🎯 Key Technical Implementations

### 1. **Win Pattern Algorithm**
Implemented an efficient win-checking algorithm using predefined winning patterns:
```javascript
// 8 possible winning combinations checked after each move
let winPatterns = [
  [0, 1, 2], [0, 3, 6], [0, 4, 8],
  [1, 4, 7], [2, 5, 8], [2, 4, 6],
  [3, 4, 5], [6, 7, 8]
];
```

### 2. **State Management**
- Turn tracking with `turnO` boolean flag
- Move counter for draw detection
- Box state management with disabled property

### 3. **Modern CSS Techniques**
- **Glassmorphism**: `backdrop-filter: blur(10px)` for modern glass effect
- **CSS Grid**: 3x3 responsive game board layout
- **3D Transforms**: `rotate3d()` for interactive hover effects
- **Gradient Backgrounds**: Multi-color linear gradients for visual appeal

### 4. **Event-Driven Architecture**
- Event delegation using `forEach()` for box clicks
- Reset and New Game functionality
- Dynamic UI updates based on game state

## 📁 Project Structure

```
tic-tac-toe/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # Game logic and functionality
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tic-tac-toe.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd tic-tac-toe
   ```

3. **Open the game**
   - Simply open `index.html` in your browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

4. **Start Playing!**
   - Visit `http://localhost:8000` in your browser

## 🎮 How to Play

1. **Player O** starts first
2. Click on any empty box to place your mark
3. Players alternate turns between **O** and **X**
4. First player to get 3 marks in a row (horizontally, vertically, or diagonally) wins
5. If all 9 boxes are filled with no winner, the game ends in a draw
6. Click **"Reset Game"** or **"New Game"** to start over

## 🧠 Game Logic Flow

```
Game Start
    ↓
Player O's Turn → Click Box → Mark 'O' → Disable Box
    ↓
Check Winner? → Yes → Display Winner → Disable All Boxes
    ↓ No
Check Draw (9 moves)? → Yes → Display Draw
    ↓ No
Player X's Turn → Click Box → Mark 'X' → Disable Box
    ↓
Check Winner? → Yes → Display Winner → Disable All Boxes
    ↓ No
Continue alternating turns...
```

## 💡 Code Highlights

### Winner Detection Logic
```javascript
const checkWinner = (count) => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
            else if(count >= 9){
                showDraw();
            }
        }
    }
}
```

### Dynamic Styling
```css
.box:hover {
    transform: scale(1.05) rotate3d(1, 1, 0, 10deg);
    background: rgba(255, 255, 255, 0.2);
}
```

## 🎨 Design Features

- **Color Scheme**: Dark gradient background (#2c5364 → #0f2027)
- **Typography**: Poppins font family for modern appearance
- **Visual Effects**: 
  - Box shadows for depth
  - Backdrop blur for glassmorphism
  - Pulse animation for winner message
  - Hover scale and 3D rotation effects

## 🔮 Future Enhancements

- [ ] Add AI opponent with difficulty levels (Easy, Medium, Hard)
- [ ] Implement score tracking across multiple games
- [ ] Add sound effects for moves and wins
- [ ] Create multiplayer mode with WebSocket
- [ ] Add theme customization (light/dark mode)
- [ ] Implement undo/redo functionality
- [ ] Add player name input and display
- [ ] Create game history and statistics

## 📝 Learning Outcomes

Through this project, I demonstrated proficiency in:

- ✅ **DOM Manipulation**: Selecting and modifying elements dynamically
- ✅ **Event Handling**: Managing user interactions efficiently
- ✅ **Algorithm Design**: Implementing win-checking logic
- ✅ **State Management**: Tracking game state without frameworks
- ✅ **CSS Animations**: Creating engaging visual effects
- ✅ **Responsive Design**: Building mobile-friendly interfaces
- ✅ **Code Organization**: Writing clean, maintainable JavaScript

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Adarsh Rai**

- GitHub: [@adarshrai03](https://github.com/adarshrai03)

## 🙏 Acknowledgments

- Inspired by the classic Tic-Tac-Toe game
- UI design influenced by modern glassmorphism trends
- Deployed seamlessly with Vercel

---

⭐ **If you found this project interesting, please give it a star!** ⭐
