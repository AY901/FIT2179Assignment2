const charts = [
  ["#fire-symbol-map", "specs/01_fire_symbol_map.json"],
  ["#fire-grid-map", "specs/02_fire_grid_map.json"],
  ["#fire-layered-trend", "specs/03_fire_layered_trend.json"],
  ["#fire-overview-detail", "specs/04_fire_overview_detail.json"],
  ["#fire-daynight", "specs/05_fire_daynight_stacked.json"],
  ["#fire-confidence", "specs/06_fire_confidence_monthly.json"],
  ["#air-site-map", "specs/07_air_site_map.json"],
  ["#air-pm25-lines", "specs/08_air_pm25_lines.json"],
  ["#air-heatmap", "specs/09_air_heatmap.json"],
  ["#air-pollutant-scatter", "specs/10_air_pollutant_scatter.json"],
  ["#health-ed-lines", "specs/11_health_ed_lines.json"],
  ["#health-small-multiples", "specs/12_health_small_multiples.json"],
  ["#health-sa4-rank", "specs/13_health_sa4_rank.json"],
  ["#mental-health", "specs/14_mental_health.json"],
  ["#coordinated-summary", "specs/15_coordinated_summary.json"],
];

const baseConfig = {
  font: "Inter, Arial, sans-serif",
  title: {
    font: "Inter, Arial, sans-serif",
    fontSize: 17,
    fontWeight: 800,
    color: "#fffaf0",
    subtitleFont: "Inter, Arial, sans-serif",
    subtitleFontSize: 12,
    subtitleColor: "#b8bdc6",
    anchor: "start",
    dy: -4,
  },
  axis: {
    labelFont: "Inter, Arial, sans-serif",
    labelFontSize: 11,
    labelColor: "#d4d8df",
    titleFont: "Inter, Arial, sans-serif",
    titleFontSize: 12,
    titleFontWeight: 700,
    titleColor: "#f1efe8",
    gridColor: "rgba(184, 189, 198, 0.16)",
    domainColor: "rgba(184, 189, 198, 0.36)",
    tickColor: "rgba(184, 189, 198, 0.36)",
  },
  legend: {
    labelFont: "Inter, Arial, sans-serif",
    labelFontSize: 11,
    labelColor: "#d4d8df",
    titleFont: "Inter, Arial, sans-serif",
    titleFontSize: 12,
    titleFontWeight: 700,
    titleColor: "#f1efe8",
    symbolStrokeWidth: 0,
  },
  header: {
    labelFont: "Inter, Arial, sans-serif",
    labelFontSize: 12,
    labelFontWeight: 700,
    labelColor: "#f1efe8",
    title: null,
  },
  view: {
    stroke: null,
  },
  background: "transparent",
};

async function renderChart(selector, specPath) {
  try {
    const response = await fetch(specPath);
    const spec = await response.json();
    spec.autosize = spec.autosize || { type: "fit", contains: "padding", resize: true };
    spec.config = {
      ...baseConfig,
      ...(spec.config || {}),
    };

    await vegaEmbed(selector, spec, {
      actions: false,
      renderer: "canvas",
    });
  } catch (error) {
    document.querySelector(selector).textContent = `Unable to load ${specPath}`;
    console.error(error);
  }
}

for (const [selector, spec] of charts) {
  renderChart(selector, spec);
}
