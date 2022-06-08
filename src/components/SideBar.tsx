import { useEffect } from "react";
import { api } from "../services/api";
import { Button } from "./Button";

import "../styles/sidebar.scss";
import "../styles/content.scss";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface Props {
  genres: Array<GenreResponseProps>
  handleClickButton: any
}



export function SideBar({genres, handleClickButton}: Props) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={true}
          />
        ))}
      </div>
    </nav>
  );
}
