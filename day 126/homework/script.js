// code academy


// 1
// const items = ["Apple", "Banana", "ananas"];

// function App() {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// }


// 2

// const imageDetails = {
//     src: "image.png",
//     alt: "veshapi",
//   };
  
//   function App() {
//     return <img src={imageDetails.src} alt={imageDetails.alt} />;
//   }
  
// 3 

// const isLoggedIn = false;

// function App() {
//   return (
//     <div>
//       {isLoggedIn ? <h1>Welcome</h1> : <h1>Please log in</h1>}
//     </div>
//   );
// }

// 4

// const isDarkMode = true;
// const styles = {
//   backgroundColor: isDarkMode ? "black" : "white",
//   color: isDarkMode ? "white" : "black",
//   padding: "50px",
// };

// function App() {
//   return <div style={styles}>dinamic color changer ni55er to 255 255 255</div>;
// }

// 5

// function Greeting() {
//     return <h1>Hello</h1>;
//   }
  
//   function App() {
//     return (
//       <div>
//         {Greeting()}
//       </div>
//     );
//   }


// 6

// const name = "Jemal";
// const age = 30;

// function App() {
//   return <p>{`${name} is ${age} years old.`}</p>;
// }

// 7

// const h1 = "h1";

// function App() {
//   return <h1>ERM</h1>;
// }


// 9

// const users = [
//     { name: "Sandro", age: 12 },
//     { name: "bondo", age: 33 },
//     { name: "aleko", age: 87 },
//   ];
  
//   function App() {
//     return (
//       <table border="1">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={index}>
//               <td>{user.name}</td>
//               <td>{user.age}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }
  
// 10

// const greeting = "Hello";
// const name = "Guka";

// function App() {
//   return <p>{`${greeting}, ${name}!`}</p>;
// }

