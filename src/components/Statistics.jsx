export default function Statistics(props) {
  return (
    <section class="statistics">
      <h2 class="title">{props.title}</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">{props.stats[0].label}</span>
          <span class="percentage">{props.stats[0].percentage}%</span>
        </li>
        <li class="item">
          <span class="label">{props.stats[1].label}</span>
          <span class="percentage">{props.stats[1].percentage}%</span>
        </li>
        <li class="item">
          <span class="label">{props.stats[2].label}</span>
          <span class="percentage">{props.stats[2].percentage}%</span>
        </li>
        <li class="item">
          <span class="label">{props.stats[3].label}</span>
          <span class="percentage">{props.stats[3].percentage}%</span>
        </li>
      </ul>
    </section>
  );
}
