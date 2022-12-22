import React , {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokemonArray, setPokemonArray}) {
  const [form, setForm] = useState({
    name : "",
    hp : "",
    frontUrl : "",
    backUrl : "",
  });

  let handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value,
    })
  }

  function handleSubmit(e) {
    const newPokemon = {
      name: form.name,
      hp: form.hp,
      sprites: {
        front: form.frontUrl,
        back: form.backUrl,
      },
    }
    e.preventDefault();
    fetch("http://localhost:3001/pokemon" , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
    .then(response => response.json())
    .then((data) => setPokemonArray([data, ...pokemonArray]))
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input onChange={handleChange} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={handleChange} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
           onChange = {handleChange} 
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange = {handleChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
