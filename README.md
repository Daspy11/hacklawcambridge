# Nasir.AI - 2nd Place

This is the repo for team Nasir.AI who took 2nd place at Cambridge Hack The Law 2024. Everything here was built in a few hours ahead of our demo.

The code that checks your file for conditions and checks your database for contract breaches.

## Code organisation

The LLM logic can be found in files `backend/src/extractor.py`. Method `get_conditions` scans the file and extracts all the conditions in the contract.
Method `test_condition` will test every individual condition by generating a piece of executable Pandas code that queries the database and checks the correctness of the condition (or if it cannot be determined).
Method `test_a_doc` combines the two to collect all the information about the uploaded document.

The frontend code can be found in the `frontend2` folder. **Please disregard frontend folder, it contains disregarded code.**

## Includes

- [React](https://github.com/facebook/react) - JavaScript library for building user interfaces
- [Flask](https://github.com/pallets/flask) - Lightweight Python WSGI web application framework
- [ShadCN](https://ui.shadcn.com) - Component library
- [Pandas](https://pandas.pydata.org/) - Library for manipulating tabular data

## Dependencies

- [Docker](https://www.docker.com) & [Docker Compose](https://docs.docker.com/compose) - to build and run the app
- [Make](https://www.gnu.org/software/make/manual/make.html) - to easily run commands needed for development

## Getting Started

### 1. Install all dependencies
1.1. Install Node.js & Python if you haven't already
1.2. Install Vite `npm i -g vite`
1.3. Install required python package with `pip install -r requirements.txt`
1.4. Install required React packages with `cd frontend2` and then `npm run install`


### 2. Run chrome with CORS enabled
Our app bridges requests from different ports when running, so its necessary to first start a browser instance without CORS protections while working in development. In production, Docker makes this unnecessary.

**Windows**
`"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security`

**macOS**
`open -na "Google Chrome" --args --disable-web-security`

**Linux**
`google-chrome --disable-web-security`


### 3. Start the app

3.1. Navigate into the frontend2 folder, and then run `vite`
3.2. In the root directory in a separate terminal, run `make develop`

The frontend will be available at localhost:5173
