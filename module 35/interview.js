// Nicher **JavaScript interview questions** gulo Banglai explain kora holo:

// ---

// ### 1. **JS engine V8 internal mechanism ki?**
//    - **V8 Engine** holo Google Chrome er engine, ja JavaScript ke execute kore. Eta **C++** diye lekha hoyeche, ar JavaScript code ke **machine code** e translate kore tai ei engine khub fast.

// ---

// ### 2. **Event loop ki?**
//    - JavaScript e **event loop** ekta mechanism jehetu JavaScript **single-threaded**, ekta time e ekta task execute kore. Event loop queue theke asynchronous tasks (e.g., `setTimeout`, `fetch`, etc.) ke sequentially process kore.

// ---

// ### 3. **JavaScript single-threaded holeo asynchronous calls kivabe handle kore?**
//    - JavaScript er **call stack**, **web APIs**, **callback queue**, ar **event loop** er maddhome asynchronous tasks handle hoye thake. Web APIs **background e task** execute kore ar porer step e callback ke queue e pathiye day.

// ---

// ### 4. **setTimeout ar setInterval er moddhe ki difference ache?**
//    - **setTimeout**: Ekbar specified time er por function ke call kore.
//    - **setInterval**: Specific interval er por bar-bar function ke execute kore.

//    **Example**:
//    ```javascript
//    setTimeout(() => console.log("One time"), 2000); // 2 second por ekbar output dibe.
//    setInterval(() => console.log("Repeated"), 1000); // Prottek 1 second por output dibe.
//    ```

// ---

// ### 5. **Async function ar regular function er moddhe parthokyo ki?**
//    - **Async function** shobshomoy **Promise return kore**.
//    - Regular function **directly value return kore**.
//    - Async function use korle `await` diye asynchronous calls ke handle kora jay.

//    **Example**:
//    ```javascript
//    async function getData() {
//        let result = await fetch("https://example.com");
//        return result.json();
//    }
//    ```

// ---

// ### 6. **Rejected promises er error handling strategy ki while awaiting?**
//    - `try-catch` block use kore **rejected promises** handle kora jay.
//    **Example**:
//    ```javascript
//    async function fetchData() {
//        try {
//            let data = await fetch("https://example.com");
//            console.log(data);
//        } catch (error) {
//            console.log("Error occurred:", error);
//        }
//    }
//    ```

// ---

// ### 7. **Promise er states gulo ki?**
//    - Promise er **3 ta state** ache:
//      1. **Pending**: Initial state, na resolved na rejected.
//      2. **Fulfilled (Resolved)**: Task successfully complete hoyeche.
//      3. **Rejected**: Task fail hoyeche, error return kore.

// ---

// ### 8. **`.then()` method ki kore?**
//    - Promise er **resolved value ke handle** korar jonno `.then()` method use kora hoy.
//    **Example**:
//    ```javascript
//    fetch("https://example.com")
//        .then(response => response.json()) // Resolved data handle kore
//        .then(data => console.log(data))
//        .catch(error => console.log("Error:", error)); // Error handle kore
//    ```

// ---

// E gulo basic interview questions er uttor, jodi kono specific question niye aro details lage, bolben! 😊