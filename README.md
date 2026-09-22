# Dev Insights - Mini Blog Platform

This is the foundation of the "Dev Insights" internal Mini Blog platform, built as part of the Formative 1 assessment.

## Project Setup & Running Locally

This project was bootstrapped using [Vite](https://vitejs.dev/) with React and TypeScript.

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. Clone this repository to your local machine.
2. Navigate into the project directory:
   ```bash
   cd "Formative 1 - Mini Blog Project"
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application
To start the development server, run:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port specified in your console).

### Testing / Building
To create a production build and test it locally:
```bash
npm run build
npm run preview
```

---

## Technical Decisions & Justifications

### Component Types (Functional vs. Class)
I chose to use **Functional Components** exclusively across the entire application (e.g., `Header`, `Post`, `PostList`, `App`). 
- **Justification:** Functional components are the modern standard for building React applications. They allow for a more concise syntax and, most importantly, enable the use of React Hooks (like `useEffect` used in our `withLogger` HOC) and functional optimization techniques like `React.memo`. Class components are largely considered legacy in the modern React ecosystem.

### Styling Methods
To meet the requirement of utilizing at least two styling methods, I implemented:
1. **External CSS (`src/styles/App.css`):** This is used for global resets, typography, and standard structural layout across the app. It keeps the components clean and separates structural concerns.
2. **Conditional Inline Styles (`src/components/Post/Post.tsx`):** Used to dynamically apply styles based on the component's props. 
   - A "New!" badge is dynamically displayed (and styled inline) if the post is less than 24 hours old.
   - Posts authored by a specific user ("Jane Doe") are highlighted with a distinct background color and border using inline styles evaluated at runtime.

### Optimization Strategies & HOCs
1. **`React.memo` (Component Optimization):** The `Post` component is wrapped in `React.memo()`. Because `PostList` renders a list of these components, `React.memo` ensures that an individual `Post` will skip re-rendering if its props haven't changed, significantly optimizing performance as the list grows.
2. **Unique `key` Props:** In `PostList.tsx`, when mapping over the `samplePosts` array, I ensured a unique `key={post.id}` prop is passed to each `Post` component, allowing React's reconciliation algorithm to efficiently update the DOM.
3. **Higher-Order Component (`withLogger`):** I created a simple HOC in `src/hocs/withLogger.tsx`. It utilizes the `useEffect` hook to log a message to the console whenever the wrapped component mounts and unmounts. This HOC has been successfully applied to the `Header` component.

---

## Reflection

**Challenges Faced & Overcome:**
During development, one of the primary technical challenges was ensuring the `withLogger` Higher-Order Component correctly maintained TypeScript typing constraints when wrapping functional components. Initially, dealing with generic types (`<P extends object>`) in the HOC wrapper required careful alignment with React's `FC` and `ComponentType` definitions. I overcame this by referring to the React TypeScript documentation, establishing a clear generic parameter for the props `P`, and passing `...props` securely down to the `WrappedComponent`. Additionally, dynamically calculating the "New!" badge condition required accurately parsing and comparing ISO date strings against the current time using native JS `Date` methods.

## External Libraries/Packages Used
- **React** & **React-DOM** (Core UI library)
- **Vite** (Build tool and development server)
- **TypeScript** (Static typing)
*(No additional third-party UI or utility libraries were used, keeping the project lightweight and focused on core React fundamentals).*
