## Prerequisites

Make sure you have the following installed before running the project:

- **Node.js**: Version 14.x or higher
- **npm**: Comes with Node.js, or you can use **yarn** as an alternative.

## Getting Started

Follow these steps to install dependencies, run the project, and build it for production.

### 1. Installation

First, clone the repository and navigate to the project directory:

Then, install the dependencies:

```bash
npm install
```

### 2. Running the Development Server

To start the development server:

```bash
npm run dev
```

This will launch the app and you can view it in your browser at: [http://localhost:5173]

By default, Vite uses port `5173`, but you can change this in the Vite config.

### 3. Building for Production

To create an optimized production build, run:

```bash
npm run build
```

This will generate the production-ready files in the `dist` directory.

### 4. Previewing the Production Build

After building the project, you can preview the build locally using:

```bash
npm run preview
```

This serves the `dist` folder at [http://localhost:4173] so you can test the production build.

## Scripts

- **`npm run dev`**: Starts the development server
- **`npm run build`**: Builds the app for production
- **`npm run preview`**: Previews the production build
