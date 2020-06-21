import React from "react";
import Card from "./Card";
import { robots } from "./robots";
const CardList = () => {
  const cardComponent = robots.map((item) => (
    <Card id={item.id} name={item.name} email={item.email} />
  ));
  return (<div>
      {cardComponent}
  </div>);
};
export default CardList;
