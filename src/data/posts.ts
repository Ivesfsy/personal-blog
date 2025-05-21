export interface Post {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  imageUrl: string;
  excerpt: string;
  content: string;
}

export const featuredPosts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    author: 'Jane Smith',
    date: 'June 12, 2023',
    category: 'Technology',
    tags: ['React', 'TypeScript', 'Web Development'],
    imageUrl: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    excerpt: 'Learn how to setup a new project with React and TypeScript to build modern web applications with type safety.',
    content: `
      # Getting Started with React and TypeScript

      React is a popular JavaScript library for building user interfaces, and TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Combining these technologies can lead to more robust applications with fewer runtime errors.

      ## Why TypeScript with React?

      TypeScript provides static type checking, which can catch errors during development rather than at runtime. This is especially valuable in large React applications where components pass props around and maintaining type consistency is crucial.

      ## Setting Up Your Development Environment

      To start a new React project with TypeScript, you can use Create React App with the TypeScript template:

      \`\`\`bash
      npx create-react-app my-app --template typescript
      \`\`\`

      This will set up a new React project with TypeScript configurations ready to go.

      ## Key Benefits

      - **Type Safety**: Catch type errors at compile time
      - **Better IDE Support**: Get autocomplete and inline documentation
      - **Improved Refactoring**: Make changes with confidence
      - **Self-Documenting Code**: Types serve as documentation

      ## Simple Component Example

      \`\`\`tsx
      import React from 'react';

      interface ButtonProps {
        text: string;
        onClick: () => void;
        disabled?: boolean;
      }

      const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false }) => {
        return (
          <button onClick={onClick} disabled={disabled}>
            {text}
          </button>
        );
      };

      export default Button;
      \`\`\`

      By defining the \`ButtonProps\` interface, we ensure that the component receives the correct props with the correct types.
    `
  },
  {
    id: '2',
    title: 'The Art of Mindful Living',
    author: 'Michael Johnson',
    date: 'May 28, 2023',
    category: 'Lifestyle',
    tags: ['Mindfulness', 'Wellness', 'Mental Health'],
    imageUrl: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
    excerpt: 'Discover practical techniques for incorporating mindfulness into your daily routine and improving your overall well-being.',
    content: `
      # The Art of Mindful Living

      In our fast-paced world, practicing mindfulness can help us stay grounded and reduce stress. This article explores practical ways to incorporate mindfulness into your daily life.

      ## What is Mindfulness?

      Mindfulness is the practice of being fully present and engaged in the current moment, aware of your thoughts and feelings without distraction or judgment.

      ## Benefits of Mindful Living

      - Reduced stress and anxiety
      - Improved focus and concentration
      - Better sleep quality
      - Enhanced emotional regulation
      - Greater overall well-being

      ## Simple Mindfulness Practices

      ### 1. Mindful Breathing

      Take 5 minutes each day to focus solely on your breath. Notice the sensation of air entering and leaving your body. When your mind wanders, gently bring your attention back to your breath.

      ### 2. Mindful Eating

      Pay full attention to the experience of eating. Notice the colors, smells, textures, and tastes of your food. Eat slowly and without distractions like TV or smartphones.

      ### 3. Mindful Walking

      While walking, focus on the sensation of your feet touching the ground. Notice the movement of your legs and the rhythm of your breathing. Observe your surroundings with curiosity.

      ## Incorporating Mindfulness into Daily Life

      Start small by dedicating just 5-10 minutes a day to a mindfulness practice. Gradually increase the time as it becomes a natural part of your routine. Remember, mindfulness is not about perfection—it's about consistent practice and gentle awareness.
    `
  },
  {
    id: '3',
    title: 'Exploring the Hidden Gems of Portugal',
    author: 'Sarah Williams',
    date: 'April 15, 2023',
    category: 'Travel',
    tags: ['Portugal', 'Europe', 'Travel Tips'],
    imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    excerpt: 'Venture beyond Lisbon and Porto to discover the charming small towns and breathtaking landscapes of Portugal.',
    content: `
      # Exploring the Hidden Gems of Portugal

      Portugal has become an increasingly popular destination, but many visitors stick to the major cities of Lisbon and Porto. This guide will help you discover the lesser-known but equally magical places throughout this beautiful country.

      ## Alentejo Region

      The Alentejo region covers nearly a third of Portugal but contains only 7% of its population. Here you'll find:

      - **Évora**: A UNESCO World Heritage city with Roman ruins and the eerie Chapel of Bones
      - **Monsaraz**: A medieval walled village with stunning views of the Alqueva Reservoir
      - **Comporta**: Pristine beaches and rice fields just south of Lisbon

      ## Central Portugal

      The center of Portugal offers charming historic towns and natural beauty:

      - **Óbidos**: A perfectly preserved medieval town surrounded by ancient walls
      - **Nazaré**: Famous for its gigantic waves and traditional fishing culture
      - **Serra da Estrela**: Portugal's highest mountain range with hiking trails and ski slopes

      ## The Azores

      This autonomous region consists of nine volcanic islands in the middle of the Atlantic Ocean. Highlights include:

      - **São Miguel**: The largest island with crater lakes, hot springs, and lush landscapes
      - **Pico**: Home to Portugal's highest mountain and UNESCO-protected vineyards
      - **Flores**: Known for its abundant waterfalls and untouched nature

      ## Travel Tips

      - Rent a car to explore the countryside at your own pace
      - Visit during shoulder seasons (April-May or September-October) for pleasant weather and fewer crowds
      - Learn a few basic Portuguese phrases—locals appreciate the effort
      - Try regional specialties in each area you visit—Portuguese cuisine varies greatly by region

      Portugal's charm extends far beyond its famous cities. By venturing off the beaten path, you'll discover authentic experiences and create memories that will last a lifetime.
    `
  }
];

