import type { Game } from "@/data/games";
import { gameVisuals } from "@/components/visuals";
import PlayButton from "@/components/PlayButton";
import styles from "./GameCard.module.css";

export default function GameCard({ game }: { game: Game }) {
  const Visual = gameVisuals[game.id];

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={`${styles.tag} ${styles[game.tagAccent]}`}>{game.tag}</div>

        <div className={styles.title}>
          {game.titleMain}
          <span className={styles[game.titleAccentColor]}>{game.titleAccent}</span>
        </div>

        <p className={styles.desc}>{game.description}</p>

        <div className={styles.badges}>
          {game.badges.map((badge) => (
            <span key={badge} className={styles.badge}>
              {badge}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {game.links.map((link) => (
            <PlayButton key={link.label} {...link} />
          ))}
        </div>
      </div>

      <div className={styles.visual}>{Visual ? <Visual /> : null}</div>
    </div>
  );
}
