# SmartCode AI Assistant

## Overview

SmartCode AI Assistant is an AI-powered coding assistant built using FastAPI, TinyLlama, LoRA Fine-Tuning, Transformers, and NLP techniques.

The system is designed to answer programming-related questions, generate code snippets, explain coding concepts, and assist developers through a simple web interface.

This project demonstrates practical implementation of Large Language Models (LLMs), Parameter Efficient Fine-Tuning (PEFT), LoRA, Natural Language Processing (NLP), and Transformer architectures.

---

## Features

- AI-powered coding assistant
- Generates programming solutions
- Explains coding concepts
- Supports natural language coding queries
- Fine-tuned TinyLlama model
- REST API using FastAPI
- Interactive frontend interface
- LoRA-based efficient model training
- Faster inference compared to full model retraining

---

## Technologies Used

### Artificial Intelligence
- Large Language Models (LLMs)
- Transformer Architecture
- Natural Language Processing (NLP)
- LoRA Fine-Tuning
- PEFT (Parameter Efficient Fine Tuning)

### Backend
- FastAPI
- Python

### Machine Learning Libraries
- PyTorch
- Transformers
- Hugging Face
- PEFT
- Accelerate
- SentencePiece

### Frontend
- React.js
- HTML
- CSS
- JavaScript

---

## Project Architecture

User Query
↓
React Frontend
↓
FastAPI Backend
↓
Fine-Tuned TinyLlama Model
↓
Generated Response
↓
Frontend Display

---

## Model Information

**Base Model:** TinyLlama/TinyLlama-1.1B-Chat-v1.0

**Fine-Tuning Technique:** LoRA (Low Rank Adaptation)

**Task Type:** Causal Language Modeling

**Training Framework:** Hugging Face Transformers

---

## Dataset Format

Training data follows an Instruction-Answer format:

**Instruction:**
Write a Python program for Binary Search

**Answer:**
```python
def binary_search(arr, target):
    left, right = 0, len(arr)-1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/sharvani1357/smartcode-ai-assistant.git
cd smartcode-ai-assistant
```

### Create Virtual Environment

```bash
python -m venv venv
```

### Activate Environment

**Windows**
```bash
venv\Scripts\activate
```

**Linux / Mac**
```bash
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Running Backend

```bash
uvicorn api:app --reload
```

Backend URL:

```text
http://localhost:8000
```

---

## Running Frontend

```bash
npm install
npm start
```

Frontend URL:

```text
http://localhost:3000
```

---

## API Endpoint

### POST /ask

Request:

```json
{
  "prompt": "Write a Python program for Binary Search"
}
```

Response:

```json
{
  "response": "Generated AI response"
}
```

---

## Learning Outcomes

Through this project, the following concepts were explored:

- Large Language Models (LLMs)
- Transformers
- Natural Language Processing (NLP)
- LoRA Fine-Tuning
- PEFT
- Prompt Engineering
- FastAPI Development
- AI Model Deployment
- Full Stack AI Application Development

---

## Future Enhancements

- Retrieval Augmented Generation (RAG)
- Vector Database Integration
- Multi-Agent Architecture
- Code Execution Sandbox
- Chat History Management
- Authentication and Authorization
- Deployment on Cloud Platforms

---

## Author

**Sharvani Karnati**

AI & Full Stack Development Enthusiast

---

