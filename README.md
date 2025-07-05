# Modern Calculator App

A beautiful, responsive calculator built with React.js featuring a modern UI with light/dark theme toggle.

## Features

- **Basic Operations**: Addition (+), Subtraction (−), Multiplication (×), Division (÷)
- **Advanced Features**: 
  - Parentheses support for complex expressions
  - Percentage calculations
  - Decimal number support
  - Clear function (C)
- **Modern UI**:
  - Responsive design for mobile and desktop
  - Light/Dark theme toggle
  - Smooth animations and transitions
  - Clean, modern interface
- **Real-time Display**: Shows current expression and result
- **Error Handling**: Graceful error handling for invalid expressions

## Tech Stack

- React.js (with Hooks)
- HTML5 & CSS3
- JavaScript (ES6+)
- CSS Grid & Flexbox for responsive layout
- CSS Variables for theming

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd calc
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder that can be deployed to platforms like Vercel or Netlify.

## Usage

- **Numbers**: Click number buttons (0-9) to input values
- **Operators**: Click +, −, ×, ÷ to perform calculations
- **Decimal**: Click . to add decimal points
- **Parentheses**: Use ( and ) for complex expressions
- **Percentage**: Click % to convert current value to percentage
- **Clear**: Click C to reset the calculator
- **Equals**: Click = to see the result
- **Theme Toggle**: Click the moon/sun icon to switch between light and dark themes

## Project Structure

```
src/
├── components/
│   ├── Calculator.js      # Main calculator component
│   ├── Calculator.css     # Calculator styles
│   ├── Button.js          # Reusable button component
│   └── Button.css         # Button styles
├── App.js                 # Main app component
├── App.css                # App styles
├── index.js               # App entry point
└── index.css              # Global styles
```

## Deployment

This app can be easily deployed to:

- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the `build` folder or connect your repository
- **GitHub Pages**: Use `npm run build` and deploy the `build` folder

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).