# Human-Autonomous System Interaction Survey — Interactive Website

Companion website for the literature review paper:

> **Analyzing the Behaviors of Pedestrians and Cyclists in Interactions with Autonomous Systems Using Controlled Experiments: A Literature Review**
> Danya Li, Wencan Mao, Francisco C. Pereira, Yu Xiao, Xiang Su, Rico Krueger
> *Transportation Research Part F: Traffic Psychology and Behaviour*, 2025
> [Read the paper →](https://www.sciencedirect.com/science/article/pii/S1369847825001950)

## What this site provides

An interactive, filterable table of **99 controlled experiments** (2014–2023) studying how pedestrians and cyclists behave when interacting with autonomous vehicles, shuttles, and delivery robots. Includes distribution charts for data collection methods, behavioral model families, scenario types, and road user groups.

## Structure

```
index.html          # Single-page application
assets/
  css/style.css     # Custom styles
  js/app.js         # Filter, sort, pagination, chart logic
data/
  studies.js        # STUDIES_DATA array (99 entries)
scripts/
  parse_studies.py  # Source script used to generate studies.js
```


## Citation

```bibtex
@article{li2025analyzing,
  title   = {Analyzing the Behaviors of Pedestrians and Cyclists in Interactions
             with Autonomous Systems Using Controlled Experiments: A Literature Review},
  author  = {Li, Danya and Mao, Wencan and Pereira, Francisco C. and
             Xiao, Yu and Su, Xiang and Krueger, Rico},
  journal = {Transportation Research Part F: Traffic Psychology and Behaviour},
  year    = {2025},
}
```
