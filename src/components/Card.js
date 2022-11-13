// import React from "react";
// import Card from "react-bootstrap/Card";
// import { LinkContainer } from "react-router-bootstrap";

// function CardItem({ user }) {
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Body>
//         <Card.Title>{user?.username || "username"}</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Hobbies</Card.Subtitle>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <LinkContainer to="/profile">
//           <Card.Link>{user?.soical_link || "social links"}</Card.Link>
//         </LinkContainer>
//         <LinkContainer to="/profile">
//           <Card.Link>Social links</Card.Link>
//         </LinkContainer>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CardItem;
const Card = ({ user }) => {
  return (
    <div className="flex-1 border-2 border-orange-400 rounded-md content-center	flex flex-col items-center gap-y-4 py-3">
      <p className="text-xs">{user?.city || "Chưa có"}</p>
      <div className="img w-[100px] h-[100px] rounded-full border-4 border-orange-400">
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      <h2 className="text-2xl font-semibold">{user?.username || "username"}</h2>
      <div className="flex w-full gap-x-5 justify-center">
        <span className="p-3 text-xs border-2 border-orange-400 rounded-lg">
          Basketball
        </span>
        <span className="p-3 text-xs border-2 border-orange-400 rounded-lg">
          JAV
        </span>
        <span className="p-3 text-xs border-2 border-orange-400 rounded-lg">
          Football
        </span>
      </div>
      <button className="px-4 py-2 text-white bg-orange-400 rounded-md">
        View more
      </button>
    </div>
  );
};

export default Card;
