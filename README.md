# Nasir.AI web app

The code that checks your file for conditions and checks your database for contract breaches.

## Code organisation

The LLM logic can be found in files `backend/src/extractor.py`. Method `get_conditions` scans the file and extracts all the conditions in the contract.
Method `test_condition` will test every individual condition by generating a piece of executable Pandas code that queries the database and checks the correctness of the condition (or if it cannot be determined).
Method `test_a_doc` combines the two to collect all the information about the uploaded document.

The frontend code can be found in the `frontend2` folder. **Please disregard frontend folder, it contains disregarded code.**


## Includes

- [React](https://github.com/facebook/react) - JavaScript library for building user interfaces
- [Flask](https://github.com/pallets/flask) - lightweight WSGI web application framework
- [ShadCN](https://ui.shadcn.com) - component library
- [Pandas](https://pandas.pydata.org/) - Library for manipulating tabular data

## Dependencies

- [Docker](https://www.docker.com) & [Docker Compose](https://docs.docker.com/compose) - to build and run the app
- [Make](https://www.gnu.org/software/make/manual/make.html) - to easily run commands needed for development

## Getting Started

- Install dependencies
- Run `make develop` at the root of this project.
- Visit the app at http://localhost:5173.
- Visit http://localhost:8080/api/v1/files to list objects in LocalStack s3 bucket.
