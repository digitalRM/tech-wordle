# Tech Wordle

A tech-themed version of the popular word-guessing game Wordle, featuring technology-related terms, programming concepts, and tech company names.

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone
cd techwordle
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to play the game.

## How to Play

1. You have 6 attempts to guess the 5-letter tech-related word
2. Type your guess using the keyboard or on-screen keys
3. Press Enter to submit your guess
4. The tiles will change color to show how close your guess was:
   - Green: Letter is correct and in the right position
   - Yellow: Letter is in the word but in the wrong position
   - Gray: Letter is not in the word

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the original [Wordle](https://www.nytimes.com/games/wordle) game
- Built with [Next.js](https://nextjs.org/)
