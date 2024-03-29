# TopBar Component Readme

## Overview
The `TopBar` component is a React component designed to provide search and sorting options for a list of colleges. It consists of a search input field and buttons for sorting by various criteria such as name, rank, fee, CD reviews, and user reviews.

## Components and Libraries Used
- React: The component is built using React, a JavaScript library for building user interfaces.
- TopBar.css: Stylesheet for the `TopBar` component.
- AscendingIcon and DescendingIcon: Icons used for indicating ascending and descending sorting.

## File Structure
- `TopBar.js`: Contains the main logic and JSX for the `TopBar` component.

## Functionality
1. **Search**: The component includes a search input field where users can enter a search query to filter colleges by name. The `onSearch` function is triggered whenever the search input changes.
2. **Sorting**: Users can sort colleges by various criteria using buttons provided in the `TopBar`. Sorting options include ascending and descending sorting for name, rank, fee, CD reviews, and user reviews. Clicking on the sorting buttons triggers the respective sorting functions (`onSortNameA`, `onSortNameD`, etc.).

## Code Explanation
- The code defines a functional component `TopBar` that accepts props for handling search and sorting functions.
- It includes JSX markup for rendering the search input field and sorting buttons.
- Event handlers are passed as props to handle user interactions such as input change and button clicks.
- Icons for ascending and descending sorting are imported and displayed next to the sorting buttons.
- CSS classes are used for styling the `TopBar` component.

## How to Use
To use the `TopBar` component in your React application:
1. Import the `TopBar` component.
2. Pass appropriate props (`onSearch`, `onSortNameA`, `onSortNameD`, etc.) to handle search and sorting functionality.
3. Place the `TopBar` component in your application's layout where you want the search and sorting options to appear.

## Example
```jsx
import React from 'react';
import TopBar from './TopBar';

function App() {
  // Define functions to handle search and sorting

  return (
    <div>
      <TopBar 
        onSearch={handleSearch}
        onSortNameA={handleSortNameAscending}
        onSortNameD={handleSortNameDescending}
        // Pass other sorting functions as props
      />
      {/* Other components and content */}
    </div>
  );
}

export default App;
