# Sway Bias Detection

This is the public repository of the Sway Bias Detection Project undertaken at the University of Wollongong

## Front-End

The front end sectition contains the front end API

## Back-End

The back end section contains the Machine Learning Model, test data etc.

## To Run Server

1. Download Flask & NodeJS
    ```
    https://nodejs.org/en/download/
    ```
2. Clone the Repository 
    ```
    git clone https://github.com/qtuan1401/Sway.git
    ```
3. Install Frontend requirements
    ```
    cd frontend
    npm install
    ```
4. Start Backend Server
    ```
    cd backend/flask-server
    ```
        - If on Windows
        ```
        .\venv\Scripts\activate
        ```
        - If on Mac
        ```
        source venv/Scripts/activate
        ```
    ```
    python3 run.py
    ```
5. Start Frontend Server
    ```
    cd frontend
    npm start
    ```