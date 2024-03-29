# Card Component Readme

## Overview
The `Card` component is a React component designed to display detailed information about a college in a visually appealing card format. It includes various cells for displaying information such as ranking, name, location, course fee, average package, ratings, and whether the college is featured.

## Components and Libraries Used
- React: The component is built using React, a JavaScript library for building user interfaces.
- Card.css: Stylesheet for the `Card` component.
- INRIcon: Icon used for indicating currency.

## File Structure
- `Card.js`: Contains the main logic and JSX for the `Card` component.

## Functionality
1. **Rendering**: The component renders detailed information about a college in a structured card layout.
2. **Data Display**: Information such as ranking, name, location, course fee, average package, and ratings are displayed in different cells within the card.
3. **Featured Tag**: If a college is featured, a "Featured" tag is displayed prominently on the card.
4. **Icons**: Icons are used to visually enhance the display, such as the currency icon next to the course fee and average package.

## Code Explanation
- The code defines a functional component `Card` that accepts props for college details such as ranking, name, location, etc.
- JSX markup is used to structure the card layout with different cells for displaying various information.
- Conditional rendering is used to display the "Featured" tag only if the college is featured.
- Icons are imported and displayed next to relevant information for visual representation.
- CSS classes are used for styling the `Card` component.

## How to Use
To use the `Card` component in your React application:
1. Import the `Card` component.
2. Pass the necessary props (`ranking`, `name`, `city`, `state`, etc.) to populate the card with college details.
3. Place the `Card` component in your application's layout where you want to display information about colleges.

## Example
```jsx
import React from 'react';
import Card from './Card';

function App() {
  // Define college details

  return (
    <div>
      <Card 
        ranking={1}
        name="Example College"
        city="City"
        state="State"
        course="Example Course"
        course_fee="$1000"
        average_package="$50000"
        collegeduniya_rating={9.5}
        user_rating={8.7}
        featured={true}
      />
      {/* Other components and content */}
    </div>
  );
}

export default App;
