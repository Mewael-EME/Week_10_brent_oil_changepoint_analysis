from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)  # <-- Add this line to enable CORS

@app.route('/api/prices')
def get_prices():
    df = pd.read_csv('data/brent_log_returns.csv')
    df = df.dropna(subset=['Log_Returns'])  # drop rows with missing Log_Returns
    df['Date'] = pd.to_datetime(df['Date']).dt.strftime('%Y-%m-%d')  # standardize format
    data = df[['Date', 'Log_Returns']].to_dict(orient='records')
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
