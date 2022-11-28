import './App.css';
import Profile from "./Profile"
import Greeting from "./Greeting"
import Greetings from "./Greetings"

// React components
// A component is just a function that returns JSX
function App() {
  const user = {
    name: "Bob",
    email: "bob@ironhack.com",
    picture: "https://images.unsplash.com/photo-1456926631375-92c8ce872def",
}

  return (
    <div className="App">

      {/* Example 1 */}
      {/* Greeting component */}
      <section>
        <Greeting name="Matias" message="Hi" />
        <Greeting name="Audrey" message="Bonjour" />
        <Greeting name="Alex" message="Hello" />
      </section>

      {/* Example 2 */}
      {/* You can also use a component as a wrapper for other components with props.children */}
      {/* Just replace the self-closing tag with an opening and closing tag */}
      <Greetings>
        <Greeting name="Pablo" message="Hola"></Greeting>
        <Greeting name="Giana" message="Salve"></Greeting>
        <Greeting name="Akira" message="Konnichiwa"></Greeting>
      </Greetings>


      {/* Example 3 */}
      {/* Profile using multiple components */}
      <section>
        <Profile data={user} />
      </section>
    </div>
  )
}

export default App;
