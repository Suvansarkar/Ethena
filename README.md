# Ethena

## Description
A NextJS + ExpressJS based examination platform for students.

## Prerequisites
List the software and tools required to run the program:
- Node JS

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Suvansarkar/Ethena.git
    ```
2. Navigate to the project directory:
    ```bash
    cd your-repo-name
    ```
3. Install the required dependencies for backend:
    ```bash
    cd backend
    npm install
    ```
4. Install the required dependencies for frontend:
    ```bash
    cd exam-platform 
    npm install --legacy-peer-deps
    ```

## Environment Variables:

### Frontend:

Include the following (both are the same):

`NEXT_PUBLIC_BACKEND=` \
`BACKEND=`


### Backend:

Include the follwing:

```
PORT=
MONGO_URI=
```


## Usage (Development)

1. Run the backend:
    ```base
    cd backend
    npm run dev
    ```
1. Run the frontend:
    ```bash
    cd exam-platform
    npm run dev
    ```

## Usage (Production):

1. Frontend:
```bash
cd exam-platform
npm install --legacy-peer-deps
npm run build
npm run start 
```
2. Backend:
```bash
cd backend
npm install
npm run dev
```

## Contributing
Guidelines for contributing to the project.

## License
Include the license information.

## Contact
Provide contact information for further queries.