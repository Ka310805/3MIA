import Card from 'react-bootstrap/Card';

function CardExample() {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="perfume.png" />
      </Card>

      <Card style={{ width: '28rem' }}>
        <Card.Img variant="top" src="rolinho.png" />
      </Card>

      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src="skincara.png" />
      </Card>
    </div>
  );
}

export default CardExample;