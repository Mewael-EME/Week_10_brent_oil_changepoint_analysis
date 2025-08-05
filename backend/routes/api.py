from flask import Blueprint, jsonify
import pandas as pd

api_bp = Blueprint('api', __name__)


@api_bp.route('/prices', methods=['GET'])
def get_prices():
    df = pd.read_csv('data/brent_log_returns.csv', parse_dates=['Date'])

    # Clean: ensure Log_Returns is numeric
    df['Log_Returns'] = pd.to_numeric(df['Log_Returns'], errors='coerce')

    # Drop rows with NaNs in Log_Returns
    df = df[pd.notnull(df['Log_Returns'])]

    # Convert Date to YYYY-MM-DD format
    df['Date'] = df['Date'].dt.strftime('%Y-%m-%d')

    print("✅ Cleaned Data Length:", len(df))  # Debug
    return df.to_dict(orient='records')


@api_bp.route('/events', methods=['GET'])
def get_events():
    df = pd.read_csv('data/key_events.csv', parse_dates=['Date'])
    return jsonify(df.to_dict(orient='records'))  # ✅ Also wrap this

@api_bp.route('/changepoint', methods=['GET'])
def get_changepoint():
    import json
    with open('data/changepoint_results.json') as f:
        data = json.load(f)
    return jsonify(data)  # ✅ Already correct
