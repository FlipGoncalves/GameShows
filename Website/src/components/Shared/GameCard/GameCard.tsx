import { Link } from 'react-router-dom';
import './GameCard.css'

function GameCard({ link, img, title }: {link: string, img: string, title: string}) {
  return (
    <Link className="card" to={link} style={{backgroundImage:`url(${img})`}}>
        <div className='card-title'>
            {title}
        </div>
    </Link>
  )
}

export default GameCard