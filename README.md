# 🛢️ Brent Oil Change Point Analysis

This project applies **Bayesian change point detection** to Brent crude oil price time series data. It includes:
- Exploratory analysis
- Bayesian modeling using PyMC3
- Correlation with key geopolitical/economic events
- Dashboard for interactive visualization
- Future extensions using VAR and Markov models

---

## 📁 Project Structure
bash ```
brent-oil-change-point-analysis/
│
├── 📁 data/
│ ├── brent_oil_prices.csv # Historical Brent oil price data
│ ├── key_events.csv # Manually compiled geopolitical, economic events with dates
│ ├── processed/ # Preprocessed/cleaned datasets (log returns, etc.)
│ └── raw/ # Original raw data backups
│
├── 📁 notebooks/
│ ├── 01_exploratory_data_analysis.ipynb # EDA, visualizations, stationarity analysis
│ ├── 02_bayesian_change_point_model.ipynb # PyMC3 modeling and inference
│ ├── 03_event_correlation_analysis.ipynb # Associating change points with events
│ └── 04_future_extensions_VAR_Markov.ipynb # Optional: for future work (advanced modeling)
│
├── 📁 src/ # Python source code for modeling and utils
│ ├── init.py
│ ├── data_loader.py # Functions to load and preprocess data
│ ├── change_point_model.py # Core Bayesian model (PyMC3)
│ ├── event_analysis.py # Match change points with events
│ ├── utils.py # Helper functions (e.g., log return, date formatting)
│ └── visualization.py # Matplotlib/Seaborn/Bokeh/Plotly plots
│
├── 📁 dashboard/
│ ├── 📁 backend/ # Flask API
│ │ ├── app.py # Flask app entry point
│ │ ├── routes.py # API endpoints
│ │ ├── models/ # Optional: Flask SQLAlchemy or data management
│ │ └── requirements.txt # Backend Python dependencies
│ │
│ └── 📁 frontend/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/ # API calls
│ │ └── App.js # Core chart dashboard
│ └── package.json
│
├── 📁 reports/
│ ├── interim_report.pdf # Task 1 deliverable
│ ├── final_report.pdf # Final PDF or blog-style report
│ ├── visuals/ # Saved plots, graphs, model diagnostics
│ 
│
├── .gitignore
├── README.md # Project overview, installation, usage
├── requirements.txt # Global Python dependencies (PyMC3, pandas, etc.)
└── environment.yml # Optional: Conda environment file
```

---

## 🧠 Key Concepts

- **Bayesian Change Point Detection** with PyMC3
- **Log Returns** for time series stationarity
- **Event Association** with geopolitical/economic triggers
- **Multivariate VAR Models** for future extensions
- **Interactive React Dashboard** with Flask API backend

---

## 🚀 Installation Guide

### 🐍 Set Up Python Environment

Option 1 – Using `conda`:

```bash
conda env create -f environment.yml
conda activate brent-oil
```
Option 2 – Using pip:

```bash
python -m venv venv
source venv/bin/activate   # or venv\Scripts\activate on Windows
pip install -r requirements.txt
```

⚙️ Run Flask Backend
cd dashboard/backend
pip install -r requirements.txt
python app.py

API will run on http://localhost:5000

🌐 Run React Frontend
cd dashboard/frontend
npm install
npm start


📘 Notebooks Overview
```bash
| Notebook File                           | Purpose                                                  |
| --------------------------------------- | -------------------------------------------------------- |
| `01_exploratory_data_analysis.ipynb`    | Load price data, compute log returns, visualize patterns |
| `02_bayesian_change_point_model.ipynb`  | Use PyMC3 for change point detection                     |
| `03_event_correlation_analysis.ipynb`   | Associate detected change points with real-world events  |
| `04_future_extensions_VAR_Markov.ipynb` | Extend using VAR model or Markov regime switching        |
```

🔬 Example Outputs

    📉 Log Return Series:
    Mean = x.xx, Volatility = x.xx

    🔍 Change Points Detected:
    e.g., 2008-09 Financial Crisis, 2020 COVID crash

    🔗 Event Matches:
    Change points aligned with major OPEC decisions, wars, pandemics


👨‍💻 Author

Mewael Mizan Tesfay