import { Link } from 'react-router-dom';
import './GameCard.css'
import Card from 'react-bootstrap/Card';

function GameCard({ link, img, title }: {link: string, img: string, title: string}) {
  return (
    <Link className="col-4" to={link}>
        <h2 className="card-title">{title}</h2>
        <Card className="game-card" style={{ width: "580px", height: "350px" }}>
          <Card.Img className="game-card-img" src={img} />
        </Card>
    </Link>
  )
}

export default GameCard