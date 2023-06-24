import css from './Statistics.module.css'
import randomColor from 'randomcolor';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title !== '' && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(el => (
          <li className={css.item} key={el.id}  style={{backgroundColor: randomColor()}}>
            <span className={css.label}>{el.label}</span>
            <span className={css.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
