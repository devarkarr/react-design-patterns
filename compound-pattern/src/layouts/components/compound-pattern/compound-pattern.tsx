import Card from "./card";

const CompoundPattern = () => {
  return (
    <>
      <Card value="card header">
        <Card.Header>
          <h1>Card Header</h1>
        </Card.Header>
        <Card.Body>
          <h1>Card Content</h1>
        </Card.Body>
        <Card.Footer>
          <h1>Card Footer</h1>
        </Card.Footer>
      </Card>
    </>
  );
};

export default CompoundPattern;
