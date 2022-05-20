import React from "react";
import Layout from "./components/layout";

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/8569519?v=4"
            aria-hidden
            alt="Picture of user"
          />
          <h1>Emerson Carvalho</h1>
          <h3>Username: </h3>
          <span>brecarv</span>
          <div>
            <div>
              <h4>Followers</h4>
              <span>10</span>
            </div>
            <div>
              <h4>Starreds</h4>
              <span>10</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>10</span>
            </div>
          </div>
        </div>

        <div>Repositories</div>

        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
