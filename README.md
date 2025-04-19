
# 📘 MarkDown Kreator

Aplikacja webowa do tworzenia postów w Markdownie z funkcjami logowania i rejestracji. Frontend zbudowany w React, backend w FastAPI.

---

## 🧩 Spis treści

1. [Opis projektu](#opis-projektu)  
2. [Technologie](#technologie)  
3. [Struktura projektu](#struktura-projektu)  
4. [Frontend (React)](#frontend-react)  
5. [Zabezpieczenia](#zabezpieczenia)  
6. [Uwagi końcowe](#uwagi-końcowe)

---

## 📝 Opis projektu

**MarkDown Kreator** to aplikacja full-stack umożliwiająca:
- Rejestrację i logowanie użytkowników
- Tworzenie postów w języku Markdown
- Podgląd oraz eksport postów do PDF
- Zarządzanie postami w dashboardzie

---

## 🛠 Technologie

### Backend:
- Python 3.11+
- FastAPI
- SQLAlchemy
- MySQL
- Render.com (hosting)

### Frontend:
- React 19 (Create React App)
- React Router Dom v7
- React Hook Form
- HTML2PDF.js
- React Markdown

---

## 📁 Struktura projektu

```
/mark               # frontend (React)
/backend            # backend (FastAPI)
```



---

## 🌐 Frontend (React)

### Funkcjonalności:
- Formularze rejestracji i logowania
- Obsługa Markdown + podgląd
- Eksport do PDF
- Lista postów i dashboard

---

## 🔐 Zabezpieczenia

- Hasła hashowane z użyciem bcrypt
- Walidacja danych na frontendzie i backendzie
- Użycie SQLAlchemy (ORM) zabezpiecza przed SQL Injection
- Obsługa CORS
- Token przechowywany w localStorage 

---


## ❗ Uwagi końcowe


- Render.com potrzebuje kilku sekund na „wybudzenie” aplikacji

---

## 📄 Licencja

Projekt stworzony do celów edukacyjnych.  
