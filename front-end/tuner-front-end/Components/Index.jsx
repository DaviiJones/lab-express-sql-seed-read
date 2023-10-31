import { useState, useEffect } from "react";
import Song from "./Song"

const API = import.meta.env.VITE_BASE_URL;

function Songs(){
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch(`${API}/songs`)
          .then(response => response.json())
          .then((responseJSON) => {
            console.log(responseJSON);
            setSongs(responseJSON.data.payload);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
      return (
        <div className="Songs">
          <section>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Artist</th>
                  <th>Album</th>
                </tr>
              </thead>
              <tbody>
                {songs.map((song) => {
                  return <Song key={song.id} song={song} />;
                })}
              </tbody>
            </table>
          </section>
        </div>
      );
    }
    
    export default Bookmarks;
}