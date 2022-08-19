import React from 'react'

function Greeting(props) {
  console.log(props)
  return (
    <div>
      <h1>This greetings are from API</h1>
      {props.greetings.map((greeting) => {
          return(
            <div key={greeting.id}>
               <h2>{greeting.message}</h2> 
               <p>{greeting.body}</p>
            </div>
          );
      })}
    </div>
  );
}

export default Greeting