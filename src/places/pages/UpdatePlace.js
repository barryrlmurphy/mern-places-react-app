import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Mountain of Power",
    imageUrl:
      "https://i.pinimg.com/originals/98/05/d8/9805d830026d43aa4f46794f4cc2bee2.jpg",
    address: "Stygia",
    description: "Seat of power for Thulsa Doom and his followers.",
    location: { lat: 62.8055102, lng: 99.571015 },
    creator: "u3",
  },
  {
    id: "p2",
    title: "Tower of the Serpent",
    imageUrl:
      "https://static.wikia.nocookie.net/conan/images/7/71/Tower_of_the_Serpent.jpg/revision/latest/scale-to-width-down/275?cb=20131022022919",
    address: "Stygia",
    description: "Temple for the worship of the snake God Set!",
    location: { lat: 68.4232544, lng: 109.4159828 },
    creator: "u3",
  },
  {
    id: "p3",
    title: "Zamora",
    imageUrl:
      "https://i.pinimg.com/originals/ce/a5/19/cea5192a244fc9ff4b371d2bc387e67e.jpg",
    address: "Zamora",
    description: "Capital city of King Osrics Kingdom of Zamora.",
    location: { lat: 67.957965, lng: 109.547819 },
    creator: "u1",
  },
  {
    id: "p4",
    title: "Cimmeria",
    imageUrl: "https://hyboria.xoth.net/maps/hwc_cimmeria.jpg",
    address: "Cimmeria",
    description:
      "Homeland of Conan. Cimmeria is in the far north west of Hyperboria. A tough and rugged place where the people match the land.",
    location: { lat: 72.000434, lng: 86.825358 },
    creator: "u2",
  },
];

const UpdatePlace = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData({
        title: {
          value: identifiedPlace.title,
          isValid: true,
        },
        description: {
          value: identifiedPlace.description,
          isValid: true,
        },
      });
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find this place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min length of 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
