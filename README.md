# Week 10 — Brent Oil Change Point Analysis

📊 **Change Point Analysis and Statistical Modeling of Brent Oil Prices**

This project analyzes how significant geopolitical and economic events have impacted Brent oil prices using Bayesian Change Point Detection with PyMC3. It is part of a broader effort to provide data-driven insights to support investment decisions, policy formulation, and operational strategies in the energy sector.

---

## 📁 Project Structure
Week_10_brent_oil_changepoint_analysis/
├── data/
│ ├── raw/ # Original Brent oil price data
│ ├── processed/ # Cleaned data and log returns
│ └── key_events.csv # Event dataset: 15 key geopolitical/economic events
│
├── notebooks/
│ ├── 01_exploratory_data_analysis.ipynb # EDA, trend analysis, event overlays
│
├── outputs/
│ └── figures/ # Visualizations and plots
│
├── .gitignore
├── README.md
└── requirements.txt # Python dependencies


---

## 🧠 Objectives

- Detect structural breaks in Brent oil prices from 1987 to 2022.
- Associate significant events with identified change points.
- Quantify the impact of these events on price behavior.
- Communicate insights via code, report, and dashboards.

---

## ✅ Tasks

### ✅ Task 1: Laying the Foundation
- ✔️ Defined the data analysis workflow
- ✔️ Researched and compiled 30 key events
- ✔️ Conducted exploratory data analysis (EDA)
- ✔️ Analyzed stationarity and volatility
- ✔️ Documented assumptions & limitations

### 🔜 Task 2: Change Point Modeling
- Bayesian modeling using PyMC3
- Interpreting structural shifts
- Associating change points with events

### 🔜 Task 3: Dashboard Development
- Flask + React dashboard
- Interactive visualizations and event insights

---

## 📚 Technologies

- Python 3.10+
- PyMC3
- Matplotlib & Seaborn
- Pandas, NumPy
- Jupyter Notebooks

---

## 📂 Key Files

- `notebooks/01_exploratory_data_analysis.ipynb`: EDA, log returns, ADF test, key events overlay
- `data/key_events.csv`: 15 geopolitically significant events affecting oil prices

---

## 📈 Output Sample

_Example visualization: overlaying global events with Brent oil price movements._

![Sample Event Overlay](outputs/figures/event_overlay_plot.png)

---

## 🧪 Running the Notebook

Install dependencies and launch the notebook:

```bash
pip install -r requirements.txt
jupyter notebook


---

🔗 Author

Mewael Mizan Tesfay
