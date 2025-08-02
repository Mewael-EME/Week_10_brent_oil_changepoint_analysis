# Task 1 – Laying the Foundation for Brent Oil Change Point Analysis

## 1. Defining the Data Analysis Workflow

**Objective**  
To investigate how key geopolitical and economic events have influenced Brent crude oil prices over time using **Bayesian Change Point Analysis**.

### Workflow Steps:
1. **Data Acquisition**  
   - Load daily Brent oil prices (1987–2022).
   - Clean and convert data (e.g., date parsing).

2. **Exploratory Data Analysis (EDA)**  
   - Plot raw prices, identify trends and volatility.
   - Convert to log returns to address non-stationarity.
   - Perform stationarity checks (rolling stats, ADF test).

3. **Event Dataset Compilation**  
   - Research and document 10–15 impactful global events.
   - Align dates to time series.

4. **Model Building (PyMC3)**  
   - Define Bayesian change point model.
   - Use MCMC to sample posterior of switch point and parameters.

5. **Interpretation**  
   - Detect structural breaks.
   - Match change points to real-world events.
   - Quantify change magnitude (e.g., shift in mean price).

6. **Communication**  
   - Develop a report and dashboard for:
     - Investors
     - Policymakers
     - Energy companies

---

## 2. Event Data Compilation

See `data/key_events.csv` for a structured list of 15 major geopolitical and economic events with approximate dates.

---

## 3. Assumptions and Limitations

**Assumptions:**
- Brent oil price reflects macroeconomic and geopolitical shocks.
- Behavioral shifts in price can be modeled as discrete structural breaks.

**Limitations:**
- **Correlation is not causation:** Events may align with change points, but causal claims are not proven.
- Market reactions may precede or lag events.
- Exclusion of other macroeconomic variables (e.g., interest rates).

---

## 4. Communication Strategy

**Stakeholders:**
- Investors, Policymakers, Energy Companies

**Formats:**
- React + Flask interactive dashboard
- Blog-style final report (Markdown → PDF)
- GitHub repository for full reproducibility

---

## 5. Understanding the Model and Data

**Key Concepts:**
- Time series properties: trend, volatility clustering, stationarity
- Change point detection: segmenting regimes of stable behavior
- Bayesian modeling: Probabilistic treatment of uncertainty

**Outputs:**
- Dates of change points
- Mean/variance estimates before and after each change
- Posterior distributions, credibility intervals

**Limitations:**
- Change point overlaps
- Unexplained shifts
- Model sensitivity to priors and assumptions

---

## 📁 Deliverables
- `data/key_events.csv`
- `notebooks/01_exploratory_data_analysis.ipynb`
- `reports/interim_report.md`