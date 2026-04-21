import {useState, useEffect, useContext} from "React"
import {HeaderContext} from "../../components/Header/Header"
import CatCard from "../../components/CatCard/CatCard"
import "./Vote.css"

const Vote = () => {

    const { fetchNbrVotes } = useContext(HeaderContext);
    
    const [cats, setCats] = useState(null);

    const fetchTwoRandomCats = async () => {
        const response = await fetch("http://localhost:8080/cats/get_two_random_cats");
        const responseParsed = await response.json();
        setCats(responseParsed);
      }

    useEffect(() => {
      fetchTwoRandomCats();
    }, []);

    const handleClick = async (e, winnerId, loserId) =>  {
        e.preventDefault();
        await fetch("http://localhost:8080/votes/vote", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ winnerId, loserId })
        });
        await fetchTwoRandomCats();
        await fetchNbrVotes();
    };

  if (!cats) return <p className = "chargement">Chargement...</p>;

  return (
    <div>
      <h1 className="vote-title">Votez pour le chat le plus mignon</h1>
      <div className="vote-content">
        <CatCard nom="Chat 1" cat={cats[0]} otherCat={cats[1]} handleClick={handleClick}/>
        <CatCard nom="Chat 2" cat={cats[1]} otherCat={cats[0]} handleClick={handleClick}/>
      </div>
    </div>
  )
}

export default Vote