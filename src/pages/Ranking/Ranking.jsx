import {useState, useEffect} from "React"
import './Ranking.css'

const Ranking = () => {

    const [cats, setCats] = useState(null);

    useEffect(() => {
        const fetchRanking = async () => {
            const response = await fetch("http://localhost:8080/cats/ranking");
            const responseParsed = await response.json();
            setCats(responseParsed);
        }
        fetchRanking();
    }, [])

    if (!cats) return <p className = "chargement">Chargement...</p>;

    const [first, second, third, ...rest] = cats;

  return (
    <div>
      <h1 className="ranking-title">Classement</h1>
      <div className="ranking-content">
        {[first, second, third].map((cat, index) => (
          <div className={`ranking-podium-cat r${index+1}`} key={cat.id + index}>
              <div className="ranking-superposition">
                  <img
                  src={cat.url}
                  alt={`Chat ${index+1}`}
                  title={`Chat ${index+1}`}
                  className={`ranking-cat-img r${index+1}`}
                  />
                  <div className={`ranking-nbr r${index+1}`}>{index+1}</div>
                </div>
                <div className="ranking-score">Score : {cat.score}pts</div>
            </div>
        ))}
      </div>
      <div className = "ranking-content">
        {rest.map((cat, index) => (
            <div className="ranking-cat" key={cat.id + index}>
              <div className="ranking-superposition">
                  <img
                  src={cat.url}
                  alt={`Chat ${index+4}`}
                  title={`Chat ${index+4}`}
                  className="ranking-cat-img"
                  />
                  <div className="ranking-nbr">{index+4}</div>
                </div>
                <div className="ranking-score">Score : {cat.score}pts</div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Ranking