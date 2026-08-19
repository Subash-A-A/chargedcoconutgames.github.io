import { games } from "@/data/games";
import GameCard from "@/components/GameCard";
import styles from "./GamesSection.module.css";

export default function GamesSection() {
  return (
    <section className={styles.games} id="games">
      <div className={styles.label}>Games</div>
      <div className={styles.list}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
