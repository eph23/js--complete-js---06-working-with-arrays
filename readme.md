# 📚 Working with Arrays — JavaScript (Jonas Schmedtmann)

## 📖 Overview
This chapter focuses on mastering **modern array methods** in JavaScript to manipulate, transform, and query data efficiently.  
We learn **how arrays work under the hood** and how to use **functional programming** concepts to write cleaner, more declarative code.

---

## 🗂️ Topics Covered

### 1️⃣ Data Transformation
- **`.map()`** — Transform each element into something new.
- **`.filter()`** — Keep only elements that meet a condition.
- **`.reduce()`** — Boil down an array to a single value (sum, avg, object, etc.).
- **`.flat()` & `.flatMap()`** — Flatten nested arrays.

### 2️⃣ Searching & Finding
- **`.find()` / `.findIndex()`** — Locate the first matching element/index.
- **`.findLast()` / `.findLastIndex()`** — Locate last matching element/index (new in ES2023).
- **`.some()`** — Check if **at least one** element meets a condition.
- **`.every()`** — Check if **all** elements meet a condition.

### 3️⃣ Sorting & Reversing
- **`.sort()`** — Sort elements **(mutates array)**.
- **`.toSorted()`** — Sort **without mutating** (ES2023).
- **`.reverse()`** — Reverse **(mutates)**.
- **`.toReversed()`** — Reverse **without mutating**.

### 4️⃣ Modifying Arrays
- **`.fill()`** — Replace elements with a given value.
- **`.splice()`** — Remove/replace elements **(mutates)**.
- **`.toSpliced()`** — Remove/replace elements without mutating (ES2023).
- **`.with()`** — Replace element at given index without mutating (ES2023).

### 5️⃣ Array Creation
- **`Array.from()`** — Create array from iterable or length + mapping function.
- **`Array()` constructor** — Create empty or predefined length arrays.

---

## ⚡ Key Concepts
- **Chaining** — Combine `.map()`, `.filter()`, `.reduce()` for clean, one-line transformations.
- **Mutating vs Non-Mutating Methods** — Always know if the method changes the original array.
- **Declarative vs Imperative** — Functional methods let you express *what* you want, not *how* to do it.

---

