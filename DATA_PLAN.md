# Data And Visualisation Plan

This project starts from the original files in `../A2` only. Existing processed files in the older `assign2` folder are not used.

## Raw Sources

- `A2/modis_2019_Australia.csv`
- `A2/modis_2020_Australia.csv`
- `A2/2019_All_sites_air_quality_hourly_avg_AIR-I-F-V-VH-O-S1-DB-M2-4-0.xlsx`
- `A2/2020_All_sites_air_quality_hourly_avg_AIR-I-F-V-VH-O-S1-DB-M2-4-0.xlsx`
- `A2/aihw-phe-276-Supplementary-tables.xlsx`

## Generated Data Files

- `data/fire_daily.csv`: daily fire count, total FRP, high-confidence count, day/night counts.
- `data/fire_weekly.csv`: weekly fire count and fire radiative power.
- `data/fire_monthly.csv`: monthly fire totals.
- `data/fire_grid.csv`: 0.5-degree grid aggregation for a fire intensity map.
- `data/fire_points_sample.csv`: sampled high-confidence vegetation fire detections for a symbol map.
- `data/air_daily.csv`: daily mean PM2.5, PM10, and visibility-reduction values by monitoring site.
- `data/air_weekly.csv`: weekly air-quality averages by parameter.
- `data/air_site_summary.csv`: site-level PM2.5 peak and exceedance counts.
- `data/air_pollutant_pairs.csv`: paired PM2.5 and PM10 daily values for scatter/bubble plots.
- `data/victoria_sa4_2021.geojson`: simplified official ABS ASGS 2021 SA4 boundaries for Victoria, used as internal map boundaries.
- `data/health_nsw_weekly.csv`: NSW weekly emergency department indicators by diagnosis and season.
- `data/health_indicator_weekly_change.csv`: weekly 2019-20 health indicator change compared with 2018-19.
- `data/health_sa4_weekly.csv`: SA4-level weekly GP, respiratory test, respiratory medication, and salbutamol indicators.
- `data/health_sa4_peak.csv`: peak SA4 health burden summaries.
- `data/mental_health_weekly.csv`: bushfire mental health MBS service use.

## Planned 15 Charts

1. Proportional symbol map of sampled MODIS fire detections.
2. Gridded fire intensity map.
3. Daily fire count and FRP layered time series.
4. Weekly fire trend with overview-detail brush.
5. Monthly day/night stacked bar chart.
6. High-confidence share by month.
7. PM2.5 monitoring-site peak symbol map.
8. Daily PM2.5 line chart by site.
9. PM2.5 site-by-date heatmap.
10. PM2.5 vs PM10 bubble/scatter plot.
11. NSW respiratory ED indicators by season.
12. Health indicator small multiples.
13. SA4 health burden ranked bar chart.
14. Mental health face-to-face vs telehealth stacked area/bar chart.
15. Combined fire-smoke-health coordinated view.

Most charts map directly to Week 7-10 studio idioms: bar charts, stacked bars, line/area charts, symbol maps, choropleth-like gridded maps, tooltips, selection filters, vconcat/hconcat, layers, and small multiples.
