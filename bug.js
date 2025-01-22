```javascript
// MyComponent.js

function MyComponent() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      {/* Some content here */}
    </div>
  );
}

```
This code uses Tailwind CSS gradient, but it might produce unexpected results depending on the browser and its configuration.  The `bg-gradient-to-r` utility applies a gradient from left to right, but sometimes, the gradient might not render correctly or appear subtly different across browsers. 