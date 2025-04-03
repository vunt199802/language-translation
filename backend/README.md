# PollyGlot Translation Backend

A FastAPI-based backend service that provides translation capabilities for the PollyGlot web application.

## Features

- Text translation support for multiple languages:
  - French
  - Spanish
  - Japanese
- RESTful API endpoints
- Asynchronous request handling
- Environment-based configuration

## Prerequisites

- Python 3.8 or higher
- Conda (Anaconda or Miniconda)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/47thommy/language-translation.git
cd language-translation/backend
```

2. Create and activate a conda environment:
```bash
conda create -n pollyglot python=3.11
conda activate pollyglot
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the backend directory with your configuration:
```env
OPENAI_API_KEY=your_api_key_here
```

## Project Structure

```
backend/
├── api/
│   └── routers/
│       └── translation_api.py
├── models/
│   └── api_models.py
├── services/
│   ├── setup.py
│   └── translation.py
├── .env
├── .gitignore
├── main.py
└── requirements.txt
```

## API Endpoints

### Translation Endpoint

- **URL**: `/translate`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "query": "Text to translate",
    "target_language": "French"
  }
  ```
- **Response**:
  ```json
  {
    "original_query": "Text to translate",
    "translated_query": "Translated text"
  }
  ```

## Running the Server

1. Activate the conda environment (if not already activated):
```bash
conda activate pollyglot
```

2. Start the server:
```bash
uvicorn main:app --reload
```

The server will start at `http://localhost:8000`

## Development

- API documentation is available at `http://localhost:8000/docs`
- OpenAPI specification is available at `http://localhost:8000/openapi.json`

## Error Handling

The API includes proper error handling for:
- Invalid input text
- Unsupported languages
- Translation service errors
- API authentication errors

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 