export const allPosts: Post[] = [
  ...featuredPosts,
  {
    id: '4',
    title: 'The Ultimate Guide to Homemade Pasta',
    author: 'Marco Rossi',
    date: 'March 5, 2023',
    category: 'Food',
    tags: ['Cooking', 'Italian', 'Recipes'],
    imageUrl: 'https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    excerpt: 'Learn how to make delicious pasta from scratch with simple ingredients and techniques that anyone can master.',
    content: `
      # The Ultimate Guide to Homemade Pasta

      There's nothing quite like the taste and texture of fresh homemade pasta. In this guide, I'll walk you through the process of making perfect pasta from scratch.

      ## Basic Pasta Dough Recipe

      **Ingredients:**
      - 2 cups (300g) all-purpose flour or "00" flour
      - 3 large eggs
      - 1/2 teaspoon salt
      - 1 tablespoon olive oil (optional)
      - Water as needed

      **Instructions:**

      1. **Create a well:** On a clean work surface, create a mound of flour with a well in the center.
      2. **Add eggs:** Crack the eggs into the well, add salt and olive oil.
      3. **Mix gradually:** Using a fork, gradually incorporate flour from the edges into the eggs.
      4. **Knead:** Once a rough dough forms, knead for 8-10 minutes until smooth and elastic.
      5. **Rest:** Wrap the dough in plastic wrap and let it rest for at least 30 minutes.

      ## Rolling and Cutting

      You can roll pasta by hand with a rolling pin or use a pasta machine for consistent thickness. For hand-rolling:

      1. Divide the dough into manageable pieces.
      2. Roll each piece as thin as possible, aiming for almost translucent.
      3. Dust with flour, gently fold, and cut to your desired width.

      ## Types of Pasta You Can Make

      - **Fettuccine/Tagliatelle:** Cut into 1/4-inch wide strips
      - **Pappardelle:** Cut into 3/4-inch wide strips
      - **Farfalle (Bow Ties):** Cut rectangles and pinch in the middle
      - **Ravioli:** Fill and seal between two pasta sheets

      ## Cooking Fresh Pasta

      Fresh pasta cooks much faster than dried:

      1. Bring salted water to a rolling boil.
      2. Add pasta and cook for just 2-3 minutes until al dente.
      3. Reserve some pasta water before draining.

      ## Pairing Sauces

      - Lighter pastas work well with oil-based or light cream sauces
      - Thicker cuts can stand up to heartier meat ragùs
      - Filled pastas are often best with simple butter or sage sauces

      Making your own pasta does take practice, but the results are well worth the effort. Once you master the basic technique, you can experiment with different flours, add herbs to the dough, or try making colored pasta using ingredients like spinach or beet juice.
    `
  },
  {
    id: '5',
    title: 'Building a Sustainable Wardrobe',
    author: 'Emma Peterson',
    date: 'February 18, 2023',
    category: 'Lifestyle',
    tags: ['Fashion', 'Sustainability', 'Minimalism'],
    imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    excerpt: 'Discover how to create a versatile and eco-friendly wardrobe that reflects your personal style without harming the planet.',
    content: `
      # Building a Sustainable Wardrobe

      Fast fashion has a devastating impact on our environment and on workers in the garment industry. In this article, I'll share how to build a wardrobe that's both stylish and sustainable.

      ## Understanding the Problem

      The fashion industry is responsible for:
      - 10% of global carbon emissions
      - 20% of global wastewater
      - 85% of textiles ending up in landfills each year

      ## Principles of a Sustainable Wardrobe

      ### 1. Quality Over Quantity

      Invest in well-made pieces that will last for years rather than cheap items that fall apart after a few wears. Look for:
      - Natural, durable materials
      - Solid construction and stitching
      - Classic styles that won't quickly go out of fashion

      ### 2. Research Brands

      Support companies that prioritize:
      - Ethical manufacturing practices
      - Fair wages and safe working conditions
      - Sustainable materials and production methods
      - Transparency about their supply chain

      ### 3. Embrace Secondhand

      Shopping secondhand is one of the most sustainable ways to refresh your wardrobe:
      - Thrift stores and vintage shops
      - Online platforms like ThredUp, Poshmark, or Depop
      - Clothing swaps with friends
      - Rental services for special occasion wear

      ## Creating a Capsule Wardrobe

      A capsule wardrobe consists of a limited number of versatile, high-quality pieces that can be mixed and matched:

      1. **Audit your existing clothes** - What do you actually wear? What makes you feel good?
      2. **Identify your personal style** - Create a mood board if it helps
      3. **Choose a color palette** - This ensures everything works together
      4. **Select versatile basics** - Items that can be styled multiple ways
      5. **Add a few statement pieces** - To express your personality

      ## Caring for Your Clothes

      Extend the life of your garments with proper care:
      - Wash clothes less frequently and at lower temperatures
      - Air dry when possible
      - Learn basic mending skills or find a good tailor
      - Store items properly (especially knitwear and delicates)

      Building a sustainable wardrobe is a journey, not an overnight transformation. Start by making more conscious choices going forward, and gradually replace fast fashion items with more sustainable alternatives as they wear out.
    `
  },
  {
    id: '6',
    title: 'Introduction to Functional Programming',
    author: 'Alex Chen',
    date: 'January 30, 2023',
    category: 'Technology',
    tags: ['Programming', 'Functional Programming', 'Software Development'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    excerpt: 'Explore the core concepts of functional programming and learn how they can lead to cleaner, more maintainable code.',
    content: `
      # Introduction to Functional Programming

      Functional programming (FP) is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. Let's explore the key concepts and benefits of this approach.

      ## Core Principles of Functional Programming

      ### 1. Pure Functions

      A pure function:
      - Given the same inputs, always returns the same output
      - Has no side effects (doesn't modify external state)
      - Doesn't rely on external state

      **Example:**

      \`\`\`javascript
      // Pure function
      function add(a, b) {
        return a + b;
      }

      // Impure function (relies on external state)
      let total = 0;
      function addToTotal(value) {
        total += value;
        return total;
      }
      \`\`\`

      ### 2. Immutability

      In FP, data cannot be changed after it's created. Instead of modifying existing data, functions create new data structures.

      \`\`\`javascript
      // Non-functional approach (mutating array)
      function addItem(array, item) {
        array.push(item);
        return array;
      }

      // Functional approach (creating new array)
      function addItem(array, item) {
        return [...array, item];
      }
      \`\`\`

      ### 3. First-Class and Higher-Order Functions

      Functions are treated as first-class citizens, meaning they can be:
      - Assigned to variables
      - Passed as arguments to other functions
      - Returned from functions

      Higher-order functions either take functions as arguments or return functions.

      \`\`\`javascript
      // Higher-order function
      function multiplyBy(factor) {
        return function(number) {
          return number * factor;
        };
      }

      const double = multiplyBy(2);
      const triple = multiplyBy(3);

      console.log(double(5)); // 10
      console.log(triple(5)); // 15
      \`\`\`

      ## Benefits of Functional Programming

      - **Predictability**: Pure functions are easier to reason about
      - **Testability**: Functions with no side effects are easier to test
      - **Parallelization**: Without shared state, parallel processing is safer
      - **Modularity**: Composable functions create better abstractions
      - **Debugging**: Immutability makes tracking state changes simpler

      ## Functional Programming Languages and Libraries

      While some languages are designed specifically for FP (like Haskell, Clojure, and Elm), many mainstream languages now support functional programming concepts:

      - **JavaScript**: Libraries like Lodash/fp, Ramda, or Immutable.js
      - **Python**: The functools module and libraries like toolz
      - **Java**: Features added in Java 8 (lambdas, Stream API)
      - **C#**: LINQ and functional features in .NET

      ## Getting Started with Functional Programming

      You don't need to adopt FP completely to benefit from it. Start by:

      1. Writing more pure functions
      2. Avoiding state mutations when possible
      3. Using map, filter, and reduce instead of loops with side effects
      4. Practicing function composition

      Functional programming may require a shift in thinking if you're used to imperative or object-oriented styles, but the benefits in code quality and maintainability make it worth exploring.
    `
  }
]; 